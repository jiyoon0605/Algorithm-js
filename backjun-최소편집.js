const solution = (str1, str2) => {
  const n = str1.length;
  const m = str2.length;

  let editArray = [];
  editArray.push([0]);

  for (let i = 1; i <= n; i++) editArray.push([i]);
  for (let i = 1; i <= m; i++) editArray[0].push(i);

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (str1[i - 1] === str2[j - 1])
        editArray[i][j] = editArray[i - 1][j - 1];
      else
        editArray[i][j] =
          Math.min(
            editArray[i - 1][j],
            Math.min(editArray[i][j - 1], editArray[i - 1][j - 1])
          ) + 1;
    }
  }
  console.log(editArray[n - 1][m - 1]);
};

solution("length", "french");
