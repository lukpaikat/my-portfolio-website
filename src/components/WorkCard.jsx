import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

function WorkCard(props) {
  const {
    name,
    description,
    image,
    imageSmall,
    url,
    codeUrl,
  } = props;

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <article
      ref={ref}
      className={`w-11/12 mx-auto mt-8 mb-12
      bg-soapstone shadow-md dark:bg-bush
      ${inView ? 'animate__animated animate__fadeInUp' : ''} opacity-0`}
    >
      <img
        className="w-full"
        src={imageSmall}
        srcSet={`${imageSmall} 480w, ${image} 800w`}
        sizes="(max-width: 1024px) 480px, 800px"
        alt={name}
      />
      <h3 className="mx-4 mb-5 mt-8 text-xl font-bold 2xl:text-4xl 2xl:mt-16 2xl:mb-10 2xl:mx-8">{name}</h3>
      <p className="mx-4 mt-5 mb-7 2xl:text-2xl 2xl:mx-8 2xl:mb-16">{description}</p>
      <div className="flex justify-between pb-8 2xl:mx-4 2xl:pb-16">
        <a
          className="after:transition-all relative block p-4 after:absolute after:h-px after:w-2/5 hover:after:w-3/5 after:bg-county-green dark:after:bg-soapstone after:bottom-2 after:left-1/2 after:-translate-x-1/2 text-center 2xl:text-3xl"
          href={codeUrl}
          target="_blank"
          rel="noreferrer"
        >
          VIEW CODE
        </a>
        <a
          className="after:transition-all relative block p-4 after:absolute
           after:h-px after:w-2/5 hover:after:w-3/5 after:bg-county-green dark:after:bg-soapstone after:bottom-2 after:left-1/2
           after:-translate-x-1/2 text-center 2xl:text-3xl"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          VISIT DEMO
        </a>
      </div>
    </article>
  );
}

WorkCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageSmall: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  codeUrl: PropTypes.string.isRequired,
};

export default WorkCard;
