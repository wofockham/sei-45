console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// .each ///////////////////////////////////////////////////////////////////////
_(nums).each(function (n, index, entireArray) {
  console.log(`n: ${ n }, index: ${ index }, entireArray: ${ entireArray }`);
});

// .each for objects ///////////////////////////////////////////////////////////
const sales = {
  January: 15,
  February: 11,
  March: 8
};

_(sales).each(function (total, month) { // value, key
  console.log(`${ total } sales in ${ month }.`);
});

// .map ////////////////////////////////////////////////////////////////////////
const byNineteen = function (n) {
  return n * 19;
};

const multiples = _(nums).map(byNineteen);
console.log(multiples);

// .map for objects ////////////////////////////////////////////////////////////
const salesInfo = _(sales).map(function (total, month) {
  return `${ total } sales in ${ month }.`
});
console.log(salesInfo);

// .reduce /////////////////////////////////////////////////////////////////////
const total = _(nums).reduce(function (runningTotal, n) {
  console.log(`runningTotal: ${ runningTotal }, n: ${ n }`);
  return runningTotal + n;
});
console.log(total);

const add = function (a, b) {
  return a + b;
};

const alsoTotal = _(nums).reduce(add);
console.log(alsoTotal);

// .reduce also works for objects //////////////////////////////////////////////

// .find ///////////////////////////////////////////////////////////////////////
const divisibleByFive = function (n) {
  console.log('considering', n, 'result', n % 5 === 0);
  return n % 5 === 0; // predicate
};

const fivey = _(nums).find(divisibleByFive);
console.log(fivey);

// .filter /////////////////////////////////////////////////////////////////////
const allMultiplesOfFive = _(nums).filter(divisibleByFive);
console.log(allMultiplesOfFive);

// .reject /////////////////////////////////////////////////////////////////////
const notMultiplesOfFive = _(nums).reject(divisibleByFive);
console.log(notMultiplesOfFive);

// .pluck //////////////////////////////////////////////////////////////////////
const bros = [
  {name: 'Groucho', instrument: 'guitar', disposition: 'surly'},
  {name: 'Harpo', instrument: 'harp', disposition: 'angelic'},
  {name: 'Chico', instrument: 'piano', disposition: 'lecherous'},
];
console.table(bros);
const dispositions = _(bros).pluck('disposition');
console.log(dispositions);
