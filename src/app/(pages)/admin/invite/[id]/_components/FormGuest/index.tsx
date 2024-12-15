"use client";

import "@/app/core/configZod";
import TabsConfirmed from "@/app/shared/components/Tabs";
import { IFormGuest, useFormGuest } from "../../_hooks/useFormGuest";
import AppInput from "@/app/shared/components/AppInput";
import { useState } from "react";
import { Button } from "@/app/shared/components/shadcn-components/button";

const FormGuest = () => {
  const { control, handleSubmit } = useFormGuest();
  const [presenceConfirmed, setPresenceConfirmed] = useState<"yes" | "no">(
    "yes"
  );
  const [hasCompanion, setHasCompanion] = useState<"yes" | "no">("yes");

  const onSubmit = (data: IFormGuest) => {
    const formData = {
      ...data,
      presenceConfirmed: presenceConfirmed === "yes" ? true : false,
      hasCompanion: hasCompanion === "yes" ? true : false,
    };

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <h3 className="text-gray-400 font-bold border-b-1 pb-1">
        Insira seus dados
      </h3>
      <AppInput control={control} name="name" label="Nome" />
      <AppInput control={control} name="email" label="Email" />

      <div className="flex justify-between gap-8 w-full items-center">
        <TabsConfirmed
          label="Presença confirmada?"
          activeTab={presenceConfirmed}
          setActiveTab={setPresenceConfirmed}
          tabs={["yes", "no"]}
        />

        <TabsConfirmed
          label="Possui acompanhantes?"
          activeTab={hasCompanion}
          setActiveTab={(tab) => setHasCompanion(tab)}
          tabs={["yes", "no"]}
        />
      </div>

      <Button
        type="submit"
        className={`self-center ${
          presenceConfirmed === "yes"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-red-600 hover:bg-red-700"
        }`}
      >
        Confirmar {presenceConfirmed === "yes" ? "presença" : "ausência"}
      </Button>
    </form>
  );
};

export default FormGuest;
