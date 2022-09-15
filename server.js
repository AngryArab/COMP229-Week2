const connect = require('connect');
const app = connect();

function helloWorld(req,res, next){

    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');


};


app.use('/hello', helloWorld);


app.listen(3000);