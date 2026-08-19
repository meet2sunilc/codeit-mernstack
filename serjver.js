import http from 'http';

const server = http.createServer((request, response)=>{
    response.write("Hello World");
    response.end();
});

server.listen(3000);
console.log("we are listening port 3000");
