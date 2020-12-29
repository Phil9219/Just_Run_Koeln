const { collection } = require("./database");

async function postRun(runName, distance, startDate, pace) {
  const newrun = await collection("rundata").insertOne({
    runName,
    distance,
    startDate,
    pace,
  });

  return newrun;
}

exports.postRun = postRun;
