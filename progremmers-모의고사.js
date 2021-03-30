function solution(answers) {
  var answer = [];
  let l = answers.length;
  let a = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < 5; j++) a[0].push(a[0][j]);
    for (let j = 0; j < 8; j++) a[1].push(a[1][j]);
    for (let j = 0; j < 10; j++) a[2].push(a[2][j]);
  }

  let p = [0, 0, 0];
  for (let i = 0; i < l; i++) {
    if (a[0][i] == answers[i]) p[0]++;
    if (a[1][i] == answers[i]) p[1]++;
    if (a[2][i] == answers[i]) p[2]++;
  }
  let max = Math.max(p[0], p[1], p[2]);
  for (let i = 0; i < 3; i++) {
    if (p[i] >= max) answer.push(i + 1);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
