import { SCHEMA_DATE_VALIDATION } from "@/app/shared/constants/schemaDateValidation";
import { SCHEMA_TIME_EVENT_VALIDATION } from "@/app/shared/constants/schemaTimeEventValidation";
import { z } from "zod";

export type ICreateEvent = z.infer<typeof createEventSchema>;

export const createEventSchema = z.object({
  identification: z.object({
    alias: z.string().min(1),
    name: z.string().min(1),
  }),
  localAndDate: z.object({
    date: SCHEMA_DATE_VALIDATION,
    location: z.string().min(1),
    timeEvent: SCHEMA_TIME_EVENT_VALIDATION,
  }),
  information: z.object({
    description: z.string().min(1),
    url_image: z.string().min(1),
    background_image: z.string().min(1),
    public: z.string().min(1),
  }),
});
