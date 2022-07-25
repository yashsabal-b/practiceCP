let string = "Welcome to this Javascript Guide!";
let newStr = "";

string = string.split(" ").map((ele) => {
  for (let i = ele.length - 1; i >= 0; i--) {
    newStr += ele[i];
  }
  newStr += " ";
});

console.log(newStr);
