import { z } from "zod";
import { isValidTimeEvent } from "../utils/isValidTimeEvent";

export const SCHEMA_TIME_EVENT_VALIDATION = z
  .string()
  .refine((time) => isValidTimeEvent(time), {
    message: "Horário inválido",
  });
