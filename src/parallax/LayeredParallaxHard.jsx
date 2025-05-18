import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const LayeredParallaxHard = () => {
  const { scrollY } = useScroll();

  // 각 레이어별 스크롤 변환값 설정 - 더 자연스러운 움직임을 위해 값 조정
  const layer0Y = useTransform(scrollY, [0, 2000], [0, 0], { clamp: true }); // 배경
  const layer1Y = useTransform(scrollY, [0, 2000], [0, 200]); // 가장 적게 움직임
  const layer2Y = useTransform(scrollY, [0, 2000], [0, 300]);
  const layer3Y = useTransform(scrollY, [0, 2000], [0, 400]);
  const layer4Y = useTransform(scrollY, [0, 2000], [0, 500]);
  const layer5Y = useTransform(scrollY, [0, 2000], [0, 600]);
  const layer6Y = useTransform(scrollY, [0, 2000], [0, 700]);
  const layer7Y = useTransform(scrollY, [0, 2000], [0, 800]);
  const layer8Y = useTransform(scrollY, [0, 2000], [0, 900]); // 가장 많이 움직임

  return (
    <div
      style={{
        height: "200vh",
        position: "relative",
        backgroundColor: "black",
        overflow: "hidden", // 부모 컨테이너에 overflow: hidden 추가
      }}
    >
      {/* 중간 레이어들 */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((layer) => (
        <motion.div
          key={layer}
          style={{
            y: [
              layer0Y,
              layer1Y,
              layer2Y,
              layer3Y,
              layer4Y,
              layer5Y,
              layer6Y,
              layer7Y,
              layer8Y,
            ][layer - 1],
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundImage: `url('/parallax${layer}.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
};

export default LayeredParallaxHard;
