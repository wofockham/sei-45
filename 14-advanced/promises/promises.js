// Promises are an evolution of callbacks
  // a way to handle or process data from an asynchronous process, whenever that process finishes.

// If a library or function uses Promises, you need to use .then() (and .catch())

const fs = require('fs'); // filesystem: part of the standard library for Node.js

// fs.readFile('flintstones.txt', 'utf-8', (err, content) => { // error first pattern
//   if (err) {
//     throw err; // dramatic return
//   }
//
//   console.log(content);
// });

// A Promise based wrapper around the above fs.readFile:
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        return reject(err); // boo
      }

      resolve(content);
    })
  });
};

// readFile('flintstones.txxxt').then(function (theData) {
//   console.log('here is the content of flintstones.txt');
//   console.log(theData);
//   console.log('this data is brought to you by promises');
// }).catch(function () {
//   console.error('oh god something bad happened');
// })

const flintstonesPromise = readFile('flintstones.txt'); // Save the promise for later use.

flintstonesPromise.then((c) => {
  console.log(c);
});

setTimeout(() => {
  flintstonesPromise.then((more) => {
    console.log('here they are again much later', more);
  });
}, 17000);
