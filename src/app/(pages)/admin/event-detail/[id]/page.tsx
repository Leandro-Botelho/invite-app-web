import Container from "@/app/shared/components/Container";
import EventDetailsContainer from "@/app/shared/components/EventDetailsContainer";
import Logo from "@/app/shared/components/Logo";
import CardDetailsEvent from "./_components/CardDetailsEvent";
import { Button } from "@/app/shared/components/shadcn-components/button";
import { RefreshCcw } from "lucide-react";

const eventMock = {
  id: 1,
  background_image:
    "https://pocketparty.com.br/wp-content/uploads/2019/04/festa-aniversario-simples.jpg",
  url_image:
    "https://tuacasa.uol.com.br/wp-content/uploads/2019/10/festa-de-aniversario-00.jpg",
  nameEvent: "Evento do Leandro",
  alias: "evento-do-leandro",
  date: "10/10/2021",
  time: "20:00",
  description: "Descrição do evento do Leandro",
  location: "Local do Leandro",
};

const EventPage = () => {
  return (
    <Container className="flex flex-col gap-4 items-center ">
      <Logo width={75} height={75} fontSize="text-xl" />
      <main className="w-full max-w-[850px] flex flex-col gap-8">
        <EventDetailsContainer
          alias={eventMock.alias}
          date={eventMock.date}
          description={eventMock.description}
          location={eventMock.location}
          nameEvent={eventMock.nameEvent}
          time={eventMock.time}
        />

        <section className="flex gap-4 items-center">
          <CardDetailsEvent
            number={100}
            title="Convidados"
            src="/icones/convidados.svg"
          />
          <CardDetailsEvent
            number={1}
            title="Confirmações"
            src="/icones/confirmados.svg"
          />
          <CardDetailsEvent
            number={11}
            title="Total confirmados"
            src="/icones/acompanhantes.svg"
          />
        </section>

        <Button className="bg-button hover:bg-btnHover flex gap-3 items-center self-end">
          <RefreshCcw />
          Atualizar lista de convidados
        </Button>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Listagem de convidados</h2>
          <div className="flex items-center gap-8">
            <div className="bg-[#18181b] rounded-lg p-4 flex gap-4 justify-between w-60 items-center flex-col">
              <p>Confirmaram presença:</p>
              <Button className="w-28 bg-[#23c55e] hover:bg-[#1c8843]">
                Ver todos
              </Button>
            </div>
            <div className="bg-[#18181b] rounded-lg p-4 flex gap-4 justify-between w-60 items-center flex-col">
              <p>Confirmaram ausência:</p>
              <Button className="w-28 bg-red-600 hover:bg-red-700">
                Ver todos
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default EventPage;
