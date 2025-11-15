function intrestCalc(p, r, t) {
  return (p * r * t) / 100;
}

console.log(intrestCalc(1000, 5, 1).toFixed(2));
console.log(intrestCalc(20000, 10, 5).toFixed(2));
