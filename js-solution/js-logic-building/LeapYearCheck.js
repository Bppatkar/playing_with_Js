let leapYear = (year) =>
  (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0
    ? 'Leap Year'
    : 'Not Leap Year';

console.log(leapYear(2020)); // Leap Year ✓
console.log(leapYear(2000)); // Leap Year ✓
console.log(leapYear(1900)); // Not Leap Year ✓
console.log(leapYear(2024)); // Leap Year ✓
console.log(leapYear(2023)); // Not Leap Year ✓
console.log(leapYear(2100)); // Not Leap Year ✓
