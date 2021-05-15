function validParentheses(parens) {
  let arr = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(" || parens[i] === "{" || parens[i] === "[") {
      arr.push(parens[i]);
    } else {
      if (arr.length === 0) {
        return false;
      }

      let lastVal = arr[arr.length - 1];

      if ((parens[i] === ")" && lastVal === "(") || (parens[i] === "}" && lastVal === "{") || (parens[i] === "]" && lastVal === "[")) {
        arr.pop(); // will return true
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
}

console.log(validParentheses("()")); // true
console.log(validParentheses(")(()))")); // false
console.log(validParentheses("(")); // false
console.log(validParentheses("(())((()())())")); // true