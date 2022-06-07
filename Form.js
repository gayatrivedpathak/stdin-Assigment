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

class Form {
  constructor() {
    this.responses = [];
  }

  add(question, response) {
    const fieldName = getfeildName(question);
    if (fieldName === 'hobbies') {
      response = response.split(',');
    }
    this.responses.push({ fieldName, response });
  }

  isValidResponse(question, response) {
    const fieldName = getfeildName(question);
    const validators = {
      name: isValidName(response),
      dob: isValidDate(response),
      hobbies: areEmpty(response),
      mobile_no: isValidMobileNo(response)
    };
    return validators[fieldName];
  }

  display() {
    const formContents = {};
    this.responses.forEach(({ fieldName, response }) => {
      formContents[fieldName] = response;
    });
    return formContents;
  }
}
exports.Form = Form;
