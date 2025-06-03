import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <main className="relative flex justify-center h-screen w-screen bg-neutral-200 dark:bg-neutral-900">
      <div className="w-full md:max-w-7xl">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
