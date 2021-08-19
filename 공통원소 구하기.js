function solution(n, arr1, m, arr2) {
  let p1 = 0,
    p2 = 0,
    answer = [];
  while (p1 < n) {
    if (p2 >= m) {
      p2 = 0;
      p1++;
    }
    if (arr1[p1] === arr2[p2]) answer.push(arr1[p1]);
    p2++;
  }
  console.log(answer.sort());
}

solution(5, [1, 3, 9, 5, 2], 5, [3, 2, 5, 7, 8]);
