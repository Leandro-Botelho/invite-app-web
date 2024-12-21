import { PropsWithChildren } from "react";

interface IContainer {
  className?: string;
}

const Container = ({ children, className }: PropsWithChildren<IContainer>) => {
  return (
    <main
      aria-label="Main content"
      className={`grid place-items-center min-h-screen bg-background  bg-cover bg-center`}
      style={{
        backgroundImage: `url('/background.png')`,
      }}
    >
      <div className={`w-full ${className}`}>{children}</div>
    </main>
  );
};

export default Container;
