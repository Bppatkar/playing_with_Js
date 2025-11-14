var foo = 10;
function bar() {
  console.log(foo); // undefined
  var foo = 26;
}

bar();
