"use client";
import { useMantineTheme } from "@mantine/core";
import React, { PropsWithChildren, createContext, useContext } from "react";

type AppStylesContext = {
  defaultBorder: string;
  border: {
    color: string;
  };
  bg: {
    body: string;
  };
  stateColor: {
    red: string;
    green: string;
    orange: string;
    grey: string;
    bg: {
      red: string;
      green: string;
      orange: string;
      grey: string;
    };
  };
};

const Context = createContext({} as AppStylesContext);

export const AppStylesProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const theme = useMantineTheme();

  // Add more app styles here
  const appStyles: AppStylesContext = {
    defaultBorder: `1px solid ${theme.colors.gray[2]}`,
    border: {
      color: theme.colors.gray[2],
    },
    bg: {
      body: theme.colors.gray[1],
    },
    stateColor: {
      red: theme.colors.red[7],
      green: theme.colors.green[7],
      orange: theme.colors.orange[7],
      grey: theme.colors.gray[7],
      bg: {
        red: theme.colors.red[7],
        green: theme.colors.green[7],
        orange: theme.colors.orange[7],
        grey: theme.colors.gray[7],
      },
    },
  };

  return <Context.Provider value={appStyles}>{children}</Context.Provider>;
};

export const useAppStyles = () => useContext(Context);
