import React from 'react';

function Contact() {
  return (
    <section id="contact" className="h-screen max-h-[720px]">
      <h2 className="mb-4 mx-6 text-5xl xl:text-6xl 2xl:text-8xl 2xl:mb-12 text-center">Contact</h2>
      <p className="2xl:text-2xl mx-6 text-center mb-8 2xl:mb-10">
        Submit the form below or send me an email - mhasbisaputra5@gmail.com
      </p>
      <form action="https://formsubmit.co/e53bda67b333f6316d7faf1f85f9aa43" method="POST" className="flex flex-col max-w-[650px] mx-auto 2xl:max-w-[980px] 2xl:pb-28">
        <input className="my-4 mx-6 p-2 text-county-green 2xl:text-2xl 2xl:p-4 border border-county-green" type="text" name="name" placeholder="Name" required />
        <input className="my-4 mx-6 p-2 text-county-green 2xl:text-2xl 2xl:p-4 border border-county-green" type="email" name="email" placeholder="email" required />
        <input type="hidden" name="_subject" value="New message from portfolio page" />
        <textarea className="my-4 mx-6 p-2 text-county-green 2xl:text-2xl 2xl:p-4 border border-county-green" name="message" rows="10" placeholder="message" required />
        <button
          className="2xl:text-2xl bg-county-green text-soapstone dark:bg-soapstone dark:text-county-green block w-fit
            min-h-44px min-w-44px py-4 px-8 mx-auto my-4 cursor-pointer 2xl:px-12 2xl:py-6 2xl:my-4"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
