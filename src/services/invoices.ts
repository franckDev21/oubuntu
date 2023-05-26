import { AxiosResponse } from "axios";
import httpClient from "./http";
import { END_POINDS } from "@/config/endpoinds";
import Invoice, { InvoicePostData } from "@/Models/Invoice";

const toData = (r: AxiosResponse) => r.data;

class InvoiceService {

  // lister tous les factues
  static getAll = (): Promise<Invoice[]> => {
    return httpClient.get(END_POINDS.INVOICE.GET_ALL).then(toData);
  };

  static getOne = (incoice_id: number): Promise<Invoice> => {
    return httpClient.get(END_POINDS.INVOICE.GET_ONE(incoice_id)).then(toData);
  };

  static update = (invoice_id: number, data: InvoicePostData): Promise<{message:string; data:Invoice;}> => {
    return httpClient.patch(END_POINDS.INVOICE.UPDATE(invoice_id),data).then(toData);
  };

  static create = (invoiceData: InvoicePostData): Promise<{message:string; data:Invoice;}> => {
    return httpClient.post(END_POINDS.INVOICE.CREATE,invoiceData).then(toData);
  };


}

export default InvoiceService;
