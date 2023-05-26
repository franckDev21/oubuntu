import Company from "@/Models/Company";
import CompanyService from "@/services/companies";
import { formatDate } from "@/utils/helper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "flowbite-react";
import Image from "next/image";
import React, { FC } from "react";
import { toast } from "react-toastify";

type CompanyInfoModalProps = {
  className?: string;
  closeModal?: () => any;
  show: boolean;
  company?: Company;
};

const CompanyInfoModal: FC<CompanyInfoModalProps> = ({
  className = "",
  closeModal = () => {},
  show,
  company,
}) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (company_id: number) =>
      CompanyService.defineToDefault(company_id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      toast.success(data.message);
      closeModal();
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const defineAsPrimaryCompany = async () => {
    mutation.mutate(+(company?.id ?? 1));
  };

  return (
    <Modal className={`${className}`} onClose={closeModal} show={show}>
      <Modal.Header className="bg-slate-100">
        <div className="text-lg flex-wrap font-extrabold text-primary space-x-2 items-center flex">
          <Image
            className=" rounded-full flex-none w-10 h-10"
            src={company?.logo ? company?.logo : "/favicon.ico"}
            width={100}
            height={100}
            alt="logo"
          />
          <span>{company?.title}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-400">
            Créée le {formatDate(company?.created_at ?? "")}
          </span>
          <span
            className={`text-sm px-3 py-2 rounded-full font-light ${
              company?.is_default_company
                ? "text-green-400 bg-green-200"
                : "text-red-400 bg-red-100"
            }`}
          >
            Entreprise par défaut ? :{" "}
            {company?.is_default_company ? "OUI" : "NON"}
          </span>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="grid items-center grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <span>Email</span>
            <span className="px-3 py-2 rounded-md bg-slate-100 ">
              {company?.email}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span>Adresse</span>
            <span className="px-3 py-2 rounded-md bg-slate-100 ">
              {company?.address ?? "AUCUNE"}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span>Téléphone</span>
            <span className="px-3 py-2 rounded-md bg-slate-100 ">
              {company?.phone_number}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span>Site internet</span>
            <span className="px-3 py-2 rounded-md bg-slate-100 ">
              {company?.website ?? "Aucun"}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span>Api url</span>
            <span className="px-3 py-2 rounded-md bg-slate-100">
              {company?.api_url ?? "Aucune"}
            </span>
          </div>

          <button
            onClick={defineAsPrimaryCompany}
            className=" text-sm py-3 rounded-lg text-white font-bold bg-primary px-2"
          >
            {mutation.isLoading
              ? "Mise a jour en cours ..."
              : "Definir comme l'entreprise par défaut"}
          </button>

          <div className="flex flex-col space-y-1 col-span-2">
            <span>Description</span>
            <span className="px-3 py-2 rounded-md bg-slate-100">
              {company?.description ?? "Aucun"}
            </span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CompanyInfoModal;
