//import the node modules
//require() is the predefined function used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");



//rest object
//rest object used to create the rest api calls
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest api calls



//enable the cors policy
app.use(cors());


//set the MIME Type
app.use(express.json());


//create the mongo client
const ashokIT = mongodb.MongoClient;


//create the get request
app.get("/products/:category",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/angspa?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("angspa");
            db.collection(req.params.category).find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    });
});



//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});




