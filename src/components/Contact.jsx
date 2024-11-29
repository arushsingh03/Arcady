import React from "react";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass, alt }) => (
  <div className={clipClass}>
    <img src={src} alt={alt} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10 ">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72  overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/contact-1.webp"
            alt="Contact Image 1"
          />
          <ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            src="img/contact-2.webp"
            alt="Contact Image 2"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 ld:top-20 lg:w-80">
          <ImageClipBox
            clipClass="absolute md:scale-125"
            src="img/swordman-partial.webp"
            alt="Contact Image 1"
          />
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="img/swordman.webp"
            alt="Contact Image 1"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">
            Ignite Your Journey in Arcady
          </p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[4.8rem]">
            Unle<b>a</b>sh Your Power <br /> Join Arca<b>d</b>y and <br />{" "}
            Conquer New Real<b>m</b>s
          </p>

          <Button
            title="Contact Us"
            containerClass="mt-10 cursor-pointer bg-gradient-to-r from-gray-300 via-gray-500 to-black text-black font-bold py-3 px-6 rounded-full shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-black hover:via-gray-600 hover:to-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
