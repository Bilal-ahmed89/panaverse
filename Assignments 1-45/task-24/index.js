// Test for equality
var string1 = "hello";
var string2 = "hello";
var result1 = (string1 === string2); // true
var result2 = (string1 !== string2); // false
console.log("The result for this equality test is ".concat(result1));
console.log("The result for this equality test is ".concat(result2));
//-----------------------------------------------------//
// Test for inequality
var string3 = "world";
var string4 = "Hello";
var result3 = (string3 !== string4); // true
var result4 = (string3 === string4); // false
console.log("The result for this inequality test is ".concat(result3));
console.log("The result for this inequality test is ".concat(result4));
//-----------------------------------------------------//
//Lower case test
var test1 = "HeLLo";
var test2 = "hello";
var answer1 = (test1.toLowerCase() === test2); // true
var answer2 = (test1.toLowerCase() !== test2); // false
console.log("The answer for this Lower case test is ".concat(answer1));
console.log("The answer for this Lower case test is ".concat(answer2));
//-----------------------------------------------------//
// Numerical tests
var num1 = 5;
var num2 = 10;
var num3 = 5;
var result5 = (num1 < num2); // true
var result6 = (num1 > num2); // false
var result7 = (num1 <= num3); // true
var result8 = (num2 <= num3); // False
var result9 = (num1 === num3); // true
var result10 = (num1 !== num2); // true
console.log("The result for this Numerical test is ".concat(result5));
console.log("The result for this Numerical test is ".concat(result6));
console.log("The result for this Numerical test is ".concat(result7));
console.log("The result for this Numerical test is ".concat(result8));
console.log("The result for this Numerical test is ".concat(result9));
console.log("The result for this Numerical test is ".concat(result10));
//-----------------------------------------------------//
// Test using "and" and "or" operators
var num4 = 5;
var num5 = 10;
var num6 = 15;
var result11 = (num4 < num5 && num5 < num6); // true
var result12 = (num4 < num5 && num5 > num6); // false
var result13 = (num4 > num5 || num5 < num6); // true
var result14 = (num4 > num5 || num5 > num6); // false
console.log("The result for this test is ".concat(result11));
console.log("The result for this test is ".concat(result12));
console.log("The result for this test is ".concat(result13));
console.log("The result for this test is ".concat(result14));
