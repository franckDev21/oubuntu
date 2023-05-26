import Link from "next/link";
import React, { FC, ReactNode } from "react";

type NavLinkProps = {
  className?: string;
  label: string;
  icon?: ReactNode;
  href: string;
};

const NavLink: FC<NavLinkProps> = ({ className = "", label = "", icon, href }) => {
  return (
    <Link
      href={href}
      className={`${className} text-base  font-semibold py-2 rounded-md hover:bg-white hover:text-primary hover:border-slate-200 transition px-3 cursor-pointer border border-transparent bg-white bg-opacity-50 text-slate-500 flex items-center space-x-2`}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
