let arr = [324, 68, 213, 4, 3, 56, 7, 8, 0];
arr = arr.sort((a, b) => a - b);
let sum = arr[arr.length - 1] + arr[arr.length - 2];
console.log(sum);
