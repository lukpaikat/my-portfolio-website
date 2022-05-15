import React from 'react';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

function SkillItem(props) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    fallbackInView: true,
  });
  const { logo, name } = props;
  return (
    <div
      ref={ref}
      className={`mx-2 h-24 w-24 lg:h-28 lg:w-28 xl:h-36 xl:w-36 2xl:h-56 2xl:w-56 border my-2
      border-county-green dark:border-soapstone flex flex-col items-center justify-center
      ${inView ? 'animate__animated animate__fadeInUp' : ''} opacity-0`}
    >
      <Icon
        className="h-4/6 w-4/6 m-auto\"
        icon={logo}
      />
      <p className="text-center mt-2 text-xs 2xl:text-xl">{name}</p>
    </div>
  );
}

SkillItem.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillItem;
