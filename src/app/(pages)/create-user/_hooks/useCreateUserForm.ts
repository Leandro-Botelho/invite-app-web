import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createUserSchema = z.object({
  email: z.string().min(1),
  name: z.string().min(1),
  password: z.string().min(1),
});

export type ICreateUser = z.infer<typeof createUserSchema>;

const useCreateUser = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  return {
    handleSubmit,
    control,
    errors,
  };
};

export default useCreateUser;
