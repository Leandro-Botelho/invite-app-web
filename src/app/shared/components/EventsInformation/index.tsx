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
      className={`border-[1px] rounded-md py-2 px-4 shadow-md border-[#27272a] ${className}`}
    >
      <span className="text-[#9ba2ad] font-semibold">{title}:</span>
      <p className="text-[#f7f4e6]">{description}</p>
    </div>
  );
};

export default EventsInformation;
