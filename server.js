const express = require("express");
const Unsplash = require("unsplash-js").default;
const toJson = require("unsplash-js").toJson;
const fetch = require("node-fetch");

global.fetch = fetch;

const app = express();
app.use(express.json());

// Instantiate the Unsplash object and configure it with our
// application ID and secret from the .env file.
const unsplash = new Unsplash({
  applicationId: process.env.APP_ACCESS_KEY,
  secret: process.env.APP_SECRET
});

app.use(express.static("public"));

// Serve the HTML file when someone visits the project.
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// When someone posts to the /fetch-photo endpoint, we send it off
// to the Unsplash API, then return it to the client.
app.post("/fetch-photo", function(request, response) {
  const query = request.body.query;
  
  unsplash.photos
      .getRandomPhoto(query ? { query: query } : "")
      .then(toJson)
      .then(json => {
        json.appName = process.env.PROJECT_NAME;
        response.status(200).send({ data: json });
      })
      .catch(error => {
        response.status(400).send({ error: error });
      });
});

// Start the server's listener!
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
