import { AppCardContainerProps } from "..";
import { CardDescription } from "../../shadcn-components/card";

interface IAppCardDescriptionProps extends AppCardContainerProps {
  description: string;
}

const AppCardDescription = ({
  description,
  className,
}: IAppCardDescriptionProps) => {
  return <CardDescription className={className}>{description}</CardDescription>;
};

export default AppCardDescription;
