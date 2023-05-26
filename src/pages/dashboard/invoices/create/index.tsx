import InvoiceStepper from '@/components/pages/invoice/InvoiceStepper'
import { NextPage } from 'next'
import React from 'react'

const index: NextPage = () => {
  return (
    <>
      <div className=" mt-4 px-6 flex items-center justify-between">
        <div>
          <h1 className=" text-2xl font-extrabold text-primary ">
            Création {"d'une"} nouvelle facture
          </h1>
        </div>
      </div>

      <InvoiceStepper className=' bg-white' />
    </>
  )
}

export default index
