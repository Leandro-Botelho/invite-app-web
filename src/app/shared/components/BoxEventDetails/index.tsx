interface IBoxEventDetails {
  title: string;
  details: string;
  message?: string;
  icon?: React.ReactNode;
}

const BoxEventDetails = ({
  details,
  icon,
  title,
  message,
}: IBoxEventDetails) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-400 font-semibold">{title}</span>
      <p className="flex gap-2 items-center text-white border-[1px] border-bd_primary p-3 rounded-md">
        {icon}
        {details}
      </p>
      {message && <span className="text-xs text-[#a7ae71]">{message}</span>}
    </div>
  );
};

export default BoxEventDetails;
