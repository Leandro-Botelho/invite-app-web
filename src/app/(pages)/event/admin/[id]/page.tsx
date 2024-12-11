import Container from "@/app/shared/components/Container";
import Logo from "@/app/shared/components/Logo";
import { Button } from "@/app/shared/components/shadcn-components/button";
import { Input } from "@/app/shared/components/shadcn-components/input";

const AuthAdmin = () => {
  return (
    <Container className="w-full max-w-[480px]">
      <section className="flex justify-center mb-12 ">
        <Logo fontSize="text-lg" height={60} width={60} />
      </section>

      <section className="bg-[#18181b]  py-6 px-8 rounded-lg shadow-lg flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-3xl">Bem vindo(a)</h1>
          <p className="font-semibold">Usuário</p>
        </div>
        <form className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-[#f7f4e6] text-xs self-center">
              Insira sua senha para gerenciar o evento
            </label>
            <Input type="text" placeholder="Digite sua senha" />
          </div>

          <Button
            className="transition-all self-center bg-[#3b82f6] hover:bg-[#3575db]"
            type="submit"
          >
            Acessar evento
          </Button>
        </form>
      </section>
    </Container>
  );
};

export default AuthAdmin;
