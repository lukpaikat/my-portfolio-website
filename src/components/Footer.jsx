import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import GlintsDarkIcon from '../assets/icons/Glints-star-dark.svg';
import GlintsLightIcon from '../assets/icons/Glints-star-light.svg';

function Footer() {
  return (
    <footer className="flex flex-col items-center flex-wrap justify-center md:flex-row md:justify-between p-4 2xl:p-6 bg-county-green dark:bg-bush">
      <p className="text-center text-soapstone 2xl:text-2xl">Copyright © 2022 Muhammad Hasbi Saputra</p>
      <div>
        <a
          href="https://www.linkedin.com/in/muhammad-hasbi-saputra/"
          target="_blank"
          rel="noreferrer"
          className="inline-block align-middle p-2"
        >
          <Icon className="h-[44px] w-[44px] p-1 text-soapstone" icon="bi:linkedin" />
        </a>
        <a
          href="https://github.com/lukpaikat"
          target="_blank"
          rel="noreferrer"
          className="inline-block align-middle p-2 text-soapstone"
        >
          <Icon className="h-[44px] w-[44px] p-1" icon="bi:github" />
        </a>
        <a
          href="https://glints.com/id/profile/public/fc3073b4-d8bc-43a9-96bb-272293b626cf "
          target="_blank"
          rel="noreferrer"
          className="inline-block align-middle p-2"
        >
          <img
            className="h-[44px] w-[44px] p-1 dark:hidden"
            src={GlintsDarkIcon}
            alt="glints logo"
          />
          <img
            className="h-[44px] w-[44px] p-1 hidden dark:inline-block"
            src={GlintsLightIcon}
            alt="glints logo"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
