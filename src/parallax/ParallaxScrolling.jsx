"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export const ParallaxScrolling = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1], [0, 0], { clamp: false });
  const fgY = useTransform(scrollY, [0, 1000], [0, 800], { clamp: false });

  return (
    <div style={{ height: "200vh", position: "relative" }}>
      <motion.div
        style={{
          y: bgY,
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100vh",
          background: "url('https://www.w3schools.com/howto/img_parallax.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        style={{
          y: fgY,
          position: "absolute",
          top: "40vh",
          left: "50%",
          translateX: "-50%",
        }}
      >
        <h1 style={{ color: "#fff" }}>Parallax</h1>
      </motion.div>
    </div>
  );
};
