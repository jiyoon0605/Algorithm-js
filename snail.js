let column = 10,
  row = 5;

let arr = Array.from({ length: row }, () =>
  Array.from({ length: column }, () => null)
);

let n = 10 * 5;
let value = 1;
let w = column;
let h = 0;
let index = -1;

while (value <= n) {
  for (let i = 0; i < column; i++) {
    w += index;
    if (arr[h][w] === null) arr[h][w] = value;
    value++;
  }
  column--;
  index *= -1;
  for (let i = 0; i < row - 1; i++) {
    h += index;
    if (arr[h][w] === null) arr[h][w] = value;
    value++;
  }
  row--;
}

for (let a of arr) {
  console.log(a.toString());
}
