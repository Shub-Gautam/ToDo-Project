const router = require("express").Router();
const connectDB = require("../Services/MDBConnector");
const task = require("../Services/DataSchema");

router.post("/", (req, res) => {
  connectDB();

  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    task.findByIdAndRemove(checkedItemId, function (err) {
      if (!err) {
        console.log("Successfully deleted checked item.");
        res.redirect("/");
      } else {
        console.error("error while removing task" + err);
      }
    });
  } else {
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemId } } },
      function (err, foundList) {
        if (!err) {
          res.redirect("/" + listName);
        }
      }
    );
  }
});

module.exports = router;
