// Test for equality
const string1: string = "hello";
const string2: string = "hello";
const result1: boolean = (string1 === string2); // true
const result2: boolean = (string1 !== string2); // false

console.log(`The result for this equality test is ${result1}`);
console.log(`The result for this equality test is ${result2}`);

//-----------------------------------------------------//


// Test for inequality
const string3: string = "world";
const string4: string = "Hello";
const result3: boolean = (string3 !== string4); // true
const result4: boolean = (string3 === string4); // false

console.log(`The result for this inequality test is ${result3}`);
console.log(`The result for this inequality test is ${result4}`);

//-----------------------------------------------------//

//Lower case test
const test1: string = "HeLLo";
const test2: string = "hello";
const answer1: boolean = (test1.toLowerCase() === test2); // true
const answer2: boolean = (test1.toLowerCase() !== test2); // false

console.log(`The answer for this Lower case test is ${answer1}`);
console.log(`The answer for this Lower case test is ${answer2}`);

//-----------------------------------------------------//


// Numerical tests
const num1: number = 5;
const num2: number = 10;
const num3: number = 5;
const result5: boolean = (num1 < num2); // true
const result6: boolean = (num1 > num2); // false
const result7: boolean = (num1 <= num3); // true
const result8: boolean = (num2 <= num3); // False
const result9: boolean = (num1 === num3); // true
const result10: boolean = (num1 !== num2); // true

console.log(`The result for this Numerical test is ${result5}`);
console.log(`The result for this Numerical test is ${result6}`);
console.log(`The result for this Numerical test is ${result7}`);
console.log(`The result for this Numerical test is ${result8}`);
console.log(`The result for this Numerical test is ${result9}`);
console.log(`The result for this Numerical test is ${result10}`);

//-----------------------------------------------------//


// Test using "and" and "or" operators
const num4: number = 5;
const num5: number = 10;
const num6: number = 15;

const result11: boolean = (num4 < num5 && num5 < num6); // true
const result12: boolean = (num4 < num5 && num5 > num6); // false
const result13: boolean = (num4 > num5 || num5 < num6); // true
const result14: boolean = (num4 > num5 || num5 > num6); // false

console.log(`The result for this test is ${result11}`);
console.log(`The result for this test is ${result12}`);
console.log(`The result for this test is ${result13}`);
console.log(`The result for this test is ${result14}`);

//-----------------------------------------------------//

// Test whether an item is in an array
const array1: number[] = [1, 2, 3, 4, 5];
const item1: number = 3;
const item2: number = 6;
const result15: boolean = (array1.includes(item1)); // true
const result16: boolean = (array1.includes(item2)); // false

console.log(`The result for this test is ${result15}`);
console.log(`The result for this test is ${result16}`);
