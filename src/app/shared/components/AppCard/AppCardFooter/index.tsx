import { PropsWithChildren } from "react";
import { CardFooter } from "../../shadcn-components/card";

interface AppCardFooter {
  className?: string;
}

const AppCardFooter = ({
  children,
  className,
}: PropsWithChildren<AppCardFooter>) => {
  return <CardFooter className={className}>{children}</CardFooter>;
};

export default AppCardFooter;
