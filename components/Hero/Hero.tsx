import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import HeroSection from "./HeroSection";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrollingDown(true);
      } else {
        // Scrolling up
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navigation Menu */}
      <nav
        className={`fixed top-4 left-4 right-4 nav text-white shadow-lg z-50 border-b-2 border-gray-700 transition-transform duration-300 rounded-3xl animate-fade-in ${
          isScrollingDown ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left Section: Logo and Name */}
          <div className="flex items-center z-50">
            <a href="#" className="flex items-center gap-2 z-50">
              <Image
                src="/joeylogo.png"
                alt="Logo"
                width={120} // Matches the width of w-15 (15 * 8px = 120px)
                height={96} // Matches the height of h-12 (12 * 8px = 96px)
                className="rounded-full"
              />
              <div className="flex flex-col leading-tight">
                <h1 className="text-lg font-bold mb-0">Joseph Burgos</h1>
                <p className="text-sm text-gray-400 leading-normal mt-0">
                  Software Engineer
                </p>
              </div>
            </a>
          </div>

          {/* Right Section: Hamburger Menu */}
          <button
            className="md:hidden text-2xl z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {/* <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li> */}
            <li>
              <a href="#about" className="hover:text-gray-400">
                About Me
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-gray-400">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />
    </>
  );
}
