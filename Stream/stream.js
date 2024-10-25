// What is Stream in node js ?
// 1. stream are ongoing process in node js
// 2. Stream are obejct let you  read data from source or write data to a destination in continous fashion.
// 3. Ex. Streaming means listening Music or watching video in real time insted of Downloading file and watch later
            // 4. Four type fo Streaming (4 type):
            // 1. Readable :  stream are used to read operation (read data sequentially)
            // 2. writable :  stream are used to write operation (write data sequentially)
            // 3. Duplex : stream which are used to both read and write operation
            // 4. Transform : A type of duplex stream where output is computed based on the input
            // (A duplex stream that can modify or transform the data as it's read or written.)
// Note:
// 1. Streams process data in chunks, so it doesn’t require loading the entire file into memory.
// 2. Streams allow efficient data handling, which is crucial for performance in applications dealing with large files, HTTP requests, or any I/O-bound operations.
// 3. Piping: You can pipe streams together, like piping a readable stream into a writable stream.

// IMP :
// Each type Stream are EventEmitter Instances and throw several event at different instances of Time
// some commanly used event are
// 1. data: The event is fire when ther is data is available to read
// 2. end: The event is fired when ther is no more data to read
// 3. error: Then event is fired when there is any error receving or wirting data
// 4. finish: This event is fired when all the data has been flushed to underlaying system

//Task
// 1. reading data from stream
// 2. create readable stream
// 3 handaled stream events

const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  // This is not way to read data

  // fs.readFile('data.txt','utf-8',(error, data)=>{
  //     if(error){
  //         console.log(error)
  //     }else{
  //         console.log(data.toString())
  //     }
  // })

  // By uisng another way we have to read streaming data

  const streaming = fs.createReadStream("data.txt", "utf-8");
  streaming.on("data", (data) => {
    console.log(data);
    res.write(data);
  });
  streaming.on("end", () => {
    res.end();
  });
  streaming.on("error", (error) => {
    console.log(error);
  });
});
server.listen(8000, () => {
  console.log("server started.....");
});
