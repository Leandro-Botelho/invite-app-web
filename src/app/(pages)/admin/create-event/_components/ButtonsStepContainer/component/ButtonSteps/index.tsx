import { Button } from "@/app/shared/components/shadcn-components/button";
import { ChevronRight } from "lucide-react";

interface ButtonStepsProps {
  label: string;
  className?: string;
  isPrevious?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const ButtonSteps = ({
  isPrevious,
  label,
  className,
  disabled,
  type = "button",
  onClick,
}: ButtonStepsProps) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`transition-all ${
        isPrevious ? "" : "flex-row-reverse"
      } ${className}`}
    >
      <ChevronRight className={`${isPrevious && "rotate-180"}`} />
      {label}
    </Button>
  );
};

export default ButtonSteps;
