function add(n1, n2) {
    return n1 + n2;
}
function printResult(n) {
    console.log('Result ' + n);
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
//combineValues = printResult;
//combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
