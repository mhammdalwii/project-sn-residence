import React from "react";
import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";
import LogoSN from "../../atoms/LogoSN";

const HeroContent: React.FC = () => {
  return (
    <div className="text-center max-w-2xl w-full flex flex-col items-center space-y-6">
      <LogoSN />
      <Heading title="Properti Berkelas Untuk Semua Kelas" />
      <Button className="mt-4" href="https://wa.me/6282190652805">
        BOOKING SEKARANG
      </Button>
    </div>
  );
};

export default HeroContent;
