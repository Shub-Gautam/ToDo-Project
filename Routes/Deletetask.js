const router = require("express").Router();
const connectDB = require("./Services/MDBConnector");
const task = require("../Services/DataSchema");

router.post("/", (req, res) => {
  connectDB();

  var taskid = req.body.checkbox;

  task.findOneAndRemove(taskid, (err) => {
    if (err) {
      console.error("error while removing task" + err);
    } else {
      console.log("Successfully removed 1 item");
      return res.status(200).send({ success: true });
    }
  });
});

module.exports = router;
