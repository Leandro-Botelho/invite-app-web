import { z } from "zod";
import { isValidDate } from "../utils/isValidDate";

export const SCHEMA_DATE_VALIDATION = z
  .string()
  .refine((date) => isValidDate(date), {
    message: "Data inválida",
  });
