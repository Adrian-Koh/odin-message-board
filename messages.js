let currentId = 0;
const messages = [
  {
    id: currentId++,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: currentId++,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

module.exports = messages;
