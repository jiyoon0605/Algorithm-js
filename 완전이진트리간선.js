const solution = (a, b) => {
  let cnt = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  while (min !== max) {
    if (min > max) {
      let tmp = min;
      min = max;
      max = tmp;
    }
    if (max % 2 === 1) {
      if (max - 1 === min) {
        cnt += 2;
        max--;
      } else {
        max = (max - 1) / 2;
        cnt += 1;
      }
    } else {
      max /= 2;
      cnt++;
    }
  }
  return cnt;
};

console.log(solution(2000000000, 205000000));
