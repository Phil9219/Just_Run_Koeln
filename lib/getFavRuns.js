// const { collection } = require("./database");

// async function getFavRuns() {
//   const runs = await collection("rundata")
//     .find({ isFavorite: true })
//     .sort({ startDate: 1 })
//     .toArray();

//   if (!runs) {
//     console.log("No Runs Available");
//     return null;
//   }
//   return runs;
// }

// exports.getFavRuns = getFavRuns;
