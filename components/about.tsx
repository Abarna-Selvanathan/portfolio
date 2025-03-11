"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";

// Import MotionDiv dynamically for animation
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function About() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Web Developer | Entrepreneur";

  // Typewriter Effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="bg-secondary/30 py-12">
      <div className="container mx-auto z-50">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="text-center text-muted-foreground mt-4">
            Get to know more about me and my journey as a Full-Stack Web Developer & Entrepreneur
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* Left Side - Image */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-xl border border-primary/20">
              <Image
                src="/aboutme.jpg"
                alt="Abarna Selvanathan - Web Developer & Entrepreneur"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full -z-10"></div>
          </MotionDiv>

          {/* Right Side - Text Content */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">{typedText}</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m Abarna Selvanathan, a passionate Full-Stack Web Developer with expertise in building modern,
              responsive, and user-friendly web applications. I specialize in Next.js, React.js, Node.js, and various
              other technologies in the web development ecosystem.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in web development has equipped me with a strong foundation in both frontend and backend
              technologies, allowing me to create seamless digital experiences from concept to deployment.
            </p>
            <p className="text-muted-foreground mb-6">
              I&apos;m constantly learning and adapting to new technologies to stay at the forefront of web development
              trends and best practices.
            </p>
            <p className="text-muted-foreground mb-6">
              In addition to my work as a Full-Stack Web Developer, I am also an entrepreneur. I run a small online
              business focused on providing high-quality products. Through this venture, I&apos;ve developed skills in
              managing product listings, e-commerce platforms, and customer interactions. My experience as a business
              owner has sharpened my problem-solving, organizational, and leadership abilities, which I apply to both my
              web development work and business operations.
            </p>

            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="flex gap-4 bg-primary hover:bg-primary/90 text-white"
            >
              Get in Touch
              <ArrowDown className="p-1" />
            </Button>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
