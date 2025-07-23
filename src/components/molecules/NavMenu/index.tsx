import React from "react";
import NavLink from "../../atoms/NavLink";
import Button from "../../atoms/Button";

interface NavMenuProps {
  onClick?: () => void;
  isMobile?: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ onClick, isMobile }) => {
  return (
    <div className={`${isMobile ? "flex flex-col" : "hidden md:flex"} gap-4 items-center`}>
      <NavLink to="tentang" label="Tentang Kami" onClick={onClick} />
      <NavLink to="gallery" label="Gallery" onClick={onClick} />
      <NavLink to="kontak" label="Kontak" onClick={onClick} />
      <Button href="https://wa.me/6282190652805">Booking</Button>
    </div>
  );
};

export default NavMenu;
