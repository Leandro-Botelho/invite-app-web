import Container from "@/app/shared/components/Container";
import Logo from "@/app/shared/components/Logo";
import CreateUserForm from "./_components/CreateUserForm";

const CreateUser = () => {
  return (
    <Container className="w-full max-w-[480px]">
      <section className="flex justify-center mb-12 ">
        <Logo fontSize="text-lg" height={60} width={60} />
      </section>

      <section className="bg-[#18181b]  py-6 px-8 rounded-lg shadow-lg flex flex-col gap-4 items-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-3xl">Crie sua conta!</h1>
        </div>
        <CreateUserForm />
      </section>
    </Container>
  );
};

export default CreateUser;
