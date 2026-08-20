import http from 'http';

const server = http.createServer((request, response)=>{
    response.writeHead(200, {
        "content-type" : "application/json" //sent response in plain text format
        //"content-type" : "text/plain" //sent response in plain text format
        //"content-type" : "text/html" //send response in html format
    });
    
    // response.write("<h1>Response from server: Hello World</h1>"); // for plain text/html Response
    response.end(JSON.stringify({status: "OK"})); // for JSON Response
});

server.listen(3000,()=>{
    console.log("we are listening port 3000");
});

