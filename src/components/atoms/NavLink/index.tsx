import React from "react";
import { Link } from "react-scroll";

interface NavLinkProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, onClick }) => {
  return (
    <Link to={to} smooth={true} duration={500} offset={-70} onClick={onClick} className="cursor-pointer text-white hover:text-orange-500 transition-colors font-medium block py-2 px-4">
      {label}
    </Link>
  );
};

export default NavLink;
