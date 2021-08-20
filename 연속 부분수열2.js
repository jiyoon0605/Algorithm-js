function solution(n, m, arr) {
  let cnt = 0,
    sum = 0,
    p = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(i, p);
    while (sum > m) {
      sum -= arr[p++];
    }
    cnt += i - p + 1;
  }
  console.log(cnt);
}

solution(5, 5, [1, 3, 1, 2, 3]);
