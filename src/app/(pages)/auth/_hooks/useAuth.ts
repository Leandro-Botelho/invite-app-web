import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const authSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

export type IAuth = z.infer<typeof authSchema>;

const useAuth = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return {
    handleSubmit,
    control,
    errors,
  };
};

export default useAuth;
