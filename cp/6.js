let num = 69,
  isPrime = true,
  arr = [];
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
    arr.push(i);
  }
}
console.log(isPrime);
console.log(arr);
