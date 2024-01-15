"use client";
import { HomeSlider, ListProduct, TopProductSlider } from "@/components/Slider";
import {
  Badge,
  Box,
  Card,
  Container,
  Grid,
  Group,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import "./page.module.css";
import Image from "next/image";
import { useAppStyles } from "@/hooks/use-app-styles";
import {
  IconArrowsRightLeft,
  IconFlare,
  IconPremiumRights,
  IconShieldCheckFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { IconShieldCheck } from "@tabler/icons-react";

export default function Home() {
  const appStyles = useAppStyles();

  return (
    <main>
      {/* Slider */}
      <Container pb="xl">
        <Grid>
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <HomeSlider height={300} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }} h={300}>
            <Stack h={300}>
              <Card pos="relative" h="100%">
                <Image src="/home-slider/free-ship.webp" alt="free-ship" fill />
              </Card>
              <Card pos="relative" h="100%">
                <Image src="/home-slider/shop.webp" alt="shop" fill />
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
      {/* End Slider */}

      {/* Body */}
      <Box bg={appStyles.bg.body} mih="100vh" mt="md" py="md">
        <Container>
          {/* Top Deal */}

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
          {/* End Top Deal */}

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
      </Box>

      {/* End Body */}
    </main>
  );
}
