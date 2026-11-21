// const input = document.getElementById('inputData');

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
// obj.greet();       // ? output - 'Bp
// obj.arrowGreet();  // ? output - undefined

// -----------------------------------------------------

//! Promise

// function dataResolve() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ "name": "Bhanu Pratap" })
//     }, 1000);
//   })
// }

// const dataRecieved = dataResolve();
// console.log(dataRecieved)
// dataRecieved.then(d => console.log(d))


const userData = {
  name: "Bhanu",
  age: 27,
  working: true,
  salary: 180000,
  address: "jabera"
}
const fetchData = (data, flag) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve(data)
      } else {
        reject(new Error('Something went wrong'))
      }
    }, 1000)
  })
}

// fetchData(userData, true).then(d => console.log(d)).catch(d => console.error("Something wrong", d)).finally((console.log("Fetching operation ")))

//------------------------------------------------

//! async await

async function fetchDataAsync() {
  try {
    let recievedData = await fetchData(userData, true)
    console.log(recievedData)
  } catch (error) {
    throw new Error("Something went wrong")
  }
}
// fetchDataAsync()

//! url post method

const updateDataUsingURL = async (url, dataCome = {}) => {
  if (!url) return;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify(dataCome)
  })
  if (!response) {
    throw new Error(
      "problem in url"
    )
  }
  return response.json()
}
// updateDataUsingURL('https://jsonplaceholder.typicode.com/posts', {
//   name: "bhanu", age: 27
// }).then(d => console.log(d)).catch(e => console.error(e)).finally("Fetching")


//! url get method

const getDataUsingURLAsync = async (url) => {
  const response = await fetch(url)
  return response.json()
}
const getDataUsingURL = (url) => {
  const response = fetch(url)
  return response.then(res => res.json()).catch(err => console.error(err)).finally(() => console.log("Fetching"))
}
// getDataUsingURL('https://jsonplaceholder.typicode.com/posts')
//   .then((data) => console.log(data, 'data'))
//   .catch((error) => console.error(error))

// getDataUsingURLAsync('https://jsonplaceholder.typicode.com/posts')
//   .then((data) => console.log(data, 'data'))
//   .catch((error) => console.error(error))

//------------------------------------------

//! Arrow Function

const user = {
  firstName: "Bhanu",
  lastName: "Patkar",
  age: 27,
  greet: function () {
    console.log(`Hello ji ${this.firstName} kaise ho`);
    setTimeout(function () {
      console.log(this, 'yaha kya hai ji');
      console.log(`Hello ji ${this.lastName} main andar se bat kar rha hun`);

      setTimeout(function () {
        console.log(this, 'andar kya hai')
        console.log(`Main kuch jyada hi andar hun yar meri details re hai ${this.firstName}, ${this.lastName} and my age is ${this.age}`)
      }.bind(this), 2000)
    }.bind(this), 1000);
  }
}

// user.greet.bind(user)()

//! Promise [all]

const promise1 = new Promise((res, rej) => res('Promise 1 resolved'));
const promise2 = new Promise((res, rej) => res('Promise 2 resolved'));
const promise3 = new Promise((res, rej) => res('Promise 3 resolved'));

const allPromises = Promise.all([promise1, promise2, promise3]);
// allPromises.then(res => console.log(res)).catch(err => console.error(err))

//! Promise [race]
//? it just return the first resolved promise and ignore the rest of the promises [the fastest promise wins (means who has very small timer or who resolve first) and return that promise and ignore the rest of the promises]


//* ----------------------------------------------
//! Classes and Objects

class ToyotaCar {
  constructor(model, year) {
    console.log(this)
    this.model = model;
    this.year = year;
  }
  start() {
    console.log(`${this.model} is starting...`);
  }
  stop() {
    console.log(`${this.model} is stopping...`);
  }
}

// i wan to see the empty object created by the new keyword before the constructor runs
// const car1 = new ToyotaCar('Camry', 2020);

//* ----------------------------------------------

//! IMP concept for Object and this +  new keyword

function UserCheck(name, age) {
  this.name = name;
  this.age = age;
  return this;
}
class UserCheck1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// const userOne = UserCheck("Bhanu", 27);
// const userTwo = UserCheck("Anurag", 25);
//? we cannot use UserCheck1("Bhanu", 27) because it is a class and we need to use new keyword to create an instance of a class. If we try to call it without new keyword it will throw an error.
// console.log(userOne) //* still showing anurag name - thats why we use new keyword to create a new instance - which create new obj and new context created - constructor function called and recieved all the arguments and bind that arguments with this keyword and return that object - so we can create multiple instances of the same constructor function with different data

// class createChaiLover {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }
function createChaiLover(name, price) {
  this.name = name;
  this.price = price;
}
createChaiLover.prototype.getDetails = function () {
  console.log(`Name: ${this.name}, Price: ${this.price}`);
}
createChaiLover.prototype.getDiscountedPrice = function (discount) {
  console.log(this.price - (this.price * discount / 100));
}
//* const chaiLover1 = createChaiLover("Bhanu", 100);
//* const chaiLover2 = createChaiLover("Anurag", 200);
// yaha par ho skta hai ki confuse ho jao ki 100 dikhana hai price ya 200 , getDetail mein , isilye this keyword lagaya hai because aise yad rakho jis == this means jisne call kiya hai uska context this hai simple - agar chaiLover1 call kre to this uska means uska price 100 and agar chaiLover2 call kre to this uska means uska price 200 - simple

//* chaiLover1.getDetails(); 
//? undefined aa rha hai - aisa nahi hai ki getDetails ya fir getDiscountPrice method ya properties nahi aayi hai, wo aayi hai but usko context dega kon, matlab batayega kon to wo batayega "new" keyword - upar bola tha na new context deta hai wahi
const chaiLover1 = new createChaiLover("Bhanu", 100);
// chaiLover1.getDetails(); //? Name: Bhanu, Price: 100
// chaiLover1.getDiscountedPrice(10); //? 90

//---------------------------------------

//! Prototype 
//* ek string given hai , usme ek owned defined method add kro
let str = "BHanu    ";
// we want a trueLength method which will return the length of the string without spaces

/* 
String.prototype.trueLength = function () {
  console.log(`True Length of this string is:`, this.trim().length);
} 
  */
// str.trueLength()
//? In the end, in JS everything [funcs, string, objects] is object , so agar ham Object ke prototype main hi method, jo bhi method ham add krna chahte hai wo add kar de to sabhi ko access mil jayega
// Object.prototype.trueLength = function () {
//   if (this instanceof String) {
//     console.log(`True Length of this string is:`, this.trim().length);
//   } else if (Array.isArray(this)) {
//     console.log(`True Length of this array is:`, this.length);
//   } else if (this instanceof Object) {
//     console.log(`True Length of this object is:`, Object.keys(this).length);
//   }
// };
// str.trueLength() //? True Length of this string is: 5

let arr = [1, 2, 3, 4, 5];
// lets check arr has that same method - jo hamne Object ke prototype main add kiya tha
// arr.trueLength() //? True Length of this string is: 5

//? let check for object also
let obj1 = { legend: "Bhanu", since: 1998 };
// obj1.trueLength() //? undefined - because object has no length property

//! __proto__ [Inheritance]
//? ye bas ek reference hai jo point karta hai uske parent prototype pe, matlab jis object se wo inherit kar raha hai uske prototype pe, to agar hamne Object ke prototype main method add kiya hai to sabhi ko access mil jayega kyuki sabhi Object se inherit karte hain
const Teacher = {
  isTeaching: true
};
const TeachingSupport = {
  isAvailable: true
}
const TASupport = {
  isHelping: true,
  fullTimeWorker: true,
  makeAssginment: "js Assignment",
  __proto_: TeachingSupport
}
//? ham bahar bhi kar skte hai
Teacher.__proto__ = TeachingSupport;

//* kaise tum kisi or object ki properties ko access kr skte ho bina us object se inherit kiye - iska answer hai __proto__ - this is called prototypal inheritance

//? but this is old way to do inheritance in JS, now we have new method - setPrototypeOf and getPrototypeOf
Object.setPrototypeOf(TASupport, TeachingSupport);
// TASupport sari properties ko inherit kar lega jo TeachingSupport ke prototype main hai
// console.log(TASupport)

//? classes ke andar bhi ham inheritance kr skte hai using extends keyword, but behind the scenes wo bhi prototypal inheritance hi hota hai


//---------------------------------------
//! Homework
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name, sound, bread) {
    super(name, sound);
    this.bread = bread;
  }
  speak() {
    console.log(`${this.name} the ${this.bread} says ${this.sound}`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const instanceOne = new Dog('Rex', 'Woof', 'German Shepherd');
const instanceTwo = new Cat('Whiskers', 'Meow');
const instanceThree = new Animal('Generic Animal', 'Some Sound');

// instanceOne.speak();
// instanceTwo.speak();
// instanceThree.speak();

// -----------------------------------------------

//! Some Questions solving using JS

//? Two sum = arr - [2, 7, 11, 15], target = 9
const twoSum = (arr, target) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let rest = target - arr[i]
    if (map.has(rest)) {
      return [map.get(rest), i]
    }
    map.set(arr[i], i);
  }
  return [];
}
// console.log(twoSum([2, 7, 11, 15], 9)); //? Output: [0, 1]

//? Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6  (subarray: [4,-1,2,1])

const maxSubArraySum = (nums) => {
  let currentSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum;
}
// console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //? Output: 6

//? valid Anagram s = "anagram", t = "nagaram"

const validAnagram = (s, t) => {
  if (s.length != t.length) return false;

  let map = new Map();
  for (let key in s) {
    map[s[key]] = (map[s[key]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) return false;
    map[t[i]]--;
  }
  return true
}
// console.log(validAnagram("anagram", "nagaram")); //? Output: true
// console.log(validAnagram("rat", "car")); //? Output: false
// console.log(validAnagram("aab", "bbb")); //? Output: false

//? Longest Substring Without Repeating Characters
const longestSubstring = (s) => {
  let set = new Set();
  let maxLength = 0;

  for (let left = 0, right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength
}
// console.log(longestSubstring("abcabcbb")); //? Output: 3

//* ----------------------------------------------


//! Important Design Patterns in JavaScript

// Design Pattern ka matlab hota hai ek reusable solution jo common software
// design problems ko solve karta hai. Ye code ko clean, maintainable aur scalable
// banane me help karta hai.
//
// Pattern kyun use karte hain?
// - same problem ka standard solution milta hai
// - code duplication kam hoti hai
// - debugging aur testing easy hoti hai
// - team ke saath consistent structure follow hota hai
// - future changes safe aur simple rehte hain
//
// Kya ye sabhi patterns equally important hain?
// Nahi. Sab patterns important hain, but har project me sab use nahi hote.
// Real-world me kuch patterns zyada common hote hain, aur kuch special cases me.
// Neeche sequence wise most important patterns diye gaye hain.

//! 1) Singleton Pattern
//* Theory: Ek class ka sirf ek hi instance banta hai.
// Use: logger, config, cache, database connection.
// Why: unnecessary multiple objects avoid hote hain.
// Code:
// class Singleton {
//   constructor() {
//     if (Singleton.instance) return Singleton.instance;
//     this.value = 'single';
//     Singleton.instance = this;
//   }
// }
// const s1 = new Singleton();
// const s2 = new Singleton();
// console.log(s1 === s2); // true

//! 2) Factory Pattern
//* Theory: Object creation ka logic alag function/class me hide hota hai.
// Use: jab condition ke basis par different object banana ho.
// Why: direct new aur if-else spread nahi hote.
// Code:
// class Circle { draw() { return 'circle'; } }
// class Square { draw() { return 'square'; } }
// function createShape(type) {
//   if (type === 'circle') return new Circle();
//   if (type === 'square') return new Square();
// }

//! 3) Observer Pattern
//* Theory: Ek object change ho to usse depend karne wale objects ko notify karna.
// Use: events, notifications, UI updates, pub/sub.
// Why: loose coupling hoti hai.
// Code:
// class Subject {
//   constructor() { this.observers = []; }
//   subscribe(fn) { this.observers.push(fn); }
//   notify(data) { this.observers.forEach(fn => fn(data)); }
// }

//! 4) Module Pattern
//* Theory: Private aur public members ka separation.
// Use: encapsulation, helper methods hide karne ke liye.
// Why: global scope clean rehti hai.
// Code:
// const counter = (() => {
//   let count = 0;
//   return {
//     inc() { count++; },
//     get() { return count; }
//   };
// })();

//! 5) Strategy Pattern
//* Theory: Different algorithms ko interchangeable banana.
// Use: payment, sorting, validation rules.
// Why: if-else chain kam hoti hai.
// Code:
// const strategies = {
//   card: amount => amount * 0.98,
//   upi: amount => amount * 0.99,
// };

//! 6) Adapter Pattern
//* Theory: Incompatible interfaces ko compatible banana.
// Use: old API, third-party libraries, data mapping.
// Why: existing code reuse hota hai.
// Code:
// function userAdapter(apiUser) {
//   return {
//     name: apiUser.full_name,
//     age: apiUser.years,
//   };
// }

//! 7) Decorator Pattern
//* Theory: Original functionality ko change kiye bina extra behavior add karna.
// Use: logging, auth, validation.
// Why: open/closed principle follow hota hai.
// Code:
// function withLogging(fn) {
//   return function (...args) {
//     console.log('calling function');
//     return fn(...args);
//   };
// }

//! 8) Proxy Pattern
//* Theory: Real object ke around wrapper jo access, caching ya lazy loading handle kare.
// Use: security, virtual object, caching.
// Why: control layer mil jata hai.

//! 9) Builder Pattern
//* Theory: Complex object ko step by step build karna.
// Use: query builder, configuration object.
// Why: large constructors se bachata hai.

//! 10) Command Pattern
//* Theory: Request ko object me convert karna.
// Use: undo/redo, queues, action history.
// Why: request ko store aur execute easily hota hai.

//! 11) Prototype Pattern
//* Theory: Existing object se new object create karna.
// Use: cloning, shared structure objects.
// Why: object creation fast aur simple hoti hai.

//! 12) Mediator Pattern
//* Theory: Objects direct talk nahi karte, mediator ke through communicate karte hain.
// Use: complex component interactions.
// Why: dependencies kam hoti hain.

//! More important patterns exist?
//! Haan, aur bhi patterns hain: Facade, Flyweight, Composite, State, Template Method,
// Iterator, Chain of Responsibility, Bridge, Memento, Visitor.
//
// Practical top patterns jo mostly useful hote hain:
// Singleton, Factory, Observer, Module, Strategy, Adapter, Decorator, Proxy, Builder.
//
// Rule:
// - simple problem me pattern force mat karo
// - jab repeated architecture problem ho tab pattern use karo
// - overengineering se bachna chahiye
