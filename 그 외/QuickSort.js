const device = (array, left, right, pivot) => {
  while (left <= right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;
    if (left <= right) {
      const tmp = array[left];
      array[left] = array[right];
      array[right] = tmp;
      left++;
      right--;
    }
  }
  return left;
};

const solution = (array, left = 0, right = array.length - 1) => {
  console.log(array);
  if (left >= right) return;
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const wall = device(array, left, right, pivot);
  solution(array, left, wall - 1);
  solution(array, wall, right);

  return array;
};

console.log(solution([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
