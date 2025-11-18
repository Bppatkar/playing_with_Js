function pyramidGen(num) {
  for (let i = 1; i <= num; i++) {
    let space = '';
    for (let space = 1; space <= num - i; space++) {
      space += ' ';
    }
    for (let count = 1; count <= i; count++) {
      space += count;
    }
    for (let revCount = i - 1; revCount >= 1; revCount--) {
      space += revCount;
    }
    console.log(space);
  }
}

pyramidGen(10);

