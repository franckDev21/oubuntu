import React, { FC, ReactNode, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

interface AccordeonProps {
  className?: string;
  title: string;
  children: ReactNode;
}

const Accordeon: FC<AccordeonProps> = ({
  className = "",
  title,
  children,
}) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(!active);

  return (
    <div className={`${className}  accordeon ${active && "active"}`}>
      <h1
        onClick={toggleActive}
        className={`space-x-2 accordeon__title border-b justify-between cursor-pointer text-lg lg:text-xl font-bold px-2 lg:px-4 py-1  flex lg:items-center`}
      >
        <span className="">{title}</span>
        <span className="p-2 ">
          {active && <HiMinus className="text-xl" />}
          {!active && <HiPlus className="text-xl" />}
        </span>
      </h1>
      <div className="bg-white accordeon__content">{children}</div>
    </div>
  );
};

export default Accordeon;
