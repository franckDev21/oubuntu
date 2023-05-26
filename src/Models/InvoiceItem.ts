export default interface InvoiceItem {
  id: number;
  product_or_service_name: string;
  quantity: number;
  unit_price: number;
  unit_price_paid: number;
  remainder_to_be_paid: number;
  discount: number;

  state?: "ADVANCED" | "ALL_PAID";
  total_price?: number;
}
