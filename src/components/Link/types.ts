import Link from "next/link";
import React from "react";

export type LinkProps = React.ComponentProps<typeof Link> & {
  children: React.ReactNode;
};
