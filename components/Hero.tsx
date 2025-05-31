"use client";
import React from "react";
import { LampContainer } from "./ui/Lamp";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 uppercase bg-gradient-to-br dark:from-slate-300 from-slate-400 dark:to-slate-500 to-slate-800 py-4 bg-clip-text text-center text-3xl font-medium tracking-wide text-transparent md:text-5xl"
      >
        Something Big is Coming
      </motion.h1>
    </LampContainer>
  );
};

export default Hero;
