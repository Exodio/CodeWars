// function expandedForm(num) {
//   let resultArr = [];
//   let j = null;

//   let str = num.toString().split("");
//   for (let i = str.length - 1; i >= 0; i--) {
//     str[i] = str[i] * Math.pow(10, j);
//     j++;

//     if (str[i]) {
//       resultArr = resultArr.concat(str[i]);
//     }
//   }

//   return resultArr.reverse().join(" + ");
// }

let expandedForm = (num) =>
  num
    .toString()
    .split("")
    .reverse()
    .map((x, i) => x * Math.pow(10, i))
    .filter((x) => x > 0)
    .reverse()
    .join(" + ");

console.log(expandedForm(12)); // The result should return "10 + 2";