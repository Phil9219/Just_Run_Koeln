const { collection } = require("./database");

async function postRun(run) {
  const newrun = await collection("rundata").insertOne(run);

  return newrun;
}

exports.postRun = postRun;
