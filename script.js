const input = document.getElementById('inputData');

// const debounce = (func, delay) => {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// };

// const myFunc = (e) => {
//   console.log(e.target.value);
// };
// input.addEventListener('input', debounce(myFunc, 500));

// input.addEventListener('input', (e) => {
//   console.log(e.target.value);
// });
// _____________________________________

// const throttle = (func, delay) => {
//   let shouldCall = true;
//   return function (...args) {
//     if (!shouldCall) return;
//     shouldCall = false;
//     setTimeout(() => {
//       func(...args);
//       shouldCall = true;
//     }, delay);
//   };
// };

// const throttle = (func, delay) => {
//   let lastCall = 0;
//   return function (...args) {
//     let now = Date.now();
//     if (now - lastCall < delay){ return};
//     lastCall = now;
//     return func(...args);
//   };
// };

// const myFunc = (e) => console.log(e.target.value);
// input.addEventListener('input', throttle(myFunc, 500));

// ----------------------------------------------------------

//! Hoisting and TDZ [5 examples]
//? hoisting simply means that the variable and function declarations are moved to the top of their scope before code execution. means u can use that variable or function before it is declared but in the case of let and const they are hoisted but not initialized and till they get initialized they are in temporal dead zone and if u try to access them before initialization it will throw a reference error.

/* //* Hoisting example 1
sayHello();

function sayHello() {
  console.log('Hello');
}

//* Hoisting example 2
// console.log(x);
let x = 5; // ReferenceError: Cannot access 'x' before initialization

//* Hoisting example 3
console.log(y);
var y = 10; // undefined

//* Hoisting example 4
// console.log(z);
const z = 15; // ReferenceError: Cannot access 'z' before initialization

//* TDZ example 
function testTDZ() {
  // console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 20;
}
testTDZ(); */

//! Clousure [5 examples]
//? Closure is a function that has access to its own scope, the outer function's scope, and global scope. It allows a function to remember and access variable from outer function even after the outer function has finished executing.

//* Closure example 1
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
  inner();
}
// const myClosure = outer()();
// console.log(myClosure); // 1


//* Closure example 2
function salaryChecker(baseSalary) {
  return function (bonus) {
    return baseSalary + bonus;
  }
}

// const calculateSalary = salaryChecker(50000);
// console.log(calculateSalary(10000));

//* Real Life Closure Example
function paymentProcessor(paymentMethod) {
  return function (amount) {
    console.log(`Processing ${amount} paying using ${paymentMethod}`);
  }
}

// const processCreditCardPayment = paymentProcessor('Credit Card');
// processCreditCardPayment(100);

//-------------------------------------------

/* 
khud se: ek array of objects lo (apna khud ka data banao, kahi se mat lo), usme map/filter/reduce chain karke kuch nikalo, aur ek deep clone function khud likhne ki koshish karo (bina JSON.parse/stringify ke, recursion se).
*/

// array of objects
const users = [
  { id: 1, name: 'Alice', age: 30, job: 'Developer', working: true, salary: 50000 },
  { id: 2, name: 'Bob', age: 25, job: 'Designer', working: false, salary: 40000 },
  { id: 3, name: 'Charlie', age: 35, job: 'Manager', working: true, salary: 60000 },
  { id: 4, name: 'David', age: 28, job: 'Developer', working: false, salary: 45000 },
  { id: 5, name: 'Eve', age: 32, job: 'Designer', working: true, salary: 55000 }
]

// map/filter/reduce chain

const totalSalaryOfWorkingDev = users.filter(user => user.working === true && user.job === 'Developer').reduce((total, user) => total + user.salary, 0);
// console.log(totalSalaryOfWorkingDev); // 50000

// deep clone function using recursion
const deepClone = structuredClone(users);
// console.log(deepClone);

deepClone[0].name = 'Changed Name';
// console.log(users[0].name); // 'Alice' (original array remains unchanged)
// console.log(deepClone[0].name); // 'Changed Name' (cloned array has the updated name)

//? others way to deep clone 
const deepClone1 = JSON.parse(JSON.stringify(users));
// console.log(deepClone1);


function Person(name) {
  this.name = name;
}
const person1 = new Person('Bp');
// console.log(person1.name); // 'Bp'

// same thing using Object.create
const person2 = Object.create(Person.prototype); // we write Person.prototype because we want to inherit the methods from Person's prototype
person2.name = 'Bp2';
// console.log(person2.name); // 'Bp2'

// -----------------------------------------------------

const obj = {
  name: "Bp",
  greet: function () {
    console.log(this.name);
  },
  arrowGreet: () => {
    console.log(this.name);
  },
};
obj.greet();       // ? output - 'Bp
obj.arrowGreet();  // ? output - undefined

