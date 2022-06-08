const { Form } = require('./src/Form.js');
const { registerResponses } = require('./src/readData.js');


const main = () => {
  const fields = [
    { name: 'name', prompt: 'Enter name' },
    { name: 'dob', prompt: 'Enter dob' },
    { name: 'hobbies', prompt: 'Enter hobbies' },
  ];

  const form = new Form(fields);
  console.log(form.currentPrompt());
  process.stdin.on('data', (response) => {
    registerResponses(form, response);
  });
};

main();