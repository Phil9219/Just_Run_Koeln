require("dotenv").config();

const express = require("express");

const path = require("path");

const { getRuns } = require("./lib/getRuns");
const { postRun } = require("./lib/postRun");
const { getRunsById } = require("./lib/getRunsbyId");
const { searchForKm } = require("./lib/searchForKm");
// const { getFavRuns } = require("./lib/getFavRuns");
const { connect } = require("./lib/database");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;

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
app.get("/api/runs/:_id/", async (req, res) => {
  const { _id } = req.params;
  try {
    const allRuns = await getRunsById(_id);
    res.json(allRuns);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unexpected server error");
  }
});

// app.get("/api/runs/:isFavorite/", async (req, res) => {
//   const { isFavorite } = req.params;
//   try {
//     const favRuns = await getFavRuns(isFavorite);
//     res.json(favRuns);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Unexpected server error");
//   }
// });

// app.patch("/api/runs/:isFavorite/", async (req, res) => {
//   try {
//     const addFav = await patchFavRuns(isFavorite);
//     const newRunFav = insertResult.insertedFav;
//     res.status(200).json(newRunFav);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Unexpected server error");
//   }
// });

app.post("/api/runs/", async (req, res) => {
  const run = req.body;

  try {
    const insertResult = await postRun(run);
    const newRunId = insertResult.insertedId;
    res.status(200).json(newRunId);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unexpected server error");
  }
});

app.get("/api/runs/distance/:distance/", async (req, res) => {
  const { distance } = req.params;
  try {
    const allRuns = await searchForKm(distance);
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

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}
run();
