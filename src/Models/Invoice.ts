import InvoiceItem from "./InvoiceItem";

// type RE = Omit<Invoice, 'id' | 'title'>


export default interface Invoice {
  id: number;
  title: string;
  client_id: number;
  module_ext_id?: number | null;
  company_id: number;
  user_id: number;
  invoice_number: string;
  description: string;
  total_amount: number;
  total_amount_ttc: number;
  paid: boolean;
  payment_date: string;
  deadline: string;
  discount: number;
  total_product_or_service: number;
  payment_status: 'PAID' | 'PENDING' | 'LATE' | 'CANCELLED';
  image_bar_code?: string | null;

  invoice_items?: InvoiceItem[];

  created_at?: string;
  updated_at?: string;
}

export type InvoiceModuleType = "SUBSCRIPTION"|"GENERAL"|"EXAM_PAYMENT"|"TRAINING_PAYMENT";

export type ItemInvoicePostData = {
  product_or_service_name: string;
  quantity: number;
  unit_price: number;
  unit_price_paid: number;
  remainder_to_be_paid: number;
  discount: number;
};

export type InvoicePostData = {
  title: string;
  client_id: number;
  module_ext_id: number;
  company_id: number;
  user_id: number;
  invoice_number: string;
  description: string;
  total_amount: number;
  total_amount_ttc: number;
  discount: number;
  total_product_or_service: number;
  items: ItemInvoicePostData[];

  deadline?: string;
};
