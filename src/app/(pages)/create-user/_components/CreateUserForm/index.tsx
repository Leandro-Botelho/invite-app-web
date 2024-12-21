"use client";

import "@/app/core/configZod";
import { Button } from "@/app/shared/components/shadcn-components/button";
import useCreateUser, { ICreateUser } from "../../_hooks/useCreateUserForm";
import LoginInput from "@/app/shared/components/LoginInput";
import { useState } from "react";

const CreateUserForm = () => {
  const { handleSubmit, control } = useCreateUser();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (data: ICreateUser) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 w-full"
    >
      <div className="flex flex-col gap-2 w-full">
        <LoginInput control={control} placeholder="Nome completo" name="name" />
        <LoginInput control={control} placeholder="E-mail" name="email" />
        <LoginInput
          control={control}
          placeholder="Senha"
          name="password"
          type={showPassword ? "text" : "password"}
          onClick={handleShowPassword}
        />
      </div>

      <Button
        className=" w-32 transition-all self-center bg-button hover:bg-btnHover"
        type="submit"
      >
        Criar conta
      </Button>
    </form>
  );
};

export default CreateUserForm;
