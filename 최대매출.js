// function solution(n, m, arr) {
//   let max = 0,
//     lt = 0,
//     rt = m - 1,
//     sum = 0;
//   while (rt < n) {
//     for (let i = lt; i <= rt; i++) sum += arr[i];
//     lt++;
//     rt++;
//     max = Math.max(max, sum);
//     sum = 0;
//   }
//   console.log(max);
// }

// solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);

function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    console.log(sum, arr[i], arr[i - k]);
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
