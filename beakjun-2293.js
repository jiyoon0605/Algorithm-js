const solution = (n, k, coin) => {
  let table = Array.from({ length: n * k }, () => 0);
  const coins = coin.sort().reverse();
  table[0] = 1;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      if (j >= coins[i]) {
        table[j] += table[j - coins[i]];
      }
    }
  }
  console.log(table);
  return table[k];
};

console.log(solution(3, 10, [1, 2, 5]));
