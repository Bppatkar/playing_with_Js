function calculateTipAmount(baseAmt, tipPer, locale, currency) {
  console.log(baseAmt, tipPer);
  let result = [];

  for (let i = 0; i < tipPer.length; i++) {
    console.log(tipPer[i]);
    let tipAmount = baseAmt * (tipPer[i] * 0.01);

    const formatter = Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    });
    result.push(formatter.format(tipAmount));
  }
  return result;
}

console.log(
  '1000, [5, 10, 15]',
  calculateTipAmount(1000, [5, 10, 15], 'en-IN', 'INR')
);

console.log(
  '997, [5, 10, 15]',
  calculateTipAmount(997, [5, 10, 15], 'en-US', 'USD')
);
