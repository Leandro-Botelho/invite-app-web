import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const stepThreeSchema = z.object({
  description: z.string().min(1, "Campo obrigatório"),
  url_image: z.string().min(1, "Campo obrigatório"),
  background_image: z.string().min(1, "Campo obrigatório"),
  public: z.string().min(1, "Campo obrigatório"),
});

export type IStepThree = z.infer<typeof stepThreeSchema>;

const useStepThree = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: {
      description: "",
      url_image: "",
      background_image: "",
      public: "",
    },
  });

  return {
    handleSubmit,
    control,
    errors,
    watch,
  };
};

export default useStepThree;
