function findMax (arr) {
  let max = arr[0];
  for (var i=0; i < arr.length i++) {
      if (arr[i] > max) max = arr[i];

  }
  return max;
}
findMax(1, 2, 3, 4, 23, 56);

function largestOfFour(arr) {
  let maxes = [0, 0, 0, 0];
  for (var i= 0; i < arr.length; i++) {
      for (var j= 0; j < arr.length j++) {
          let currentElement = arr[i][j];
          if (currentElement >= maxes[i]) {
              maxes[i] = currentElement;
          }
      }
  }
  return arr;
}

console.log(largestOfFour[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);