import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("L'adresse e-mail est requise")
    .email("L'adresse e-mail est invalide"),
  password: yup
    .string()
    .max(40,"Le mot de passe ne dois pas dépassé 40 charactères")
    .required("L'adresse e-mail est requise")
});

export const CompanySchema = yup.object().shape({
  title: yup.string().required("Le titre est requis"),
  description: yup
    .string()
    .max(1000, "La longueur de ce champ ne dois pas dépassé 1000 charactères"),
  phone_number: yup
    .string()
    .required("Le numéro de téléphone est requis")
    .max(100, "La longueur de ce champ ne dois pas dépassé 100 charactères"),
  api_url: yup
    .string()
    .required("L'url d'api est requise")
    .max(100, "La longueur de ce champ ne dois pas dépassé 100 charactères"),
  website: yup
    .string()
    .max(100, "La longueur de ce champ ne dois pas dépassé 100 charactères"),
  address: yup
    .string()
    .max(100, "La longueur de ce champ ne dois pas dépassé 100 charactères"),
  email: yup
    .string()
    .required("L'adresse e-mail est requise")
    .email("L'adresse e-mail est invalide"),
});

export const InvoiceSchema = yup.object().shape({
  title: yup.string().required("Le titre est requis"),
  user_id: yup
    .string().required("Ce champ est requis"),
  date_start: yup
    .string().required("Ce champ est requis"),
  date_end: yup
    .string().required("Ce champ est requis"),
  description: yup
    .string()
    .max(1000, "La longueur de ce champ ne dois pas dépassé 1000 charactères"),
});

export type InvoiceSchemaType = {
  title: string;
  user_id: string;
  date_start: string;
  date_end: string;
  description?: string;
}

