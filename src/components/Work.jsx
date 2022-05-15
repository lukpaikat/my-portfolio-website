import React from 'react';
import { nanoid } from 'nanoid';
import workData from '../data/workData';
import WorkCard from './WorkCard';

function Work() {
  const workElements = workData.map(({
    name, description, image, imageSmall, url, codeUrl,
  }) => (
    <WorkCard
      key={nanoid()}
      name={name}
      description={description}
      image={image}
      imageSmall={imageSmall}
      url={url}
      codeUrl={codeUrl}
    />
  ));

  return (
    <section id="work" className="my-16 px-4">
      <h2 className="mb-4 text-5xl xl:text-6xl 2xl:text-8xl 2xl:mb-12 text-center">Work</h2>
      <p className="text-center mb-4 2xl:text-3xl 2xl:mb-8">Check out some of my work</p>
      <div className="sm:grid sm:grid-cols-2 max-w-7xl 2xl:max-w-[1750px] mx-auto">
        {workElements}
      </div>
    </section>
  );
}

export default Work;
