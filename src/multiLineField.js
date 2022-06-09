class MultiLineField {
  #name;
  #prompts;
  #validator;
  #parser;
  #responses;
  constructor(name, prompts, validator = () => true, parser = x => x) {
    this.#name = name;
    this.#prompts = prompts;
    this.#validator = validator;
    this.#parser = parser;
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
    return { name: this.#name, response: this.#parser(this.#responses) };
  }
}

module.exports = { MultiLineField };
