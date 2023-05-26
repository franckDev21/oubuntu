import { AxiosResponse } from "axios";
import Company from "@/Models/Company";
import httpClient from "./http";
import { END_POINDS } from "@/config/endpoinds";

const toData = (r: AxiosResponse) => r.data;

class CompanyService {

  // lister tous les entreprises
  static getAll = (): Promise<Company[]> => {
    return httpClient.get(END_POINDS.COMPANY.GET_ALL).then(toData);
  };

  static getOne = (company_id: number): Promise<Company> => {
    return httpClient.get(END_POINDS.COMPANY.GET_ONE(company_id)).then(toData);
  };

  static delete = (company_id: number): Promise<{message: string}> => {
    return httpClient.delete(END_POINDS.COMPANY.DELETE(company_id)).then(toData);
  };

  static update = (company_id: number, data: Company): Promise<{message:string; data:Company;}> => {
    return httpClient.patch(END_POINDS.COMPANY.UPDATE(company_id),data).then(toData);
  };

  static create = (companyData: Company): Promise<{message:string; data:Company;}> => {
    return httpClient.post(END_POINDS.COMPANY.CREATE,companyData).then(toData);
  };

  static defineToDefault = (company_id: number):Promise<{message: string}> => {
    return httpClient.post(END_POINDS.COMPANY.DEFINE_TO_DEFAULT(company_id)).then(toData);
  }

}

export default CompanyService;
