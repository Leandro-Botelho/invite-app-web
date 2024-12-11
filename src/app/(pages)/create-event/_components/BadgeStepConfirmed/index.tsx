interface BadgeStepConfirmedProps {
  step: number;
  label: string;
  disabled: boolean;
  onClick?: () => void;
}

const BadgeStepConfirmed = ({
  label,
  step,
  disabled,
  onClick,
}: BadgeStepConfirmedProps) => {
  return (
    <button className="flex items-center gap-2 text-white ">
      <span
        onClick={onClick}
        className={`w-9 h-9 rounded-[50%] ${
          disabled
            ? "bg-disabled text-primary"
            : "bg-white text-black cursor-pointer"
        } font-bold grid place-items-center`}
      >
        {step}
      </span>
      {label}
    </button>
  );
};

export default BadgeStepConfirmed;
