/* 
1
11
21
1211
111221
 */

function pattern(n) {
  if (n <= 0) return;
  let current = "1";
  console.log(current);

  for (let i = 1; i < n; i++) {
    let next = "";
    let j = 0;
    while (j < current.length) {
      let count = 1;
      while (j + 1 < current.length && current[j] === current[j + 1]) {
        count++;
        j++;
      }
      next += count + current[j];
      j++;
    }
    current = next;
    console.log(current);
  }
}
pattern(10);
