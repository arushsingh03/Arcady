import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import clsx from "clsx";
import Dialog from "./Dialog";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [showMusicPrompt, setShowMusicPrompt] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const musicPromptRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
    setShowMusicPrompt(false);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  useEffect(() => {
    if (showMusicPrompt && musicPromptRef.current) {
      gsap.fromTo(
        musicPromptRef.current,
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "ease.out",
          stagger: 0.1,
        }
      );
    }
  }, [showMusicPrompt]);

  const handleProductButtonClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        onMouseEnter={() => !isAudioPlaying && setShowMusicPrompt(true)}
        onMouseLeave={() => setShowMusicPrompt(false)}
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            <div className="flex items-center gap-7">
              <img src="/img/logo.png" alt="logo" className="w-10" />

              <Button
                id="product-button"
                title="Products"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                onClick={handleProductButtonClick}
              />
            </div>

            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="relative">
                <button
                  onClick={toggleAudioIndicator}
                  className="ml-10 flex items-center space-x-2"
                >
                  <audio
                    ref={audioElementRef}
                    className="hidden"
                    src="/audio/loop.mp3"
                    loop
                  />
                  {isAudioPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-gray-200"
                    >
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-gray-200"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={clsx("indicator-line", {
                        active: isIndicatorActive,
                      })}
                      style={{
                        animationDelay: `${bar * 0.1}s`,
                      }}
                    />
                  ))}
                </button>
                {showMusicPrompt && (
                  <div
                    ref={musicPromptRef}
                    className="absolute right-0 mt-3 flex transform items-center space-x-3 rounded-xl border border-gray-500/30 bg-gray-800/80 px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    style={{
                      boxShadow: "0 0 10px rgba(100, 100, 100, 0.5)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="animate-bounce text-lg">🎵</span>
                    <span className="text-gray-200">
                      Feel the music, enter the realm.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </header>
      </div>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        message="Products are yet not listed."
      />
    </>
  );
};

export default Navbar;
