// setTimeout expects a callback -- it does not use Promises
// task: wrap setTimeout in a Promise (so it works with .then())

// Curlies: no implicit return:
const holdUp = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
};

// NO curlies: implicit return
// const holdUp = (duration) => new Promise((resolve) => {
//   setTimeout(resolve, duration)
// });

// No curlies AT ALL:
// const holdUp = (duration) => new Promise(resolve => setTimeout(resolve, duration));

// Make this work: (holdUp returns a Promise)
holdUp(3000).then(() => {
  console.log('Time has passed');
}).then(() => {
  console.log('Wow multiple callbacks');
});
