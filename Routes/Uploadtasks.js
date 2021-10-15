const router = require("express").Router();
const connectDB = require("../Services/MDBConnector");
const task = require("../Services/DataSchema");

router.post("/", (req, res) => {
  connectDB();

  var listName = req.body.list;
  var Task = req.body.newItem;

  const taskblock = new task({
    taskname: Task,
  });

  if (listName === "Today") {
    taskblock.save();
    console.log("Saved Successfully");
    res.redirect("/task");
  }
});

module.exports = router;
