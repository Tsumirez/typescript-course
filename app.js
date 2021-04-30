//Just like in Java (which TypeScript heavily borrows from) functions can have return types.
//In fact these are often infered. 
//The below function is given explicid return type of number, but even without that,
//it would infer it as return clause contains sum of two number types.
function add(n1, n2) {
    return n1 + n2;
}
//Once again like in Java, :void return type is present, something vanilla js does not have.
//This type is used for situation where there is no return statement or it returns an empty value (undefined, null)
//void is the general "returns nothing" value type and should be used over native js types like
//undefined, null etc, as the latter expect a return statement to be present even if returning nothing.
//For void lack of return statement is a non issue, same as returning null or undefined.
function test() {
    console.log('executing a function with no return value');
}
