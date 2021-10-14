const router = require("express").Router();
const connectDB = require("./Services/MDBConnector");
const task = require("../Services/DataSchema");

router.post("/", (req, res) => {
  connectDB();
  var uid = req.body.userid;
  var Task = req.body.task;

  const taskblock = new task({
    taskname: Task,
    userid: uid,
  });

  task.insertOne(taskblock, (err) => {
    if (err) {
      console.error("task not added to the database " + err);
    } else {
      console.log("task added succesfully");
      return res.status(200).send({ success: true });
    }
  });
});

module.exports = router;
