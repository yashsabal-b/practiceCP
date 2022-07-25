let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr0 = [],
  arr1 = [],
  temp;

if (arr.length % 2 == 0) {
  for (
    let i = 0, j = arr.length / 2;
    i < arr.length / 2, j < arr.length;
    i++, j++
  ) {
    arr0.push(arr[i]);
    arr1.push(arr[j]);
  }
} else {
  temp = arr[arr.length - 1];
  arr.pop();
  for (
    let i = 0, j = Math.floor(arr.length / 2);
    i < Math.floor(arr.length / 2), j < arr.length;
    i++, j++
  ) {
    arr0.push(arr[i]);
    arr1.push(arr[j]);
  }
  arr1.push(temp);
}
console.log(arr0);
console.log(arr1);

console.log(temp);
