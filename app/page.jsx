"use client";

import FixedBackgroundParallax from "@/src/FixedBackgroundParallax";
import { PinnedSection } from "@/src/PinnedSection";
import SimpleParallax from "@/src/SimpleParallax";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  return (
    <div>
      <SimpleParallax />
      <FixedBackgroundParallax />
      {/* <PinnedSection /> */}
      <section className="h-[100vh] bg-red-500">
        <h1>Hello World</h1>
      </section>
      <section className="h-[300vh] bg-blue-500">
        <h1>Hello World</h1>
      </section>
      <section className="h-[100vh] bg-green-500">
        <h1>Hello World</h1>
      </section>
    </div>
  );
}
