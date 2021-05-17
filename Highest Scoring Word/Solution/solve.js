function high(x) {
  let result = "";
  let highestScore = null;
  let newScore = null;

  x.split(" ").map((item) => {
    newScore = 0;

    item.split("").map((char) => {
      newScore += char.charCodeAt() - 96; // Subtracting with 96 in order to get the required calculation as followed: a = 1, b = 2... etc
    });

    if (newScore > highestScore) {
      result = item;
      highestScore = newScore;
    }
  });

  return result;
}

console.log(high("man i need a taxi up to ubud")); //Should output: taxi
