const { Form, isValidResponse } = require("./form");
const { Iterator } = require("./iterator");

process.stdin.setEncoding('utf-8');

const askQuestion = (question) => console.log(question);

const readResponses = (queIterator, form) => {
  let question = queIterator.currentQuestion();
  askQuestion(question);
  process.stdin.on('data', (chunk) => {
    const response = chunk.trim();
    if (!isValidResponse(question, response)) {
      question = queIterator.currentQuestion();
      askQuestion(question);
      return;
    }
    form.add(question, response);
    question = queIterator.nextQuestion();
    askQuestion(question);
  });

  process.stdin.on('end', () => console.log(form.display()))
};

const main = () => {
  const questions = ['Enter name', 'Enter dob', 'Enter hobbies', 'Enter mobile_no'];
  const queIterator = new Iterator(questions);
  const form = new Form();
  readResponses(queIterator, form);
};

main();







