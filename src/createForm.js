const { Form } = require('./form.js');
const { Field } = require('./field.js');
const { MultiLineField } = require('./multiLineField.js');

const isValidFormat = (date) => date.match(/\d{4}-\d{2}-\d{2}/);
const isLongEnough = (name) => name.length > 4;
const isEmpty = (text) => !text.length < 1;
const isValidMobileNo = (mobNo) => mobNo.length === 10;
const combine = (list) => list.join('\n');
const splitOnComma = (text) => text.split(',');

const createForm = () => {
  const nameField = new Field('name', 'Enter name', isLongEnough);
  const dobField = new Field('dob', 'Enter dob', isValidFormat);
  const hobbiesField = new Field('hobbies', 'Enter hobbies', isEmpty, splitOnComma);
  const mobNoField = new Field('mob', 'Enter Mobile Number', isValidMobileNo);

  const addressPrompts = ['Enter address line 1', 'Enter address line 2'];
  const address = new MultiLineField('address', addressPrompts, isEmpty, combine);

  return new Form(nameField, dobField, hobbiesField, mobNoField, address);
};

exports.createForm = createForm;
