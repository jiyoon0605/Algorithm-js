const solution = (a, b, v) => {
  let len = v;
  let cnt = 0;
  while (len > 0) {
    len -= a;
    if (len > 0) len += b;
    cnt++;
  }
  return cnt;
};

console.log(solution(100, 99, 1000000000));
