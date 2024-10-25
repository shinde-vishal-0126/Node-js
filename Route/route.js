
// 1. first create web server
// Routeing : How to handaled the routing and http request in node js 

const url = require('url') // no need to iport it by default present

const http = require('http');
const server = http.createServer((req, res)=>{
    console.log('url',req.url);
    console.log('method :',req.method);
    console.log('headers :',req.headers)
    
    if(req.url == '/'){
        res.end('<h1>Welcome To Home Page !</h1>');
    }else if(req.url == '/about'){
        res.end('<h1>Welcome To About Page !</h1>');
    }else if(req.url == '/contact'){
        res.end('<h1>Welcome To Contact Page !</h1>');
    }else {
        //Sends a response header to the request.
        res.writeHead(404,{
            'content-type' : 'text/html' 
        })
        // //  used to send chunks of the response body to the client while the connection is still open.
        res.write('<h1> 404 </h1> <span> Page Not Found ! <span>'); 
        res.end();
         //used to signal the end of the response in an HTTP server
        //  If you don’t need to send any additional data and just want to signal the end of the response,
    }  
})
server.listen(4000, '127.0.0.1', ()=>{
    console.log('server startd at port no 4000')
})