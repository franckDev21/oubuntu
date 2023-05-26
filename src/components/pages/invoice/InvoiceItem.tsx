import InvoiceItem from '@/Models/InvoiceItem';
import React, { ChangeEvent, FC } from 'react'
import { FaTimes } from 'react-icons/fa';

type InvoiceItemProps = {
  className?: string;
  invoiceItem: InvoiceItem;
  deleteItem?: (itemId: number) => any;
  updateField?: (itemId: number, e: ChangeEvent<HTMLInputElement>, type: "QTE"|"PRICE") => any
}

const InvoiceItem: FC<InvoiceItemProps> = ({ 
  className = '', 
  invoiceItem,
  deleteItem = () => {} ,
  updateField = () => {}
}) => {
  return (
    <tr className={`text-xs relative group ${className}`}>
      <td className='max-w-[100px] py-1 pr-6 text-left'>{invoiceItem.product_or_service_name}</td>
      <td className="py-1 px-6 text-left">{invoiceItem.unit_price} FCFA</td>
      <td className="py-1 px-6 text-left">
        <input min={1} onChange={event => updateField(invoiceItem.id, event, 'PRICE')} className=' text-xs px-2 bg-slate-100  rounded-lg outline-none border-none ring-0 focus:outline-none focus:border-none focus:ring-0 py-1' type="number" value={invoiceItem.unit_price_paid} />
      </td>
      <td className="py-1 px-6 text-left">
        <span className={`px-2 py-1 lowercase first-letter:uppercase inline-block rounded-full text-xs ${invoiceItem.state === 'ADVANCED' ? 'bg-yellow-100 text-yellow-300':'bg-green-100 text-green-500'}`}>{invoiceItem.state}</span>
      </td>
      <td className="py-1 px-6 text-left">
        <input onChange={event => updateField(invoiceItem.id, event, 'QTE')} className='text-xs px-2 bg-slate-100 rounded-lg outline-none border-none ring-0 focus:outline-none focus:border-none focus:ring-0 py-1' type="number" value={invoiceItem.quantity} />
      </td>
      <td className="py-1 pl-6 text-left">{invoiceItem.total_price} FCFA</td>

      <span onClick={() => deleteItem(invoiceItem.id)} title='Supprimer la ligne' className='group-hover:opacity-100 hover:text-red-400 opacity-0 cursor-pointer absolute p-2 bg-slate-100 text-gray-500 -right-6 top-1/2 -translate-y-1/2'>
        <FaTimes />
      </span>
    </tr>
  )
}

export default InvoiceItem