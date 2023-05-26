import InvoiceItemModel from '@/Models/InvoiceItem';
import React, { ChangeEvent, FC, useState } from 'react'
import InvoiceItem from './InvoiceItem';
import { BsPlus } from 'react-icons/bs';
import { useInvoice } from '@/context/InvoiceContext';
import { useAuth } from '@/context/AuthProvider';

type InvoiceItemListProps = {
  className?: string;
  defaulInvoiceItems?: InvoiceItemModel[];
}

const InvoiceItemList:FC<InvoiceItemListProps> = ({ className = '', defaulInvoiceItems = [] }) => {

  const { currentSession, currentTraining, model, isInter, setInvoiceItems } = useInvoice();

  const [items,setItems] = useState<InvoiceItemModel[]>(defaulInvoiceItems);

  const addInvoiceItem = () => {
    if(currentSession && currentTraining){
      let price = 0;

      if(isInter){ // si on est en inter (des formartions ou sessions en inter)
        if(model === 'EXAM_PAYMENT'){
          price = currentSession.inter_exam_costs
        }else{
          price = currentSession.inter_training_costs
        }
      }else{
        if(model === 'EXAM_PAYMENT'){
          price = currentSession.in_house_exam_costs
        }else{
          price = currentSession.in_house_training_costs
        }
      }
      const dataItems: InvoiceItemModel[] = [...items, {
        discount: 0,
        id: Date.now(),
        quantity: 1,
        product_or_service_name: `${currentTraining?.title} | ${currentSession?.start} ${currentSession?.end}`,
        remainder_to_be_paid: 0,
        unit_price: price ?? 0,
        unit_price_paid: price ?? 0,
        state: 'ALL_PAID',
        total_price: price
      }];
      setItems(dataItems);
      setInvoiceItems(dataItems)
    }
  }

  const deleteInvoiceItem = (id: number) => {
    setItems(items.filter(i => i.id !== id))
    setInvoiceItems(items.filter(i => i.id !== id))
  }

  const updateInvoiceField = (id: number, e: ChangeEvent<HTMLInputElement>, type: "QTE"|"PRICE") => {
    let dataItems: InvoiceItemModel[] = [];
    if(type === 'PRICE'){
      dataItems = items.map(item => {
        if(item.id === id && item.unit_price >= +e.target.value){
          return { 
            ...item, 
            unit_price_paid: +e.target.value, 
            state: (+e.target.value === item.unit_price) ? 'ALL_PAID':'ADVANCED',
            total_price: +e.target.value * item.quantity
          }
        }
        return {...item}
      })
    }else{
      dataItems = items.map(item => {
        if(item.id === id){
          return { 
            ...item, 
            quantity: +e.target.value, 
            total_price: +e.target.value * item.unit_price_paid
          }
        }
        return {...item}
      });
    }
    setItems(dataItems);
    setInvoiceItems(dataItems);
  }

  return (
    <>
      <table className={`${className} w-full  table-auto mt-8`}>
        <thead>
          <tr className='bg-slate-100 border-t text-gray-600 uppercase text-xs leading-normal'>
            <td className="py-3 px-6 text-left">Produit/Service</td>
            <td className="py-3 px-6 text-left">Prix unitaire</td>
            <td className="py-3 px-6 text-left">Montant payé</td>
            <td className="py-3 px-6 text-left">Etat</td>
            <td className="py-3 px-6 text-left">Qté</td>
            <td className="py-3 px-6 text-left">Total</td>
          </tr>
        </thead>
        <tbody>
          {items.map(item => <InvoiceItem
            deleteItem={deleteInvoiceItem} 
            invoiceItem={item} key={item.id}  
            updateField={updateInvoiceField}
          />)}
        </tbody>
        {
          items.length > 0 &&
          <tfoot>
            <tr className=' border-t text-gray-600 uppercase text-xs leading-normal'>
              <th className='py-3 px-6 text-right bg-slate-100' colSpan={6}>
                {items.reduce((accumulator, item) => accumulator + (item.total_price ?? 0), 0)} FCFA
              </th>
            </tr>
          </tfoot>
        }
      </table>

      <button type='button' onClick={addInvoiceItem} className='mt-5 space-x-1 inline-flex items-center px-2 text-xs font-semibold py-1 bg-primary text-white rounded-full'>
        <BsPlus className=' text-xl translate-y-[1.5px]' />
        <span>Nouvelle ligne</span>
      </button>
    </>
  )
}

export default InvoiceItemList