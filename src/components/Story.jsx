import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorner";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef("null");

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      rotationY: rotateY,
      rotationX: rotateX,
      duration: 0.3,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="prologue" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The Interdimensional Nexus of Infinite Worlds
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="The L<b>a</b>ttice of E<b>n</b>dless Re<b>a</b>lms"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/entrance.webp"
                  alt="Enterance"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-16 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              At the convergence of realms lies{" "}
              <span class="gradient-arcady">Arcady</span> a nexus of infinite
              possibilities. At its core, the Boundless Pillar beckons with
              secrets waiting to be uncovered. Shape your fate in a multiverse
              where every choice unlocks new opportunities.{" "}
            </p>

            <Button
              id="realm-button"
              title="Discover Prologue"
              containerClass="mt-5 gradient-button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
