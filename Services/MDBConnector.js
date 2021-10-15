const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

function connectDB() {
  // Database Connection

  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;

  connection
    .once("open", () => {
      console.log("Database connected Successfully");
    })
    .on("error", (err) => {
      console.error("Connection failed " + err);
    });
}

module.exports = connectDB;
