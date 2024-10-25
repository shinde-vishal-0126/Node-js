// what is moudle wrapper function :

// when i have create any module so node js wrap the moudle with another wrapper function.

// how to work module wrapper function in node js ?
// here we have grouping operator and inside that having anonymous funciton and inside that anonymous function access whatever you have defined in the module
(function (exports, require, module, __filename, __dirname) {
  const name = "vishal shinde";
  console.log(name);
})();

// so this is immidiate invoked funciton in javascript ES6 (IIFE in node js called as module wrapper function)

// get the current directory name
console.log('dir_name :', __dirname);

// get the current file name;
console.log('file_name :', __filename);
