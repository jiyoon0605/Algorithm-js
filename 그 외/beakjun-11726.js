let memo = [1, 1];

const solution = (n) => {
  if (!memo[n]) memo[n] = solution(n - 1) + solution(n - 2);
  return memo[n];
};

console.log(solution(2));
console.log(solution(9));
