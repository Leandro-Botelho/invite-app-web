import { PropsWithChildren } from "react";
import { CardContent } from "../../shadcn-components/card";

interface AppCardContentProps {
  className?: string;
}

const AppCardContent = ({
  children,
  className,
}: PropsWithChildren<AppCardContentProps>) => {
  return <CardContent className={className}>{children}</CardContent>;
};

export default AppCardContent;
