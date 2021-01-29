//to start database use command: mongod -dbpath C:\Users\Kyle\AnacongaDB
//mongodb
const mongo = require("mongodb");
const assert = require("assert")
const dburl = "mongodb://localhost:27017"

//express HTTP server
const express = require("express");
const app = express();
app.use(express.json());
const port = 3001;


app.get("/get-events",(req,res)=>{

  mongo.connect(dburl, (error,db) => {
    assert.strictEqual(null,error);
    db.db("Anaconga").collection("events").find({}).toArray()
    .then( (data) => {
      res.json(data)
      db.close()
    });
  });
  
});

app.get("/get-timeline",(req,res) =>{

  let id = req.query.id;

  mongo.connect(dburl,(error,db)=>{
    assert.strictEqual(null,error);
    db.db("Anaconga").collection("timelines").findOne({"_id": new mongo.ObjectId(id)})
    .then( (data) => {
      res.json(data);
      db.close();
    });
  });

});

app.post("/create-timeline", (req,res) =>{

  let timeline_info = req.body;
  let timeline = {timeline: []};

  mongo.connect(dburl,(error,db)=>{
    assert.strictEqual(null,error);
    //creating timeline
    db.db("Anaconga").collection("timelines").insertOne(timeline, null, (error,res) =>{ 
      assert.strictEqual(null,error);
      timeline_info["timeline_id"] = new mongo.ObjectID(res.insertedId);
      //creating event
      db.db("Anaconga").collection("events").insertOne(timeline_info, null, (error,res)=>{
        assert.strictEqual(null, error);
        res.send();
        db.close();
      });
    });
  });

});

app.post("/update-timeline-items", (req,res)=>{

  let id = req.body.id;
  let item = req.body.item
  item["key"] = new mongo.ObjectID()
  let updateDoc = {
    $push:{
      timeline: item
    }
  }

  mongo.connect(dburl, (error,db) =>{

    assert.strictEqual(null,error);

    db.db("Anaconga").collection("timelines").updateOne({"_id": new mongo.ObjectId(id)}, updateDoc, null, (error) =>{
      assert.strictEqual(null, error);
      res.send()
      db.close()
    });

  });
  
});

app.delete("/delete-timeline", (req,res) =>{

});

app.listen(port,()=>{
  console.log("http server started on port: " + port);
});




