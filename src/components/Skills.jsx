import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';

function Skills() {
  const sanityContent = [
    ['vscode-icons:file-type-html', 'logoHtml5'],
    ['vscode-icons:file-type-css', 'logoCss3'],
    ['logos:javascript', 'logoJavaScript'],
    ['logos:sass', 'logoSass'],
    ['logos:react', 'logoReact'],
    ['logos:tailwindcss-icon', 'logoTailWindCss'],
  ];
  const sanityCheck = sanityContent.map(([logo, key]) => (
    <div
      key={key}
      className="mx-2 h-28 w-28 border my-2
      border-county-green dark:border-soapstone flex"
    >
      <Icon
        className="h-20 w-20 m-auto"
        icon={logo}
      />
    </div>
  ));
  return (
    <section id="skills" className="mx-8">
      <h2 className="mb-4 text-7xl 2xl:text-8xl md:text-center">SKILLS</h2>
      <p className="2xl:text-xl md:text-center">These are the technologies I&apos;ve worked with</p>
      <div className="flex flex-wrap mx-auto w-fit justify-center sm:justify-start mt-8">
        {sanityCheck}
      </div>
    </section>
  );
}

export default Skills;
