// Here we have to import the add module 

// 1st approach
const { add , sub, myName} = require('./ownModuleorCustomModule')
console.log(add(10,20));
console.log(sub(20,5));
console.log('name ', myName);



// // 2nd appraoch
// const oper = require ('./ownModuleorCustomModule');
// console.log('module-export', oper);

// console.log(oper.add(10,20));
// console.log(oper.sub(20,5));
// console.log('name ',oper.myName);