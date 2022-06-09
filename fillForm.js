const fs = require('fs');
const { registerResponses } = require('./src/recordResponses.js');
const { createForm } = require("./src/createForm");

process.stdin.setEncoding('utf-8');

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
