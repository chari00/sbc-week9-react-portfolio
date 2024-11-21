import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Vortex = ({ children, className, containerClassName, particleCount = 700, rangeY = 100, baseHue = 220, baseSpeed = 0.0, rangeSpeed = 1.5, baseRadius = 1, rangeRadius = 2, backgroundColor = "#000000" }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Implement the Vortex logic here
    // Use the provided props to customize the Vortex effect
  }, []);

  return (
    <div ref={containerRef} className={cn("relative flex flex-col items-center justify-center", containerClassName)}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};