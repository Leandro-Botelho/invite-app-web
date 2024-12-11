import BoxEventDetails from "@/app/shared/components/BoxEventDetails";
import Container from "@/app/shared/components/Container";
import EventsInformation from "@/app/shared/components/EventsInformation";
import { KeyRound, Share2 } from "lucide-react";
import Image from "next/image";

const SuccessEvent = () => {
  return (
    <Container>
      <section className="shadow-lg rounded-lg border-[#494a47] border-[1px]">
        <div className="flex justify-between px-6 py-5 border-[#494a47] border-b-[1px]">
          {/* background image das etapas irá preencher essa */}
          <div className="flex gap-4">
            <div className="relative h-16 w-16 bg-[#202020] rounded-full">
              {/* url da imagem irá preencher essa */}
              <Image
                fill
                src="/icones/convidados.svg"
                alt="add-your-event"
                className="pt-[5px]"
              />
            </div>

            <div>
              <p className="text-[#c7c6c6] text-sm">
                Seu evento foi adicionado
              </p>
              <h1 className="font-bold text-3xl text-white">Nome do evento</h1>
            </div>
          </div>
          <Image
            src="/elementos.png"
            width={75}
            height={75}
            alt="element-create-event"
          />
        </div>

        <div className="flex flex-col gap-6 px-14 py-10">
          <div className="grid grid-cols-2 gap-2">
            <EventsInformation
              description="12/02/2025 às 17:08:00"
              title="Data"
            />
            <EventsInformation
              description="Descrição do evento"
              title="Local"
            />
            <EventsInformation
              description="Descrição do evento"
              title="Local"
              className="col-span-2"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <BoxEventDetails
                details="https://www.google.com.br"
                icon={<Share2 />}
                title="Compartilhar evento"
              />
              <BoxEventDetails
                details="https://www.google.com.br"
                icon={<Share2 />}
                title="Link administrador"
              />
              <BoxEventDetails
                details="admin@123456"
                icon={<KeyRound />}
                title="Senha temporária"
                message="Essa senha não será exibida novamente, salve-a em um local seguro."
              />
            </div>
            <div className="flex flex-col gap-2 mt-7">
              <span className=" text-xs text-[#9ba2ad]">Acessar via Mobile</span>

              <Image
                alt="qr-code-event"
                src="/icones/qr_code_mock.svg"
                width={120}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SuccessEvent;
