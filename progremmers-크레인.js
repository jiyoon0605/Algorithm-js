function solution(board, moves) {
  let basket = [];
  let n = 0;

  for (let i = 0; i < moves.length; i++) {
    let m = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][m] !== 0) {
        if (basket.length <= 0 || basket[basket.length - 1] != board[j][m]) {
          basket.push(board[j][m]);
          board[j][m] = 0;
        } else if (basket[basket.length - 1] == board[j][m]) {
          n++;
          basket.pop();
          board[j][m] = 0;
        }
        break;
      }
    }
  }
  return n * 2;
}

// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 3],
//       [0, 2, 5, 0, 1],
//       [4, 2, 4, 4, 2],
//       [3, 5, 1, 3, 1],
//     ],
//     [1, 5, 3, 5, 1, 2, 1, 4]
//   )
// );

const getPattern = (pattern) => {
  const arr = [];
  const map = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (map.get(pattern[i]) !== undefined) {
      arr.push(map.get(pattern[i]));
    } else {
      map.set(pattern[i], i);
      arr.push(i);
    }
  }
  return arr.join("");
};

console.log(getPattern("ccc"));
