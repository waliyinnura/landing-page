import AboutPage from "@/components/About";
import React from "react";

const About = () => {
  return (
    <main className="relative flex justify-center h-full w-full bg-neutral-200 dark:bg-neutral-900">
      <div className="w-full max-w-7xl">
        <AboutPage />
      </div>
    </main>
  );
};

export default About;
