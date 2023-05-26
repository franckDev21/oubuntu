import InvoiceList from "@/components/pages/invoice/InvoiceList";
import React from "react";
import { TbFileInvoice } from "react-icons/tb";
import { BsFillPrinterFill } from "react-icons/bs";
import { NextPage } from "next";
import Link from "next/link";

const index: NextPage = () => {
  return (
    <div>
      <div className=" mt-4 px-6 flex items-center justify-between">
        <div>
          <h1 className=" text-2xl font-extrabold text-primary ">
            Listing de toutes les factures
          </h1>
          <p className=" text-gray-500 pt-3">
            Consultez la liste complète de toutes vos factures dans cette
            section.
          </p>
        </div>
        <button className="px-3 text-sm py-2 rounded-lg text-white inline-flex bg-primary items-center space-x-2  font-bold">
          <span>
            <BsFillPrinterFill />
          </span>
          <span>Imprimer la liste des factues</span>
        </button>
        <Link
          href={`/invoices/create`}
          className="px-3 text-sm py-2 rounded-lg text-white inline-flex items-center space-x-2  bg-green-500 font-bold"
        >
          <span>
            <TbFileInvoice />
          </span>
          <span>Crée une nouvelle facture</span>
        </Link>
      </div>

      <div className="px-6 pt-4 pb-20">
        <InvoiceList />
      </div>
    </div>
  );
};

export default index;
