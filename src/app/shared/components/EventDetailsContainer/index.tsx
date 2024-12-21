import BoxNameEventAlias from "../BoxNameEventAlias";
import EventsInformation from "../EventsInformation";

interface IEventDetailsContainer {
  nameEvent: string;
  alias: string;
  date: string;
  time: string;
  description: string;
  location: string;
}

const EventDetailsContainer = ({
  nameEvent,
  alias,
  date,
  time,
  description,
  location,
}: IEventDetailsContainer) => {
  return (
    <section className=" flex flex-col gap-1">
      <BoxNameEventAlias alias={alias} nameEvent={nameEvent} />

      <div className="flex gap-1 items-center justify-between w-full">
        <EventsInformation description={`${date} às ${time}`} title="Data" />
        <EventsInformation description={location} title="Local" />
      </div>

      <EventsInformation description={description} title="Descrição" />
    </section>
  );
};

export default EventDetailsContainer;
