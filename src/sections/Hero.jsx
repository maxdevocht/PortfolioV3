"use client";
import { useState, useEffect, useRef } from "react";
import { starsBlack } from "../assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [bgWidth, setBgWidth] = useState(1000); // Default value

  useEffect(() => {
    const image = new Image();
    image.src = starsBlack;
    image.onload = () => {
      setBgWidth(image.width);
    };
  }, []);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      className="sticky top-0 h-[492px] md:h-screen flex items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] z-10"
      style={{
        backgroundImage: `url(${starsBlack})`,
        backgroundPositionY,
        // filter: "grayscale(1) brightness(0.5) contrast(1.2)",
      }}
      animate={{
        backgroundPositionX: [0, bgWidth],
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
    >
      <div className="absolute inset-0"></div>
      {/* Start Planet */}
      {/* <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div> */}
      {/* End Planet */}
      {/* Start Ring 1 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-black opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 bg-black rounded-full top-1/2 left-0 -translate-x-1/2  -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-black rounded-full top-0 left-1/2 -translate-x-1/2  -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 border border-black rounded-full top-1/2 left-full -translate-x-1/2  -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-black rounded-full"></div>
        </div>
      </motion.div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-black/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></motion.div>
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-black opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 bg-black rounded-full top-1/2 left-0 -translate-x-1/2  -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-black rounded-full top-1/2 left-full -translate-x-1/2  -translate-y-1/2"></div>
      </motion.div>
      {/* End Ring 3 */}
      {/* Start Ring 4 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute h-[444px] w-[444px] md:h-[1180px] md:w-[1180px] rounded-full border border-black/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></motion.div>
      {/* End Ring 4 */}
      <div className="container flex flex-col items-center justify-center gap-10 relative mx-auto">
        <h1 className="text-4xl md:text-7xl lg:text-8xl md:leading-none font-semibold text-center">
          <span className="font-caveat text-4xl md:text-7xl lg:text-8xl md:leading-none font-semibold text-center mr-2 md:mr-5">
            I&apos;m
          </span>{" "}
          Max 👋
          <br />
          <span className="font-caveat text-4xl md:text-7xl lg:text-8xl md:leading-none font-semibold text-center mr-2 md:mr-5">
            a{" "}
          </span>{" "}
          front end
          <span className="font-caveat text-4xl md:text-7xl lg:text-8xl md:leading-none font-semibold text-center mx-2 md:mx-5">
            developer
            <br /> based in{" "}
          </span>{" "}
          Arnhem, NL
        </h1>

        <button className="flex flex-col items-center gap-2">
          Explore!
          <ArrowDown />
        </button>
        {/* <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p> */}
        {/* <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div> */}
      </div>
    </motion.section>
  );
};

export default Hero;
