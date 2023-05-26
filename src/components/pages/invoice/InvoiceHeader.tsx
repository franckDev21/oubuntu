import React from "react";
import { BsLink45Deg } from "react-icons/bs";

type InvoiceHeaderProps = {
  className?: string;
};

const InvoiceHeader = ({ className = "" }: InvoiceHeaderProps) => {
  return (
    <header className={`flex items-center justify-between ${className}`}>
      <h2 className="text-xl rounded-md font-bold space-x-2 items-center flex text-gray-500 ">
        <span>Facture</span>
        <span className=" text-primary uppercase">#FAC-XXXX</span>
      </h2>

      <span className=" inline-flex items-center space-x-1 bg-slate-200 px-3 py-1 font-semibold text-gray-400 hover:text-gray-600 cursor-pointer rounded-full text-sm ">
        <span className="translate-y-[1.5px]">
          <BsLink45Deg className="text-xl" />
        </span>
        <span>Copier le lien</span>
      </span>
    </header>
  );
};

export default InvoiceHeader;
