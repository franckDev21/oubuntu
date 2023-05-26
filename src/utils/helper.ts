import { InvoiceModuleType } from "@/Models/Invoice";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export const formatDateFr = (dateTime: Date | null): string => {
  if (!dateTime) return "";
  const formattedDate = format(dateTime, "dd MMMM yyyy", { locale: fr });
  const formattedTime = format(dateTime, "HH:mm", { locale: fr });

  return `${formattedDate} à ${formattedTime}`;
};

export const formatDatetime = (dateTime: string) => {
  if (!dateTime) return;
  return formatDateFr(new Date(dateTime));
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const getNameModelInvoice = (model: InvoiceModuleType): string => {
  return {
    SUBSCRIPTION: "Nouvelle inscription",
    GENERAL: "",
    EXAM_PAYMENT: "Paiement des frais d'examen",
    TRAINING_PAYMENT: "Paiement des frais de formation",
  }[model]
} 

export const getDateForInputDate = () => {
  const currentDate = new Date();

  // Récupérer les parties de la date
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  // Format de la date pour le champ input de type "date"
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}
