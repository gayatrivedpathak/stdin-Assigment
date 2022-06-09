const assert = require('assert');
const { Field } = require('../src/field');
const { Form } = require('../src/form');

describe('Form', () => {
  it('should give the prompt for current field', () => {
    const nameField = new Field('name', 'Enter name');
    const form = new Form(nameField);
    assert.deepStrictEqual(form.currentPrompt(), 'Enter name');
  });

  it('should verify each field filled', () => {
    const nameField = new Field('name', 'Enter name');
    const dobField = new Field('dob', 'Enter dob');
    const form = new Form(nameField, dobField);
    form.register('Juieli');
    form.register('2001-12-12');
    assert.ok(form.isFilled());
  });

  it('should register the response to form', () => {
    const nameField = new Field('name', 'Enter name');
    const form = new Form(nameField);
    form.register('Juie');
    assert.deepStrictEqual(form.filledForm(), { name: 'Juie' });
  });

  it('should validate the given response', () => {
    const nameField = new Field('name', 'Enter name', (x) => x.length > 4);
    const form = new Form(nameField);
    assert.ok(form.isValidResponse('hello'));
    assert.ok(!form.isValidResponse('hel'));
  });

  it('should give filled form', () => {
    const nameField = new Field('name', 'Enter name');
    const form = new Form(nameField);
    form.register('Juie');
    assert.deepStrictEqual(form.filledForm(), { name: 'Juie' });
  });
});