interface IBoxEventDetails {
  title: string;
  details: string;
  message?: string;
  icon: React.ReactNode;
}

const BoxEventDetails = ({
  details,
  icon,
  title,
  message,
}: IBoxEventDetails) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-white">{title}</span>
      <p className="flex gap-2 items-center text-[#f7f4e6] border-[1px] border-[#27272a] p-3 rounded-md">
        {icon}
        {details}
      </p>
      {message && <span className="text-xs text-[#a7ae71]">{message}</span>}
    </div>
  );
};

export default BoxEventDetails;
