"use client";
import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Badge, Box, Card, Group, Text } from "@mantine/core";
import { useAppStyles } from "@/hooks/use-app-styles";

type Product = {
  name: string;
  price: number;
  priceSale: number;
  saleCondition: string;
  salePercent: number;
  img: string;
  alt: string;
};

const data: Product[] = [
  {
    img: "/products/top-pro1.webp",
    alt: "top-pro1",
    name: "Áo thun nam",
    price: 200000,
    priceSale: 100000,
    saleCondition: "Giảm giá",
    salePercent: 50,
  },
  {
    img: "/products/top-pro2.webp",
    alt: "top-pro2",
    name: "Áo khoác nam",
    price: 125000,
    priceSale: 100000,
    saleCondition: "Giảm giá",
    salePercent: 50,
  },
  {
    img: "/products/top-pro3.webp",
    alt: "top-pro3",
    name: "Áo thun nữ",
    price: 200000,
    priceSale: 100000,
    saleCondition: "Giảm giá",
    salePercent: 50,
  },
  {
    img: "/products/top-pro4.webp",
    alt: "top-pro4",
    name: "Áo khoác nữ",
    price: 125000,
    priceSale: 100000,
    saleCondition: "Giảm giá",
    salePercent: 50,
  },
  {
    img: "/products/top-pro5.webp",
    alt: "top-pro5",
    name: "Áo thun nam",
    price: 200000,
    priceSale: 100000,
    saleCondition: "Giảm giá",
    salePercent: 50,
  },
];

const sliderConfig: Settings = {
  infinite: true,
  slidesToShow: 4,
  arrows: true,
  draggable: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const TopProductSlider = () => {
  const appStyles = useAppStyles();

  return (
    <Box px="xl">
      <Slider {...sliderConfig}>
        {data.map((item, index) => (
          <Box key={index} px="sm">
            <Box h={250} pos="relative">
              <Image src={item.img} alt={item.alt} fill />
            </Box>
            <Box>
              <Text fw="bold">
                {item.priceSale}
                <Text span> / Cái</Text>
              </Text>
              <Group justify="space-between">
                <Text td="line-through">{item.price}</Text>
                <Badge color={appStyles.stateColor.bg.red}>
                  -{item.salePercent}%
                </Badge>
              </Group>
              <Text size="xs">{item.saleCondition}</Text>
              <Text mt="sm">{item.name}</Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
