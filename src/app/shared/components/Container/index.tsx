import { PropsWithChildren } from "react";

interface IContainer {
  className?: string;
}

const Container = ({ children, className }: PropsWithChildren<IContainer>) => {
  return (
    <main
      aria-label="Main content"
      className={`grid place-items-center min-h-screen bg-background`}
    >
      <div className={className}>{children}</div>
    </main>
  );
};

export default Container;
