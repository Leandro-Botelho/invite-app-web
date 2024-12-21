import BoxEventDetails from "@/app/shared/components/BoxEventDetails";
import Container from "@/app/shared/components/Container";
import EventsInformation from "@/app/shared/components/EventsInformation";
import { Share2 } from "lucide-react";
import Image from "next/image";

const event_mock = {
  name: "Evento do leandro",
  date: "12/02/2025",
  time: "17:08",
  description: "Descrição do evento do Leandro",
  location: "Local do Leandro",
};

const SuccessEvent = () => {
  return (
    <Container className="flex flex-col items-center gap-8 py-16">
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
              <p className="text-[#c7c6c6] text-sm">Seu evento foi criado:</p>
              <h1 className="font-bold text-3xl text-white">
                {event_mock.name}
              </h1>
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
              description={`${event_mock.date} às ${event_mock.time}`}
              title="Data"
            />
            <EventsInformation
              description={event_mock.location}
              title="Local"
            />
            <EventsInformation
              description={event_mock.description}
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
                title="Link do evento"
              />
            </div>
            <div className="flex flex-col gap-2 mt-7">
              <span className=" text-xs text-[#9ba2ad]">
                Acessar via Mobile
              </span>

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
