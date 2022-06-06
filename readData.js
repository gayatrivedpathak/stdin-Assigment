const person = {};

const readData = (property) => {
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (chunk) => {
    person[property] = chunk.slice(0, -1);
  });

  process.stdin.on('end', () => {
    console.log(person);
  });
};

const messages = [
  { message: 'Please enter your name', property: 'name' },
];

messages.forEach(({ message, property }) => {
  console.log(message);
  readData(property);
});



