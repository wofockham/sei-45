const express = require('express');
const ejs = require('ejs');

// TODO:
// view files

// Basic setup
const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/hello', (req, res) => {
  res.send('Hello world from express');
});

// Dynamic URLs
server.get('/fanclub/:name', (req, res) => {
  res.send(`${ req.params.name } is a member of the Marx Brothers fan club`);
});


server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));
