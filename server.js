const express = require("express");
const path = require("path");
// const jsonServer = require("json-server");
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

const { connect } = require("./lib/database");
const app = express();
const port = process.env.PORT || 3001;

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

// app.use(middlewares);
// app.use("/api", router);

// Handle React routing, return all requests to React app
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
