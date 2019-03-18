const http=require('http');
const os=require('os');

http.createServer(
    function(req,res){
        res.writeHead(200,
            {'Content-Type':'text/html'}
        );

        res.write(os.platform());
        //console.log(os.cpus());
        let strCPUS=JSON.stringify(os.cpus());
        //console.log(os.totalmem());
        //console.log(os.freemem());
        //console.log(os.uptime());
        
        res.write(strCPUS);
        res.end();
    }
).listen(8282);

