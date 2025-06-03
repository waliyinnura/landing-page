import AboutPage from "@/components/About";
import Footer from "@/components/Footer";
import { Hexagon, Twitter, Github } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <main className="relative flex justify-center h-full w-full bg-neutral-200 dark:bg-neutral-900">
      <div className="w-full md:max-w-7xl">
        <AboutPage />
        <Footer
          logo={<Hexagon className="h-10 w-10" />}
          brandName="Victoryu Tech"
          socialLinks={[
            {
              icon: <Twitter className="h-5 w-5" />,
              href: "https://twitter.com",
              label: "Twitter",
            },
            {
              icon: <Github className="h-5 w-5" />,
              href: "https://github.com",
              label: "GitHub",
            },
          ]}
          mainLinks={[
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ]}
          legalLinks={[
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
          ]}
          copyright={{
            text: `© ${new Date().getFullYear()} Victoryu Tech`,
            license: "All rights reserved",
          }}
        />
      </div>
    </main>
  );
};

export default About;
