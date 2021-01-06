const { collection } = require("./database");

async function getRuns() {
  const runs = await collection("rundata")
    .find({})
    .sort({ startDate: 1 })
    .toArray();

  if (!runs) {
    console.log("No Runs Available");
    return null;
  }
  return runs;
}

exports.getRuns = getRuns;
