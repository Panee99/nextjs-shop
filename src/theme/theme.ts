"use client";
import { Container, createTheme, rem } from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  xs: rem(200),
  sm: rem(400),
  md: rem(600),
  lg: rem(900),
  xl: rem(1200),
};

export const theme = createTheme({
  components: {
    Container: Container.extend({
      defaultProps: { size: "xl" },
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
    Card: {
      defaultProps: {
        shadow: "sm",
        padding: "md",
        radius: "md",
      },
    },
  },
});
