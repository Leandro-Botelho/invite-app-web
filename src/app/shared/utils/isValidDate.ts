import { isBefore, isValid, parse } from "date-fns";

const minDate = new Date();
const maxDate = new Date(2030, 1, 1);

export const isValidDate = (date: string): boolean => {
  const parsedDate = parse(date, "dd/MM/yyyy", new Date());

  if (!isValid(parsedDate)) return false;
  if (isBefore(parsedDate, minDate)) return false;
  if (isBefore(maxDate, parsedDate)) return false;

  return true;
};
