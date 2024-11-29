import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTwitch,
} from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Link = [
    { href: "https://twitch.com", icon: <FaTwitch /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://twittwe.com", icon: <FaXTwitter /> },
    { href: "https://reddit.com", icon: <FaReddit /> },
    { href: "https://discord.com", icon: <FaDiscord /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-normal md:text-left">
          &copy; 2024 Arcady. Where destinies are written.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
            {Link.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black hover:text-violet-100"
              >
                {link.icon}
              </a>
            ))}
        </div>

        <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
