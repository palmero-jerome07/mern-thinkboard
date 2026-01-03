import { Fireworks } from "@fireworks-js/react";

function FireworksBackground() {
  return (
    <Fireworks
      options={{
        rocketsPoint: { min: 0, max: 100 },
        explosion: 5,
        intensity: 30,
        traceLength: 3,
        traceSpeed: 5,
      }}
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        background: "transparent",
      }}
    />
  );
}

export default FireworksBackground;
