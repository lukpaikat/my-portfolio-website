import React from 'react';
import myPhoto from '../assets/images/my-photo-grayscale.JPG';

function About() {
  return (
    <section
      id="about"
      className="landscape:grid landscape:grid-cols-[45%_55%] landscape:h-screen landscape:max-h-[720px]
      landscape:min-h-[440px] px-4 landscape:pl-0 mb-14"
    >
      <div className="flex items-center justify-center relative before:w-full before:h-[90%] landscape:before:h-full landscape:before:w-10/12 before:top-0 landscape:before:left-0 landscape:before:top-auto before:border landscape:before:border-l-0 before:border-spanish-green before:absolute max-h-[720px]">
        <img
          className="h-10/12 w-10/12 relative mt-4 landscape:mt-0
            landscape:w-11/12 landscape:h-11/12 max-h-[600px] max-w-[600px] aspect-square object-cover"
          src={myPhoto}
          alt="my face"
        />
      </div>
      <article className="flex landscape:justify-center flex-col my-4 mx-6">
        <h2 className="mb-4 text-7xl 2xl:text-8xl portrait:md:text-center">ABOUT</h2>
        <div>
          <p className="mb-4 2xl:text-xl portrait:md:text-center">
            My name is Muhammad Hasbi Saputra. I’m from Indonesia.
            I like working with javaScript and other stuff related to front-end development.
            <small>Therefore I proclaim my self as a front-end developer.</small>
          </p>
          <p className="mb-4 2xl:text-xl portrait:md:text-center">
            Currently I’m working on improving my skills and
            seeking entry level front-end development job
          </p>
        </div>
        <a
          href="https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/7bde17d26c513c1379169e0f0161378a.pdf"
          className="bg-county-green text-soapstone dark:bg-soapstone dark:text-county-green block w-fit
          min-h-44px min-w-44px py-3 px-4 mr-2 my-2 cursor-pointer 2xl:text-xl portrait:md:mx-auto"
        >
          My resume
        </a>
      </article>
    </section>
  );
}

export default About;
