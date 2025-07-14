import React from "react";
import logo from "../../../assets/SN_LOGO.png";

const LogoSN: React.FC = () => {
  return (
    <a href="/" aria-label="SN Residence">
      <img src={logo} alt="SN Logo" className="h-10" />
    </a>
  );
};

export default LogoSN;
