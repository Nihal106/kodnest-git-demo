// a = 10;
// b = 2;

// console.log("Addition: " + (a + b));
// console.log("Subtraction: " + (a - b));
// console.log("Multiplication: " + (a *  b));
// console.log("Division: " + (a / b));
// console.log("Modulus:" +(a % b));
// console.log("Exponentiation: " + (a ** b));


a = 5;
b = '5';
console.log("a == b: " + (a == b));
console.log("a === b: " + (a === b)); 

console.log("a != b: " + (a != b));
console.log("a !== b: " + (a !== b)); 

t = true; 
f = false;

console.log("true && true :" + (t && t));
console.log("true && false :" + (t && f));
console.log("false && true :" + (f && t));
console.log("false && false :" + (f && f));
console.log("true || true :" + (t || t));
console.log("true || false :" + (t || f));
console.log("false || true :" + (f || t));
console.log("false || false :" + (f || f));

console.log("!true: " + (!t));
console.log("!false: " + (!f));


c = 142;
d = 24;
e = 21;
let greater = (c > d) ? (c > e ? c : e) : (d > e ? d : e);

console.log("Greater : " + greater);
