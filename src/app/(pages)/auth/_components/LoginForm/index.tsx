"use client";

import "@/app/core/configZod";
import LoginInput from "@/app/shared/components/LoginInput";
import { Button } from "@/app/shared/components/shadcn-components/button";
import useAuth, { IAuth } from "../../_hooks/useAuth";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const LoginForm = () => {
  const { control, handleSubmit } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (data: IAuth) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 w-full"
    >
      <div className="flex flex-col gap-2 w-full">
        <LoginInput
          control={control}
          name="email"
          placeholder="Digite seu e-mail"
        />

        <div className="flex gap-2 items-center">
          <LoginInput
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            icon={
              showPassword ? (
                <EyeOff
                  className="cursor-pointer"
                  onClick={handleShowPassword}
                />
              ) : (
                <Eye className="cursor-pointer" onClick={handleShowPassword} />
              )
            }
          />
        </div>
      </div>

      <Button
        className="transition-all w-32 self-center bg-button hover:bg-btnHover"
        type="submit"
      >
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
