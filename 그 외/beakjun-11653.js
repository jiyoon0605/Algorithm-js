const solution = (n) => {
  let num = 2;
  while (n > 1) {
    if (n % num === 0) {
      n /= num;
      console.log(num);
    } else {
      num++;
    }
  }
};

solution(9991);
