const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Public"));
app.use(express.json());

app.set("views", path.join(__dirname, "/Views"));
app.set("view engine", "ejs");

app.use("/upload", require("./Routes/Uploadtasks"));
app.use("/", require("./Routes/Gettasks"));
app.use("/delete", require("./Routes/Deletetask"));

app.listen(PORT, () => {
  console.log(`Listning on port ${PORT}`);
});
