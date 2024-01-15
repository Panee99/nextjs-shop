"use client";
import { useAppStyles } from "@/hooks/use-app-styles";
import {
  Box,
  Container,
  Group,
  Menu,
  Text,
  TextInput,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import React, { PropsWithChildren, useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { CategoryMenu } from "@/data/menu";
import Link from "next/link";

export const Header = () => {
  const appStyles = useAppStyles();
  const theme = useMantineTheme();
  const [itemHovered, setItemHovered] = useState(false);

  return (
    <>
      {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
      <Box style={{ borderBottom: appStyles.defaultBorder }}>
        <Container h={60}>
          <Group h="100%">
            <Group justify="space-between" style={{ flex: 1 }}>
              <Image src="/next.svg" alt="logo" width={120} height={40} />
              <Group visibleFrom="sm">
                <TextInput />
              </Group>
              <Group visibleFrom="sm">
                <UnstyledButton>Home</UnstyledButton>
                <UnstyledButton>Blog</UnstyledButton>
                <UnstyledButton>Contacts</UnstyledButton>
                <UnstyledButton>Support</UnstyledButton>
              </Group>
            </Group>
          </Group>
        </Container>
      </Box>
      <Box style={{ borderBottom: appStyles.defaultBorder }}>
        <Container h={50}>
          <Group h="100%" justify="space-between">
            <Menu
              // opened={true}
              // onChange={setOpened}
              width={200}
              radius={0}
              offset={{ crossAxis: 31, mainAxis: 6 }}
              trigger="hover"
              transitionProps={{ transition: "pop-top-left", duration: 150 }}
            >
              <Menu.Target>
                <Group>
                  <IconMenu2 />
                  <Text fw={500}>Doanh mục</Text>
                </Group>
              </Menu.Target>
              <Menu.Dropdown>
                {CategoryMenu.map((item, index) => (
                  <Menu.Item
                    onMouseEnter={() => setItemHovered(true)}
                    onMouseLeave={() => setItemHovered(false)}
                    key={item.id}
                    leftSection={
                      <Image
                        src={item.image}
                        alt={item.id}
                        width={40}
                        height={40}
                      />
                    }
                  >
                    <Text>{item.title}</Text>
                  </Menu.Item>
                ))}
                <Box
                  style={{
                    display: itemHovered ? "block" : "none",
                    position: "absolute",
                    left: "100%",
                    top: "0",
                    height: "100%",
                    width: "calc(75rem * var(--mantine-scale) - 200px)",
                    background: "red",
                  }}
                >
                  <Container>Preview</Container>
                </Box>
              </Menu.Dropdown>
            </Menu>
            <Group>
              <CustomLink href="/">Yêu cầu báo giá</CustomLink>
              <CustomLink href="/">Tìm nhà phân phối</CustomLink>
              <CustomLink href="/">Công cụ tìm nguồn hàng</CustomLink>
              <CustomLink href="/">Dropshipping</CustomLink>
            </Group>
            <Group>
              <CustomLink href="/">Giỏ hàng</CustomLink>
              <CustomLink href="/">Đơn của tôi</CustomLink>
            </Group>
          </Group>
        </Container>
      </Box>
    </>
  );
};

const CustomLink = ({
  href,
  children,
}: {
  href: any;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <Text fw="bold" className="hover-underline">
        {children}
      </Text>
    </Link>
  );
};
