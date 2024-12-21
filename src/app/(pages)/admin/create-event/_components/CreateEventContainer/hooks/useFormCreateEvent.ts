import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formCreateEvent = z.object({
  alias: z.string().min(1, "Campo obrigatório"),
  name: z.string().min(1, "Campo obrigatório"),
  eventDate: z.string().min(1, "Campo obrigatório"),
  location: z.string().min(1, "Campo obrigatório"),
  description: z.string().min(1, "Campo obrigatório"),
  background_image: z.string().min(1, "Campo obrigatório"),
  url_image: z.string().min(1, "Campo obrigatório"),
  public: z.number().min(1, "Campo obrigatório"),
});

export type IFormCreateEvent = z.infer<typeof formCreateEvent>;

const useFormCreateEvent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(formCreateEvent),
  });

  return {
    handleSubmit,
    watch,
    setValue,
    control,
    errors,
  };
};

export default useFormCreateEvent;
