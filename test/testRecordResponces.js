const assert = require('assert');
const { Form } = require('../src/form');
const { registerResponses } = require('../src/recordResponses');

const identity = x => x;

describe('registerResponses', () => {
  it('should register the given response', () => {
    const fields = [{ name: 'name', prompt: 'name' }];
    const form = new Form(fields);
    registerResponses(form, 'juie', identity, identity);
    assert.deepStrictEqual(form.filledForm(), { name: 'juie' });
  });

  it('should display next prompt', () => {
    const fields = [
      { name: 'name', prompt: 'name' },
      { name: 'dob', prompt: 'Enter dob' }
    ];
    const form = new Form(fields);
    const logs = [];
    const display = content => logs.push(content);
    registerResponses(form, 'juie', display);
    assert.deepStrictEqual(logs, ['Enter dob']);
  });

  it('should register the response of next prompt', () => {
    const fields = [
      { name: 'name', prompt: 'name' },
      { name: 'dob', prompt: 'Enter dob' }
    ];
    const form = new Form(fields);
    registerResponses(form, 'juie', identity, identity);
    registerResponses(form, '1212-12-12', identity, identity);
    const expectedFilledForm = { name: 'juie', dob: '1212-12-12' };
    assert.deepStrictEqual(form.filledForm(), expectedFilledForm);
  });
});
