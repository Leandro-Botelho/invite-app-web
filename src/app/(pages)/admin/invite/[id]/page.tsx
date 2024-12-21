import AppCard from "@/app/shared/components/AppCard";
import AppCardContent from "@/app/shared/components/AppCard/AppCardContent";
import AppCardDescription from "@/app/shared/components/AppCard/AppCardDescription";
import AppCardHeader from "@/app/shared/components/AppCard/AppCardHeader";
import AppCardTitle from "@/app/shared/components/AppCard/AppCardTitle";
import Container from "@/app/shared/components/Container";
import Logo from "@/app/shared/components/Logo";
import Image from "next/image";
import FormGuest from "./_components/FormGuest";
import EventDetailsContainer from "@/app/shared/components/EventDetailsContainer";

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

const InvitePage = () => {
  return (
    <Container className="flex flex-col w-full items-center gap-8 py-16">
      <Logo width={50} height={50} fontSize="1.25rem" />

      <AppCard className="w-full max-w-[650px]">
        <AppCardHeader
          className={`relative border-b-1 border-bd_primary flex-row items-center gap-4 bg-cover bg-center`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${eventMock.background_image})`,
          }}
        >
          <Image
            width={75}
            height={75}
            src={eventMock.url_image}
            alt="add-your-event"
            className="border-1 rounded-full"
          />
          <div>
            <AppCardDescription
              className="text-gray-300"
              description="Você foi convidado para"
            />
            <AppCardTitle title={eventMock.nameEvent} className="text-3xl" />
          </div>
        </AppCardHeader>

        <AppCardContent className="py-8 flex flex-col gap-8">
          <EventDetailsContainer
            alias={eventMock.alias}
            date={eventMock.date}
            description={eventMock.description}
            location={eventMock.location}
            nameEvent={eventMock.nameEvent}
            time={eventMock.time}
          />

          <FormGuest />
        </AppCardContent>
      </AppCard>
    </Container>
  );
};

export default InvitePage;
