//basic types in Typscript are lower-case and Typescript is case-sensitive so beware!
function add(n1, n2, showResult, message) {
    return showResult ? console.log(message, n1 + n2) : n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
console.log(typeof number1);
var displayResult = true;
var msg = 'The result of addition is: ';
var result = add(number1, number2, displayResult, msg);
console.log(result);
