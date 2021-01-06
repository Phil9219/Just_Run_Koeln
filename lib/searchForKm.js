const { collection } = require("./database");

async function searchForKm(km) {
  const runs = await collection("rundata")
    .find({ distance: { $lte: parseFloat(km) } })
    .sort({ distance: -1 })
    .toArray();

  if (runs.length === 0) {
    console.log("No Runs Available");
    return null;
  }
  return runs;
}

exports.searchForKm = searchForKm;
