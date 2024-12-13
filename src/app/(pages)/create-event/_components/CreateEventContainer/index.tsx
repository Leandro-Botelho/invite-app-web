"use client";

import AppCard from "@/app/shared/components/AppCard";
import AppCardContent from "@/app/shared/components/AppCard/AppCardContent";
import AppCardDescription from "@/app/shared/components/AppCard/AppCardDescription";
import AppCardHeader from "@/app/shared/components/AppCard/AppCardHeader";
import AppCardTitle from "@/app/shared/components/AppCard/AppCardTitle";
import { useState } from "react";
import BadgeStepConfirmed from "../BadgeStepConfirmed";
import StepOne from "../StepOne";
import StepThree from "../StepThree";
import StepTwo from "../StepTwo";
import Image from "next/image";
import { useFormCreateEvent } from "../../_provider/FormCreateEvent";
import { ICreateEvent } from "../../schema/CreateEventSchema";

// https://pocketparty.com.br/wp-content/uploads/2019/04/festa-aniversario-simples.jpg

const AppCardCreateEvent = () => {
  const [step, setStep] = useState(1);
  const { handleSubmit, watch, errors } = useFormCreateEvent();

  const nameEvent = watch("identification.name");
  const background_image = watch("information.background_image");
  const url_image = watch("information.url_image");

  const onSubmit = (formData: ICreateEvent) => {
    console.log(formData);
  };

  const handleAdvanceStep = () => {
    if (step < 3) setStep(step + 1);
  };
  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <AppCard>
      <AppCardHeader
        className={`relative border-b-1 border-bd_primary flex-row items-center gap-4 bg-cover bg-center`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${background_image})`,
        }}
      >
        <Image
          width={75}
          height={75}
          src={url_image ?? "/icones/convidados.svg"}
          // src={"/icones/convidados.svg"}
          alt="add-your-event"
          className="border-1 rounded-full"
        />
        <div>
          <AppCardDescription description="Qual evento vamos criar?" />
          <AppCardTitle
            title={nameEvent || "Nome para o evento"}
            className="text-3xl"
          />
        </div>
      </AppCardHeader>

      <AppCardContent className="py-8 flex flex-col gap-8">
        <div className="self-center flex gap-4 items-center">
          <BadgeStepConfirmed
            onClick={() => setStep(1)}
            step={1}
            disabled={step !== 1}
            label="Identificação do evento"
            error={errors.identification ? true : false}
          />

          <BadgeStepConfirmed
            onClick={() => setStep(2)}
            step={2}
            disabled={step !== 2}
            label="Local e data"
            error={errors.localAndDate ? true : false}
          />

          <BadgeStepConfirmed
            onClick={() => setStep(3)}
            step={3}
            disabled={step !== 3}
            label="Informações finais"
            error={errors.information ? true : false}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {step === 1 && <StepOne advanceStep={handleAdvanceStep} />}

          {step === 2 && (
            <StepTwo
              advanceStep={handleAdvanceStep}
              previousStep={handlePreviousStep}
            />
          )}

          {step === 3 && <StepThree previousStep={handlePreviousStep} />}
        </form>
      </AppCardContent>
    </AppCard>
  );
};

export default AppCardCreateEvent;
