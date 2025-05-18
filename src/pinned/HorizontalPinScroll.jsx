// HorizontalPinScroll.jsx
"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const HorizontalPinScroll = () => {
  const containerRef = useRef(null);

  // 스크롤 진행률 감지
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 스크롤 진행률에 따른 x축 이동값 계산
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-198vw"]);

  return (
    <div ref={containerRef} className="h-[300vh] relative overflow-x-hidden">
      <motion.div
        style={{
          position: "fixed", // sticky에서 fixed로 변경
          top: 0,
          left: 0, // left: 0 추가
          height: "100vh",
          width: "300%",
          display: "flex",
          x,
        }}
      >
        <div className="w-full h-full bg-[#a29bfe] flex items-center justify-center text-white text-3xl">
          섹션 1
        </div>
        <div className="w-full h-full bg-[#74b9ff] flex items-center justify-center text-white text-3xl">
          섹션 2
        </div>
        <div className="w-full h-full bg-[#55efc4] flex items-center justify-center text-white text-3xl">
          섹션 3
        </div>
      </motion.div>
    </div>
  );
};

export default HorizontalPinScroll;
