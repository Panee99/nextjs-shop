import React, { PropsWithChildren } from "react";
import { Header } from "./Header";

export const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
