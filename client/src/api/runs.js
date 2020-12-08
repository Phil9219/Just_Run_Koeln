export async function getRuns() {
  const runs = await fetch("http://localhost:5000/runs");
  return runs;
}
