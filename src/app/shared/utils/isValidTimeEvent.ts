export const isValidTimeEvent = (timeEvent: string) => {
  const [hour, minute] = timeEvent.split(":").map(Number);

  if (hour < 0 || hour > 23) return false;
  if (minute < 0 || minute > 59) return false;

  return true;
};
