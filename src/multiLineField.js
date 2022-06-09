class MultiLineField {
  #name;
  #prompts;
  #validator;
  #responses;
  constructor(name, prompts, validator = () => true) {
    this.#name = name;
    this.#prompts = prompts;
    this.#validator = validator;
    this.#responses = [];
  }

  fill(response) {
    this.#responses.push(response);
  }

  getPrompt() {
    return this.#prompts[this.#responses.length];
  }

  isValid(response) {
    return this.#validator(response);
  }

  isFilled() {
    return this.#responses.length === this.#prompts.length;
  }

  getEntry() {
    return { name: this.#name, response: this.#responses.join('\n') };
  }
}

module.exports = { MultiLineField };
