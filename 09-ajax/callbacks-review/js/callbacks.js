// Callbacks Review

// A callback function is a function typically PASSED TO another function.
// The callback function GETS CALLED FOR YOU, later, at some point time.

// Javascript is asynchronous.

// Timers: A C B
console.log('A');
setTimeout(function () {
  console.log('B: Time has passed');
}, 4000);
console.log('C');

// jQuery's Document Ready: I III II
console.log('I');
$(document).ready(function () {
  console.log('II: The document is ready');
});
console.log('III');

// Event handlers: Groucho Chico AND MAYBE LATER Harpo (and maybe repeatedly)
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo: click');
});
console.log('Chico');

// for loops
// .forEach ES6

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// colors.each do |c|
//   puts c
// end

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// ES6:
// console.log('before');
// colors.forEach(function (c) {
//   console.log(c);
// });
// console.log('after');

// You are not expected to understand this (yet):
const each = function (someArray, callbackFunction) {
  for (let i = 0; i < someArray.length; i++) {
    callbackFunction( someArray[i] );
  }
};

each(colors, function (c) {
  console.log(c);
});

each(['Groucho', 'Harpo', 'Chico'], function (brother) {
  console.log(`${ brother } Marx`);
});

each('ajax', function (letter) {
  console.log(letter.toUpperCase());
});
