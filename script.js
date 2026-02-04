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

