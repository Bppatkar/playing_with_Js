function mutiplicationTable(num, range) {
  if (num < 0) return;
  if (typeof num === 'number') {
    let ans = 1;
    for (let i = 1; i <= range; i++) {
      ans = num * i;
      console.log(ans);
    }
  }
}

function mutiplicationTable2(num, range) {
  if (num < 0) return;
  if (typeof num === 'number') {
    for (let i = num; i <= num * range; i += num) {
      console.log(i);
    }
  }
}

mutiplicationTable('4', 10);
// console.log('-------------');
// mutiplicationTable(5, 15);
mutiplicationTable2(5, 15);
// console.log('-------------');
// mutiplicationTable(8, 20);
