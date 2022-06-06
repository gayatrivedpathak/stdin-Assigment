process.stdin.setEncoding('utf-8');

const askQuestion = (question) => console.log(question);

class Iterator {
  constructor(elements) {
    this.index = 0;
    this.elements = elements;
  }

  currentQuestion() {
    return this.elements[this.index];
  }

  nextQuestion() {
    return this.elements[++this.index];
  }
}

class Form {
  constructor() {
    this.details = []
  }

  add(detail) {
    this.details.push(detail);
  }

  storeData = () => {
    return {
      name: this.details[0],
      dob: this.details[1],
      hobbies: this.details[2].split(',')
    };
  }
}

const readData = (queIterator, details) => {
  askQuestion(queIterator.currentQuestion());
  process.stdin.on('data', (chunk) => {
    details.add(chunk.trim());
    askQuestion(queIterator.nextQuestion());
  });

  process.stdin.on('end', () => console.log(details.storeData()))
}


const main = () => {
  const questions = ['Enter name', 'Enter dob', 'Enter hobbies'];
  const queIterator = new Iterator(questions);
  const details = new Form();
  readData(queIterator, details);
}

main();







