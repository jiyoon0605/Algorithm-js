let cnt = 0;
let num = 0;
let a = [];
const solve = (n, k) => {
  let i = 0;
  if (n == 0) {
    console.log(a);
    cnt++;
  }
  for (i = Math.min(n, k); i >= 1; i--) {
    console.log(i);
    a[num++] = i;
    solve(n - i, i);
    num--;
  }
};

solve(4, 4);
console.log(cnt);
