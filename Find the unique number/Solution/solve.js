function findUniq(arr) {
  const x = arr.filter((el) => el === arr[0]);
  const y = arr.filter((el) => el !== arr[0]);

  return x.length > y.length ? y[0] : x[0];
}

findUniq([1, 1, 1, 2, 1, 1]); // Result should equal: 2

// function findUniq(arr) {
//   return arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
// }