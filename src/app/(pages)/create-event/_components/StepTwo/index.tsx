import AppInput from "@/app/shared/components/AppInput";
import useStepTwo, { IStepTwo } from "./hooks/useStepTwo";
import ButtonStepsContainer from "../ButtonsStepContainer";
import ButtonSteps from "../ButtonsStepContainer/component/ButtonSteps";
import { IUpdateFormCreateEvent } from "@/app/shared/types/IUpdateFormCreateEvent";
import { useFormCreateEvent } from "../../_provider/FormCreateEvent";

const StepTwo = ({ previousStep, advanceStep }: IUpdateFormCreateEvent) => {
  const { control } = useFormCreateEvent();

  return (
    <>
      <AppInput
        control={control}
        name="date"
        description="Data e hora que o evento irá acontecer"
        label="Data"
      />
      <AppInput
        control={control}
        name="location"
        description="Local onde o evento será realizado"
        label="Local"
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
