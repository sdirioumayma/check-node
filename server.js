const http = require('http'); // Import Node.js core module
const fs= require('fs');// require the file system
// }) => create file
fs.readFile('welcome.txt', (err, data)=>{
    if(err) throw err
    console.log(data.toString())
}) // read file

const server = http.createServer(function (req, res) {   //create web server
    
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><h1> hello node! </h1></html>');
        res.end();
    
    })

    server.listen(3000); //6 - listen for any incoming requests



console.log('Node.js web server at port 3000 is running..')