function solution(n, times) {
  let min = 1;
  let max = times[times.length - 1] * n;

  let answer = max;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const cnt = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (cnt < n) {
      min = mid + 1;
    } else {
      if (mid < answer) answer = mid;
      max = mid - 1;
    }
  }
  return answer;
}

console.log(solution(6, [7, 10]));
