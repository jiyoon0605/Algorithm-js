function solution(n, arr1, m, arr2) {
  let p1 = 0,
    p2 = 0,
    answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) {
      p1++;
    } else if (arr1[p1] > arr2[p2]) {
      p2++;
    } else {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    }
  }
  console.log(answer);
}

solution(5, [1, 3, 9, 5, 2], 5, [3, 2, 5, 7, 8]);
