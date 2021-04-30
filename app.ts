//Custom type a.k.a. type aliases.
//If you need a certain type definition in multiple places, you can simply define it under one alias
//and use that from there. 
//Here i wrap the number | string type definition into custom "joinable" type and use that from that moment on.
//remember to use type keyword, followed by your custom name and = after which type definition is given.
type joinable = number | string;

let combine = (input1: joinable, input2: joinable) => {

  
  if (typeof input1 === 'number' && typeof input2==='number') {
      return input1+input2
  } else {
      return input1.toString() + input2.toString()
  }
}


let author: 'Zef' | 'Zefirez' | 'Tsumirez';
author = 'Zef';

const falsePi = 3.14;