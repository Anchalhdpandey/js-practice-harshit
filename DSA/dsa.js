// function sumOfNum(num) {
//   let sum = 0;
//   for (i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(sumOfNum(5));

// sum of digits of num
function sumOfDigit(num) {
  let sum1 = 0;
  while (num > 0) {
    sum1 += num % 10;
    num = Math.floor(num / 10);
  }
  return sum1;
}
console.log(sumOfDigit(32435));

// palindrome

var palindome = function (x) {
  let copynum = x,
    reversenum = 0;
  while (copynum > 0) {
    const lastdigit = copynum % 10;
    reversenum = reversenum * 10 + lastdigit;
    copynum = Math.floor(copynum / 10);
  }
  return x === reversenum;
};

console.log(palindome(12321));
