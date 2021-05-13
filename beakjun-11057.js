//
//
//
//

const solution = (len) => {
  let d = Array.from({ length: len + 1 }, () => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  for (let i = 0; i < 10; i++) d[1][i] = 1;

  for (let i = 2; i <= len; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k <= j; k++) {
        console.log(d[i][j], d[i - 1][k]);
        d[i][j] = (d[i][j] + d[i - 1][k]) % 10007;
      }
    }
  }

  let answer = 0;
  for (let i = 0; i < 10; i++) {
    answer = (answer + d[len][i]) % 10007;
  }

  console.log(answer);
};

solution(3);
