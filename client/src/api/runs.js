export async function getRuns() {
  const response = await fetch("http://localhost:5000/runs");
  const runs = response.json();
  return runs;
}
