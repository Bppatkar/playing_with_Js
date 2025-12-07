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

const throttle = (func, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if(now - lastCall < delay){
      
    }
  };
};

const myFunc = function (e) {
  const query = e.target.value;
  console.log(query);

  // fetch(`http://api.example.com/search?query=${query}`)
  //   .then((res) => res.json())
  //   .then((result) => console.log(result));
};

// input.addEventListener('input', debounce(myFunc, 500));
input.addEventListener('input', throttle(myFunc, 500));
