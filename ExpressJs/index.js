// Express js is node js Framework
// express js is web application framwork use that provide you to a simple api to build webside
// using express js have to work more efficient, scalable 

// using express() create a express application 
//  express() function are top-level function exported by express modules: (so using this you have to create express application)

const express = require('express');
const app = express() // call express function to create express application


// Here callback function having 2 paramter like request and response
// so request (req) object represent the http request and has properties for the request qeary string, parameters, body, http headers.
// similary response(res) object represent the http response.
// Tha response send the express app when an it receive http request

app.get("/", (req, res)=>{
res.send('Hello')
})

app.listen(8000, ()=>{
    console.log('server started..')
})