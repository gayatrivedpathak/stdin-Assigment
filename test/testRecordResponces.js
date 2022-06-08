const assert = require('assert');
const { Form } = require('../src/form.js');
const { Field } = require('../src/field.js');
const { registerResponses } = require('../src/recordResponses');

const identity = x => x;

describe('registerResponses', () => {
  it('should register the given response', () => {
    const nameField = new Field('name', 'Enter name');
    const form = new Form(nameField);
    registerResponses(form, 'juie', identity, identity);
    assert.deepStrictEqual(form.filledForm(), { name: 'juie' });
  });

  it('should display next prompt', () => {
    const nameField = new Field('name', 'Enter name');
    const dobField = new Field('dob', 'Enter dob')
    const form = new Form(nameField, dobField);
    const logs = [];
    const display = content => logs.push(content);
    registerResponses(form, 'juie', display);
    assert.deepStrictEqual(logs, ['Enter dob']);
  });

  it('should register the response of two prompts', () => {
    const nameField = new Field('name', 'Enter name');
    const dobField = new Field('dob', 'Enter dob')
    const form = new Form(nameField, dobField);
    registerResponses(form, 'juie', identity, identity);
    registerResponses(form, '1212-12-12', identity, identity);
    const expectedFilledForm = { name: 'juie', dob: '1212-12-12' };
    assert.deepStrictEqual(form.filledForm(), expectedFilledForm);
  });

  it('should display same prompt for invalid response', () => {
    const isLongEnough = (text) => text.length > 4;
    const nameField = new Field('name', 'Enter name', isLongEnough);

    const form = new Form(nameField);
    const logs = [];
    const display = content => logs.push(content);
    registerResponses(form, 'juie', display, identity);
    assert.deepStrictEqual(logs, ['Enter name']);
    registerResponses(form, 'juieli', display, identity);
    assert.deepStrictEqual(form.filledForm(), { name: 'juieli' });
  });
});
