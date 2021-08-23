function solution(str) {
  const stack = [];

  for (let s of str) {
    if (s === ")") {
      while (stack.pop() !== "(");
    } else stack.push(s);
  }
  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
