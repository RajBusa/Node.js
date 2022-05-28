const http = require('http');

// 1st method
// http.createServer((req, resp)=>{
//     resp.write("<h1>Hello World!</h1>");
//     resp.end();
// }).listen(4500);

// 2nd method
// function dataControl(req, resp){
//     resp.write("<h1>Hello, This is Raj Busa</h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);

// 3rd method
const dataControl = (req, resp) => {
    resp.write("<h1>Hello, This is raj busa</h1>");
    resp.end();
}

http.createServer(dataControl).listen(4500);