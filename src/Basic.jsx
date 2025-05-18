"use client";
import { useScroll, useTransform, motion } from "framer-motion";

const Basic = () => {
  const { scrollY } = useScroll();

  // 스크롤 위치에 따라 텍스트 크기와 색상이 변하도록 설정
  const scale = useTransform(scrollY, [0, 1000], [1, 2]);
  const color = useTransform(
    scrollY,
    [0, 500, 1000],
    ["#ffffff", "#ff0000", "#0000ff"]
  );

  return (
    <motion.div
      style={{
        height: "200vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "100px",
      }}
    >
      <motion.h1
        style={{
          fontSize: "100px",
          color: "white",
          scale,
          color,
        }}
      >
        {scrollY}
      </motion.h1>
    </motion.div>
  );
};

export default Basic;
