const { collection } = require("./database");

async function searchForKm(distance) {
  const runs = await collection("rundata").findOne({ distance: distance });
  if (!runs) {
    console.log("No Runs Available");
    return null;
  }
  return runs;
}

exports.serachForKm = searchForKm;
