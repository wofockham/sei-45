

// let id = 0; // global: bad
// const nextID = function () {
//   return id++; // post increment
// };

// Higher order function (accepts or returns a function as data):
// const helloMaker = function () {
//   const greeting = 'Hello'; // greeting persists through a closure.
//
//   return function () {
//     console.log( greeting );
//   };
// };
//
// const hi = helloMaker();

const nextIDMaker = function () {
  let id = 0; // local variable that persists through the closure.

  return function () {
    return id++;
  }
};

const nextID = nextIDMaker();

// HTML Tags (200 or so) ///////////////////////////////////////////////////////
// const p = function (content) {
//   return '<p>' + content + '</p>';
// };
//
// const h1 = function (content) {
//   return '<h1>' + content + '</h1>';
// };
//
// const span = function (content) {
//   return '<span>' + content + '</span>';
// };

const tagMaker = function (tagName) {
  return function (content) {
    return `<${ tagName }>${ content }</${ tagName }>`;
  };
}

const p = tagMaker('p');
const h1 = tagMaker('h1');
const span = tagMaker('span');
