let memo = [1, 3];

const solution = (n) => {
  const index = n - 1;
  if (!memo[index]) memo[index] = solution(n - 1) + 2 * solution(n - 2);
  return memo[index];
};

console.log(solution(6));
console.log(solution(8));
console.log(solution(12));
