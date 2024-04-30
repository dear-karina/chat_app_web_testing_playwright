const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "playwright-report", "index.html");
  res.sendFile(filePath);
});
// change to 80 to expose through HTTP
app.listen(80, () => {
  console.log("Server running on port 80");
});
