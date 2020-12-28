const express = require("express");
const path = require("path");
require("dotenv").config();

const { getRuns } = require("./lib/getRuns");

const { connect } = require("./lib/database");
const app = express();
const port = process.env.PORT || 3001;

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

// Handle React routing, return all requests to React app

app.get("/api/runs", async (req, res) => {
  try {
    const allRuns = await getRuns();
    res.json(allRuns);
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
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

run();
