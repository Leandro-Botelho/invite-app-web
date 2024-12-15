//schema zod
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const guestSchema = z.object({
  email: z.string().email(),
  name: z.string(),
//   hasCompanion: z.boolean(),
//   presenceConfirmed: z.boolean(),
});

export type IFormGuest = z.infer<typeof guestSchema>;

export const useFormGuest = () => {
  const { control, handleSubmit } = useForm<IFormGuest>({
    resolver: zodResolver(guestSchema),
  });

  return { control, handleSubmit };
};
