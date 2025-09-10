import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-8 left-0 w-full h-16 flex items-center px-20 py-12 z-50">
      <Image
        src="/assets/logo.svg"
        alt="Logo"
        width={44}
        height={44}
        className="filter invert"
      />
    </div>
  );
};

export default Header;
