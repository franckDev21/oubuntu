import LoginFooterIcon from "@/components/pages/login/LoginFooterIcon";
import LoginHeader from "@/components/pages/login/LoginHeader";
import { useAuth } from "@/context/AuthProvider";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/utils/validation";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";
import { toast } from "react-toastify";

type CredentialType = {
  email: string; 
  password: string
}

const Login: NextPage = () => {

  const { login, isLoggedIn } = useAuth()

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CredentialType>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (data: CredentialType) => {
    try {
      await login(data) 
    } catch (error) {
      toast.error((error as any)?.message || "Identifiant de connexion incorrect !")
    }
  };
  

  // si l'utilisateur est déjà connecter , on le redirige a l'accueil
  useEffect(() => {
    if(isLoggedIn){
      router.push('/')
    }
  },[isLoggedIn,router])

  return (
    // si j'enleve les cles "top-0 left-0 right-0 bottom-0"
    <section className="bg-[#F4F7FF] z-50 pt-10 overflow-hidden h-screen fixed top-0 left-0 right-0 bottom-0">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg
             bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
              <LoginHeader />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="Email"
                    className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 
                    text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary
                     focus-visible:shadow-none"
                  />
                  {errors.email && (
                    <span className="text-red-400 w-full inline-block text-left">{errors.email.message}</span>
                  )}
                </div>
                <div className="mb-6">
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                    className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 
                      px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none 
                      focus:border-primary focus-visible:shadow-none"
                  />
                  {errors.password && (
                    <span className="text-red-400 w-full inline-block text-left">{errors.password.message}</span>
                  )}
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="border-primary text-center w-full font-bold cursor-pointer rounded-md border
                     bg-primary py-3 px-5 text-base
                     text-white transition hover:bg-opacity-90"
                  >
                    {isSubmitting ? <Spinner/>:"Connexion"}
                  </button>
                </div>
              </form>
              <a
                className="mb-2 inline-block text-base text-[#adadad]
                 hover:text-primary hover:underline"
              >
                Forget Password?
              </a>
              <LoginFooterIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
