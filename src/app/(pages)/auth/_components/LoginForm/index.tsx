import { Button } from "@/app/shared/components/shadcn-components/button";
import { Input } from "@/app/shared/components/shadcn-components/input";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2 w-full">
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          className="border-bd_primary bg-[#0c0c0c] text-white"
        />

        <Input
          type="text"
          placeholder="Digite sua senha"
          className="border-bd_primary bg-[#0c0c0c] text-white"
        />
      </div>

      <Button
        className="transition-all self-center bg-button hover:bg-btnHover"
        type="submit"
      >
        Acessar evento
      </Button>
    </form>
  );
};

export default LoginForm;
