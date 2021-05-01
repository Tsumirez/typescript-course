var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string')
    userName = userInput;
//"never" return type
//This return type is used when a function is to not return anything.
//that usually means it never ending or being forcefully interrupted,
//like in  a case of throwing and error that shuts the script down, or an infinite loop.
//Which for reminder can have a practical, healthy use with generator functions.
//Even a function with no return statement whatsoever does not meet the 'never' criteria,
//and will throw TS error.
//In short never is a very fringe and strict case, unlike void that is happy with both
//lack of return value, or returning an "empty" one like undefined and null.
function generateError(msg, code) {
    throw { messasage: msg, errorCode: code };
}
generateError('Manual Error', 260);
