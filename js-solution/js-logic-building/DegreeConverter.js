function convertToFahrenheit(cel) {
  let result = (cel * 9) / 5 + 32;
  result = Math.round(result);
  return result;
}
console.log('27 is ', convertToFahrenheit(27), ' in Fahrenheit');
console.log('34 is ', convertToFahrenheit(34), ' in Fahrenheit');
