function add (n1:number, n2:number): number {
    return n1+n2;
}

function printResult(n: number): void {
    console.log('Result '+ n);
}

//Callback functions can be defined in typescript much the same way as regular ones.
//There is one major difference however. The return type void. 
//In a callback with return type void, returning a value is not forbidden, but it will be ignored as far as 
//TS is concerned. Arguments however are subject to strict adherence much like in standard function types
function addAndHandle(n1: number, n2:number, callback: (num:number) => void) {
  const result = n1+n2;
  callback(result);
}

printResult(add(5,12));


let combineValues: (a:number, b:number) => number;

combineValues = add;

console.log(combineValues(8,8));

addAndHandle(10,20,(result) => {
    console.log(result);
    return result;
})