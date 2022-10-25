const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Side is Running on this port");
});

app.listen(port, () => {
  console.log("Server Side is Running on Port : " + port);
});
