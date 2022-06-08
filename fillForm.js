const { Form } = require('./src/Form.js');
const { registerResponses } = require('./src/recordResponses.js');

const writeResponses = (filledForm) => {
  fs.writeFileSync('./responces.json', JSON.stringify(filledForm), 'utf-8');
  process.stdin.destroy();
}


const main = () => {
  const fields = [
    { name: 'name', prompt: 'Enter name' },
    { name: 'dob', prompt: 'Enter dob' },
    { name: 'hobbies', prompt: 'Enter hobbies' },
  ];

  const form = new Form(fields);
  console.log(form.currentPrompt());
  process.stdin.on('data', (response) => {
    registerResponses(form, response, console.log, writeResponses);
  });
};

main();
