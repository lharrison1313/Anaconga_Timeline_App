//to start database use command: mongod -dbpath C:\Users\Kyle\AnacongaDB
//mongodb
const mongo = require("mongodb");
const assert = require("assert")
const dburl = "mongodb://localhost:27017"

//express HTTP server
const express = require("express");
const { send } = require("process");
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
    db.db("Anaconga").collection("timelines").insertOne(timeline, null, (error) =>{ 
      assert.strictEqual(null,error);
      timeline_info["timeline_id"] = new mongo.ObjectID(res.insertedId);
      //creating event
      db.db("Anaconga").collection("events").insertOne(timeline_info, null, (error)=>{
        assert.strictEqual(null, error);
        res.send();
        db.close();
      });
    });
  });

});

app.post("/add-timeline-item", (req,res)=>{

  let id = req.body.id;
  let item = req.body.item;
  item["key"] = new mongo.ObjectID();

  let filter = {"_id": new mongo.ObjectId(id)}
  let updateDoc = {
    $push:{
      timeline: item
    }
  }

  mongo.connect(dburl, (error,db) =>{

    assert.strictEqual(null,error);

    db.db("Anaconga").collection("timelines").updateOne(filter, updateDoc, null, (error) =>{
      assert.strictEqual(null, error);
      res.send()
      db.close()
    });

  });
  
});

app.post("/update-timeline-item", (req,res) => {
  let tid = req.body.tid;
  let iid = req.body.iid;
  let item = req.body.item;

  let filter = {
    "_id": new mongo.ObjectId(tid),
    "timeline.key": new mongo.ObjectId(iid)
  }
  let updateDoc = {
    $set:{
      "timeline.$.title": item.title,
      "timeline.$.body": item.body,
      "timeline.$.image": item.image,
      "timeline.$.time": item.time
    }
  }

  mongo.connect(dburl,(error,db) =>{
    assert.strictEqual(null,error);
    db.db("Anaconga").collection("timelines").updateOne(filter,updateDoc,null,(error)=>{
      assert.strictEqual(null,error);
      res.send();
      db.close();
    })
  })

})

app.delete("/delete-timeline-item", (req,res) =>{
  let tid = req.body.tid;
  let iid = req.body.iid;

  console.log(tid);
  console.log(iid);

  let filter = {
    "_id": new mongo.ObjectId(tid)
  }
  let updateDoc = {
    $pull:{
      timeline:{
        "key": new mongo.ObjectId(iid)
      }
    }
  }

  mongo.connect(dburl, (error, db)=>{
    assert.strictEqual(null,error)
    db.db("Anaconga").collection("timelines").updateOne(filter,updateDoc,null,(error)=>{
      assert.strictEqual(null,error);
      res.send();
      db.close();
    })
  })
})


app.delete("/delete-timeline", (req,res) =>{

});

app.listen(port,()=>{
  console.log("http server started on port: " + port);
});




