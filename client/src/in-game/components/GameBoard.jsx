import React, { useEffect, useMemo, useState } from "react";
import { CircleHelpIcon } from "lucide-react";
import { COLORS } from "../../../constants/colors";
import { SPACES } from "../../../constants/spaces";
import { useGameContext } from "../../context/GameContext";
import { hexagonPoints, trapezoidPoints, getCentroid } from "@/lib/geometry";
import TriviaCard from "./TriviaCard";
import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GameRulesCard from "./GameRulesCard";
import centralHubLogo from "@/assets/trivial-central-logo.png";

export default function GameBoard() {
  const {
    gameState,
    movePlayer,
    openColorPicker,
    setOpenColorPicker,
    getCHQuestion,
    getFinalQuestionCategory,
    categoryPickerPrompt,
    setCategoryPickerPrompt,
    openGameRules,
    setOpenGameRules,
  } = useGameContext();
  const [reachableSpaces, setReachableSpaces] = useState([]);
  const playerData = JSON.parse(localStorage.getItem("player-data"));

  const spokes = useMemo(() => Array.from({ length: 6 }), []); // 6 spokes
  const outerNonWedge = useMemo(() => Array.from({ length: 36 }), []); // 36 non-wedge spaces on the outer wheel (6 groups of 6 non-wedge spaces)
  const wedge = useMemo(() => Array.from({ length: 6 }), []); // 6 wedge spaces on the outer wheel

  useEffect(() => {
    if (gameState.isStarted && gameState.reachableSpaces) {
      setReachableSpaces(gameState.reachableSpaces);
    }
  }, [gameState]);

  const handleSpaceClick = (spaceId) => {
    if (!reachableSpaces.includes(spaceId)) {
      return alert("You can't move there.");
    } else if (
      gameState.players[gameState.currentTurnIndex].name !== playerData.name
    ) {
      return alert("It's not your turn to move.");
    } else if (spaceId === "CH") {
      if (gameState.players[gameState.currentTurnIndex].wedges.length !== 6) {
        {
          setOpenColorPicker(true);
          setCategoryPickerPrompt(
            "On the Central Hub, you get to choose the category of your question."
          );
        }
      } else {
        getFinalQuestionCategory(gameState.gameId);
      }
    } else {
      movePlayer(gameState.gameId, spaceId);
    }
    setReachableSpaces([]);
    document.querySelectorAll("rect", "polygon").forEach((element) => {
      if (element.id === spaceId) {
        element.style.strokeWidth = "2";
      }
    });
  };

  const getColorClass = (spaceId) => {
    const colorName = SPACES[spaceId].color;
    if (colorName) {
      return `${COLORS[colorName].hex}`;
    }
    return "";
  };

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <svg
        viewBox="-25 -25 350 350"
        className="w-full h-full max-w-full max-h-full"
      >
        {/* ------------------------------ Outer circle (Wheel) - Non-Wedge & Roll-Again Spaces ------------------------------ */}
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

          const isAvailable = reachableSpaces.includes(`O${index}`);

          if (!rollAgain) {
            return (
              <React.Fragment key={`O${index}`}>
                {/* Outer circle - Non-Wedge Spaces */}
                <g key={index} id={`O${index}`}>
                  <polygon
                    points={points}
                    stroke={isAvailable ? "#002f58" : "white"}
                    strokeWidth={isAvailable ? 2 : 1}
                    fill={getColorClass(`O${index}`)}
                    style={{
                      opacity: gameState.isStarted
                        ? isAvailable
                          ? 1
                          : 0.3
                        : 1,
                      cursor:
                        isAvailable && gameState.isStarted
                          ? "pointer"
                          : "default",
                    }}
                    onClick={() => handleSpaceClick(`O${index}`)}
                  />
                </g>
                {gameState.players
                  .filter((player) => player.position === `O${index}`)
                  .map((player, i, arr) => {
                    const offset = (i - (arr.length - 1) / 2) * 10;
                    const angleRad = (groupIndex * 60 * Math.PI) / 180;
                    const offsetX = offset * Math.cos(angleRad);
                    const offsetY = offset * Math.sin(angleRad);
                    const isTurn =
                      gameState.players[gameState.currentTurnIndex].name ===
                      player.name;
                    return (
                      <g
                        key={player.name}
                        className={
                          gameState.isStarted
                            ? !isTurn
                              ? "opacity-50"
                              : ""
                            : ""
                        }
                      >
                        <circle
                          cx={centroid.x - offsetX}
                          cy={centroid.y - offsetY}
                          r={8}
                          fill={COLORS[player.color].hex}
                          stroke="black"
                          strokeWidth={1.5}
                        />
                        <text
                          x={centroid.x - offsetX}
                          y={centroid.y - offsetY}
                          fontSize="10"
                          fontWeight={600}
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          fill="white"
                          dy="0.1em"
                        >
                          {player.name.charAt(0).toUpperCase()}
                        </text>
                      </g>
                    );
                  })}
              </React.Fragment>
            );
          } else {
            // Outer circle - Roll Again Spaces
            return (
              <React.Fragment key={`O${index}`}>
                <g
                  key={index}
                  id={`O${index}`}
                  onClick={() => handleSpaceClick(`O${index}`)}
                >
                  <polygon
                    points={points}
                    fill="lightgray"
                    stroke={isAvailable ? "#002f58" : "white"}
                    strokeWidth={isAvailable ? 2 : 1}
                    style={{
                      opacity: gameState.isStarted
                        ? isAvailable
                          ? 1
                          : 0.3
                        : 1,
                      cursor: isAvailable ? "pointer" : "default",
                    }}
                  />
                  <text
                    x={centroid.x}
                    y={centroid.y}
                    fontSize="5"
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
                </g>
                {gameState.players
                  .filter((player) => player.position === `O${index}`)
                  .map((player) => {
                    const isTurn =
                      gameState.players[gameState.currentTurnIndex].name ===
                      player.name;
                    return (
                      <g
                        key={player.name}
                        className={
                          gameState.isStarted
                            ? !isTurn
                              ? "opacity-50"
                              : ""
                            : ""
                        }
                      >
                        <circle
                          cx={centroid.x}
                          cy={centroid.y}
                          r={8}
                          fill={COLORS[player.color].hex}
                          stroke="black"
                          strokeWidth={1.5}
                        />
                        <text
                          x={centroid.x}
                          y={centroid.y}
                          fontSize="10"
                          fontWeight={600}
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          fill="white"
                          dy="0.1em"
                        >
                          {player.name.charAt(0).toUpperCase()}
                        </text>
                      </g>
                    );
                  })}
              </React.Fragment>
            );
          }
        })}
        {/* ------------------------------ Outer circle (Wheel) - Wedge Spaces ------------------------------ */}
        {wedge.map((_, index) => {
          const angle1 = (index * 60 - 7.5) * (Math.PI / 180);
          const angle2 = (index * 60 + 7.5) * (Math.PI / 180);
          const points = trapezoidPoints(150, 150, 140, 170, angle1, angle2);
          const centroid = getCentroid(points);
          const isAvailable = reachableSpaces.includes(`W${index}`);
          return (
            <React.Fragment key={`W${index}`}>
              <g key={index} id={`W${index}`}>
                <polygon
                  points={points}
                  stroke={isAvailable ? "#002f58" : "white"}
                  strokeWidth={isAvailable ? 2 : 1}
                  fill={getColorClass(`W${index}`)}
                  style={{
                    opacity: gameState.isStarted ? (isAvailable ? 1 : 0.3) : 1,
                    cursor: isAvailable ? "pointer" : "default",
                  }}
                  onClick={() => handleSpaceClick(`W${index}`)}
                  onMouseEnter={(e) => {
                    if (isAvailable) {
                      e.target.style.strokeWidth = "4";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isAvailable) {
                      e.target.style.strokeWidth = "2";
                    }
                  }}
                />
              </g>

              {gameState.players
                .filter((player) => player.position === `W${index}`)
                .map((player, i, arr) => {
                  const offset = (i - (arr.length - 1) / 2) * 10;
                  const angleRad = ((index * 60 + 90) * Math.PI) / 180;
                  const offsetX = offset * Math.cos(angleRad);
                  const offsetY = offset * Math.sin(angleRad);
                  const isTurn =
                    gameState.players[gameState.currentTurnIndex].name ===
                    player.name;

                  return (
                    <g
                      key={player.name}
                      className={
                        gameState.isStarted ? (!isTurn ? "opacity-50" : "") : ""
                      }
                    >
                      <circle
                        cx={centroid.x - offsetX}
                        cy={centroid.y - offsetY}
                        r={8}
                        fill={COLORS[player.color].hex}
                        stroke="black"
                        strokeWidth={1.5}
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
            </React.Fragment>
          );
        })}
        {/* ------------------------------ Central Hub ------------------------------ */}
        {(() => {
          const isAvailable = reachableSpaces.includes("CH");
          return (
            <g id="CH">
              <polygon
                points={hexagonPoints(150, 150, 35)}
                fill="#002f58"
                stroke={isAvailable ? "lightblue" : "white"}
                strokeWidth={isAvailable ? 2 : 1}
                style={{
                  opacity: gameState.isStarted ? (isAvailable ? 1 : 0.3) : 1,
                  cursor: isAvailable ? "pointer" : "default",
                }}
                onClick={() => handleSpaceClick("CH")}
              />
              <image
                href={centralHubLogo}
                height={50}
                width={50}
                x={125.2}
                y={125}
              />
            </g>
          );
        })()}
        {gameState.players
          .filter((player) => player.position === "CH")
          .map((player, i, arr) => {
            const angle = (i / arr.length) * 2 * Math.PI;
            const offsetX = 8 * Math.cos(angle);
            const offsetY = 8 * Math.sin(angle);
            const isTurn =
              gameState.players[gameState.currentTurnIndex].name ===
              player.name;
            return (
              <g
                key={player.name}
                className={
                  gameState.isStarted ? (!isTurn ? "opacity-50" : "") : ""
                }
              >
                <circle
                  cx={150 + offsetX}
                  cy={150 + offsetY}
                  r={8}
                  fill={COLORS[player.color].hex}
                  stroke="black"
                  strokeWidth={1.5}
                />
                <text
                  x={150 + offsetX}
                  y={150 + offsetY}
                  fontSize="10"
                  fontWeight={600}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="white"
                  dy="0.1em"
                >
                  {player.name.charAt(0).toUpperCase()}
                </text>
              </g>
            );
          })}
        {/* ------------------------------ Spoke Spaces ------------------------------ */}
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
            const isAvailable = reachableSpaces.includes(
              `S${index}-${squareIndex}`
            );
            return (
              <React.Fragment key={`S${index}-${squareIndex}`}>
                <g
                  key={`${index}-${squareIndex}`}
                  id={`S${index}-${squareIndex}`}
                >
                  <rect
                    x={x + xOffset - width / 2}
                    y={y + yOffset - height / 2}
                    width={width}
                    height={height}
                    transform={`rotate(${angle}, ${x + xOffset}, ${
                      y + yOffset
                    })`}
                    stroke={isAvailable ? "#002f58" : "white"}
                    strokeWidth={isAvailable ? 2 : 1}
                    fill={getColorClass(`S${index}-${squareIndex}`)}
                    style={{
                      opacity: gameState.isStarted
                        ? isAvailable
                          ? 1
                          : 0.3
                        : 1,
                      cursor: isAvailable ? "pointer" : "default",
                    }}
                    onClick={() => handleSpaceClick(`S${index}-${squareIndex}`)}
                    onMouseEnter={(e) => {
                      if (isAvailable) {
                        e.target.style.strokeWidth = "4";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isAvailable) {
                        e.target.style.strokeWidth = "2";
                      }
                    }}
                  />
                  {gameState.players
                    .filter(
                      (player) => player.position === `S${index}-${squareIndex}`
                    )
                    .map((player, i, arr) => {
                      const offset = (i - (arr.length - 1) / 2) * 10;
                      const angleRad = ((angle + 90) * Math.PI) / 180;
                      const offsetX = offset * Math.cos(angleRad);
                      const offsetY = offset * Math.sin(angleRad);
                      const isTurn =
                        gameState.players[gameState.currentTurnIndex].name ===
                        player.name;
                      return (
                        <g
                          key={player.name}
                          className={
                            gameState.isStarted
                              ? !isTurn
                                ? "opacity-50"
                                : ""
                              : ""
                          }
                        >
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
              </React.Fragment>
            );
          });
        })}
      </svg>

      {/* COLOR PICKER MODAL */}
      {openColorPicker && (
        <Card className="absolute w-3/4 flex flex-col justify-center items-center border-8 border-gray-700">
          <CardHeader>
            <CardTitle>Choose a Category</CardTitle>
            <CardDescription>{categoryPickerPrompt}</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 sm:grid-cols-2 overflow-auto">
            {Object.keys(COLORS).map((color) => {
              return (
                <Button
                  key={color}
                  className="m-2 p-4 text-center flex items-center justify-center text-sm"
                  style={{ backgroundColor: COLORS[color].hex }}
                  onClick={() => {
                    setOpenColorPicker(false);
                    getCHQuestion(gameState.gameId, color);
                  }}
                >
                  <p className="text-center text-sm">
                    {COLORS[color].category}
                  </p>
                </Button>
              );
            })}
          </CardContent>
        </Card>
      )}
      {/* TRIVIA CARD */}
      {gameState.currentQuestion && (
        <div className="w-full flex absolute justify-center items-center">
          <TriviaCard />
        </div>
      )}
      {/* HELP BUTTON: Show Game Rules in left bottom corner */}
      <div className="absolute bottom-0 left-0 m-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpenGameRules(true)}
        >
          <CircleHelpIcon size={32} />
        </Button>
      </div>
      {/* GAME RULES MODAL */}
      {openGameRules && (
        <div className="absolute w-3/4 h-3/4 p-3 flex justify-center items-center bg-lime-100 z-1000 border-4 border-black rounded-2xl">
          <GameRulesCard />
        </div>
      )}
    </div>
  );
}
