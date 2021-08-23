function solution(arr1, arr2) {
  const map = new Map();

  for (let a of arr1) {
    if (map.has(a)) map.set(a, map.get(a) + 1);
    else map.set(a, 1);
  }
  for (let a of arr2) {
    if (!map.has(a) || map.get(a) <= 0) return "NO";
    else map.set(a, map.get(a) - 1);
  }

  return "YES";
}

console.log(solution("AbaAeCe", "baeeACA"));
