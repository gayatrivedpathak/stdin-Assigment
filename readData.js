const { Form } = require("./Form");
const { Iterator } = require("./Iterator");

process.stdin.setEncoding('utf-8');

const askQuestion = (question) => console.log(question);

const readData = (queIterator, form) => {
  let question = queIterator.currentQuestion();
  askQuestion(question);
  process.stdin.on('data', (chunk) => {
    const response = chunk.trim();
    if (!form.isValidResponse('_', response)) {
      question = queIterator.currentQuestion();
      askQuestion(question);
      return;
    }
    form.add(question, response);
    question = queIterator.nextQuestion();
    askQuestion(question);
  });

  process.stdin.on('end', () => console.log(form.diplay()))
}

const main = () => {
  const questions = ['Enter name', 'Enter dob', 'Enter hobbies'];
  const queIterator = new Iterator(questions);
  const form = new Form();
  readData(queIterator, form);
}

main();







