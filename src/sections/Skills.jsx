const Skills = () => {
  return (
    <section className="relative z-10 h-screen bg-black [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_100%,transparent)] pt-[150px]">
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
      <div className="container flex flex-col items-center justify-center gap-10 relative mx-auto pt-[150px]">
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
    </section>
  );
};

export default Skills;
