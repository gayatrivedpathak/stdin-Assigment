const fs = require('fs');
const { Form } = require('./src/form.js');
const { Field } = require('./src/field.js');
const { registerResponses } = require('./src/recordResponses.js');
const { MultiLineField } = require('./src/multiLineField.js');

process.stdin.setEncoding('utf-8');

const isValidFormat = (date) => date.match(/\d{4}-\d{2}-\d{2}/);
const isLongEnough = (name) => name.length > 4;
const isEmpty = (text) => !text.length < 1;
const isValidMobileNo = (mobNo) => mobNo.length === 10;

const combine = list => list.join('\n');
const splitOnComma = text => text.split(',');

const writeResponses = (filledForm) => {
  fs.writeFileSync('./responces.json', JSON.stringify(filledForm), 'utf-8');
  console.log('Thank You');
  process.stdin.destroy();
}

const main = () => {
  const form = createForm();
  console.log(form.currentPrompt());
  process.stdin.on('data', (response) => {
    registerResponses(form, response.trim(), console.log, writeResponses);
  });
};

main();
const createForm = () => {
  const nameField = new Field('name', 'Enter name', isLongEnough);
  const dobField = new Field('dob', 'Enter dob', isValidFormat);
  const hobbiesField = new Field('hobbies', 'Enter hobbies', isEmpty, splitOnComma);
  const mobNoField = new Field('mob', 'Enter Mobile Number', isValidMobileNo);
  const addressPrompts = ['Enter address line 1', 'Enter address line 2'];

  const address = new MultiLineField('address', addressPrompts, isEmpty, combine);

  return new Form(nameField, dobField, hobbiesField, mobNoField, address);
}

