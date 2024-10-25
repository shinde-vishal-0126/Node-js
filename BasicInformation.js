
// info about not js method 

// in node js if you send response you have to used following method like
// 1. res.end() : used to signal the end of the response in an HTTP server (If you don’t need to send any additional data and just want to signal the end of the response,)
// ends the response and closes the connection.
// 2. res.write() : send parts of the response, ( used to send chunks of the response body to the client while the connection is still open.)
// 3. res.writeHead(200,{ cotentType: 'text/plain'}) :Sends a response header to the request.
// The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. Optionally one can give a human-readable statusMessage as the second argument.






// ========================================================================================
// in node request object to used following method like :
// 1. request.url : return current url.
// 2. request.method : return current method .
// 3. request.header: return header of the current request .




// ==========================================================================================
// What is api ?
// ANS: api is services where we have request to data
// api stands for application programming interface wich communicate with each other





// ============================================================================================



// Express js
// 1. if you have used express js you no need to used http module
// also you don't need to used http.createServer() method
// here you have to used directely app.get("/", (req, res)=>{})

// info about express js method 
// insed of write or end method in express js having send() method to send respone or response body





// ============================================================================================



// to create package.json file used npm init -y (-y falg used get by default value and create the package.json)




// API http method :
// Get:
// Post:
// put:
// patch :
// delete: