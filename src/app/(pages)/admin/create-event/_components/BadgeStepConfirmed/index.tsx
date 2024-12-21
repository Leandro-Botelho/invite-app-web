interface BadgeStepConfirmedProps {
  step: number;
  label: string;
  disabled: boolean;
  error: boolean;
  onClick?: () => void;
}

const BadgeStepConfirmed = ({
  label,
  step,
  disabled,
  error,
  onClick,
}: BadgeStepConfirmedProps) => {
  return (
    <button
      className={`flex items-center gap-2 text-white ${
        error && "text-red-500"
      } `}
    >
      <span
        onClick={onClick}
        className={`w-9 h-9 rounded-[50%]
          ${error && "border-red-500 border-2"}
          ${
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
