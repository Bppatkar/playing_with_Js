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

