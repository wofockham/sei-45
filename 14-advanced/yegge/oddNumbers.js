// const printOdds = (max=99) => {
//   for (let i = 1; i <= max; i += 2) {
//     console.log(i);
//   }
// };

const printOdds = (max=99, current=1) => {
  console.log(current);
  if (current < max) {
    printOdds(max, current + 2);
  }
}

printOdds();
