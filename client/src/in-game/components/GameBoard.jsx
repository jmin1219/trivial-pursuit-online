import "../styles/GameBoard.css";
import { useState, useMemo } from "react";
import { COLORS } from "../../../../shared/constants/colors";
import { useGameContext } from "../../context/GameContext";

export default function GameBoard() {
  const { gameState } = useGameContext();
  const [availableSpaces, setAvailableSpaces] = useState([]);

  const spokes = useMemo(() => Array.from({ length: 6 }), []); // 6 spokes
  const outerNonWedge = useMemo(() => Array.from({ length: 36 }), []); // 36 non-wedge spaces on the outer wheel (6 groups of 6 non-wedge spaces)
  const wedge = useMemo(() => Array.from({ length: 6 }), []); // 6 wedge spaces on the outer wheel

  function hexagonPoints(cx, cy, r) {
    let points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i + (30 * Math.PI) / 180;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  }

  function trapezoidPoints(cx, cy, r1, r2, angle1, angle2) {
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

  function getCentroid(points) {
    const coords = points
      .split(" ")
      .map((point) => point.split(",").map(Number));
    const x = coords.reduce((sum, [x]) => sum + x, 0) / coords.length;
    const y = coords.reduce((sum, [, y]) => sum + y, 0) / coords.length;
    return { x, y };
  }

  function onSpaceClick(spaceId) {
    console.log(spaceId);
  }

  // TODO: function calculateAvailableSpaces(currentPosition, diceValue) {}
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <svg
        viewBox="-25 -25 350 350"
        className="w-full h-full max-w-full max-h-full"
      >
        {/* Outer circle (Wheel) - Non-Wedge & Roll-Again Spaces */}
        {outerNonWedge.map((_, index) => {
          const groupIndex = Math.floor(index / 6);
          const spaceIndex = index % 6;
          const angle1 =
            (groupIndex * 60 + spaceIndex * 7.5 + 7.5) * (Math.PI / 180);
          const angle2 =
            (groupIndex * 60 + (spaceIndex + 1) * 7.5 + 7.5) * (Math.PI / 180);
          const points = trapezoidPoints(150, 150, 140, 170, angle1, angle2);
          const centroid = getCentroid(points);
          const rollAgain = (index + 2) % 3 === 0;
          const angle =
            (groupIndex * 60 + spaceIndex * 7.5 + 11.25) * (Math.PI / 180);

          const isAvailable = availableSpaces.includes(`O${index}`);

          if (!rollAgain) {
            return (
              // Outer circle - Non-Wedge Spaces
              <g
                key={index}
                className={`space outer-nonwedge border ${
                  gameState.isStarted ? (isAvailable ? "highlight" : "dim") : ""
                }`}
                id={`O${index}`}
                onClick={() => onSpaceClick(`O${index}`)}
              >
                <polygon points={points} stroke="white" />
                <text
                  x={centroid.x}
                  y={centroid.y}
                  fontSize="8"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="white"
                >
                  {`O${index}`}
                </text>
                {gameState.players
                  .filter((player) => player.position === `O${index}`)
                  .map((player, i, arr) => {
                    const offset = (i - (arr.length - 1) / 2) * 10;
                    const angleRad = (groupIndex * 60 * Math.PI) / 180;
                    const offsetX = offset * Math.cos(angleRad);
                    const offsetY = offset * Math.sin(angleRad);
                    return (
                      <g key={player.name}>
                        <circle
                          cx={centroid.x - offsetX}
                          cy={centroid.y - offsetY}
                          r={8}
                          fill={COLORS[player.color].hex}
                          stroke="black"
                          strokeWidth={2}
                        />
                        <text
                          x={centroid.x - offsetX}
                          y={centroid.y - offsetY}
                          fontSize="10"
                          fontWeight={600}
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          fill="white"
                        >
                          {player.name.charAt(0).toUpperCase()}
                        </text>
                      </g>
                    );
                  })}
              </g>
            );
          } else {
            // Outer circle - Roll Again Spaces
            return (
              <g
                key={index}
                className={`space roll-again ${
                  gameState.isStarted ? (isAvailable ? "highlight" : "dim") : ""
                }`}
                id={`O${index}`}
                onClick={() => onSpaceClick("roll-again")}
              >
                <polygon points={points} stroke="white" fill="lightgray" />
                <text
                  x={centroid.x}
                  y={centroid.y}
                  fontSize="7"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="black"
                  transform={`rotate(${angle * (180 / Math.PI) - 90}, ${
                    centroid.x
                  }, ${centroid.y})`}
                >
                  <tspan x={centroid.x} dy="-0.1em">
                    Roll
                  </tspan>
                  <tspan x={centroid.x} dy="1em">
                    Again
                  </tspan>
                </text>
                {gameState.players.map((player) =>
                  player.position === `O${index}` ? (
                    <g key={player.name}>
                      <circle
                        cx={centroid.x}
                        cy={centroid.y}
                        r={10}
                        fill={COLORS[player.color].hex}
                        stroke="black"
                        strokeWidth={2}
                      />
                      <text
                        x={centroid.x}
                        y={centroid.y}
                        fontSize="10"
                        fontWeight={600}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fill="white"
                      >
                        {player.name.charAt(0).toUpperCase()}
                      </text>
                    </g>
                  ) : null
                )}
              </g>
            );
          }
        })}
        {/* Outer circle (Wheel) - Wedge Spaces */}
        {wedge.map((_, index) => {
          const angle1 = (index * 60 - 7.5) * (Math.PI / 180);
          const angle2 = (index * 60 + 7.5) * (Math.PI / 180);
          const points = trapezoidPoints(150, 150, 140, 170, angle1, angle2);
          const centroid = getCentroid(points);
          const isAvailable = availableSpaces.includes(`W${index}`);
          return (
            <g
              key={index}
              className={`space outer-wedge ${
                gameState.isStarted ? (isAvailable ? "highlight" : "dim") : ""
              }`}
              id={`W${index}`}
              onClick={() => onSpaceClick(`W${index}`)}
            >
              <polygon points={points} stroke="white" />
              <text
                x={centroid.x}
                y={centroid.y}
                fill="white"
                fontSize="8"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                W{index}
              </text>
              {gameState.players
                .filter((player) => player.position === `W${index}`)
                .map((player, i, arr) => {
                  const offset = (i - (arr.length - 1) / 2) * 10;
                  const angleRad = ((index * 60 + 90) * Math.PI) / 180;
                  const offsetX = offset * Math.cos(angleRad);
                  const offsetY = offset * Math.sin(angleRad);
                  return (
                    <g key={player.name}>
                      <circle
                        cx={centroid.x - offsetX}
                        cy={centroid.y - offsetY}
                        r={8}
                        fill={COLORS[player.color].hex}
                        stroke="black"
                        strokeWidth={2}
                      />
                      <text
                        x={centroid.x - offsetX}
                        y={centroid.y - offsetY}
                        fontSize="10"
                        fontWeight={600}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fill="white"
                      >
                        {player.name.charAt(0).toUpperCase()}
                      </text>
                    </g>
                  );
                })}
            </g>
          );
        })}

        {/* Central Hub */}
        <g
          className={`space central-hub ${
            gameState.isStarted
              ? availableSpaces.includes("central-hub")
                ? "highlight"
                : "dim"
              : ""
          }`}
          id="central-hub"
          onClick={() => onSpaceClick("central-hub")}
        >
          <polygon points={hexagonPoints(150, 150, 35)} fill="#002f58" />
          <image
            href="/src/assets/trivial-central-logo.png"
            height={50}
            width={50}
            x={125.2}
            y={125}
          />
          {gameState.players
            .filter((player) => player.position === "central-hub")
            .map((player, i, arr) => {
              const angle = (i / arr.length) * 2 * Math.PI;
              const radius = arr.length > 1 ? 15 : 10;
              const offsetX = radius * Math.cos(angle);
              const offsetY = radius * Math.sin(angle);
              return (
                <g key={player.name}>
                  <circle
                    cx={150 + offsetX}
                    cy={150 + offsetY}
                    r={radius > 10 ? 10 : radius}
                    fill={COLORS[player.color].hex}
                    stroke="black"
                    strokeWidth={2}
                  />
                  <text
                    x={150 + offsetX}
                    y={150 + offsetY}
                    fontSize="10"
                    fontWeight={600}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="white"
                  >
                    {player.name.charAt(0).toUpperCase()}
                  </text>
                </g>
              );
            })}
        </g>

        {/* Spoke Spaces */}
        {spokes.map((_, index) => {
          const angle = (360 / spokes.length) * index;
          const x = 150 + 41.55 * Math.cos((angle * Math.PI) / 180);
          const y = 150 + 41.55 * Math.sin((angle * Math.PI) / 180);
          const spokeSpaces = Array.from({ length: 5 }); // 5 spokeSpaces per spoke
          return spokeSpaces.map((_, squareIndex) => {
            const width = 20;
            const height = 34;
            const gap = 1.5;
            const xOffset =
              (width + gap) * squareIndex * Math.cos((angle * Math.PI) / 180);
            const yOffset =
              (width + gap) * squareIndex * Math.sin((angle * Math.PI) / 180);
            const rectX = x + xOffset - width / 2;
            const rectY = y + yOffset - height / 2;
            const isAvailable = availableSpaces.includes(
              `S${index}-${squareIndex}`
            );
            return (
              <g
                key={`${index}-${squareIndex}`}
                className={`space spoke ${
                  gameState.isStarted ? (isAvailable ? "highlight" : "dim") : ""
                }`}
                id={`S${index}-${squareIndex}`}
                onClick={() => onSpaceClick(`S${index}-${squareIndex}`)}
              >
                <rect
                  x={x + xOffset - width / 2}
                  y={y + yOffset - height / 2}
                  width={width}
                  height={height}
                  transform={`rotate(${angle}, ${x + xOffset}, ${y + yOffset})`}
                  stroke="white"
                />
                <text
                  x={rectX + width / 2}
                  y={rectY + height / 2}
                  fontSize="8"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="white"
                >
                  S{index}-{squareIndex}
                </text>
                {gameState.players
                  .filter(
                    (player) => player.position === `S${index}-${squareIndex}`
                  )
                  .map((player, i, arr) => {
                    const offset = (i - (arr.length - 1) / 2) * 10;
                    const angleRad = ((angle + 90) * Math.PI) / 180;
                    const offsetX = offset * Math.cos(angleRad);
                    const offsetY = offset * Math.sin(angleRad);
                    return (
                      <g key={player.name}>
                        <circle
                          cx={rectX + width / 2 + offsetX}
                          cy={rectY + height / 2 + offsetY}
                          r={8}
                          fill={COLORS[player.color].hex}
                          stroke="black"
                          strokeWidth={1.5}
                        />
                        <text
                          x={rectX + width / 2 + offsetX}
                          y={rectY + height / 2 + offsetY}
                          fontSize="10"
                          fontWeight={600}
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          fill="white"
                        >
                          {player.name.charAt(0).toUpperCase()}
                        </text>
                      </g>
                    );
                  })}
              </g>
            );
          });
        })}
      </svg>
    </div>
  );
}
