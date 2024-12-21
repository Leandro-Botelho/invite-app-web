"use client";

import "@/app/core/configZod";
import Logo from "@/app/shared/components/Logo";
import Container from "@/app/shared/components/Container";
import AppCardCreateEvent from "./_components/CreateEventContainer";
import FormCreateEventProvider from "./_provider/FormCreateEvent";

const CreateEvent = () => {
  return (
    <Container className="flex flex-col items-center gap-8 py-16">
      <Logo />

      <FormCreateEventProvider>
        <AppCardCreateEvent />
      </FormCreateEventProvider>
    </Container>
  );
};

export default CreateEvent;
