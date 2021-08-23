function solution(number, k) {
  var answer = [];
  const length = number.length - k;

  let curIndex = 0;
  let lastIndex = number.length - (length - 1);

  while (true) {
    if (answer.length >= length) break;
    const tmp = number.slice(curIndex, lastIndex);
    const max = Math.max.apply(null, tmp.split(""));
    answer.push(max);
    curIndex = number.indexOf(max) + 1;
    lastIndex = number.length - (k - answer.length);
    console.log(tmp);
  }
  return answer.join("");
}
console.log(solution("4177252841", "4"));
