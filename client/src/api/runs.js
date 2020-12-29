export async function getRuns() {
  const response = await fetch("/api/runs");
  const runs = await response.json();
  return runs;
}
export async function getRunsById(id) {
  const response = await fetch(`/api/runs/${id}`);
  const runsId = await response.json();
  return runsId;
}

export async function postRun(run) {
  await fetch("/api/runs/", {
    method: "POST",
    body: JSON.stringify(run),
    headers: { "Content-Type": "application/json" },
  });
}

export async function searchForKm(distance) {
  const response = await fetch(`/api/runs?distance=${distance}`);
  const runsByKm = await response.json();
  return runsByKm;
}
