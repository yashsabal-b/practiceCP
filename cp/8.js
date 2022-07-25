let string = "yash sabal y";

function test(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      console.log(c);
    }
  }
  return null;
}

test(string);
