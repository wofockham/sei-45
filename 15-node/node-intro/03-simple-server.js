// A simple HTTP web server in Node with just the standard library.

const http = require('http'); // Node Standard Library

http.createServer((req, res) => {
  console.log(`Serving request: ${ req.method } ${ req.url }`); // Budget logging.

  if (req.url === '/hello') {
    res.end('Hello from Node.js');
  } else if (req.url === '/goodbye') {
    res.end('Goodbye cruel world from Node.js');
  } else if (req.url === '/groucho') {
    res.end('THis is the Groucho page');
  } else {
    res.end('How did you get here?'); // Catch all/default
  }

}).listen(1337);

console.log('Server started at http://localhost:1337');
