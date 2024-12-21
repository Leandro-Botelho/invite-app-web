import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const stepOneSchema = z.object({
  alias: z.string().min(1, "Campo obrigatório"),
  name: z.string().min(1, "Campo obrigatório"),
});

export type IStepOne = z.infer<typeof stepOneSchema>;

const useStepOne = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(stepOneSchema),
    defaultValues: {
      alias: "",
      name: "",
    },
  });

  return {
    handleSubmit,
    control,
    errors,
    setValue,
    watch,
  };
};

export default useStepOne;
