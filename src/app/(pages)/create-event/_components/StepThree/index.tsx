import AppInput from "@/app/shared/components/AppInput";
import useStepThree, { IStepThree } from "./hooks/useStepThree";
import { IUpdateFormCreateEvent } from "@/app/shared/types/IUpdateFormCreateEvent";
import ButtonStepsContainer from "../ButtonsStepContainer";
import ButtonSteps from "../ButtonsStepContainer/component/ButtonSteps";
import { useFormCreateEvent } from "../../_provider/FormCreateEvent";

const StepThree = ({ previousStep }: IUpdateFormCreateEvent) => {
  const { control } = useFormCreateEvent();

  return (
    <>
      <AppInput
        control={control}
        name="description"
        description="Descrição do evento (ex: Trazer roupa de banho)"
        label="Descrição"
      />
      <AppInput
        control={control}
        name="url_image"
        description="URL da imagem que será exibida no convite"
        label="Imagem"
        // onChange={(e) => setUrlImageEvent(e.target.value)}
      />
      <AppInput
        control={control}
        name="background_image"
        description="URL da imagem como imagem de fundo no convite"
        label="Background"
        // onChange={(e) => setBackgroundImageEvent(e.target.value)}
      />
      <AppInput
        control={control}
        name="public"
        description="Quantidade de pessoas que você espera que compareçam"
        label="Publico esperado"
        type="number"
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
          className="bg-[#23c55e] hover:bg-[#1c8843]"
        />
      </ButtonStepsContainer>
    </>
  );
};

export default StepThree;
