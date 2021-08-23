function solution(str) {
  let stack = [];
  for (let s of str) {
    if (s === "(") stack.push(0);
    else {
      if (stack.length <= 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return "YES";
}

console.log(solution("(()()(()))"));
