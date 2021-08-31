// await/async: an evolution of Promises

const fs = require('fs'); // filesystem: part of the standard library for Node.js

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

// Thennable (code that uses Promises):
// readFile('flintstones.txt').then((data) => {
//   console.log('Here is the data', data);
// });

// const printFlintstones = async () => {
//   const data = await readFile('flintstones.txt');
//   console.log('awaited data', data);
// };

const printFlintstones = async function () {
  const data = await readFile('flintstones.txt');
  console.log(data);
};

printFlintstones();

////////////////////////////////////////////////////////////////////////////////
const axios = require('axios');

axios.get('http://numbersapi.com/random/trivia').then((result) => {
  console.log('Number trivia:', result.data);
});

const numberFact = async () => {
  const { data } = await axios.get('http://numbersapi.com/random/trivia');
  console.log(data);
};
numberFact();
