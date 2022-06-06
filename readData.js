const fs = require("fs");

const person = {};

const readData = (property) => {
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (chunk) => {
    person[property] = chunk.slice(0, -1);
  });

  process.stdin.on('end', () => {
    fs.writeFileSync('./personDetails.json', JSON.stringify(person), 'utf8');
  });
};

const messages = [
  { message: 'Please enter your name', property: 'name' },
];

messages.forEach(({ message, property }) => {
  console.log(message);
  readData(property);
});



