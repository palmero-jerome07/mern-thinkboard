import { Fireworks } from "@fireworks-js/react";

function FireworksBackground() {
  return (
    <Fireworks
      options={{
        rocketsPoint: { min: 20, max: 80 }, // avoid edges & top
        explosion: 10, // smaller explosions
        intensity: 100, // lower fireworks count
        traceLength: 2, //
        traceSpeed: 3,
      }}
      style={{
        position: "fixed",
        top: "70px", // adjust based on navbar height
        left: 0,
        width: "100%",
        height: "calc(100% - 70px)", // prevent touching navbar
        background: "transparent",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

export default FireworksBackground;
