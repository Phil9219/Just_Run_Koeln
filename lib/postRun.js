const { collection } = require("./database");

async function postRun({ runName, distance, startDate, pace }) {
  const newrun = await collection("rundata").insertOne({
    runName: runName,
    distance: distance,
    startDate: startDate,
    pace: pace,
  });

  return newrun;
}

exports.postRun = postRun;
