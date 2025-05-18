// Pinned.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Pinned = () => {
  const containerRef = useRef(null);

  // 1) 컨테이너 전체(2 화면 분량)의 스크롤 진행률
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 두 번째 이미지가 아래에서 위로 올라오는 애니메이션
  // scrollYProgress가 0일 때(페이지 최상단) y값은 100% (화면 아래에서 시작)
  // scrollYProgress가 1일 때(페이지 최하단) y값은 0% (화면 상단으로 이동)
  // 즉, 스크롤을 내릴수록 두 번째 이미지가 아래에서 위로 올라오는 효과
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "200vh",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          height: "100vh",
          backgroundImage: "url(/iphone1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      />

      <motion.div
        style={{
          position: "fixed",
          height: "100vh",
          top: 0,
          left: 0,
          right: 0,
          backgroundImage: "url(/iphone2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
          zIndex: 2,
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default Pinned;
