const router = require("express").Router();
const connectDB = require("./Services/MDBConnector");
const task = require("../Services/DataSchema");

router.get("/", (req, res) => {
  connectDB();

  task.find({}, (err, itemfound) => {
    if (err) {
      console.error("Not able to fetch tasks" + err);
    } else {
      console.log("successfully fetched tasks");
      //   Display items using ejs
      console.log(itemfound);
      res.status(200).send({ sucess: true });
    }
  });
});

module.exports = router;
