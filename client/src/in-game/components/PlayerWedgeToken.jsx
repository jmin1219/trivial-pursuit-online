import PropTypes from "prop-types";

export default function PlayerWedgeToken({ playerData, playerNum }) {
  const { color, wedges } = playerData;
  const SLICE_ANGLES = [0, 60, 120, 180, 240, 300];

  return (
    <div id={color} className="token-container">
      <p
        className="playerNum"
        style={{
          color: COLOR_CODES[color],
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Player {playerNum}
      </p>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* COLOR WEDGES OR EMPTY SPACES */}
        {SLICE_ANGLES.map((angle, index) => (
          <path
            key={COLORS[index]}
            d={`M50,50 L${50 + 45 * Math.cos((angle * Math.PI) / 180)},${
              50 + 45 * Math.sin((angle * Math.PI) / 180)
            } A45,45 0 0,1 ${
              50 + 45 * Math.cos(((angle + 60) * Math.PI) / 180)
            },${50 + 45 * Math.sin(((angle + 60) * Math.PI) / 180)} Z`}
            fill={
              wedges.includes(COLORS[index])
                ? COLOR_CODES[COLORS[index]]
                : "lightgray"
            }
            stroke={COLOR_CODES[color]}
            strokeWidth="2"
          />
        ))}
        {/* outer player token stroke */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={COLOR_CODES[color]}
          strokeWidth="7"
        />
        {/* inner circle white stroke */}
        <circle
          cx="50"
          cy="50"
          r="41"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

PlayerToken.propTypes = {
  playerData: PropTypes.shape({
    color: PropTypes.string.isRequired,
    wedges: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  playerNum: PropTypes.number.isRequired,
};
