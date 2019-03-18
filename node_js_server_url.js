/**
 * 
 * Exercise:
 * From your query parameter you will pass color information(color=blue/color=red etc.)
 * 
 * Then based on that color, you will send out a html div to res with that color for the text
 */

const http=require('http');
const url=require('url');

http.createServer(
    function(req,res){
         //console.log(req.url);
         let myUrl=url.parse(req.url,true);
         console.log(myUrl);
         console.log(myUrl.hostname);
         console.log(myUrl.pathname);
         //console.log(myUrl.query);
         let firstName=myUrl.query.firstName;
         let lastName=myUrl.query.lastName;

        
        res.writeHead(200,
            {'Content-Type':'text/plain'}
        );
        res.write(`Hello there ${firstName} ${lastName}`);
        res.end();
        
    }
).listen(8282);