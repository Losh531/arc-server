

// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
app.get("/arc-sw.js", (request, response) => {
  response.sendFile(__dirname + "/arc-sw.js");
});


// listen for requests :)
const listener = app.listen(80, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
