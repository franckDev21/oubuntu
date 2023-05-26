import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Company from "@/Models/Company";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import CompanyService from "@/services/companies";
import { toast } from 'react-toastify';
import { useRouter } from "next/router";
import { CompanySchema } from "@/utils/validation";

type CompanyFormProps = {
  className?: string;
  defaultCompany?: Company;
};

const CompanyForm: FC<CompanyFormProps> = ({ className = "", defaultCompany }) => {
  const [image, setImage] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Company>({
    resolver: yupResolver(CompanySchema),
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(event.target.files!).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (data: Company) => {
    let companyData =defaultCompany ? 
      await CompanyService.update(+defaultCompany.id,{...data, logo: image}) :
      await CompanyService.create({...data, logo: image})
    
    if(companyData.message){
      toast.success(companyData.message)
      router.back()
    }
  };

  useEffect(() => {
    if(defaultCompany){
      setValue('address',defaultCompany.address ?? '')
      setValue('website',defaultCompany.website ?? '')
      setValue('phone_number',defaultCompany.phone_number)
      setValue('title',defaultCompany.title)
      setValue('email',defaultCompany.email ?? '')
      setValue('description',defaultCompany.description ?? '')
      setValue('api_url',defaultCompany.api_url)
      setImage(defaultCompany?.logo ?? '')
    }
  },[defaultCompany,setValue])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`p-3 w-full border-2 border-dashed mt-4  ${className}`}
    >
      <label
        htmlFor="photo"
        className="w-28 inline-block cursor-pointer h-28  relative border shadow-sm bg-gray-100 rounded-md"
      >
        <input
          type="file"
          id="photo"
          multiple
          onChange={handleInputChange}
          style={{ display: "none" }}
          accept="image/*"
        />
        <Image
          width={200}
          height={200}
          src={image ? image : "/favicon.ico"}
          className=" absolute w-full h-full rounded-md top-0 object-cover"
          alt=""
        />

        <span
          onClick={(e) => {
            e.preventDefault();
            setImage("");
          }}
          className=" absolute z-20 -top-4 -right-6 border p-1 bg-gray-50"
        >
          <FaTimes />
        </span>
      </label>
      <div className="gap-4  grid grid-cols-2">
        <div>
          <label>Nom de {"l'entreprise"}</label>
          <input
            {...register("title")}
            className="px-4 text-gray-500 outline-none border-none ring-0 focus:ring-0 pr-10 rounded-md w-full py-2 bg-slate-100"
          />
          {errors.title && (
            <span className="text-red-400">{errors.title.message}</span>
          )}
        </div>

        <div>
          <label>
            Téléphone
          </label>
          <input
            {...register("phone_number")}
            className="px-4 text-gray-500 outline-none border-none ring-0 focus:ring-0 pr-10 rounded-md w-full py-2 bg-slate-100"
          />
          {errors.phone_number && (
            <span className="text-red-400">{errors.phone_number.message}</span>
          )}
        </div>

        <div>
          <label>Adresse e-mail</label>
          <input
            {...register("email")}
            className="px-4 text-gray-500 outline-none border-none ring-0 focus:ring-0 pr-10 rounded-md w-full py-2 bg-slate-100"
          />
          {errors.email && (
            <span className="text-red-400">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label>
            Url api
          </label>
          <input
            type="text"
            {...register("api_url")}
            className="px-4 text-gray-500 outline-none border-none ring-0 focus:ring-0 pr-10 rounded-md w-full py-2 bg-slate-100"
          />
          {errors.api_url && (
            <span className="text-red-400">{errors.api_url.message}</span>
          )}
        </div>

        <div>
          <label>
            Adresse de {"l'entreprise"}{" "}
            <em className=" text-gray-400">(Facultatif)</em>
          </label>
          <input
            type="text"
            {...register("address")}
            className="px-4 text-gray-500 outline-none border-none ring-0 focus:ring-0 pr-10 rounded-md w-full py-2 bg-slate-100"
          />
          {errors.address && (
            <span className="text-red-400">{errors.address.message}</span>
          )}
        </div>

        <div>
          <label>
            Site internet <em className=" text-gray-400">(Facultatif)</em>
          </label>
          <input
            type="text"
            {...register("website")}
            className="px-4 text-gray-500 outline-none border-none ring-0 focus:ring-0 pr-10 rounded-md w-full py-2 bg-slate-100"
          />
          {errors.website && (
            <span className="text-red-400">{errors.website.message}</span>
          )}
        </div>

        <div className=" col-span-2">
          <label>
            Description <em className=" text-gray-400">(Facultatif)</em>
          </label>
          <textarea
            className="px-4 text-gray-500 outline-none border-none ring-0 focus:ring-0 pr-10 rounded-md w-full py-2 bg-slate-100"
            {...register("description")}
          ></textarea>
          {errors.description && (
            <span className="text-red-400">{errors.description.message}</span>
          )}
        </div>
      </div>

      <button
        className="px-4 mt-3 py-2 rounded-md text-white bg-primary"
        type="submit"
      >
        {isSubmitting ? "En cours de création ...":(defaultCompany? "Mettre à jour l'entreprise":"Enregister l'entreprise")}
      </button>
    </form>
  );
};

export default CompanyForm;
