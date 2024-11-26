import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase sm:text-[15px]">
          Step into the World of Arcady!
        </h2>

        <AnimatedTitle />

        <div className="about-subtext">
          <p>
            Step into the Ultimate Realm: Your Life, Reimagined as the Greatest
            MMORPG Ever!
          </p>
          <p>Arcady: Where Gamers from Every Realm and Platform Converge.</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="backgrund"
            className="absolute left-0 top-0 size-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
