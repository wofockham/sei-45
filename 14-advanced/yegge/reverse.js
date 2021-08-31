// Write a function to reverse a string.

// const reverseStr = (str) => str.split('').reverse().join('');

// const reverseStr = (str) => {
//   let output = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     output += str[i];
//   }
//   return output;
// };

const reverseStr = (str, output='') => {
  if (str.length === 0) {
    return output;
  } else {
    return reverseStr(str.substr(1), str[0] + output);
  }
}

console.log( reverseStr('hotdogs') );
