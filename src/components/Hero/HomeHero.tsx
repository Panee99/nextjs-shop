import { Container, Grid, Stack, Card } from "@mantine/core";
import React from "react";
import { HomeSlider } from "../Slider";
import Image from "next/image";

export const HomeHero = () => {
  return (
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
  );
};
