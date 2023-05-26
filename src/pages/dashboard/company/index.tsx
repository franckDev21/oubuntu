import { NextPage } from "next";
import React from "react";
import { TbFileInvoice } from "react-icons/tb";
import { BsFillPrinterFill } from "react-icons/bs";
import CompanyList from "@/components/pages/company/CompanyList";
import Link from "next/link";

const index: NextPage = () => {
  return (
    <>
      <div className=" mt-4 px-6 flex items-center justify-between">
        <div>
          <h1 className=" text-2xl font-extrabold text-primary ">
            Listing des entreprises
          </h1>
        </div>

        <div className=" space-x-2">
          <button className="px-3 text-sm py-2 rounded-lg text-white inline-flex bg-primary items-center space-x-2  font-bold">
            <span>
              <BsFillPrinterFill />
            </span>
            <span>Imprimer la liste des entreprises</span>
          </button>
          <Link href='/company/create' className="px-3 text-sm py-2 rounded-lg text-white inline-flex items-center space-x-2  bg-green-500 font-bold">
            <span>
              <TbFileInvoice />
            </span>
            <span>Crée une nouvelle entreprise</span>
          </Link>
        </div>
      </div>

      <CompanyList className="px-6" />
    </>
  );
};

export default index;
