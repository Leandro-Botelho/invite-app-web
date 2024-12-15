interface IEventsInformation {
  title: string;
  description: string;
  className?: string;
}

const EventsInformation = ({
  description,
  title,
  className,
}: IEventsInformation) => {
  return (
    <div
      className={`border-[1px] w-full rounded-md py-2 px-4 shadow-md border-bd_primary ${className}`}
    >
      <span className="text-primary font-semibold text-sm">{title}:</span>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default EventsInformation;
