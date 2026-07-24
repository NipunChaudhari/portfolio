// Fixed, hand-placed node graph (not Math.random()) so server and client
// render identically — avoids hydration mismatches. Pulses via a CSS
// keyframe defined in globals.css, which also respects prefers-reduced-motion.
const nodes = [
  { x: 60, y: 80 }, { x: 180, y: 40 }, { x: 300, y: 120 }, { x: 420, y: 60 },
  { x: 540, y: 140 }, { x: 660, y: 70 }, { x: 740, y: 180 }, { x: 100, y: 260 },
  { x: 260, y: 300 }, { x: 400, y: 260 }, { x: 560, y: 320 }, { x: 700, y: 300 },
  { x: 180, y: 480 }, { x: 380, y: 520 }, { x: 580, y: 480 }, { x: 720, y: 520 },
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [0, 7], [1, 8], [2, 9], [3, 10], [4, 11], [5, 11],
  [7, 8], [8, 9], [9, 10], [10, 11],
  [7, 12], [8, 13], [9, 13], [10, 14], [11, 15],
  [12, 13], [13, 14], [14, 15],
];

export function NeuralBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#edge-grad)"
          strokeWidth={1}
          strokeOpacity={0.25}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={3.5}
          fill="#8B5CF6"
          className="animate-node-pulse"
          style={{ animationDelay: `${(i % 7) * 0.35}s` }}
        />
      ))}
    </svg>
  );
}
