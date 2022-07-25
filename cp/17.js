let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
let arr0 = [],
  arr1 = [];

arr.forEach((ele) => {
  if (typeof ele == "number") {
    arr0.push(ele);
  } else {
    arr1.push(ele);
  }
});

arr = [...arr0, ...arr1];
console.log(arr);
