function ProgressCircle(props) {
  const { totalSold, totalIn } = props;
  const offset = 138 - (138 * totalSold) / totalIn;

  return (
    <div className="percent-circle">
      <svg width="50" height="50">
        <circle
          className="background-ring"
          stroke="#979797"
          strokeWidth="4"
          fill="transparent"
          r="22"
          cx="25"
          cy="25"
          style={{ zIndex: "-1" }}
        />
        <circle
          className="percent-ring"
          stroke="#00c7fc"
          strokeWidth="4"
          fill="transparent"
          r="22"
          cx="25"
          cy="25"
          style={{ strokeDashoffset: offset || 0 }}
        />
      </svg>
      <p>{totalSold}</p>
    </div>
  );
}

export default ProgressCircle;
