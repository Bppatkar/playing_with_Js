function fizzBuzz(num) {
  if (num < 0) return;

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Fizz Buzz');
    }
    i % 3 === 0
      ? console.log('fizz')
      : i % 5 === 0
      ? console.log('buzz')
      : console.log(i);
  }
}

fizzBuzz(36);
