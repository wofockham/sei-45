// Factories: Mass produce objects
const catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    species: 'feline',
    // methods
    meow: function () {
      console.log('Meow! My name is ' + this.name); // this is a reference to the current object
    }
  };
};

const cuteCats = [
  catFactory('Angel', 18, 'grey'),
  catFactory('Evil', 14, 'red'),
  catFactory('Meh', 12, 'white')
];

for (let i = 0; i < cuteCats.length; i++) {
  const cat = cuteCats[i];
  console.log(`${ cat.name } is ${ cat.furColor }`);
}

// Prototypal Inheritance: Prototypes
// Historically interesting but not essential
// Probably don't use these.

// Constructor (similiar to a factory but with more magic)
const Cat = function (n, a, f) {
  // No need to create an object: an object is already there for you and it's called `this`.
  this.name = n;
  this.age = a;
  this.furColor = f;
  // No need to return anything: `this` gets returned automagically.
};

const cooper = new Cat('Cooper', 5, 'striped');
const audrey = new Cat('Audrey', 5, 'striped');

// The main "advantage"
// You can "extend" the prototype AFTER you create your instances.

Cat.prototype.species = 'feline';
console.log( audrey.species ); // feline
