require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const { getRuns } = require("./lib/getRuns");
const { postRun } = require("./lib/postRun");

const { connect } = require("./lib/database");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

// Handle React routing, return all requests to React app

app.get("/api/runs/", async (req, res) => {
  try {
    const allRuns = await getRuns();
    res.json(allRuns);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unexpected server error");
  }
});

app.post("/api/runs/", async (req, res) => {
  const run = req.body;
  console.log(req.body);

  try {
    await postRun(run);
    res.send("Update sucessfull");
  } catch (error) {
    console.error(error);
    res.status(500).send("Unexpected server error");
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

async function run() {
  console.log("Connecting to database...");
  await connect(process.env.DB_USER_PASSWORD, process.env.DB_NAME);
  console.log("Connected to database 🎉");

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}
run();
