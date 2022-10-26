const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

const catgories = require("./data/catgory.json");
const courseDetails = require("./data/courseDetails.json");

app.get("/", (req, res) => {
  res.send("Server Side is Running on this port");
});

app.get("/catgories", (req, res) => {
  res.json(catgories);
})

app.get('/category/:id', (req, res) => { 
  const id = req.params.id;
  const getSingleItem = courseDetails.find(course => course.id == id)
  res.send(getSingleItem)
})

app.listen(port, () => {
  console.log("Server Side is Running on Port : " + port);
});
