import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';

function Skills() {
  const iconItems = [
    ['vscode-icons:file-type-html', 'logoHtml5', 'HTML5'],
    ['vscode-icons:file-type-css', 'logoCss3', 'CSS3'],
    ['logos:javascript', 'logoJavaScript', 'JavaScript'],
    ['logos:sass', 'logoSass', 'Sass'],
    ['logos:react', 'logoReact', 'ReactJS'],
    ['logos:tailwindcss-icon', 'logoTailWindCss', 'Tailwind CSS'],
  ];
  const iconElements = iconItems.map(([logo, key, name]) => (
    <div
      key={key}
      className="mx-2 h-24 w-24 lg:h-28 lg:w-28 xl:h-36 xl:w-36 2xl:h-56 2xl:w-56 border my-2
      border-county-green dark:border-soapstone flex flex-col items-center justify-center"
    >
      <Icon
        className="h-4/6 w-4/6 m-auto\"
        icon={logo}
      />
      <p className="text-center mt-2 text-xs 2xl:text-xl">{name}</p>
    </div>
  ));
  return (
    <section id="skills" className="mt-16 px-4 md:h-screen md:max-h-[400px] xl:max-h-[700px] md:flex md:flex-col md:justify-center">
      <h2 className="mb-4 mx-6 text-5xl xl:text-6xl 2xl:text-8xl 2xl:mb-12 text-center">SKILLS</h2>
      <p className="2xl:text-2xl mx-6 text-center">These are the technologies I&apos;ve worked with</p>
      <div className="flex flex-wrap w-full justify-center mt-8 px-6">
        {iconElements}
      </div>
    </section>
  );
}

export default Skills;
