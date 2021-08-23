function solution(s, t) {
  let cnt = 0,
    len = t.length;
  t = t.split("").sort().join("");

  let arr = s.slice(0, len).split("");
  for (let i = len; i <= s.length; i++) {
    str = arr.slice().sort().join("");
    if (t === str) cnt++;
    arr.shift();
    arr.push(s[i]);
  }

  console.log(cnt);
}

solution("bacaAacba", "abc");
