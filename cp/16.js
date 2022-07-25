let testString = "abbbcabcdefef".split(""),
  count = 1;
testString.sort();
for (let i = 1; i < testString.length; i++) {
  if (testString[i - 1] != testString[i]) {
    count++;
  }
}

console.log(count);
