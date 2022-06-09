class Field {
  #name;
  #prompt;
  #validator;
  #parser;
  #response;

  constructor(name, prompt, validator = () => true, parser = (x) => x) {
    this.#name = name;
    this.#prompt = prompt;
    this.#validator = validator;
    this.#parser = parser;
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
    return { name: this.#name, response: this.#parser(this.#response) };
  }
}

module.exports = { Field };
