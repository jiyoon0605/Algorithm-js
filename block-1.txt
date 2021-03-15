//1번 문제

let cnt = 0;

const counter = (n) => {
  if (n === 1) return 1;
  else if (n === 2) return 3;
  else return counter(n - 1) + 2 * counter(n - 2);
};

console.log(counter(20));
