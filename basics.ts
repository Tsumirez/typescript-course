//basic types in Typscript are lower-case and Typescript is case-sensitive so beware!

let add = (n1:number, n2:number, showResult:boolean, message:string) =>
    showResult?console.log(message,n1+n2):n1+n2;


const number1 = 5;
const number2 = 2.8;


console.log(typeof number1);

const displayResult = true;
const msg = 'The result of addition is: '
const result = add(number1,number2, displayResult, msg);
console.log(result);