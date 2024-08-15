import { useState, useEffect, useRef } from "react";
import { avatar, starsBg } from "../assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { collabApps } from "@/constants";

const Skills = () => {
  const [bgWidth, setBgWidth] = useState(1000); // Default value

  useEffect(() => {
    const image = new Image();
    image.src = starsBg;
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
      className="relative z-10 h-full bg-black [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_100%,transparent)] pt-[150px]"
      style={{
        backgroundImage: `url(${starsBg})`,
        backgroundPositionY,
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
      <div className="custom-shape-divider-top-1723704434">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="container flex flex-col items-center justify-center gap-10 relative mx-auto pt-[100px]">
        <h1 className="text-4xl md:text-7xl lg:text-8xl text-white md:leading-none font-semibold text-center ">
          <span className="font-caveat text-4xl md:text-7xl lg:text-8xl md:leading-none font-semibold text-center mx-2 md:mx-5">
            Building
          </span>{" "}
          Digital Magic
          <br />
          <span className="font-caveat text-4xl md:text-7xl lg:text-8xl md:leading-none font-semibold text-center mx-2 md:mx-5">
            since
          </span>{" "}
          2023
        </h1>
      </div>

      <div className="flex flex-col gap-20">
        <div className="flex items-center justify-center mt-20">
          <Badge
            variant="outline"
            className="text-white text-xl tracking-wider font-caveat"
          >
            My skills
          </Badge>
        </div>

        <div className="relative left-1/2 flex w-[22rem] aspect-square border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 mb-20">
          <div className="flex w-60 aspect-square m-auto border-n-6 rounded-full">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] rounded-full">
              <div className="flex items-center justify-center w-full h-full border shadow-lg rounded-full">
                <img src={avatar} width={70} height={70} alt="avatar" />
              </div>
            </div>
          </div>

          <ul>
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                  index * 45
                }`}
              >
                <div
                  className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] border shadow-lg  border-n-1/15 rounded-xl -rotate-${
                    index * 45
                  }`}
                >
                  <img
                    className="m-auto"
                    width={app.width}
                    height={app.height}
                    src={app.icon}
                    alt={app.title}
                  />
                </div>
              </li>
            ))}
          </ul>

          {/* <LeftCurve />
          <RightCurve /> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
