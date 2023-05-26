import React, { FC, useState } from 'react'
import StepContentBlock from './StepContentBlock';
import { useInvoice } from '@/context/InvoiceContext';

type SelectInvoiceTypeProps = {
  className?: string;
}

const SelectInvoiceType: FC<SelectInvoiceTypeProps> = ({ className = ''}) => {

  const { setType } = useInvoice();

  const [invoiceTypes,setInvoiceTypes] = useState<{ id: number;value:"INVOICE"|"PROFORMA";label: string; active: boolean; }[]>([
    { id: 1, value: 'INVOICE', label: 'Facture', active: true },
    { id: 2, value: 'PROFORMA', label: 'Proforma', active: false },
  ])

  const handleClick = (id: number) => {
    // mettre a jour le store
    setType(invoiceTypes.find(type => type.id === id)?.value ?? 'INVOICE');

    setInvoiceTypes(invoiceTypes.map(type => {
      if(type.id === id){
        return {
          ...type,
          active: true
        }
      }
      return {
        ...type,
        active: false
      }
    }))
  }

  return (
    <StepContentBlock className={`rounded-md p-2 space-y-4 ${className}`} title='Chosissez le type de facture que vous voulez' >
      <div className=' grid grid-cols-3 gap-4'>
        {invoiceTypes.map((type,i) => (
          <div onClick={() => handleClick(type.id)} key={i} className={`rounded-lg bg-slate-100 px-4 py-3 cursor-pointer flex items-center border space-x-2 ${type.active ? 'border-primary':'border-transparent'}`}>
            <span className={`w-5 h-5 border-2 inline-flex items-center justify-center rounded-full ${type.active ? 'border-primary':'border-gray-400'}`}>
              <span className={`w-3 h-3 ${type.active && 'bg-primary'} rounded-full`}></span>
            </span>
            <h2 className='text-sm font-semibold text-gray-500'>{type.label}</h2>
          </div>
        ))}
      </div>
    </StepContentBlock>
  )
}

export default SelectInvoiceType