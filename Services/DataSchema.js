const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskschema = new Schema(
  {
    taskname: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", taskschema);
