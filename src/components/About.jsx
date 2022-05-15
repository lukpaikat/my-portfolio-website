import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import myPhoto from '../assets/images/my-photo-grayscale.JPG';
import myPhotoSmall from '../assets/images/my-photo-grayscale_small.JPG';

function About() {
  return (
    <section
      id="about"
      className="landscape:grid landscape:grid-cols-[45%_55%] landscape:h-screen landscape:max-h-[720px]
      landscape:min-h-[440px] px-4 landscape:pl-0 max-w-[1750px]
      mx-auto"
    >
      <div className="flex items-center justify-center relative before:w-full before:max-w-[800px] before:h-[90%] landscape:before:h-full landscape:before:w-10/12 before:top-0 landscape:before:left-0 landscape:before:top-auto before:border before:border-spanish-green before:absolute max-h-[720px]">
        <img
          className="h-10/12 w-10/12 relative mt-4 landscape:mt-0
            landscape:w-11/12 landscape:h-11/12 max-h-[600px] max-w-[600px] aspect-square object-cover"
          src={myPhoto}
          srcSet={`${myPhotoSmall} 480w, ${myPhoto} 800w`}
          sizes="(max-width: 600px) 480px, 800px"
          alt="my face"
        />
      </div>
      <article className="flex landscape:justify-center flex-col my-4 mx-6 xl:max-w-[90%]">
        <h2 className="mb-4 text-5xl xl:text-6xl 2xl:text-8xl 2xl:mb-12 text-center landscape:text-left">ABOUT</h2>
        <div className="max-w-lg landscape:max-w-none mx-auto">
          <p className="mb-4 2xl:text-2xl 2xl:mb-8">
            My name is Muhammad Hasbi Saputra. I’m from Indonesia.
            I like working with javaScript and other stuff related to front-end development.
            <small>Therefore I proclaim my self as a front-end developer.</small>
          </p>
          <p className="mb-4 2xl:text-2xl 2xl:mb-8">
            Currently I’m working on improving my skills and
            seeking entry level front-end development job
          </p>
          <p className="mb-4 2xl:text-2xl 2xl:mb-8">
            You can contact me if you&apos;re interested to offer me a job or a freelance work.
          </p>
          <div className="flex flex-wrap">
            <Link
              tabIndex={0}
              to="contact"
              smooth
              duration={500}
              offset={-200}
              className="bg-county-green text-soapstone dark:bg-soapstone dark:text-county-green w-fit
              min-h-44px min-w-44px py-3 px-4 my-2 cursor-pointer 2xl:text-2xl 2xl:px-7 2xl:py-6 mr-4 2xl:mr-8"
            >
              Contact me
            </Link>
            <a
              href="https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/d0b4b63c6eb35069feef9c156d007d42.pdf"
              className="text-county-green dark:text-soapstone w-fit
              min-h-44px min-w-44px py-3 px-4 mr-2 my-2 cursor-pointer 2xl:text-2xl 2xl:px-7 2xl:py-6
              border border-county-green dark:border-soapstone"
            >
              My resume
            </a>
          </div>
        </div>

      </article>
    </section>
  );
}

export default About;
