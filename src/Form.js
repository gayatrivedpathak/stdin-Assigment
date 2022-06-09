class Form {
  #fields
  #index
  constructor(...fields) {
    this.#fields = fields;
    this.#index = 0;
  }

  #getCurrentField() {
    return this.#fields[this.#index];
  }

  currentPrompt() {
    return this.#getCurrentField().getPrompt();
  }

  isFilled() {
    return this.#fields.every((field) => {
      return field.isFilled();
    });
  }

  add(response) {
    const field = this.#getCurrentField();
    field.fill(response)
    if (field.isFilled()) {
      this.#index++;
    };
  }

  isValidResponse(response) {
    return this.#getCurrentField().isValid(response);
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
