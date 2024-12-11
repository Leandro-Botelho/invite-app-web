import AppCardFooter from "@/app/shared/components/AppCard/AppCardFooter";
import { PropsWithChildren } from "react";

const ButtonStepsContainer = ({ children }: PropsWithChildren) => {
  return (
    <AppCardFooter className="flex justify-between">{children}</AppCardFooter>
  );
};

export default ButtonStepsContainer;
