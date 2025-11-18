var foo = 10;
function bar() {
  console.log(foo); // undefined
  var foo = 26;
}

bar();

const data = { name: 'bhanu', age: 25, admin: false };
const fetchData = () => {
  let success = true;

  return new Promise((resolve, reject) => {
    if (success) {
      setTimeout(() => {
        console.log('Resolving with data:', data);
        resolve(data);
      }, 2000);
    } else {
      reject('data not found');
    }
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));



  