import Link from "next/link";
import HomeLogo from "../shared/components/Logo";
import { Button } from "../shared/components/shadcn-components/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/background-elementos.svg')] bg-cover flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-center gap-4">
        <HomeLogo />

        <p className="text-primary text-lg">
          Crie e gerencie o convite do seu evento de forma rápida e fácil, sem
          complicações
        </p>

        <div className="flex gap-4 items-center">
          <Link href="/create-event">
            <Button className="mt-6 font-semibold bg-button hover:bg-btnHover text-white">
              Crie seu próprio evento
            </Button>
          </Link>

          <Link href="/auth">
            <Button className="mt-6 font-semibold bg-[#23c55e] hover:bg-[#1c8843] text-white">
              Gerencie seus eventos
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
