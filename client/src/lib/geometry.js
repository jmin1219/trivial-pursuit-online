export function hexagonPoints(cx, cy, r) {
  let points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i + (30 * Math.PI) / 180;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points.push(`${x},${y}`);
  }
  return points.join(" ");
}

export function trapezoidPoints(cx, cy, r1, r2, angle1, angle2) {
  const x1 = cx + r1 * Math.cos(angle1);
  const y1 = cx + r1 * Math.sin(angle1);
  const x2 = cx + r1 * Math.cos(angle2);
  const y2 = cx + r1 * Math.sin(angle2);
  const x3 = cx + r2 * Math.cos(angle2);
  const y3 = cy + r2 * Math.sin(angle2);
  const x4 = cx + r2 * Math.cos(angle1);
  const y4 = cy + r2 * Math.sin(angle1);
  return `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`;
}

export function getCentroid(points) {
  const coords = points.split(" ").map((point) => point.split(",").map(Number));
  const x = coords.reduce((sum, [x]) => sum + x, 0) / coords.length;
  const y = coords.reduce((sum, [, y]) => sum + y, 0) / coords.length;
  return { x, y };
}
