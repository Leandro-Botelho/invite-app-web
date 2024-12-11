import { z } from "zod";

export type ICreateEvent = z.infer<typeof createEventSchema>;

export const createEventSchema = z.object({
  alias: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  url_image: z.string().min(1),
  background_image: z.string().min(1),
  date: z.string().min(1),
  location: z.string().min(1),
  public: z.string().min(1),
});
