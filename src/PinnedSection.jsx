"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function PinnedSection() {
  const containerRef = useRef(null);

  // 스크롤 진행률 감지
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // pin 효과를 위한 변환 설정
  // scrollYProgress 값이 0에서 0.1까지는 y위치가 0%
  // 0.1에서 0.9까지도 y위치 유지
  // 0.9에서 1.0으로 갈때 y위치가 0%에서 100%로 변화
  // 즉, 스크롤 90% 지점까지는 화면에 고정되다가 마지막 10% 구간에서 아래로 사라짐
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <motion.div
        style={{
          opacity,
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="bg-blue-500 p-10 rounded-lg">
          <h2 className="text-2xl text-white">핀 효과 예제</h2>
          <p className="text-white">스크롤하면서 이 요소가 화면에 고정됩니다.</p>
        </div>
      </motion.div>
    </div>
  );
}
