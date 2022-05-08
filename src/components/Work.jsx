import React from 'react';
import { nanoid } from 'nanoid';
import workImagesData from '../assets/images/work-images';

function Work() {
  const workElements = workImagesData.map(({
    name, description, image, url,
  }) => (
    <article
      key={nanoid()}
      className="w-11/12 mx-auto mt-8 mb-12
      bg-soapstone shadow-md dark:bg-bush"
    >
      <img className="he" src={image} alt={name} />
      <h3 className="mx-4 mb-5 mt-8 text-xl font-bold 2xl:text-4xl 2xl:mt-16 2xl:mb-10 2xl:mx-8">{name}</h3>
      <p className="mx-4 mt-5 mb-7 2xl:text-2xl 2xl:mx-8 2xl:mb-16">{description}</p>
      <div className="flex justify-between pb-8 2xl:mx-4 2xl:pb-16">
        <a
          className="after:transition-all relative block p-4 after:absolute after:h-px after:w-2/5 hover:after:w-3/5 after:bg-county-green dark:after:bg-soapstone after:bottom-2 after:left-1/2 after:-translate-x-1/2 text-center 2xl:text-3xl"
          href={url}
        >
          VIEW CODE
        </a>
        <a
          className="after:transition-all relative block p-4 after:absolute
           after:h-px after:w-2/5 hover:after:w-3/5 after:bg-county-green dark:after:bg-soapstone after:bottom-2 after:left-1/2
           after:-translate-x-1/2 text-center 2xl:text-3xl"
          href={url}
        >
          VISIT DEMO
        </a>
      </div>
    </article>
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
