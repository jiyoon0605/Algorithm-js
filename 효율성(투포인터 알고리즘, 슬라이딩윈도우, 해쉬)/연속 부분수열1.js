function solution(n, m, arr) {
  let cnt = 0,
    sum = 0;

  let p = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum === m) cnt++;
    while (sum >= m) {
      sum -= arr[p++];
      if (sum === m) cnt++;
    }
  }

  console.log(cnt);
}

solution(10, 6, [1, 2, 1, 3, 1, 1, 1, 2, 3, 6]);
