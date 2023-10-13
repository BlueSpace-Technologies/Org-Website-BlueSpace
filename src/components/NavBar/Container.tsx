import classNames from "classnames";
import type { PropsWithChildren } from "react";

interface ContainerProps {
  className?: string;
}

export const Container = ({
  children,
  className,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      className={classNames(
        "mx-auto w-full px-4 sm:px-4 md:max-w-full lg:max-w-full lg:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};
