// console.log('Hello world');

// Product information
const obj = {
  productId: 'P001',
  productName: 'Shampoo',
  productAvail: 'false',
  getProduct: function () {
    return `${this.productName} is available`;
  },
  productPrice: 100,
};
// console.log(obj.getProduct());

// for (let key in obj) {
//   console.log(`for-in (key): ${key}, (value): ${obj[key]}`);
// }
//? Object.entries - Object.values and Object.keys
// for (let value of Object.values(obj)) {
//   console.log(`for-of (value): ${value}`);
// }

// console.log(a)  //? Reference Error

//! Prototype
// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let stu1 = new Student('bhanu', 27);
// console.log(stu1);

// function Teacher(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let newTeacherA = new Teacher('bhanu', 22);
// console.log(newTeacherA);

//?? NEW keyword
// function createUser(name, score) {
//   this.name = name;
//   this.score = score;
// }

// createUser.prototype.scoreUpdate = function () {
//   this.score++;
// };

// createUser.prototype.printMe = function () {
//   console.log(`score is ${this.score}`);
// };

// let data1 = new createUser('samosa', 25);
// // let data2 = new createUser('coffee', 250);

// data1.printMe();

//! __proto__

// const User = {
//   name: 'newUser',
//   email: 'newUser@gmail.com',
// };

// const Teacher = {
//   isAvailable: false,
// };
// const TASupport = {
//   isAvailable: true,
//   assignment: 'JS assignment',
//   __proto__: Teacher,
// };
// const TeachingJob = {
//   isAvailable: true,
// };

const School = {
  SName: 'RabindraNath Tagor School',
  SAddress: 'ABC market',
  isTeacherAvail: true,
};
const Teacher = {
  isAvail: true,
  __proto__: School,
};
const TeachingJob = {
  isAvail: true,
  __proto__: Teacher,
};
const TA_Assistant = {
  isAvail: true,
  __proto__: Teacher,
};

// console.log(TA_Assistant);
// Object.setPrototypeOf(TeachingJob, Teacher);

// Object.setPrototypeOf(TeachingJob, User);
// // TeachingJob.__proto__ = User;
// debugger;
// console.log(TeachingJob);

//? 2nd Example
// let str = ' BHanu           ';

// // console.log(str.length);
// String.prototype.getTrueLength = function () {
//   return this.trim().length;
// };

// let len = str.getTrueLength();
// console.log(len);

//! Callback hell
// function step1(cb) {
//   setTimeout(() => {
//     console.log('Step 1 is completed');
//     cb();
//   }, 1000);
// }
// function step2(cb) {
//   setTimeout(() => {
//     console.log('Step 2 is completed');
//     cb();
//   }, 1000);
// }
// function step3(cb) {
//   setTimeout(() => {
//     console.log('Step3 is completed');
//     cb();
//   }, 1000);
// }
// function step4(cb) {
//   setTimeout(() => {
//     console.log('Step 4 is completed');
//     cb();
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(() => {
//         console.log('All step is completed');
//       });
//     });
//   });
// });

//! promise
// const step1 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('Step 1 resolved');
//     resolve();
//   }, 1000);
// });
// const step2 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('Step 2 resolved');
//     resolve();
//   }, 1000);
// });
// const step3 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('Step 3 resolved');
//     resolve();
//   }, 1000);
// });
// const step4 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('Step 4 resolved');
//     resolve();
//   }, 1000);
// });

// step1
//   .then(() => {})
//   .then(() => {})
//   .then(() => {})
//   .then(() => {});

//! async
// const runTime = async () => {
//   await step1;
//   await step2;
//   await step3;
//   await step4;
// };

// runTime();

//! how do u iterate over the object properties
const obj1 = {
  a: 1,
  b: 2,
};
// console.log(obj1.hasOwnProperty('1'));
// for (const key in obj1) {
//   if (obj1.hasOwnProperty(key)) {
//     console.log('key', obj1[key]);
//   }
// }
// for (const  val of Object.values(obj1)) {
//   console.log('values are:', val);
// }

//! Array in js
const arr = [1, 2, 3, 4, 5];
// const newArr = new Array(1, 2, 3, 4, 5);
// console.log(newArr);

// //! Array.from() - Creates an array from an iterable or array-like object
// const str1 = 'Hello';
// const fromStr = Array.from(str1); // ['H', 'e', 'l', 'l', 'o']

// const set = new Set([1, 2, 3]);
// const fromSet = Array.from(set); // [1, 2, 3]

// //! Array.of() - Creates a new Array instance with a variable number of arguments
// const ofArr = Array.of(7);       // [7] (Unlike new Array(7) which creates 7 empty slots)
// const ofArr2 = Array.of(1, 2, 3); // [1, 2, 3]

//! Javascript methods
// [1, 2, 3].forEach((e) => console.log(e * 2));
// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2); // doubled is [2, 4, 6]
// console.log(doubled)
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sum is 10

//! spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined)

//! Shallow Copy vs Deep Copy
const original = {
  name: 'Bhanu',
  details: { age: 25, city: 'Jabera' }
};

// Shallow Copy: Only the first level is copied. Nested objects still share the same reference.
const shallowCopy = { ...original };
// shallowCopy.details.age = 30; // This would change original.details.age too

// Deep Copy: All levels are copied. No references are shared.
const deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.details.age = 40; // This does NOT change original.details.age

/* 
console.log('Original:', original.details.age);
console.log('Shallow:', shallowCopy.details.age);
console.log('Deep:', deepCopy.details.age);
*/

//! JSON.stringify and JSON.parse
/* const user = { id: 1, name: 'Bhanu', active: true };

// Convert JavaScript object to JSON string (useful for sending data to a server)
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"id":1,"name":"Bhanu","active":true}'

// Convert JSON string back to JavaScript object (useful for reading data from a server)
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // 'Bhanu'
 */