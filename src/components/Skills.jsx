import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';

function Skills() {
  const iconItems = [
    ['vscode-icons:file-type-html', 'logoHtml5'],
    ['vscode-icons:file-type-css', 'logoCss3'],
    ['logos:javascript', 'logoJavaScript'],
    ['logos:sass', 'logoSass'],
    ['logos:react', 'logoReact'],
    ['logos:tailwindcss-icon', 'logoTailWindCss'],
  ];
  const iconElements = iconItems.map(([logo, key]) => (
    <div
      key={key}
      className="mx-2 h-24 w-24 lg:h-28 lg:w-28 xl:h-36 xl:w-36 border my-2
      border-county-green dark:border-soapstone flex"
    >
      <Icon
        className="h-4/6 w-4/6 m-auto"
        icon={logo}
      />
    </div>
  ));
  return (
    <section id="skills" className=" px-4 md:h-screen md:max-h-[720px] md:flex md:flex-col md:justify-center">
      <h2 className="mb-4 text-7xl 2xl:text-8xl md:text-center">SKILLS</h2>
      <p className="2xl:text-xl md:text-center">These are the technologies I&apos;ve worked with</p>
      <div className="flex flex-wrap w-full justify-start md:justify-center mt-8">
        {iconElements}
      </div>
    </section>
  );
}

export default Skills;
