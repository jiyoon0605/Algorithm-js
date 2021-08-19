var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;
  let queue = [];
  const arrs = [];
  const str = s;
  for (let i = 0; i < s.length; i++) {
    while (queue.includes(str[i])) {
      queue.shift();
    }
    queue.push(str[i]);
    arrs.push(queue.join(""));
  }
  let max = 0;
  for (let a of arrs) {
    if (a.length > max) max = a.length;
  }
  console.log(max);
  return max;
};

lengthOfLongestSubstring("dvdf");
lengthOfLongestSubstring("abcabcbb");
