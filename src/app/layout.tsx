import {
  Box,
  ColorSchemeScript,
  Container,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import { ReactNode } from "react";
import { theme } from "@/theme/theme";
import { AppStylesProvider } from "@/hooks/use-app-styles";
import { Header } from "@/components/Header";
import { HomeLayout } from "@/layouts/home/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <AppStylesProvider>
            <HomeLayout>{children}</HomeLayout>
          </AppStylesProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
