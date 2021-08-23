function solution(arr) {
  const map = new Map();
  for (let a of arr) {
    if (map.has(a)) map.set(a, map.get(a) + 1);
    else map.set(a, 1);
  }
  let maxVal = 0,
    maxKey = 0;
  for (let [key, val] of [...map]) {
    if (val > maxVal) {
      maxVal = val;
      maxKey = key;
    }
  }
  return maxKey;
}
solution("BACBACCACCBDEDE");
