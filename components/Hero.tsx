"use client";
import React from "react";
import { LampContainer } from "./ui/LampEffect";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

const Hero = () => {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 bg-gradient-to-br from-slate-500 to-slate-700 dark:from-slate-300 dark:to-slate-500 py-1 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          SOMETHING BIG IS COMING
        </motion.h1>
      </LampContainer>
    </div>
  );
};

export default Hero;
