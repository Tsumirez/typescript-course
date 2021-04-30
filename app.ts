function add (n1:number, n2:number): number {
    return n1+n2;
}

function printResult(n: number): void {
    console.log('Result '+ n);
}


printResult(add(5,12));

//Fuction type lets you enforce for a variable to accept only Functions
//let z: Function;
//Notice this time the type is uppercased.

//That however is often not enough. You don't just want a function to be passed.
//You need to be specific about what argument types it'll accept and what is the type
//of it's return value.
//Here is an example how to do it. As you can see arrow function notation from vanilla js
//is used for that purpose, no curly braces however, as this is function type definition, not a real arrow function.
//Arguments can be named anything, unrelated to the actual passed function's naming convention.
//and after the arrow you define the type of retun value. 
let combineValues: (a:number, b:number) => number;

combineValues = add;
//combineValues = printResult;
//combineValues = 5;

console.log(combineValues(8,8));