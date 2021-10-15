const router = require("express").Router();
const connectDB = require("../Services/MDBConnector");
const task = require("../Services/DataSchema");

const task1 = new task({
  taskname: "Welcome to your todolist!",
});

const task2 = new task({
  taskname: "Hit the + button to add a new item.",
});

const task3 = new task({
  taskname: "<-- Hit this to delete an item.",
});

const defaultItems = [task1, task2, task3];

router.get("/", (req, res) => {
  // Get found Items
  connectDB();

  task.find({}, (err1, itemfound) => {
    if (err1) {
      console.error("Something went wrong with fetching tasks" + err1);
    }
    if (itemfound.length === 0) {
      task.insertMany(defaultItems, function (err) {
        if (err) {
          console.error("Not able to fetch tasks" + err);
        } else {
          console.log("Successfully savevd default items to DB.");
        }
      });
      res.redirect("/");
    } else {
      console.log("successfully fetched tasks");
      //   Display items using ejs
      // console.log(itemfound);
      return res.render("testtemp", {
        listTitle: "Today",
        newListItems: itemfound,
      });
    }
  });
});

module.exports = router;
