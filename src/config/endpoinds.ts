export const END_POINDS = {
  COMPANY: {
    GET_ALL: '/company',
    CREATE: '/company',
    UPDATE: (company_id: number) => `/company/${company_id}`,
    GET_ONE: (company_id: number) => `/company/${company_id}`,
    DELETE: (company_id: number) => `/company/${company_id}`,
    DEFINE_TO_DEFAULT: (company_id: number) => `/company/${company_id}/defult-company`,
  },

  INVOICE: {
    GET_ALL: '/invoice',
    CREATE: '/invoice',
    UPDATE: (invoice_id: number) => `/invoice/${invoice_id}`,
    GET_ONE: (invoice_id: number) => `/invoice/${invoice_id}`,
    DELETE: (invoice_id: number) => `/invoice/${invoice_id}`,
  }

} as const;