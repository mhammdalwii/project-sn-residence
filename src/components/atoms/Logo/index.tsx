import React from "react";
import logo from "../../../assets/redince-bantaeng.png";
import { Link } from "react-scroll";

const Logo: React.FC = () => {
  return (
    <Link to="/" aria-label="SN Residence Bantaeng">
      <img src={logo} alt="SN Residence Bantaeng Logo" className="h-10" />
    </Link>
  );
};

export default Logo;
