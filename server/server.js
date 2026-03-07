const express = require("express");
const app = express();
const PORT = 3000;

app.use("/", (req, res) => {
  res.status(200).json({ message: "this is root" });
});

app.listen(PORT, () => {
  console.log("server is conected PORT on", PORT);
});