import React from 'react';
import Link from 'react-scroll/modules/components/Link';

function Hero() {
  // hero here
  return (
    <section
      id="hero"
      className="mt-16 h-[calc(100vh_-_4rem)] grid
        grid-cols-[12.5%_auto] grid-rows-[55%_45%]"
    >
      <div
        className="col-start-1 col-end-2 row-span-full
          border-r-2 border-dashed"
      />
      <div
        className="col-start-2 col-end-3 row-start-1 row-end-2
        border-b-2 border-dashed mt-auto pr-2"
      >
        <p className="ml-2 text-xl">Hi, my name is</p>
        <h1 className="text-4xl my-4 ml-2">
          Muhammad Hasbi Saputra
        </h1>
      </div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3">
        <p className="ml-2 mt-2 text-2xl">
          I&apos;m a front-end developer
        </p>
        <Link
          to="work"
          smooth
          duration={500}
          offset={-200}
          className="bg-bright-red text-soapstone block w-fit
            min-h-44px min-w-44px py-3 px-4 mx-2 my-2 cursor-pointer"
        >
          My Work
        </Link>
      </div>
    </section>
  );
}

export default Hero;
