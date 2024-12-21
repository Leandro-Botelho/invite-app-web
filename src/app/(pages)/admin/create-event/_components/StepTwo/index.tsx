import AppInput from "@/app/shared/components/AppInput";
import ButtonStepsContainer from "../ButtonsStepContainer";
import ButtonSteps from "../ButtonsStepContainer/component/ButtonSteps";
import { IUpdateFormCreateEvent } from "@/app/shared/types/IUpdateFormCreateEvent";
import { useFormCreateEvent } from "../../_provider/FormCreateEvent";
import AppSmartDateInput from "@/app/shared/components/SmartDateInput";
import { ChangeEvent } from "react";

const StepTwo = ({ previousStep, advanceStep }: IUpdateFormCreateEvent) => {
  const { control, setValue } = useFormCreateEvent();

  const formatDate = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5, 10);

    setValue("localAndDate.date", value);
  };

  const formatTimeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 2) value = value.slice(0, 2) + ":" + value.slice(2);

    setValue("localAndDate.timeEvent", value);
  };

  return (
    <>
      <AppInput
        control={control}
        name="localAndDate.location"
        description="Local onde o evento será realizado"
        label="Local"
      />

      <AppSmartDateInput
        control={control}
        name="localAndDate.date"
        description="Data que o evento irá acontecer"
        label="Data"
        onChange={formatDate}
      />

      <AppInput
        control={control}
        name="localAndDate.timeEvent"
        description="Hora que o evento irá acontecer"
        label="Horário"
        onChange={formatTimeEvent}
        maxLength={5}
      />

      <ButtonStepsContainer>
        <ButtonSteps
          label="Anterior"
          onClick={previousStep}
          isPrevious
          className="bg-disabled"
        />
        <ButtonSteps
          label="Continuar"
          type="submit"
          onClick={advanceStep}
          className="bg-button hover:bg-btnHover"
        />
      </ButtonStepsContainer>
    </>
  );
};

export default StepTwo;
