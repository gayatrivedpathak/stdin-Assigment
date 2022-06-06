class Form {
  constructor() {
    this.responses = [];
  }

  add(question, response) {
    const fieldName = question.split(' ')[1];
    this.responses.push({ [fieldName]: response });
  }

  isValidResponse(feildName, response) {
    return response.length >= 4;
  }

  diplay() {
    return this.responses;
  }
}
exports.Form = Form;
