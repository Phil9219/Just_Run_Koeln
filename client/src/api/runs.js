export async function getRuns() {
  const response = await fetch("/api/runs/");
  const runs = await response.json();
  return runs;
}
export async function getRunsById(id) {
  const response = await fetch(`/api/runs/${id}`);
  const runsId = await response.json();
  return runsId;
}

// export async function getFavRuns(isFavorite) {
//   const response = await fetch(`/api/runs/${isFavorite}`);
//   const favRuns = await response.json();
//   return favRuns;
// }
// export async function patchtFavRuns(isFavorite) {
//   const response = await fetch(`/api/runs/${isFavorite}`, {
//     method: "PATCH",
//     body: JSON.stringify(isFavorite),
//     headers: { "Content-Type": "application/json" },
//   });
//   const favRuns = await response.json();
//   return favRuns;
// }

export async function postRun(run) {
  console.log(run);
  const response = await fetch("/api/runs/", {
    method: "POST",
    body: JSON.stringify(run),
    headers: { "Content-Type": "application/json" },
  });
  const newRun = await response.json();
  console.log(newRun);
  return newRun;
}

export async function searchForKm(distance) {
  const response = await fetch(`/api/runs/distance/${distance}/`);
  const runsByKm = await response.json();
  return runsByKm;
}
