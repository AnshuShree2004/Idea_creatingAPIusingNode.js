const express = require("express");


const app = express();

app.use(myMiddleWare);

function myMiddleWare (req,res,next){
    console.log('Inside the middle ware I created')
    next();//it will pass on the control to the next step
}

//stitch routes to server
require("./routes/idea.routes")(app)

// starting server
app.listen(8080, () =>{
    console.log("Server started");
})