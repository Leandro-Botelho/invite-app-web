import { PropsWithChildren } from "react";
import { Card } from "../shadcn-components/card";

export interface AppCardContainerProps {
  className?: string;
}

const AppCard = ({
  children,
  className,
}: PropsWithChildren<AppCardContainerProps>) => {
  return <Card className={`bg-background border-bd_primary ${className}`}>{children}</Card>;
};

export default AppCard;
