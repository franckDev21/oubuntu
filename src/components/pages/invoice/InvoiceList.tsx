import FakeTable from "@/components/_/FakeTable";
import Pagination from "@/components/_/Pagination";
import EyeBtn from "@/components/uikit/EyeBtn";
import PencelBtn from "@/components/uikit/PencelBtn";
import InvoiceService from "@/services/invoices";
import { formatDate } from "@/utils/helper";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const InvoiceList = () => {

  const { data: invoices, isLoading } = useQuery({
    queryFn: InvoiceService.getAll,
    queryKey: ['invoices']
  })

  if (isLoading) {
    return <FakeTable />;
  }
  
  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-slate-100 border-t text-gray-600 uppercase text-xs leading-normal">
              <th className="py-3 px-6 text-left">N°</th>
              <th className="py-3 px-6 text-left">Date de création</th>
              <th className="py-3 px-6 text-center">Date delais</th>
              <th className="py-3 px-6 text-center">Nombre de services</th>
              <th className="py-3 px-6 text-center">Montant</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {invoices?.map((invoice,i) => (
              <tr key={i} className="border-b border-gray-200 hover:bg-gray-100 ">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  # {invoice.id}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {formatDate(invoice.created_at ?? '')}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {formatDate(invoice.deadline ?? '')}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {invoice.invoice_items?.length} produit(s)/services(s)
                </td>
                <td className="py-3 px-6  font-semibold text-left whitespace-nowrap">
                  {invoice.total_amount ?? 0} FCFA
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <span className={`px-2 py-1 font-semibold text-xs rounded-full ${invoice.paid ? 'bg-green-100 text-green-500':'bg-red-100 text-red-400'}`}>{invoice.paid ? 'Payée':'Impayée'}</span>
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap flex space-x-1 items-center">
                  <EyeBtn />
                  <Link href={`/invoices/${invoice.id}`}><PencelBtn /></Link>
                  <button className={`px-3 py-1 ${!invoice.paid ? "bg-primary text-white":'text-gray-500 bg-gray-200 opacity-80 select-none pointer-events-none'} rounded-md  font-semibold`}>payer</button>
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

export default InvoiceList;
