{
  let cnt = 0;

  const solution2 = (a) => {
    while (a !== 0) {
      cnt++;
      if (a > 0) {
        if (a >= 10) a -= 10;
        else if (a >= 4) a -= 5;
        else a--;
      } else {
        if (a <= -10) a += 10;
        else if (a <= -4) a += 4;
        else a++;
      }
    }
  };

  const solution = (a, b) => {
    if (a > b) solution2(a - b);
    else solution2(b - a);

    return cnt;
  };

  console.log(solution(3, 27));
}
