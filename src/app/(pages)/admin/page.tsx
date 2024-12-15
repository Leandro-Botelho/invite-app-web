import Container from "@/app/shared/components/Container";
import Logo from "@/app/shared/components/Logo";
import BoxEvent from "./invite/_components/BoxEvent";

const eventMock = [
  {
    id: 1,
    url_image:
      "https://pocketparty.com.br/wp-content/uploads/2019/04/festa-aniversario-simples.jpg",
    nameEvent: "Evento 1",
    description: "Descrição do evento 1",
  },
  {
    id: 2,
    url_image:
      "https://pocketparty.com.br/wp-content/uploads/2019/04/festa-aniversario-simples.jpg",
    nameEvent: "Evento 2",
    description: "Descrição do evento 2",
  },
  {
    id: 3,
    url_image:
      "https://pocketparty.com.br/wp-content/uploads/2019/04/festa-aniversario-simples.jpg",
    nameEvent: "Evento 3",
    description: "Descrição do evento 3",
  },
];

const AdminPage = () => {
  return (
    <Container className="flex flex-col items-center gap-4 p-8">
      <Logo height={50} width={50} fontSize="1.25rem" />
      <main className="flex gap-4">
        {eventMock.map((event) => (
          <BoxEvent
            key={event.id}
            id={event.id}
            url_image={event.url_image}
            nameEvent={event.nameEvent}
            description={event.description}
          />
        ))}
      </main>
    </Container>
  );
};

export default AdminPage;
