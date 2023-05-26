import Invoice from "./Invoice";
import User from "./User";

export default interface Company {
  id: string;
  title: string;
  logo?: string;
  description?: string;
  website?: string;
  email: string;
  api_url?: string;
  phone_number?: string;
  address?: string;

  created_at?: string;
  updated_at?: string;
  status?: boolean;
  is_default_company?: boolean;

  user?: User;
  invoices?: Invoice[]
}