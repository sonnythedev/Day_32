/**
 Exercise:
 You will have a about.html and homepage.html files
 in your directory. These can be simple divs html.

 When you hit the url with pagename=about it will pull about.html through fs and output to res. And if pagename=home then it will pull from homepage.html(and send to res)
 */
const http=require('http');
const fs=require('fs');
const url=require('url');
const path=require('path');

http.createServer(
    function(req,res){
        let parsedUrl=url.parse(req.url,true);//parsedUrl at this time is a object and you can access different parts with dot notation
        let fileName=parsedUrl.query.fileName;
        console.log(fileName);

        fs.readFile(
            path.join(__dirname+"/"+fileName),
            function(err,data){
                if(err){
                    console.log(err);
                    throw error;
                }
                else{
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end(data);
                }
            }
        );
   }
).listen(8282);

/**
 * 
 * fs.readFile
 * fs.writeFile
 * fs.appendFile
 * fs.renameFile
 * fs.unlink
 * 
 */