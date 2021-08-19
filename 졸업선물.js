function solution(n, m, arr) {
  const costArr = [];
  for (let a of arr) {
    costArr.push([a[0] + a[1], a[0] / 2 + a[1]]);
  }
  costArr.sort((a, b) => a[0] - b[0]);
  let max = 0;
  for (let i = 0; i < n; i++) {
    let money = m - costArr[i][1];
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (money - costArr[j][0] < 0) break;
      money -= costArr[j][0];
      cnt++;
    }
    max = Math.max(max, cnt);
  }

  console.log(max);
}

solution(5, 28, [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
]);
