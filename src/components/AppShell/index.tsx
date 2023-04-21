import { FC, ReactNode } from "react";
import { Header } from "../Header";

interface AppShellProps {
  children: ReactNode;
}

export const AppShell: FC<AppShellProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
