class Form {
  #fields
  #index
  constructor(...fields) {
    this.#fields = fields;
    this.#index = 0;
  }

  getCurrentField() {
    return this.#fields[this.#index];
  }

  currentPrompt() {
    return this.getCurrentField().getPrompt();
  }

  isFilled() {
    return this.#fields.every((field) => {
      return field.isFilled();
    });
  }

  add(response) {
    this.getCurrentField().fill(response);
    this.#index++;
  }

  isValidResponse(response) {
    return this.getCurrentField().isValid(response);
  }

  filledForm() {
    const formContents = {};
    this.#fields.forEach((field) => {
      const { name, response } = field.getEntry();
      formContents[name] = response;
    });
    return formContents;
  }
}

module.exports = { Form };
