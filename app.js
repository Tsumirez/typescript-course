var combine = function (input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
};
//literal type is pretty self explanatory. It literally defines allowed values rather than types.
//the below variable author can only be one of the three nicknames allowed
var author;
author = 'Zef';
//Literal types are infered by TS on constants with initialized values.
//here the "type" is 3.14, not a number;
var falsePi = 3.14;
