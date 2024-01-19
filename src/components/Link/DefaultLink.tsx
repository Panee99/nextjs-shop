import React from "react";
import Link from "next/link";
import { Text } from "@mantine/core";
import { LinkProps } from "./types";

export const DefaultLink = ({ children, ...linkProps }: LinkProps) => {
  return (
    <Link {...linkProps}>
      <Text className="hover-underline">{children}</Text>
    </Link>
  );
};
