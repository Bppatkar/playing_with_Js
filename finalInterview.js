//! variable
let name = "john"
name[0] = "f";
// console.log(name); // Output: "john" because strings are immutable in JavaScript

//! function
function greet() {
  console.log("hello");
}
// greet(); // Output: "hello"
const greet2 = function sayHello() {
  console.log("hello");
}
// lets see how we call this function expression
// greet2(); // Output: "hello"
// sayHello(); // Uncaught ReferenceError: sayHello is not defined

//! arrow function
const greet3 = () => console.log("hello");

// ---------------------------------
var foo = '36';
function bar() {
  console.log(foo);
  var foo = 23;
}
// bar();

// ---------------------------------
//! settimeout and setinterval

const timer = setTimeout(() => {
  console.log("Hello from settimeout")
}, (1000));
clearTimeout(timer);

const interval = setInterval(() => {
  console.log("Hello from Interval")
}, (1000));
clearInterval(interval);


// ---------------------------------
//! Callback hell and pyramid of doom
// we have 10 heading in html and we want to change text and color of them one by one each ok like heading 1 in 1 sec , heading 2 in 2 sec and so on....

// const heading1 = document.getElementById("heading1");
// const heading2 = document.getElementById('heading2');
// const heading3 = document.getElementById('heading3');
// const heading4 = document.getElementById('heading4');
// const heading5 = document.getElementById('heading5');
// const heading6 = document.getElementById('heading6');
// const heading7 = document.getElementById('heading7');
// const heading8 = document.getElementById('heading8');
// const heading9 = document.getElementById('heading9');
// const heading10 = document.getElementById('heading10');

function callbackHell() {
  setTimeout(() => {
    heading1.textContent = "text1";
    heading1.style.color = "red";
    setTimeout(() => {
      heading2.textContent = "text2";
      heading2.style.color = "yellow";
      setTimeout(() => {
        heading3.textContent = 'text3';
        heading3.style.color = 'red';
        setTimeout(() => {
          heading4.textContent = 'text4';
          heading4.style.color = 'red';
          setTimeout(() => {
            heading5.textContent = 'text5';
            heading5.style.color = 'red';
            setTimeout(() => {
              heading6.textContent = 'text6';
              heading6.style.color = 'red';
            }, 6000);
          }, 5000);
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
}

// callbackHell();


// ---------------------------------
//! Promise

const data = {
  name: "bhanu",
  age: 27,
  address: "India"
}

const fetchData = (data) => {
  return new Promise((resolve, reject) => {
    let random = Math.random() > 0.5;
    if (random) {
      resolve(data);
    } else {
      reject(
        new Error("Something went wrong here!")
      )
    }
  })
}

// fetchData(data).then((d) => console.log(d)).catch((err) => console.error(err)).finally(()=>{console.log("Fetching operation completed")})

// ---------------------------------
//! callback
function bhanu(data, cb) {
  let updatedData = data.toUpperCase();
  return cb(updatedData);
}
// bhanu("single Value", (d) => {
//   console.log(d);
// })

// ---------------------------------
//! async await
function riskyOperation() {
  let randomData = Math.random() < 0.5;

  if (!randomData) { new Error("something went wrong") }
  return "Successs";
}

const solveFunctionasync = async () => {
  try {
    let response = await riskyOperation();
    console.log(response)

  } catch (error) {
    console.error(err);
  }
}

// solveFunctionasync();
// ---------------------------------
//! Post method using Fetch

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Something went wrong", error);
  }
}

// postData('https://jsonplaceholder.typicode.com/posts', {
//   title: "test1",
//   body: "new item"
// }).then((d) => console.log(d)).catch((err) => console.error(err)).finally(() => console.log("Operation complete"));


// ---------------------------------

//! call , apply and bind method

function cook(ind1, ind2) {
  console.log(`${this.name} is having dinner with ${ind1} and ${ind2}`);
}
const user = { name: "aman" };

//? call
// cook.call(user, "palak paneer", "lentils");

//? apply
// cook.apply(user, ["chapati", "rice"]);

//? bind
let res = cook.bind(user, "butter-naan", "chole-bhature");
// res();
// ---------------------------------

//! Map, filter and reduce
let arr = [2, 3, 6, 7, 8, 12, 14, 15, 17];

let data1 = arr.map((e) => Math.floor(e / 2));
// console.log(data1);

let data2 = arr.filter((e) => e % 2 != 0);
// console.log(data2);

let data3 = arr.reduce((acc, curr) => acc * curr, 1)
// console.log(data3);

const users = [
  { id: 1, name: 'Alice', age: 30, job: 'Developer', working: true, salary: 50000 },
  { id: 2, name: 'Bob', age: 25, job: 'Designer', working: false, salary: 40000 },
  { id: 3, name: 'Charlie', age: 35, job: 'Manager', working: true, salary: 60000 },
  { id: 4, name: 'David', age: 28, job: 'Developer', working: false, salary: 45000 },
  { id: 5, name: 'Eve', age: 32, job: 'Designer', working: true, salary: 55000 }
]

// map->filer->reduce chain

const totalSalaryOfWorkingDev = users.filter(e => e.job === 'Developer' && e.working === true).reduce((total, curr) => total + curr.salary, 0);
// console.log(totalSalaryOfWorkingDev);

// ---------------------------------

//! currying
function add(a) {
  return function second(b) {
    return function third(c) {
      return a + b + c;
    }
  }
}
const addd = (a) => (b) => (c) => a + b + c;
// let result = add(5)(2)(3);
// let resultt = addd(15)(12)(13);
// console.log(result);
// console.log(resultt);
// ---------------------------------
//! shallow and deep copy

// ! Shallow copy aur deep copy - proper notes
//
// Primitive values: string, number, boolean, null, undefined, bigint, symbol.
// Inki value directly copy hoti hai. Copy ko update karne par original change nahi hota.


// Reference values: object, array, function.
// Variable ke andar poora object nahi, balki us object ka reference/address hota hai.
// Isliye do variables same nested object ko point kar sakte hain.

const original = {
  name: "user",
  age: 12,
  address: {
    city: "jabalpur",
    state: "mp",
    country: "india"
  }
};

// ! Shallow copy
// Sirf outer/first level ka naya object banta hai.
// First-level primitive properties ki values alag copy hoti hain.
// Nested object/array ka reference copy hota hai, nested data shared rehta hai.
// Isliye shallowCopy.age update karne par original.age change nahi hoga,
// lekin shallowCopy.address.city update karne par original.address.city bhi change hoga.
const shallowCopy = { ...original }; // object spread: shallow copy
// const shallowCopy = Object.assign({}, original); // another shallow method

shallowCopy.age = 21; // primitive: original.age ab bhi 12 hai
shallowCopy.address.city = "bhopal"; // reference: original.address.city bhi "bhopal"

// console.log(shallowCopy.age); // 21
// console.log(original.age); // 12
// console.log(original.address.city); // "bhopal"
// console.log(shallowCopy.address === original.address); // true: same reference

// Shallow array copy ke methods: spread, slice, Array.from, concat.
const originalArray = [1, 2, [3, 4]];
const shallowArray = [...originalArray];
shallowArray[0] = 10; // primitive element alag hai; originalArray[0] 1 rahega
shallowArray[2][0] = 30; // nested array shared hai; originalArray[2][0] bhi 30

// console.log(originalArray[0]); // 1
// console.log(originalArray[2][0]); // 30
// console.log(shallowArray[2] === originalArray[2]); // true

// ! Deep copy
// Outer object ke saath-saath saare nested objects/arrays ki bhi alag copy banti hai.
// Deep copy ke nested data ko update karne par original par koi effect nahi hota.

// 1) structuredClone: modern JavaScript ka recommended general-purpose method.
// Date, Map, Set, nested objects/arrays etc. ko handle karta hai.
const deepCopy = structuredClone(original);
deepCopy.age = 30;
deepCopy.address.city = "indore";

// console.log(deepCopy.age); // 30
// console.log(original.age); // 12
// console.log(original.address.city); // "bhopal"
// console.log(deepCopy.address === original.address); // false

const deepArray = structuredClone(originalArray);
deepArray[2][0] = 40;
// console.log(deepArray[2][0]); // 40
// console.log(originalArray[2][0]); // 30: original unchanged

// 2) JSON method: simple data ke liye deep copy.
// Limitation: undefined, function, Symbol remove ho jaate hain; Date string ban jata hai;
// Map/Set, circular reference aur special types properly handle nahi hote.
const jsonCopy = JSON.parse(JSON.stringify(original));

// 3) Manual deep copy: known structure ho to har nested level ko spread karein.
const manualDeepCopy = {
  ...original,
  address: { ...original.address }
};
manualDeepCopy.address.city = "delhi";
// console.log(original.address.city); // "bhopal"

// Array ke nested levels ko bhi copy karna zaroori hai:
const manualDeepArray = [...originalArray];
manualDeepArray[2] = [...originalArray[2]];

// Important:
// - const copy = original;       // copy nahi, same reference (object update dono ko change karega)
// - Object.freeze() shallow freeze karta hai; nested objects ko alag freeze karna padega.
// - Deep copy tab banayein jab copied data ko independently mutate karna ho.


// ----------above pratice-----------------------

let originalData = {
  isAvail: true,
  title: "shampoo",
  price: 120,
  description: {
    alovera: true,
    indgrident: 'abcd',
    expiry: 2027,
    futureVal: 154
  }
}

// shallow - nested one ko copy nhi krna, but nested one ka reference copy ho jata hai to shallow change krne p original bhi change hota hai nested wale m
let shallowCopy1 = { ...originalData };
shallowCopy1.price = "$2.5"
// console.log(shallowCopy1);

// nested m change krne pr dono m changes honge
shallowCopy1.description.expiry = 2026;
// console.log(shallowCopy1);
// console.log(originalData);

// let deepCopy1 = structuredClone(originalData);
let deepCopy1 = JSON.parse(JSON.stringify(originalData));
deepCopy1.isAvail = false;
// console.log(deepCopy1);
// console.log(originalData);

deepCopy1.description.futureVal = 168;
// console.log(deepCopy1);
// console.log(originalData);

// ---------------------------------
//! debouncing and throttling

/* 📊 Debounce vs Throttle — ek line me

| Feature       | Debounce                    | Throttle             |
|---------------|-----------------------------|-----------------------|
| Kab chalta hai | User rukne ke baad ek baar | Har X ms me max ek baar |
| User ruke na to | Kabhi nahi chalta         | Fir bhi chalta rehta hai |
| Search input  | ✅ Best                     | ❌ Galat               |
| Scroll / resize | ❌ Galat                   | ✅ Best               |
*/


/* 
///! Debounce :

setTimeout ka id timer me store kiya ✅

naya call aaye to clearTimeout(timer) se purana cancel ✅

...args se saare arguments aage pass kiye ✅

return function (...args) se ek wrapper diya jo baad me call hota hai ✅

Ek chhoti si baat: let timer = null zaroori nahi tha (bas clean look ke liye theek hai), kyunki clearTimeout(null) kuch nahi karta — koi error nahi deta. 👍
*/

// let inputData = document.getElementById('de');

function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay)
  }
}

// inputData.addEventListener('input', debounce((e) => console.log(e.target.value), 500));

/*
///! Throttling

🎯 Requirement — throttle ki zaroorat kab padti hai?
Debounce tab kaam karta hai jab user ruk jaye. Lekin kuch jagah user rukta hi nahi:

Scroll — user continuously scroll kar raha hai (100s of events per second)

Window resize — user drag karke window chhoti-badi kar raha hai

Mousemove — mouse hil raha hai

Button spam — "Place Order" pe user 5 baar click kar deta hai

Yahan debounce fail ho jaata hai — kyunki user ruk hi nahi raha, to debounce kabhi fire hi nahi karega (ya bahut late karega).

///? Throttling ka matlab: chahe user kitni bhi baar trigger kare, function fixed time me sirf EK baar chalega.
*/

function throttle(func, delay) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) return;            // ✅ wait ho raha hai → ignore [shouldWait = true ka matlab "abhi busy hu, mana kar raha hu".]

    func(...args);
    shouldWait = true;                 // 🔒 lock

    setTimeout(() => {
      shouldWait = false;              // 🔓 delay ke baad unlock
    }, delay);

  };
}

// window.addEventListener('scroll', throttle(() => {
//   console.log('scrolled', window.scrollY);
// }, 1000));

// ---------------------------------
//! Hoisting
//? hoisting simply means that the variable and function declarations are moved to the top of their scope before code execution. means u can use that variable or function before it is declared but in the case of let and const they are hoisted but not initialized and till they get initialized they are in temporal dead zone and if u try to access them before initialization it will throw a reference error.

// console.log(value);
// let value = 27;

// sayHi();
function sayHi() {
  console.log(" Hey how r u", a);
  let a = "bhanu";
}

// ---------------------------------
//! closure
//? Closure is a function that has access to its own scope, the outer function's scope, and global scope. It allows a function to remember and access variable from outer function even after the outer function has finished executing.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
  inner();
}

// let myClosure = outer()();
// console.log(myClosure); 

function paymentPocess(method) {
  return function (amt) {
    console.log(`Processing ${amt} paying using payment method ${method}`);
  }
}
// const upiPayment = paymentPocess("UPI");
// upiPayment(1200);

// ---------------------------------
//! check empty object

function isEmptyObject(obj) {
  if (obj !== null || typeof obj === 'object') return obj;
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// console.log(isEmptyObject({}));
// console.log(isEmptyObject({ id: 101 }));
// console.log(isEmptyObject(new Date()));

// ---------------------------------
//! ES6 classes and object

class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(breed, name) {
    super(name);
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} bark`);
  }
}

const dog = new Dog("Rex", "german");
dog.speak();

//? Private member in ES6 class

class Counter {
  #count = 0;

  constructor(initialVal = 1) {
    this.#count = initialVal;
  }

  #increment(val) {
    this.#count += val;
  }

  #decrement(val) {
    if (val > this.#count) return
    this.#count -= val;
  }

  incrementPublic(val) {
    this.#increment(val);
  }

  decrementPublic(val) {
    this.#decrement(val);
  }
  getBalance() {
    return this.#count;
  }
}
const sbiBank = new Counter();
sbiBank.incrementPublic(100);
// console.log(sbiBank.getBalance())
sbiBank.decrementPublic(79);
// console.log(sbiBank.getBalance())

// ---------------------------------

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
const userOne = UserCheck("Bhanu", 27);
const userTwo = UserCheck("Anurag", 25);

// const userTwo = UserCheck1("Anurag", 25);  // Throwing error
//? we cannot use UserCheck1("Anurag", 25) because it is a class and we need to use new keyword to create an instance of a class. If we try to call it without new keyword it will throw an error.
// console.log(userOne) //* still showing anurag name - thats why we use new keyword to create a new instance - which create new obj and new context created - constructor function called and recieved all the arguments and bind that arguments with this keyword and return that object - so we can create multiple instances of the same constructor function with different data

function createCodingLover(names, lang) {
  this.name = names;
  this.lang = lang;
}

createCodingLover.prototype.favLang = function () {
  console.log(`Name: ${this.name} is a coder and his working language is ${this.lang}`);
}
const user1 = createCodingLover("Bhanu", "JS");
// jis == this means jisne call kiya hai uska context this hai simple yaha user1 call kr rha to isi user1 ka this jayega
// user1.favLang(); ////? undefined aa rha hai - aisa nahi hai ki favLang  method ya properties nahi aayi hai, wo aayi hai but usko context dega kon, matlab batayega kon ki new context aaya hai to show krna hai something to wo batayega "new" keyword - upar bola tha na new context deta hai wahi
const user1_1 = new createCodingLover("Bhanu", "JS");
// user1_1.favLang();

// ---------------------------------
//! Instance of operator
function Car() { }
const myCar = new Car();

// console.log(myCar instanceof Car);
// console.log(myCar instanceof Object);
// console.log([] instanceof Car)
// console.log([] instanceof Array)
// console.log([] instanceof Object)

// ---------------------------------
//! prototype and prototype chain [__proto__, [[prototype]]]

///* Prototype

//* ek string given hai , usme ek owned defined method add kro
let str = "BHanuuuu          ";

String.prototype.trueLength = function () {
  console.log(`True Length of this string is ${this.trim().length}`);
}
// str.trueLength();


//? In the end, in JS everything [funcs, string, objects] is object , so agar ham Object ke prototype main hi method, jo bhi method ham add krna chahte hai wo add kar de to sabhi ko access mil jayega

Object.prototype.trueLength = function () {
  if (Array.isArray(this)) {
    console.log(`True Length of array is ${this.length}`);
  }
  else if (this instanceof String) {
    console.log(`True Length of str is ${this.trim().length}`);
  }
  else {
    console.log(`True Length of object is ${Object.keys(this).length}`)
  }
}

let arr2 = [1, 2, 3, 4, 5, 6, , , 8];
// arr2.trueLength();
let strNew = "bha  projapt pp  p    "
// strNew.trueLength();
let newObj = {
  item: "Phone", price: 12
}
// newObj.trueLength();

//* __proto__  OR [[prototype]] (Inheritance)
//? ye bas ek reference hai jo point karta hai uske parent prototype pe, matlab jis object se wo inherit kar raha hai uske prototype pe, to agar hamne Object ke prototype main method add kiya hai to sabhi ko access mil jayega kyuki sabhi Object se inherit karte hain

const Teacher = {
  isTeaching: true
}

const TeachingSupport = {
  isAvailable: true
}

const TASupport = {
  isHelping: true,
  fullTimeWorking: true,
  typeMakeAssignment: "JS Type",
  __proto__: TeachingSupport,
}

//* kaise tum kisi or object ki properties ko access kr skte ho bina us object se inherit kiye - iska answer hai __proto__ - this is called prototypal inheritance

//! setPrototypeOf(target, prototype) do arguments leta hai:
//? target ka prototype, prototype argument ko point karega.
//? Teacher.__proto__ = TeachingSupport yahan nahi karna, warna cycle ban jayegi
//? jab TeachingSupport ka prototype Teacher set karenge.
Object.setPrototypeOf(TASupport, TeachingSupport);

// TASupport sari properties ko inherit kar lega jo TeachingSupport ke prototype main hai
console.log(TASupport);
Object.setPrototypeOf(TeachingSupport, Teacher);
// Chain: TASupport -> TeachingSupport -> Teacher
console.log(TASupport.isTeaching); // true

// ---------------------------------

