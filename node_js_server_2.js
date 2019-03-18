/*** 
 * 
 * Exercise
 * Send out html output from your server
 * Have a <h1>Hello world from node server<h1>
 * Have a div with blue text etc. And send out a customize greeting
 */

const http=require('http');

http.createServer(
    function(req,res){
        res.writeHead(200,
            {'Content-Type':'text/html'}
        );
        let htmlOutput=`
           <h1>Hello from Sonnys NodeJS Server</h1>
           <div style="color:blue;font-size:1rem;">How are you guys doing today? Lets get started to our journey in node</div>`;
        //res.write(htmlOutput);
        res.end(htmlOutput);
    }
).listen(8282);
//3000

/*
brew update
brew upgrade node
npm update -g npm */