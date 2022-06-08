const { isValidResponse } = require("./form");
const fs = require('fs');

process.stdin.setEncoding('utf-8');

const registerResponses = (form, response, logger, onResponsesRegistered) => {
  form.add(response.trim());
  if (!form.isFilled()) {
    logger(form.nextPrompt());
    return;
  }
  const filledForm = form.filledForm();
  onResponsesRegistered(filledForm);
}

module.exports = { registerResponses };
