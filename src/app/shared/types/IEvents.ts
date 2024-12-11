import IGuest from "./IGuest";

export interface IEvents {
  id: number;
  alias: string;
  password: string;
  name: string;
  date: Date;
  local: string;
  description: string;
  image: string;
  background_image: string;
  expected_audience: number;
  guests: IGuest[];
}
