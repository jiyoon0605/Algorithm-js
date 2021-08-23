function solution(n, k, arr) {
  const set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        set.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  console.log([...set].sort((a, b) => b - a)[k - 1]);
}

solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
