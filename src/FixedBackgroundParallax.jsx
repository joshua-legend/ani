// FixedBackgroundParallax.jsx
import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FixedBackgroundParallax = () => {
  // 1) 스크롤 위치를 실시간으로 구독
  const { scrollY } = useScroll();

  // 2) 스크롤 범위 [0, 500]px 에 대응해 전경 콘텐츠를 -200px에서 0px으로 이동
  const fgY = useTransform(scrollY, [0, 500], [0, -200], { clamp: true });

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* 3) 고정된 배경 레이어 (CSS로 fixed 처리) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('https://www.genesis.com/etc.clientlibs/genesis-p2/kr/clientlibs/clientlib-spacepage/resources/assets/images/space/overview/main-intro/spacebg-t.png')",
          backgroundSize: "cover",
          backgroundPosition: "50% 10%",
          zIndex: -1,
        }}
      />

      {/* 4) 스크롤에 반응하는 전경 레이어 */}
      <motion.div
        style={{
          y: fgY,
          position: "absolute",
          top: "50vh",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "2rem",
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: "8px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          willChange: "transform",
        }}
      >
        <h2>Foreground Content</h2>
        <p>스크롤 시 위로 이동하는 전경 컴포넌트</p>
      </motion.div>
    </div>
  );
};

export default FixedBackgroundParallax;
