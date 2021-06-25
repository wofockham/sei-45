// The differences between var, let and const

// Scopes

// Global scope ////////////////////////////////////////////////////////////////
const globalMessage = 'Hello world';

const showGlobalMessage = function () {
  console.log( globalMessage ); // globalMessage is in the global scope
};

showGlobalMessage(); // works
console.log('Still in scope', globalMessage);

// Function scope //////////////////////////////////////////////////////////////
const showLocalMessage = function () {
  const localMessage = 'Goodbye cruel world';
  console.log(localMessage);
};

showLocalMessage();
// console.log( 'out of scope', localMessage ); // not not work

// var inside a block //////////////////////////////////////////////////////////
if (1000 > 1) {
  var hotdogs = 999; // globally scoped
  console.log(hotdogs); // works
}

console.log(hotdogs); // works

// let inside a block //////////////////////////////////////////////////////////
if (1000 > 1) {
  let goldfish = 777; // only exists in this block
  console.log(goldfish); // works
}
// console.log(goldfish); // doesn't work

////////////////////////////////////////////////////////////////////////////////
const bros = ['Groucho', 'Harpo', 'Chico'];
for (let i = 0; i < bros.length; i++) {
  console.log( bros[i] );
}

// i goes out of scope after the block

// const inside a block ////////////////////////////////////////////////////////
// const has the same block scope as let
if (1000 > 1) {
  const password = 'swordfish';
  console.log(password);
}
