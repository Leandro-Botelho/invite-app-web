export default interface IGuest {
  id: number;
  name: string;
  email: string;
  confirmed: boolean;
  has_companion: boolean;
  number_of_companions: number;
}
