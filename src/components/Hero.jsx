import React from 'react';
import Link from 'react-scroll/modules/components/Link';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import GlintsDarkIcon from '../assets/icons/Glints-star-dark.svg';
import GlintsLightIcon from '../assets/icons/Glints-star-light.svg';

function Hero() {
  // hero here 301375
  return (
    <section
      id="hero"
      className="h-screen grid
        grid-cols-[12.5%_auto] md:grid-cols-[25%_auto] grid-rows-[55%_45%]
        min-h-[480px]"
    >
      <div
        className="col-start-1 col-end-2 row-span-full
          border-r border-dashed border-r-spanish-green"
      />
      <div
        className="col-start-2 col-end-3 row-start-1 row-end-2
        border-b border-dashed mt-auto pr-2 border-b-spanish-green"
      >
        <p className="ml-2 text-xl 2xl:text-3xl">Hi, my name is</p>
        <h1 className="text-4xl 2xl:text-5xl my-4 ml-2">
          Muhammad Hasbi Saputra
        </h1>
      </div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col">
        <p className="ml-2 mt-2 text-2xl 2xl:text-3xl">
          I&apos;m a front-end developer
        </p>
        <Link
          to="work"
          smooth
          duration={500}
          offset={-200}
          className="bg-county-green text-soapstone dark:bg-soapstone dark:text-county-green block w-fit
            min-h-44px min-w-44px py-3 px-4 mx-2 my-2 cursor-pointer 2xl:text-xl 2xl:my-4"
        >
          My Work
        </Link>
        <p className="mt-auto px-2 2xl:text-xl">find me on:</p>
        <div className="flex justify-start px-2 pb-4">
          <a
            href="https://www.linkedin.com/in/muhammad-hasbi-saputra-54b568227"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <Icon className="min-h-44px min-w-44px 2xl:min-h-[60px] 2xl:min-w-[60px] p-1" icon="bi:linkedin" />
          </a>
          <a
            href="https://github.com/lukpaikat"
            target="_blank"
            rel="noreferrer"
            className="min-h-44px min-w-44px block"
          >
            <Icon className="min-h-44px min-w-44px 2xl:min-h-[60px] 2xl:min-w-[60px] p-1" icon="bi:github" />
          </a>
          <a
            href="https://glints.com/id/profile/public/fc3073b4-d8bc-43a9-96bb-272293b626cf "
            target="_blank"
            rel="noreferrer"
            className="min-h-44px min-w-44px block"
          >
            <img
              className="min-h-44px min-w-44px 2xl:min-h-[60px] 2xl:min-w-[60px] p-1 dark:hidden"
              src={GlintsDarkIcon}
              alt="glints logo"
            />
            <img
              className="min-h-44px min-w-44px 2xl:min-h-[60px] 2xl:min-w-[60px] p-1 hidden dark:block"
              src={GlintsLightIcon}
              alt="glints logo"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
