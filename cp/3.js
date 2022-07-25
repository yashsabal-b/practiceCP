let arr = [1, 2, 3, 4, 5],
  string = "string";

if (Object.prototype.toString.call(string) === "[object Array]") {
  console.log("Array!");
} else {
  console.log("Not Array!");
}
