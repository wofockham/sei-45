const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios'); // fetch

// Basic setup
const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/', (req, res) => {
  const bros = 'Groucho Chico Harpo Zeppo'.split(' ');
  const randomBrother = _(bros).sample();
  res.render('home.ejs', {brother: randomBrother, lucky: _.random(10)}); // "Instance variables"
});

server.get('/hello', (req, res) => {
  res.send('Hello world from express');
});

// Dynamic URLs
server.get('/fanclub/:name', (req, res) => {
  res.send(`${ req.params.name } is a member of the Marx Brothers fan club`);
});

// Crappy calculator: /calc/5/6/+
server.get('/calc/:x/:y/:operator', (req, res) => {
  let answer;
  console.log( JSON.stringify(req.params) );
  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y); // bug here
  } else if (req.params.operator === '-') {
    answer = Number(req.params.x) - Number(req.params.y);
  } // todo: handle multiplication and division
  res.render('calc.ejs', { answer: answer });
});

// Render JSON
server.get('/info.json', (req, res) => {
  res.json({
    name: 'Groucho',
    instrument: 'guitar',
    vice: 'cigars',
    luckyNumber: _.random(40)
  });
});

// Something like HTTParty to talk to APIs
server.get('/trivia', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    res.render('trivia.ejs', { trivia: response.data });
  });
});

// Form input/output
server.get('/ask', (req, res) => {
  res.render('ask.ejs'); // form
});

server.get('/answer', (req, res) => {
  res.render('answer.ejs', {question: req.query.question, answer: 'No comment'});
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));
