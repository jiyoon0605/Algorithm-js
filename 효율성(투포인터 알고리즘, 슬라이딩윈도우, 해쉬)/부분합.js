const solution = (array) => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      max = max > sum ? max : sum;
    }
  }
  return max;
};

console.log(solution([-16, 200, -99, 15, 5, 9, 50, -26, -10, 40]));
