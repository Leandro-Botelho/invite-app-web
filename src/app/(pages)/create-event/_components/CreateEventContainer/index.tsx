"use client";

import AppCard from "@/app/shared/components/AppCard";
import AppCardContent from "@/app/shared/components/AppCard/AppCardContent";
import AppCardDescription from "@/app/shared/components/AppCard/AppCardDescription";
import AppCardHeader from "@/app/shared/components/AppCard/AppCardHeader";
import AppCardTitle from "@/app/shared/components/AppCard/AppCardTitle";
import { useState } from "react";
import { STEPS_VALUES } from "../../_constants/stepsLabel";
import BadgeStepConfirmed from "../BadgeStepConfirmed";
import StepOne from "../StepOne";
import StepThree from "../StepThree";
import StepTwo from "../StepTwo";
import Image from "next/image";
import { IFormEvent } from "@/app/shared/types/IUpdateFormCreateEvent";
import { useFormCreateEvent } from "../../_provider/FormCreateEvent";
import { ICreateEvent } from "../../schema/CreateEventSchema";

const AppCardCreateEvent = () => {
  const [step, setStep] = useState(1);
  const { handleSubmit, watch } = useFormCreateEvent();

  const nameEvent = watch("name");
  const background_image = watch("background_image");
  const url_image = watch("url_image");

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
        // style={{
        //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${formEvent.background_image})`,
        // }}
      >
        <Image
          width={75}
          height={75}
          // src={url_image ?? "/icones/convidados.svg"}
          src={"/icones/convidados.svg"}
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
          {STEPS_VALUES.map((stepValue) => (
            <BadgeStepConfirmed
              key={stepValue.step}
              onClick={() => setStep(stepValue.step)}
              step={stepValue.step}
              disabled={step !== stepValue.step}
              label={stepValue.label}
            />
          ))}
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
