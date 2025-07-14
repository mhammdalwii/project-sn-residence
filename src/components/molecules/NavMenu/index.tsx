import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from "react-scroll";
import NavLink from "../../atoms/NavLink";
import Button from "../../atoms/Button";

interface NavMenuProps {
  onClick?: () => void;
  isMobile?: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ onClick, isMobile }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const linkClass = isMobile ? "text-white text-lg" : "text-gray-800";

  return (
    <div className={`${isMobile ? "flex flex-col" : "hidden md:flex"} gap-4 items-center`}>
      <NavLink to="tentang" label="Tentang Kami" onClick={onClick} />
      <NavLink to="gallery" label="Gallery" onClick={onClick} />
      <NavLink to="kontak" label="Kontak" onClick={onClick} />
      <Button>Booking</Button>
    </div>
  );
};

export default NavMenu;
