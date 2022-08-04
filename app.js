const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postsRoute = require("./routes/posts");
const initializeDb = require("./db/initialize-db");
//Routes
app.use(bodyParser.json());
app.use("/posts", postsRoute);

// app.get("/", (req, res) => res.send("we are on home"));

//connect to db
// initializeDb();
mongoose.connect("mongodb://localhost:27017/mydb", () =>
  console.log("connected to db")
);

// How to listen to the server?

app.listen(3000);
