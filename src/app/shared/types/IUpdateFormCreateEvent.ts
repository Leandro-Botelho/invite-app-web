export interface IFormEvent {
  alias: "";
  name: "";
  eventDate: "";
  location: "";
  description: "";
  url_image: string;
  background_image: string;
  public: number;
}

export interface IUpdateFormCreateEvent {
  advanceStep?: () => void;
  previousStep?: () => void;
}
