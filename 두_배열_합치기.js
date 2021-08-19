//two-pointer algorithm
function solution(a, b) {
  const answer = [];
  let p1 = 0,
    p2 = 0,
    n = a.length,
    m = b.length;
  while (p1 < n && p2 < m) {
    if (a[p1] <= b[p2]) answer.push(a[p1++]);
    else answer.push(b[p2++]);
  }
  while (p1 < n) answer.push(a[p1++]);
  while (p2 < m) answer.push(b[p2++]);
  console.log(answer);
}

solution([1, 3, 5], [2, 3, 6, 7, 9]);
