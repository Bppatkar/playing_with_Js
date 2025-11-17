//! without third variable
function swapNum(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  return { a, b };
}

//* a = a + b - (b = a);  [single line]
//* a = (b = a, a*b/b);   [single line]

console.log(`Value after swapping `, swapNum(5, 6));

//! with third variable
let c = b;
b = a;
a = c;

//! using XOR
function swapNum(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
}
//* a = a ^ b ^ (b = a); [single line]

//! using array destructuring
function swapNum(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

//! using multiplicatio division
function swapNum(a, b) {
  a = a * b;
  b = a / b;
  a = a / b;
  return [a, b];
}
