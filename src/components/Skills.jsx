import React from 'react';
import { useInView } from 'react-intersection-observer';
import SkillItem from './SkillItem';

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    fallbackInView: true,
  });
  const iconItems = [
    ['vscode-icons:file-type-html', 'logoHtml5', 'HTML5'],
    ['vscode-icons:file-type-css', 'logoCss3', 'CSS3'],
    ['logos:javascript', 'logoJavaScript', 'JavaScript'],
    ['logos:sass', 'logoSass', 'Sass'],
    ['logos:react', 'logoReact', 'ReactJS'],
    ['logos:tailwindcss-icon', 'logoTailWindCss', 'Tailwind CSS'],
  ];
  const iconElements = iconItems.map(([logo, key, name]) => (
    <SkillItem
      key={key}
      logo={logo}
      name={name}
    />
  ));
  return (
    <section ref={ref} id="skills" className="mt-16 px-4 md:h-screen md:max-h-[400px] xl:max-h-[700px] md:flex md:flex-col md:justify-center">
      <h2
        className={`mb-4 mx-6 text-5xl xl:text-6xl 2xl:text-8xl 2xl:mb-12 text-center
          ${inView ? 'animate__animated animate__fadeInDown' : ''} opacity-0`}
      >
        SKILLS
      </h2>
      <p
        className={`2xl:text-2xl mx-6 text-center
        ${inView ? 'animate__animated animate__fadeInDown' : ''} opacity-0`}
      >
        These are the technologies I&apos;ve worked with
      </p>
      <div className="flex flex-wrap w-full justify-center mt-8 px-6">
        {iconElements}
      </div>
    </section>
  );
}

export default Skills;
