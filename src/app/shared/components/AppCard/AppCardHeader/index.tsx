import { PropsWithChildren } from "react";
import { CardHeader } from "../../shadcn-components/card";

interface AppCardHeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const AppCardHeader = ({
  children,
  style,
  className,
}: PropsWithChildren<AppCardHeaderProps>) => {
  return (
    <CardHeader className={className} style={style}>
      {children}
    </CardHeader>
  );
};

export default AppCardHeader;
