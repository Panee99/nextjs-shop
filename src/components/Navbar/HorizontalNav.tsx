import { Group } from "@mantine/core";
import React from "react";
import { DefaultLink, LinkProps } from "../Link";

export type HorizontalNavTypeItem = LinkProps;

export type HorizontalNavProps = {
  items: HorizontalNavTypeItem[];
};

export const HorizontalNav = ({ items }: HorizontalNavProps) => {
  return (
    <Group>
      {items.map((item, index) => (
        <DefaultLink key={index} {...item} />
      ))}
    </Group>
  );
};
