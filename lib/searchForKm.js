const { collection } = require("./database");

async function searchForKm(distance) {
  console.log(distance);
  const runs = await collection("rundata")
    // .find({ distance: { $lte: distance } })
    .find({ distance: distance })
    .toArray();
  if (!runs) {
    console.log("No Runs Available");
    return null;
  }
  return runs;
}

exports.searchForKm = searchForKm;
