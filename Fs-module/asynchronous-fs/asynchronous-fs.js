// asynchronous file operation (non-Blocking structure);

const fs = require('fs');


// in asynchronous file system method callback function so callback function make a asynchronous behaviour
// callback must a function
// create file and strod data
fs.writeFile('demo.txt', 'Hi, Node js ', (error)=>{
console.log(error)
})

// append the data with existing file data 
fs.appendFile('demo.txt','\n welcome to node js tutorial !',(error)=>{
    console.log('data added successfully');
    console.log('error',error);   
})

// read the data form the file 
fs.readFile('demo.txt','utf-8',(error, data)=>{
    console.log('data :', data);
    console.log(error);  
})