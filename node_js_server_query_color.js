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
        let parsedUrl=url.parse(req.url,true);//parsedUrl at this time is a object and you can access different parts with dot notation
        let color=parsedUrl.query.colorName;

        let htmlOutput=`<div style="color:${color}">Greetings From NodeJS!</div>`;

        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(htmlOutput);
    }
).listen(8282);