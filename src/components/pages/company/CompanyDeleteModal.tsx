import CompanyService from "@/services/companies";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Modal } from "flowbite-react";
import React, { FC } from "react";
import { toast } from "react-toastify";

type CompanyDeleteModalProps = {
  className?: string;
  show: boolean;
  closeModal?: () => any;
  company_id: number;
};

const CompanyDeleteModal: FC<CompanyDeleteModalProps> = ({
  className = "",
  show,
  closeModal = () => {},
  company_id,
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (company_id: number) => CompanyService.delete(company_id),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["companies"]);
      toast.success(data?.message);
      closeModal();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const deleteCompany = () => {
    mutation.mutate(company_id);
  };

  return (
    <Modal size="sm" show={show} onClose={closeModal} className={className}>
      <Modal.Header>
        <div className="font-bold">Confirmation</div>
      </Modal.Header>
      <Modal.Body>
        <div className="">
          Voulez vous vraiment supprimer cette entreprise ?
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" onClick={deleteCompany} color="failure">
          {mutation.isLoading ? "Suppression en cours ..." : "Oui ! je confirme"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CompanyDeleteModal;
