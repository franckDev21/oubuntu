import Pagination from "@/components/_/Pagination";
import CompanyService from "@/services/companies";
import React, { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { formatDate } from "@/utils/helper";
import FakeTable from "@/components/_/FakeTable";
import EyeBtn from "@/components/uikit/EyeBtn";
import PencelBtn from "@/components/uikit/PencelBtn";
import DeleteBtn from "@/components/uikit/DeleteBtn";
import CompanyInfoModal from "./CompanyInfoModal";
import useModal from "@/hooks/useModal";
import Link from "next/link";
import CompanyDeleteModal from "./CompanyDeleteModal";

type CompanyListProps = {
  className?: string;
};

const CompanyList: FC<CompanyListProps> = ({ className = "" }) => {

  const { show, closeModal , openModal, value, doAction } = useModal();
  const { show: showTwo, closeModal: closeModalTwo , openModal: openModalTwo, value: valueTwho, doAction:doActionTwo } = useModal();

  const { data, isLoading } = useQuery({
    queryFn: CompanyService.getAll,
    queryKey: ["companies"],
  });

  if (isLoading) {
    return <FakeTable />;
  }

  return (
    <div className={`w-full ${className} mb-20`}>

      {/* company info */}
      <CompanyInfoModal company={value} show={show} closeModal={closeModal} />

      {/* delete modal */}
      <CompanyDeleteModal company_id={valueTwho?.id} show={showTwo} closeModal={closeModalTwo} />

      <div className="bg-white shadow-md rounded my-6">
        <table className="w-full  table-auto">
          <thead>
            <tr className="bg-slate-100 border-t text-gray-600 uppercase text-xs leading-normal">
              <th className="py-3 px-6 text-left">Nom de {"l'entreprise"}</th>
              <th className="py-3 px-6 text-left">Autheur</th>
              <th className="py-3 px-6 text-center">Date de creation</th>
              <th className="py-3 px-6 text-center">Nombre de factures</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data?.map((company) => (
              <tr
                key={company.id}
                className={`border-b border-gray-200 hover:bg-gray-100 
                  ${company.is_default_company && 'border-none bg-green-500 bg-opacity-10'}`}
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="mr-2 flex-none w-10 h-10 relative overflow-hidden">
                      <Image
                        className=" rounded-full flex-none absolute h-full w-full top-0 left-0"
                        src={`${
                          company.logo
                            ? company.logo
                            : "/favicon.ico"
                        }`}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <span className="font-medium text-xs">{company.title}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-left">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <Image
                        className=" rounded-full w-10 h-10"
                        src={company.user?.picture ?? "/default-user-image.png"}
                        width={40}
                        height={40}
                        alt=""
                      />
                    </div>
                    <span className="">
                      {company.user?.firstname} {company.user?.lastname}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="mr-2">
                    {formatDate(company.created_at ?? "")}
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex space-x-2 items-center justify-center">
                    <span>{company.invoices?.length} Factures</span>
                    <button className="px-3 rounded-md font-semibold py-0.5 text-white bg-primary text-xs">
                      voir
                    </button>
                  </div>
                </td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`bg-purple-200 text-purple-600 py-1 px-2 rounded-full text-xs`}
                  >
                    {company.status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <EyeBtn onClick={() => doAction(company, (company) => {
                      openModal()
                    })} />
                    <Link href={`/company/${company.id}`}><PencelBtn /></Link>
                    <DeleteBtn onClick={() => doActionTwo(company, (company) => {
                      openModalTwo()
                    })} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={1}
        itemsPerPage={6}
        onPageChange={() => window.alert("Hi ")}
        totalItems={25}
      />
    </div>
  );
};

export default CompanyList;
