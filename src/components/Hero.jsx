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
      className="mt-16 h-[calc(100vh_-_4rem)] grid
        grid-cols-[12.5%_auto] md:grid-cols-[25%_auto] grid-rows-[52%_48%]
        min-h-[480px]"
    >
      <div
        className="col-start-1 col-end-2 row-span-full
          border-r-2 border-dashed border-r-spanish-green"
      />
      <div
        className="col-start-2 col-end-3 row-start-1 row-end-2
        border-b-2 border-dashed mt-auto pr-2 border-b-spanish-green"
      >
        <p className="ml-2 text-xl">Hi, my name is</p>
        <h1 className="text-4xl my-4 ml-2">
          Muhammad Hasbi Saputra
        </h1>
      </div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col">
        <p className="ml-2 mt-2 text-2xl">
          I&apos;m a front-end developer
        </p>
        <Link
          to="work"
          smooth
          duration={500}
          offset={-200}
          className="bg-county-green text-soapstone dark:bg-soapstone dark:text-county-green block w-fit
            min-h-44px min-w-44px py-3 px-4 mx-2 my-2 cursor-pointer"
        >
          My Work
        </Link>
        <p className="mt-auto px-2">find me on:</p>
        <div className="flex justify-start px-2 pb-4">
          <a
            href="https://www.linkedin.com/in/muhammad-hasbi-saputra-54b568227"
            target="_blank"
            rel="noreferrer"
            className="min-h-44px min-w-44px block"
          >
            <Icon className="min-h-44px min-w-44px p-1" icon="bi:linkedin" />
          </a>
          <a
            href="https://github.com/lukpaikat"
            target="_blank"
            rel="noreferrer"
            className="min-h-44px min-w-44px block"
          >
            <Icon className="min-h-44px min-w-44px p-1" icon="bi:github" />
          </a>
          <a
            href="https://glints.com/id/profile/public/fc3073b4-d8bc-43a9-96bb-272293b626cf "
            target="_blank"
            rel="noreferrer"
            className="min-h-44px min-w-44px block"
          >
            <img
              className="min-h-44px min-w-44px p-1 dark:hidden"
              src={GlintsDarkIcon}
              alt="glints logo"
            />
            <img
              className="min-h-44px min-w-44px p-1 hidden dark:block"
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
