const solution = (array, len) => {
  const count = Array.from({ length: len + 1 }, () => 0);
  const result = Array.from({ length: array.length }, () => 0);
  for (arr of array) {
    count[arr]++;
  }

  for (let i = 0; i < len; i++) {
    count[i + 1] += count[i];
  }
  for (arr of array) {
    result[count[arr] - 1] = arr;
    count[arr]--;
  }
  console.log(result);
};

solution([3, 4, 0, 1, 2, 4, 2, 4], 4);
