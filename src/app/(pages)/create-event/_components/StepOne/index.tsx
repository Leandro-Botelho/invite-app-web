import AppInput from "@/app/shared/components/AppInput";
import { IUpdateFormCreateEvent } from "@/app/shared/types/IUpdateFormCreateEvent";
import ButtonStepsContainer from "../ButtonsStepContainer";
import ButtonSteps from "../ButtonsStepContainer/component/ButtonSteps";
import { formatAlias } from "@/app/shared/utils/formatAlias";
import { useFormCreateEvent } from "../../_provider/FormCreateEvent";

const StepOne = ({ advanceStep }: IUpdateFormCreateEvent) => {
  const { control, setValue } = useFormCreateEvent();

  return (
    <>
      <AppInput
        control={control}
        name="alias"
        description="Identificador único e exclusivo para o evento (usado na URL)"
        label="Identificador"
        onChange={(e) => setValue("alias", formatAlias(e.target.value))}
      />
      <AppInput
        control={control}
        name="name"
        description="Nome do evento (ex: Aniversário de 15 anos da Maria)"
        label="Nome"
      />

      <ButtonStepsContainer>
        <ButtonSteps
          label="Anterior"
          isPrevious
          disabled={true}
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

export default StepOne;
