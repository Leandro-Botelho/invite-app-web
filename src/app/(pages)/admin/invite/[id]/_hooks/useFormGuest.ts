//schema zod
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const guestSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  hasCompanion: z.string(),
  presenceConfirmed: z.string(),
});

export type IFormGuest = z.infer<typeof guestSchema>;

export const useFormGuest = () => {
  const { control, handleSubmit, watch, setValue } = useForm<IFormGuest>({
    resolver: zodResolver(guestSchema),
    defaultValues: {
      email: "",
      name: "",
      hasCompanion: "yes",
      presenceConfirmed: "yes",
    },
  });

  return { control, watch, setValue, handleSubmit };
};
