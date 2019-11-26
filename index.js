const express = require('express');
const db = require('./data/db')

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.get('/hobbits', (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: 'Samwise Gamgee',
    },
    {
      id: 2,
      name: 'Frodo Baggins',
    },
  ];

  res.status(200).json(hobbits);
});

//a new endpoint for users
server.get('/users', (req, res) => {
  db.find()
  .then(users => {
    res.json({ 
      users })
  })
  .catch(error => {
    res.status(500, 'The users information could not be retrieved', res)
  })

})

server.listen(8000, () => console.log('API running on port 8000'));