// How to  created own or custum module  and  export :

// here we have create one function
// in node js each and every file as module

// first function
const add = (a, b) => {
  return a + b;
};

// 2nd function
const sub = (a, b) => {
  return a - b;
};

// also you have to pass varialbe
const myName = 'vishal shinde'


// Here we need to export this module because you are able to import in another module.
// if you want to export multiple function, variable then you have to used the following syntax 
module.exports = {
  add,
  sub,
  myName
};

// *
// and if you want to export only one function then you simpyl used the following syntax
// Here we need to export this module because you are able to import in another module.
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.myName = myName;
   
