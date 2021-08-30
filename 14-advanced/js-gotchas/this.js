// `this` lets us access the current object (from inside a method)
// without needing to know the name of the variable containing the object.

const groucho = {
  fullname: 'Groucho Marx',
  greeting: function () {
    return 'Good evening, my name is ' + this.fullname;
  }
};

console.log('Calling the method', groucho.greeting());

// What if we copy the method from inside the object?
// What if we change it from a method into a function.

const unboundGreeting = groucho.greeting;
console.log('Calling the function', unboundGreeting()); // 'Good evening, my name is undefined'

// bind() //////////////////////////////////////////////////////////////////////
const boundGreeting = groucho.greeting.bind(groucho);
console.log('Calling the bound function', boundGreeting()); // Good evening, my name is Groucho Marx

const otherGreeting = groucho.greeting.bind({ fullname: 'Chico Marx', diabetic: false, salary: 99 });

// call() //////////////////////////////////////////////////////////////////////
console.log( unboundGreeting.call(groucho) ); // during execution, `this` will be the `groucho` object.
console.log( unboundGreeting.call({ fullname: 'Hunter S. Thompson' }) );

// apply() /////////////////////////////////////////////////////////////////////
console.log( unboundGreeting.apply(groucho) ); // the same as .call()

const numbers = [23, 54, 666, 72, 11, -12, 1001];
Math.max( numbers ); // NaN

// Classical fix:
Math.max.apply(null, numbers); // 1001

// Modern fix (ES6):
Math.max(...numbers); // 1001 via the spread operator.
