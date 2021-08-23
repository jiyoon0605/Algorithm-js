let n = 16;
let t = 16;
let m = 2;
let p = 1;

const binary = (n, b) => {
  let number = n;
  let binary = "";
  if (n < 10) {
    while (number > 0) {
      binary += parseInt(number % b).toString();
      number = parseInt(number / b);
    }
  } else {
    while (number > 0) {
      let tmp = parseInt(number % b);
      switch (tmp) {
        case 10:
          binary += "A";
          break;
        case 11:
          binary += "B";
          break;
        case 12:
          binary += "C";
          break;
        case 13:
          binary += "D";
          break;
        case 14:
          binary += "E";
          break;
        case 15:
          binary += "F";
          break;
        default:
          binary += parseInt(number % b).toString();
          break;
      }
      number = parseInt(number / b);
    }
  }

  return binary.split("").reverse().join("");
};

const solution = (n, t, m, p) => {
  let num = t * m;
  let arr = "0";

  for (let i = 0; i < num; i++) {
    arr += binary(i, n);
  }

  let index = p - 1;
  let answer = "";

  for (let i = 0; i < t; i++) {
    answer += arr[index];
    index += m;
  }
  console.log(answer);
  return answer;
};

solution(16, 16, 2, 2);
