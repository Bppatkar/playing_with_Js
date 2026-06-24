let userName: string = 'Bhanu';
let userAge: number = 27;
let isStudent: boolean = true;

let fruitsCollection: string[] = ['Mango', 'Banana', 'Apple'];
let vegetablesCollection: Array<string> = ['Carrot', 'Broccoli', 'Spinach'];

let numbersCollection: Array<number> = [1, 2, 3, 4, 5];
let salaryCollection: number[] = [2000, 3000, 4000, 5000];

let mixedCollection: (string | number | boolean)[] = [
  'Hello',
  42,
  true,
  'World',
  false,
];

//-----------------------------------------------------
//! any [use less because it prevent type checking]
let mysteryBox: any = { x: 0 };

mysteryBox = 'Hello';
mysteryBox.foo(); // No error, but may cause runtime error
mysteryBox.bar = 100;

//-----------------------------------------------------

//! Functions
// ? [In function we can specify the both type, input and output types ]
function greetUser(name: string): string | void {
  console.log(`Hello, ${name.toUpperCase()}`);
  // return name;
}
// greetUser('Bhanu');
// greetUser(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

function calculateSum(a: number, b: number): number {
  return a + b;
}
// console.log(calculateSum(5, 10)); // Output: 15
//-----------------------------------------------------

//! Function which return promise

async function fetchDatawithPromiseAsync(url: string): Promise<unknown> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function fetchDatawithPromise(url: string): Promise<unknown> {
  const response = fetch(url);
  return response
    .then((res) => res.json())
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

// fetchDatawithPromise('https://jsonplaceholder.typicode.com/posts/1')
//   .then((data) => {
//     console.log('Data fetched successfully:', data);
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error);
//   });

// -----------------------------------------------------
//! type vs interface

/* 
Type aliases aur interfaces mein kuch farak hai:

Interface extend ho sakta hai, type nahi.

Interface ko dobara open karke new properties add kar sakte ho, type nahi.
*/
// example [of these two differences]

interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  employeeId: number;
}

type PersonType = {
  name: string;
  age: number;
};

type EmployeeType = PersonType & {
  employeeId: number;
};

// interface new properties add karne ke liye dobara open kiya ja sakta hai, type ko nahi

interface Person {
  address: string;
}
// type PersonType = {
//   address: string; // Error: Duplicate identifier 'PersonType'.
// };

//-----------------------------------------------------

const req = { url: 'https:example.com', method: 'GET' };

// handleRequest(req.url, req.method); // method is string not 'GET'
//? fixing the above error
const req2 = { url: 'https:example.com', method: 'GET' as 'GET' };
const req3 = { url: 'https:example.com', method: 'GET' } as const;

