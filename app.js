const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

//const server = http.createServer();

app.get("/", (req, res) => {
  res.send(`<h1>Server is running!</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
