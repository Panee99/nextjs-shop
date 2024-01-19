"use client";
import { ListProduct, TopProductSlider } from "@/components/Slider";
import { Badge, Box, Card, Container, Group, Space, Text } from "@mantine/core";
import { useAppStyles } from "@/hooks/use-app-styles";
import {
  IconArrowsRightLeft,
  IconFlare,
  IconPremiumRights,
} from "@tabler/icons-react";
import Link from "next/link";
import { IconShieldCheck } from "@tabler/icons-react";
import { HomeHero } from "@/components/Hero";
import "./page.module.css";

export default function Home() {
  const appStyles = useAppStyles();

  return (
    <main>
      {/* <HomeHero /> */}

      {/* <Box bg={appStyles.bg.body} mih="100vh" mt="md" py="md">
        <Container>
          <Card p="lg">
            <Group justify="space-between">
              <Group gap="sm">
                <IconFlare color={appStyles.stateColor.orange} />
                <Text size="xl">Deal Sỉ HOT</Text>
              </Group>
              <Link href="/">Xem tất cả</Link>
            </Group>
            <Box mt="md">
              <TopProductSlider />
            </Box>
          </Card>

          <Space h="md" />

          <Card p="lg">
            <Group justify="space-between">
              <Group gap="sm">
                <Box
                  style={{
                    borderRight: appStyles.defaultBorder,
                    paddingRight: 15,
                  }}
                >
                  <Badge
                    color={appStyles.stateColor.bg.red}
                    py={12}
                    radius="sm"
                  >
                    <Text size="lg" fw="bold">
                      TTS Mall
                    </Text>
                  </Badge>
                </Box>
                <Group gap="xs">
                  <IconShieldCheck size={18} color={appStyles.stateColor.red} />
                  <Text>Chính hãng 100%</Text>
                </Group>
                <Group gap="xs">
                  <IconPremiumRights
                    size={18}
                    color={appStyles.stateColor.red}
                  />
                  <Text>Tích lũy 1%</Text>
                </Group>
                <Group gap="xs">
                  <IconArrowsRightLeft
                    size={18}
                    color={appStyles.stateColor.red}
                  />
                  <Text>Đổi trả hàng lỗi</Text>
                </Group>
              </Group>
              <Link href="/">Xem tất cả</Link>
            </Group>
            <Box mt="md">
              <ListProduct />
            </Box>
          </Card>
        </Container>
      </Box> */}
    </main>
  );
}
