const express = require('express');
const ejs = require('ejs');
const stockfinder = require('stockfinder');

const server = express();
server.use(express.static('public')); // put the public folder "online"
const PORT = 1337; // could be any number higher than 1024
const APIKEY = 'pk_16a849fd637243a79fff90fa4d42bc5d';

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/info', (req, res) => {
  stockfinder.getStock({ticker: req.query.symbol, apiKey: APIKEY}).then((result) => {
    res.render('info.ejs', { price: result.iexRealtimePrice, symbol: req.query.symbol });
  });
});

server.listen(PORT, () => console.log(`Server running: http://localhost:${ PORT }`));
