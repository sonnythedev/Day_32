const http=require('http');

http.createServer(
    function(req,res){
        res.writeHead(200,
            {'Content-Type':'text/plain'}
        );
        res.write('Hello world from Node Server!');
        res.end();
    }
).listen(8282);