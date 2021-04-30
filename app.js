//union type is the "or" of TS. It allows to specify numerous types allowed for a variable.
//in example below the inputs can now be either a number or a string.
var combine = function (input1, input2) {
    //however, attempting to add two different types makes no sense to ts and error is thrown.
    //here a vanilla js runtime solution is needed. Ts is not bothered with shanenigans of js' type coersion.
    //For TS incompatible types are incompatible and error is thrown. 
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
};
