import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <main className="relative flex justify-center h-screen w-screen bg-grey dark:bg-gold-700">
      <div className="w-full h-full max-w-7xl">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
