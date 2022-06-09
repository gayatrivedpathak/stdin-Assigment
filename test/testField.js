const assert = require('assert');
const { Field } = require("../src/field");

describe('Field', () => {
  it('should fill the given response', () => {
    const nameField = new Field('name', 'Enter name');
    nameField.fill('Juie');
    assert.deepStrictEqual(nameField.getEntry(), { name: 'name', response: 'Juie' });
  });

  it('should give the prompt', () => {
    const nameField = new Field('name', 'Enter name');
    assert.deepStrictEqual(nameField.getPrompt(), 'Enter name');
  });

  it('should validate the response', () => {
    const isLongEnough = (x) => x.length > 4;
    const nameField = new Field('name', 'Enter name', isLongEnough);
    assert.ok(nameField.isValid('Juieli'));
    assert.ok(!nameField.isValid('Juie'));
  });

  it('should varify filled field', () => {
    const nameField = new Field('name', 'Enter name');
    nameField.fill('Juie');
    assert.ok(nameField.isFilled());
  });

  it('should verify empty field', () => {
    const nameField = new Field('name', 'Enter name');
    assert.ok(!nameField.isFilled());
  });

  it('should give the parsed entry of field', () => {
    const splitOnComma = (x) => x.split(',');
    const hobbiesField = new Field('hobbies', 'Enter hobbies', () => true, splitOnComma);
    hobbiesField.fill('singing,dancing');
    const expectedEntry = { name: 'hobbies', response: ['singing', 'dancing'] };
    assert.deepStrictEqual(hobbiesField.getEntry(), expectedEntry);
  });
});