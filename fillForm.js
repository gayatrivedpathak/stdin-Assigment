const { Form, Field } = require('./src/form.js');
const { registerResponses } = require('./src/recordResponses.js');
const fs = require('fs');

process.stdin.setEncoding('utf-8');

const isValidFormat = (date) => date.match(/\d{4}-\d{2}-\d{2}/);
const isLongEnough = (name) => name.length > 4;
const isEmpty = (hobbies) => !hobbies.length < 1;
const isValidMobileNo = (mobNo) => mobNo.length === 10;

const writeResponses = (filledForm) => {
  fs.writeFileSync('./responces.json', JSON.stringify(filledForm), 'utf-8');
  console.log('Thank You');
  process.stdin.destroy();
}

const main = () => {
  const nameField = new Field('name', 'Enter name', isLongEnough);
  const dobField = new Field('dob', 'Enter dob', isValidFormat);
  const hobbiesField = new Field('hobbies', 'Enter hobbies', isEmpty);

  const form = new Form(nameField, dobField, hobbiesField);
  console.log(form.currentPrompt());
  process.stdin.on('data', (response) => {
    registerResponses(form, response, console.log, writeResponses);
  });
};

main();
