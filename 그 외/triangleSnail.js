function solution(n) {
  const answer = new Array(n).fill().map((_, i) => new Array(i + 1));
  let value = 0;
  let col = -1;
  let row = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) answer[++col][row] = ++value;
    for (let i = 0; i < n - 1; i++) answer[col][++row] = ++value;
    for (let i = 0; i < n - 2; i++) answer[--col][--row] = ++value;
    n -= 3;
  }
  for (let a of answer) {
    console.log(a.toString());
  }
}
solution(6);
