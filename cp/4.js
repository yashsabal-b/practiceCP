let stringArr = ["Army", "mary", "Yarm", "yash", "hasy"];

function anagram(first, second) {
  if (first == second) {
    console.log("anagram");
  }
}

for (let i = 0; i < stringArr.length; i++) {
  stringArr[i] = stringArr[i].toLowerCase();
  stringArr[i] = stringArr[i].split("").sort().join("");
  anagram(stringArr[i], stringArr[i + 1]);
}
