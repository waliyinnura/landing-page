import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center justify-center overflow-hidden md:overflow-visible bg-white dark:bg-black">
      <div className="w-full">
        <Hero />
      </div>
    </main>
  );
}
