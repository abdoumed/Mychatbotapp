const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();

app.set("port", (process.env.PORT || 8000));

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.get("/webhook", function (req, res) {
    const PAGE_VERIFY_TOKEN = "mychatbotapp12345";
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  if (token === PAGE_VERIFY_TOKEN){
  if (mode === "subscribe" && token === config.verifyToken) {
    res.status(200).send(challenge);
}
 else {
    res.sendStatus(403);
}

});

app.get("/", function (req, res) {
    res.send("hey !! I'm just a chatbot app.");
});

app.listen(app.get("port"), function () {
    console.log("Server is running and listening on port " + app.get("port"));
});
