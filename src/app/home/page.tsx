"use client";
import Header from "@/components/header";
import Introduction from "@/components/introduction";
import { HeroParallax, products } from "@/components/ui/hero-parallax";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./home.css";

interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      <Header />
      
      <Introduction />
      <HeroParallax products={products} />
    </>
  );
};

export default memo(Home);
