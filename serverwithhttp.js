//const fs = require('fs');
//const hello = require('./hello');
//hello.sayHello();

// const http = require('http');
// function myRequestListener(request, response){

//     response.writeHead(200,{'Content-Type': 'text/plain'});
//     response.end('Hello world');

// }
// http.createServer((req, res) => {
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('HELLO YAYA');


// }).listen(3000);




//const hello = require('./hello');
//hello.sayHello();

 const http = require('http');
const { cwd } = require('process');
 const url = require('url');
//const { response } = require('express');
//function myRequestListener(request, response){

   //  response.writeHead(200,{'Content-Type': 'text/plain'});
  //   response.end('Hello world');

// }
  http.createServer((req, res) => {
     //let myParam = req.param.a
    const queryObject = url.parse(req.url, true).query;

    console.log(queryObject['a']);

     if(queryObject['a'] == 'a' ){

        res.writeHead(200,{'Content-Type': 'text/plain'});
     res.end('Hello world');





     } else {


        res.writeHead(200,{'Content-Type': 'text/plain'});
     res.end('Bye world');


     }

    res.end('HELLO YAYA');


 }).listen(3000);