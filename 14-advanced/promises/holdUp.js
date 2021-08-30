// setTimeout expects a callback -- it does not use Promises
// task: wrap setTimeout in a Promise (so it works with .then())

// YOUR CODE HERE:
// TODO: YOUR CODE
// WHERE? HERE

// Make this work: (holdUp returns a Promise)
holdUp(3000).then(() => {
  console.log('Time has passed');
}).then(() => {
  console.low('Wow multiple callbacks');
});
