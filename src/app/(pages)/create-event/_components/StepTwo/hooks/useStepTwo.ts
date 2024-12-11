import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const stepTwoSchema = z.object({
  eventDate: z.string().min(1, "Campo obrigatório"),
  location: z.string().min(1, "Campo obrigatório"),
});

export type IStepTwo = z.infer<typeof stepTwoSchema>;

const useStepTwo = () => {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      eventDate: "",
      location: "",
    },
  });

  return {
    handleSubmit,
    control,
  };
};

export default useStepTwo;
