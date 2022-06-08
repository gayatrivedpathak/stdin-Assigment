const registerResponses = (form, response, logger, onResponsesRegistered) => {
  if (!form.isValidResponse(response)) {
    logger(form.currentPrompt());
    return;
  }

  form.add(response.trim());

  if (!form.isFilled()) {
    logger(form.currentPrompt());
    return;
  }
  const filledForm = form.filledForm();
  onResponsesRegistered(filledForm);
}

module.exports = { registerResponses };
