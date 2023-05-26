import Image from "next/image";
import React from "react";

const LoginHeader = () => {
  return (
    <div className="mb-10 text-center md:mb-16">
      <a className="mx-auto inline-block max-w-[160px]">
        <Image
          width={400}
          height={400}
          src={"/LOGO-ADAA-CERTIF.png"}
          alt="img"
        />
      </a>
    </div>
  );
};

export default LoginHeader;
