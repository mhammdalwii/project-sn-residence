import React, { useState } from "react";
import NavMenu from "../../molecules/NavMenu";
import Logo from "../../atoms/Logo";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1A3139] shadow-md" : "bg-transparent"}`}>
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu />

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobile} className="text-2xl text-white">
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="w-full bg-[#1A3139] px-4 pb-4 shadow-md md:hidden">
          <NavMenu isMobile onClick={closeMobile} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
