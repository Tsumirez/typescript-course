//TYPE UNKNOWN
//Type "any" is the "do whatever you want at your own risk" type in Typescript, that just 
//has the compiler ignore the value checks and stay back.
//Type unknown is the "do whatever you want, but only in your own house!"
//When interacting with other types, a type check will be enforced and possible disasters
//not allowed to spill freely into rest of the code without some checking.
//Here we see a string type variable receiving value from userInput.
//if userInput was of type any, it would be allowed without any typechecks.
//Needless to say not very fun if for example there's an object in there instead of a string.
//But type unknown will not have any of that. A runtime check must be performed in order for TS
//to allow it to happen, else an error will be thrown
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string')
    userName = userInput;
