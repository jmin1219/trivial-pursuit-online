import PropTypes from "prop-types";
import { COLORS } from "../../../constants/colors";

export default function PlayerWedgeToken({ playerData }) {
  const { color, name, wedges } = playerData;
  const SLICE_ANGLES = [0, 60, 120, 180, 240, 300];

  return (
    <div className="flex flex-col items-center justify-center">
      <p className={`text-center text-${color} font-bold`}>{name}</p>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
      >
        {/* COLOR WEDGES OR EMPTY SPACES */}
        {SLICE_ANGLES.map((angle, index) => (
          <path
            key={index}
            d={`M50,50 L${50 + 45 * Math.cos((angle * Math.PI) / 180)},${
              50 + 45 * Math.sin((angle * Math.PI) / 180)
            } A45,45 0 0,1 ${
              50 + 45 * Math.cos(((angle + 60) * Math.PI) / 180)
            },${50 + 45 * Math.sin(((angle + 60) * Math.PI) / 180)} Z`}
            fill={
              wedges.includes(Object.keys(COLORS)[index])
                ? COLORS[Object.keys(COLORS)[index]].hex
                : "lightgray"
            }
            strokeWidth="2"
          />
        ))}
        {/* outer player token stroke */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={COLORS[color].hex}
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

PlayerWedgeToken.propTypes = {
  playerData: PropTypes.object.isRequired,
};
