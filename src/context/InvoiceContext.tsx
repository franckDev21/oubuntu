import Company from "@/Models/Company";
import { InvoiceModuleType } from "@/Models/Invoice";
import InvoiceItem from "@/Models/InvoiceItem";
import Session from "@/Models/Session";
import Training from "@/Models/Training";
import React, { createContext, FC, ReactNode, useContext, useState } from "react";

interface InvoiceContextProps {
  isInter: boolean;
  company?: Company;
  model?: InvoiceModuleType;
  currentSession?: Session;
  currentTraining?: Training;
  type?: "INVOICE" | "PROFORMA";
  invoiceItems: InvoiceItem[];

  setIsInter: (value: boolean) => any;
  setCompany: (company?: Company) => any;
  setInvoiceItems: (items: InvoiceItem[]) => any;
  setCurrentSession: (session?: Session) => any;
  setCurrentTraining: (training?: Training) => any;
  setType: (type: "INVOICE" | "PROFORMA") => any;
  setModel: (model: InvoiceModuleType) => any;
}

const InvoiceContext = createContext<InvoiceContextProps>({
  isInter: true,
  type: undefined,
  model: undefined,
  company: undefined,
  invoiceItems: [],
  currentSession: undefined,
  currentTraining: undefined,

  setType: () => {},
  setIsInter: () => {},
  setModel: () => {},
  setInvoiceItems: () => {},
  setCompany: () => {},
  setCurrentSession: () => {},
  setCurrentTraining: () => {},
});

export const InvoiceProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [currentSession,setCurrentSession] = useState<Session|undefined>()
  const [currentTraining,setCurrentTraining] = useState<Training|undefined>()
  const [type,setType] = useState<"INVOICE"|"PROFORMA">('INVOICE')
  const [isInter,setIsInter] = useState(true);
  const [company,setCompany] = useState<Company|undefined>()
  const [model,setModel] = useState<InvoiceModuleType|undefined>()
  const [invoiceItems,setInvoiceItems] = useState<InvoiceItem[]>([])

  const contextValue: InvoiceContextProps = {
    type,
    model,
    company,
    isInter,
    currentSession,
    currentTraining,
    invoiceItems,
    setType: (type) => setType(type),
    setIsInter: (value) => setIsInter(value),
    setInvoiceItems: (items) => setInvoiceItems(items),
    setModel: (model) => setModel(model),
    setCompany: (company) => setCompany(company),
    setCurrentSession: (session) => setCurrentSession(session),
    setCurrentTraining: (training) => setCurrentTraining(training),
  };

  return (
    <InvoiceContext.Provider value={contextValue}>{children}</InvoiceContext.Provider>
  );
};

export default InvoiceContext;

export const useInvoice = (): InvoiceContextProps => useContext(InvoiceContext);
