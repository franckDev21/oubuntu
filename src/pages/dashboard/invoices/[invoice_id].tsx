import Invoice from '@/components/pages/invoice/Invoice';
import { InvoiceProvider } from '@/context/InvoiceContext'
import InvoiceService from '@/services/invoices';
import { useQuery } from '@tanstack/react-query';
import { NextPage } from 'next'
import { useRouter } from 'next/router';
import React from 'react'

const EditInvoice:NextPage = () => {
  const router = useRouter();
  const { invoice_id } = router.query;

  const { data: invoice } = useQuery({
    enabled: !!invoice_id,
    queryFn: () => InvoiceService.getOne(+(invoice_id ?? 1)),
    queryKey: ['invoice',+(invoice_id ?? 1)]
  })

  return (
    <InvoiceProvider>
      <div className=" mt-4 px-6 flex items-center justify-between">
        <div>
          <h1 className=" text-2xl  font-extrabold text-primary ">
            Edition de la facture
          </h1>

          <button></button>
        </div>
      </div>

      <Invoice invoice={invoice} className=' bg-white' />
    </InvoiceProvider>
  )
}

export default EditInvoice