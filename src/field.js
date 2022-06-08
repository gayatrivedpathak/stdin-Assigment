class Field {
  #name;
  #prompt;
  #validator;
  #response;
  constructor(name, prompt, validator = () => true) {
    this.#name = name;
    this.#prompt = prompt;
    this.#validator = validator;
  }

  fill(response) {
    this.#response = response;
  }

  getPrompt() {
    return this.#prompt;
  }

  isValid(response) {
    return this.#validator(response);
  }

  isFilled() {
    return this.#response;
  }

  getEntry() {
    return { name: this.#name, response: this.#response };
  }
}

module.exports = { Field };
