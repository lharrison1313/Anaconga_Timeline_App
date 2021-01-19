//to start database use command: mongod -dbpath C:\Users\Kyle\AnacongaDB
//mongodb
const mongo = require("mongodb");
const assert = require("assert")
const dburl = "mongodb://localhost:27017"

//express HTTP server
const express = require("express");
const app = express();
const port = 3001;


app.get("/events",(req,res)=>{

  mongo.connect(dburl, (error,db) => {
    assert.strictEqual(null,error);
    db.db("Anaconga").collection("events").find({}).toArray()
    .then( (data) => res.json(data));
  });
  
});

app.get("/get-timeline",(req,res) =>{

  let id = req.query.id;
  mongo.connect(dburl,(error,db)=>{
    assert.strictEqual(null,error);
    db.db("Anaconga").collection("timelines").findOne({"_id": new mongo.ObjectId(id)})
    .then( (data) =>  res.json(data));
  });

});

app.post("/create-timeline", (req,res) =>{

});

app.post("/update-timeline", (req,res)=>{

});

app.listen(port,()=>{
  console.log("http server started on port: " + port);
});




