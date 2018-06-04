"use strict";

const http = require("http");
//gets the function from array.js
const getRandomQuote = require("./array");

http.createServer((request, response)=>{
    //Must create a variable to insert the function & so the random quote will refresh when you refresh the page
    let displayQuote = getRandomQuote();
    console.log("Server is running on port 3000.")
    response.writeHead(200, { 
        "Content-type": "text/plain"
    });
    //Sending the function getRandomQuote
    response.write(displayQuote);
    response.end(); 
}).listen(3000);
