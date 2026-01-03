import Snowfall from "react-snowfall";

const SnowfallBackground = () => {
  return (
    <Snowfall
      color="#ffff"
      snowflakeCount={200}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 1,
      }}
    />
  );
};

export default SnowfallBackground;
