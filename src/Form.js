const getfeildName = (question) => question.split(' ')[1];
const isValidDate = (date) => {
  const ymd = date.split('-');
  return ymd[0].length === 4 &&
    ymd[1].length === 2 &&
    ymd[2].length === 2;
};

const isValidName = (name) => name.length >= 4;

const areEmpty = (hobbies) => !hobbies.length < 1;

const isValidMobileNo = (mobNo) => mobNo.length === 10;

const isValidResponse = (question, response) => {
  const fieldName = getfeildName(question);
  const validators = {
    name: isValidName(response),
    dob: isValidDate(response),
    hobbies: areEmpty(response),
    mobile_no: isValidMobileNo(response)
  };
  return validators[fieldName];
}

class Form {
  #fields
  #index
  #responses
  constructor(fields) {
    this.#fields = fields;
    this.#responses = [];
    this.#index = 0;
  }

  nextPrompt() {
    return this.#fields[++this.#index].prompt;
  }

  currentPrompt() {
    return this.#fields[this.#index].prompt;
  }

  isFilled() {
    return this.#fields.length === this.#responses.length;
  }

  add(response) {
    const fieldName = this.#fields[this.#index].name;
    if (fieldName === 'hobbies') {
      response = response.split(',');
    }
    this.#responses.push({ fieldName, response });
  }

  filledForm() {
    const formContents = {};
    this.#responses.forEach(({ fieldName, response }) => {
      formContents[fieldName] = response;
    });
    return formContents;
  }
}

exports.Form = Form;
exports.isValidResponse = isValidResponse;
