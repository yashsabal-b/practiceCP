let arr = [1, 2, 3, 4, 5, 1, 2, 1, 2];
let arr0 = [];
arr = arr.sort();
arr0.push(arr[0]);
for (let i = 1; i < arr.length; i++) {
  if (arr[i - 1] != arr[i]) {
    arr0.push(arr[i]);
  }
}

console.log(arr0);
