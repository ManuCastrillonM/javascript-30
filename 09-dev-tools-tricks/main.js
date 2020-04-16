const p = document.querySelector('p');

function makeGreen() {
  p.style.color = 'green';
  p.style.fontSize = '50px';
}

// regular
console.log('%c REGULAR', 'font-weight: 700;');
console.log('Hello world!');

// interpolated
console.log('%c INTERPOLATED', 'font-weight: 700;');
console.log('Hello, I\'m %s!', '😀');

//styled
console.log('%c STYLED', 'font-weight: 700;');
console.log('%c I\'m a cute console log',
  'font-size: 20px; background: pink; color:white; padding: 5px');

// warning
console.log('%c WARNING', 'font-weight: 700;');
console.warn('Oh no 😓');

//error
console.log('%c ERROR', 'font-weight: 700;');
console.error('Oh Cheese 🧀');

//info
console.log('%c INFO', 'font-weight: 700;');
console.info('Useful stuff 🤓');

//testing
console.log('%c TESTING', 'font-weight: 700;');
console.assert(1 == 2, 'something is wrong 😒');

//clearing
// console.clear();

//viewing DOM elements
console.log('%c DOM ELEMENTS', 'font-weight: 700;');
console.log(p);
console.dir(p);

//grouping together
console.log('%c GROUPING', 'font-weight: 700;');

const dogs = [{
  name: 'Mango',
  age: 4
}, {
  name: 'Lulo',
  age: 3
}, {
  name: 'Linda',
  age: 2
}];

dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`)
});

// counting
console.log('%c COUNTING', 'font-weight: 700;');
console.count('Mango');
console.count('Mango');
console.count('Lulo');
console.count('Mango');
console.count('Mango');
console.count('Lulo');
console.count('Mango');

// timing
console.log('%c TIMING', 'font-weight: 700;');
console.time('Fetching data');
fetch('https://api.github.com/users/manucastrillonm')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('Fetching data');
    console.log(data);
  });