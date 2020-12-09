export async function getRuns() {
  const response = await fetch("http://localhost:5000/runs");
  const runs = response.json();
  return runs;
}
export async function getRunsById(id) {
  const response = await fetch(`http://localhost:5000/runs/${id}`);
  const runsId = response.json();
  return runsId;
}
