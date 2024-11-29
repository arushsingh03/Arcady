import { TiLocationArrow } from "react-icons/ti";
import React, { useRef, useState } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      id="vault"
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// Custom Dialog Component
const CustomDialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50" // Add z-50 to ensure it's on top
      onClick={onClose} // Clicking on the backdrop should close the dialog
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm z-40" // Add z-40 to ensure it's on top
        onClick={onClose} // Ensure clicking on the backdrop closes the dialog
      />

      {/* Dialog Content */}
      <div
        className="relative w-full max-w-2xl m-4 rounded-lg bg-gray-900 border-2 border-purple-500 p-6 text-white shadow-xl z-50" // Add z-50 to ensure it's on top
        onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking inside the dialog
      >
        <div className="mb-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        {children}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

// Custom Badge Component
const CustomBadge = ({ children }) => (
  <span className="bg-yellow-500 text-black text-lg font-zentry px-2 py-1 rounded-md">
    {children}
  </span>
);

const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Coming soon info mapping for each feature
  const comingSoonInfo = {
    radiant:
      "Step into the future of gaming with Radiant. Our groundbreaking cross-platform metagame experience is being crafted to seamlessly integrate your gaming adventures across Web2 and Web3. Get ready for revolutionary gameplay mechanics, exclusive rewards, and a dynamic world that evolves with your achievements.",
    zigma:
      "The future of anime-inspired NFTs is about to be redefined. Zigma isn't just a collection - it's a gateway to an expansive universe where art meets utility. Stay tuned for exclusive reveals, community events, and revolutionary features that will set new standards in the NFT space.",
    nexus:
      "Prepare for a social gaming revolution with Nexus. Our upcoming platform will transform how Web3 communities interact, play, and grow together. Experience unprecedented levels of engagement, custom community features, and innovative social mechanics that will redefine digital interaction.",
    azul: "The next generation of AI-powered gaming companions is coming. Azul will revolutionize your gaming experience with advanced learning capabilities, personalized assistance, and seamless integration across multiple gaming platforms. Get ready for a gaming companion that evolves with you.",
  };

  const getComingSoonInfo = (title) => {
    const titleText = title?.props?.children?.join("")?.toLowerCase() || "";
    return (
      comingSoonInfo[titleText] ||
      "More exciting features and updates coming soon. Stay tuned for revolutionary gaming experiences that will transform your digital journey."
    );
  };

  return (
    <div className="relative size-full group">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative flex size-full flex-col justify-between p-5 text-blue-50">
        <div className="flex flex-col h-full justify-between">
          <h1 className="bento-title special-font">{title}</h1>

          {description && (
            <p className="mt-3 max-w-64 text-xm md:text-base">{description}</p>
          )}

          {isComingSoon && (
            <>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="self-end mt-auto bg-purple-600 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded-lg
                  shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] group-hover:scale-105 opacity-0 group-hover:opacity-100"
              >
                <CustomBadge>know more</CustomBadge>
              </button>

              <CustomDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                title={title}
              >
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-800 border border-purple-400">
                    <p className="text-lg leading-relaxed">
                      {getComingSoonInfo(title)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-purple-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span>In Development</span>
                  </div>
                </div>
              </CustomDialog>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Rest of the Features component remains the same
const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Venture into the metagame layer.
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Step into a dynamic universe where innovation meets connection—an
            immersive realm where cutting-edge products seamlessly blend into
            your world, redefining the way you experience life.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                Radia<b>n</b>t
              </>
            }
            description="Unleash the ultimate cross platform metagame experience seamlessly blending your Web2 and Web3 gaming journeys into an epic adventure, where every move earns you rewards and levels up your world."
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection crafted for fans, built for expansion, and primed to evolve into something epic."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  N<b>e</b>xus
                </>
              }
              description="A dynamic, gamified social hub that transforms Web3 communities, unlocking new dimensions of play and interaction for a truly immersive experience."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              description="A next-gen, cross-world AI agent that supercharges your gameplay, making every session more fun, immersive, and insanely productive."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                <b>m</b>ore c<b>o</b>ming soo<b>n</b>...
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
