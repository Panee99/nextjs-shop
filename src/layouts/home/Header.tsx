"use client";
import { DefaultLink } from "@/components/Link";
import { LogoNextJs } from "@/components/Logo/LogoNextJs";
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Indicator,
  Select,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { IconSearch, IconShoppingBag } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

export const Header = () => {
  return (
    <Container size="xl">
      <Grid>
        <Grid.Col span="auto">
          <LogoNextJs />
        </Grid.Col>
        <Grid.Col span={6}>
          <SearchInput />
          <Box mt="md">
            <Suggestions
              data={[
                "sổ tay",
                "son môi",
                "đồ bộ nam",
                "nhớt motul",
                "khoác jean",
              ]}
            />
          </Box>
        </Grid.Col>
        <Grid.Col span="auto">
          <UserSection />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

const SearchInput = () => (
  <Flex>
    <Select
      radius="md"
      styles={{
        root: {
          width: 170,
        },
        input: {
          height: 40,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },
      }}
      data={["Tìm sản phẩm", "Tìm nhà cung cấp"]}
      defaultValue="Tìm sản phẩm"
      allowDeselect={false}
    />
    <TextInput
      radius="md"
      styles={{
        root: {
          flex: 1,
        },
        input: {
          height: 40,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          marginLeft: -1,
          paddingRight: 70,
        },
      }}
      placeholder="Bạn muốn tìm gì"
      rightSection={
        <Button color="orange">
          <IconSearch
            style={{
              width: "80%",
              height: "80%",
              transform: "translate(2px,0)",
            }}
            stroke={2}
          />
        </Button>
      }
      rightSectionProps={{
        style: { width: 70, paddingTop: 5, paddingBottom: 5 },
      }}
    />
  </Flex>
);

const Suggestions = ({ data }: { data: string[] }) => (
  <Group justify="center">
    {data.map((item, index) => (
      <Group key={index}>
        <DefaultLink href="/">{item}</DefaultLink>
        {index < data.length - 1 && <Divider orientation="vertical" />}
      </Group>
    ))}
  </Group>
);

const StyledLink = styled(Link)`
  &:hover {
    color: ${theme.colors.blue[6]};
  }
`;

const UserSection = () => {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();
  return (
    <Group>
      <Link href="/">
        <ActionIcon variant="transparent" color="gray.6">
          <Indicator
            processing
            position="bottom-end"
            label="0"
            styles={{ indicator: { height: 20 } }}
            color="red"
            size={20}
            offset={7}
          >
            <IconShoppingBag
              style={{
                width: 30,
                height: 30,
              }}
              stroke={1.5}
            />
          </Indicator>
        </ActionIcon>
      </Link>
      <Group gap="sm">
        <Avatar radius="xl" />
        <Stack gap={0}>
          <Link href="/" style={{}} color={{ ba }}>
            Đăng Nhập
          </Link>
          <Link href="/">Đăng Ký</Link>
        </Stack>
      </Group>
    </Group>
  );
};
