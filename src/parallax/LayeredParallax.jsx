import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const LayeredParallax = () => {
  // 1) 스크롤 위치를 가져온다
  const { scrollY } = useScroll();

  // 2) 배경은 스크롤 대비 느리게(–100px), 전경은 빠르게(+100px) 움직이도록 맵핑
  const bgY = useTransform(scrollY, [0, 500], [0, 0]);
  const fgY = useTransform(scrollY, [0, 500], [0, 300]);

  return (
    <div style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
      <motion.div
        style={{
          y: bgY,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/space.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />

      <motion.div
        style={{
          y: fgY,
          position: "absolute",
          top: "50vh",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "1.5rem 2rem",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          willChange: "transform",
        }}
      >
        <h2>Foreground Layer</h2>
        <p>패럴렉스 예제</p>
      </motion.div>
    </div>
  );
};

export default LayeredParallax;
