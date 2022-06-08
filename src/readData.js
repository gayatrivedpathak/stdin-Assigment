const { isValidResponse } = require("./form");
const fs = require('fs');

process.stdin.setEncoding('utf-8');

const registerResponses = (form, response) => {
  form.add(response.trim());
  if (!form.isFilled()) {
    console.log(form.nextPrompt());
    return;
  }
  const filledForm = form.display();
  fs.writeFileSync('./responces.json', JSON.stringify(filledForm), 'utf-8');
  process.stdin.destroy();
}

module.exports = { registerResponses };
