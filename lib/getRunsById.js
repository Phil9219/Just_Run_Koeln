const { collection } = require("./database");
const { ObjectId } = require("mongodb");
async function getRunsById(_id) {
  const objectId = new ObjectId.createFromHexString(_id);
  const runs = await collection("rundata").findOne({ _id: objectId });

  if (!runs) {
    console.log("No Runs Available");
    return null;
  }
  return runs;
}

exports.getRunsById = getRunsById;
