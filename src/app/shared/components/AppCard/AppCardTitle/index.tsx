import { AppCardContainerProps } from "..";
import { CardTitle } from "../../shadcn-components/card";

interface IAppCardTitleProps extends AppCardContainerProps {
  title: string;
}

const AppCardTitle = ({ title, className }: IAppCardTitleProps) => {
  return <CardTitle className={`text-white ${className}`}>{title}</CardTitle>;
};

export default AppCardTitle;
