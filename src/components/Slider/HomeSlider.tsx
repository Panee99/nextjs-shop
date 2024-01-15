"use client";
import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, StyleProp } from "@mantine/core";

const data = [
  { img: "/home-slider/appliances.webp", alt: "appliances" },
  { img: "/home-slider/cosmetics.webp", alt: "cosmetics" },
  { img: "/home-slider/couple-jacket.webp", alt: "couple-jacket" },
  { img: "/home-slider/fashion.webp", alt: "fashion" },
  { img: "/home-slider/hand-bag.webp", alt: "hand-bag" },
  { img: "/home-slider/jacket.webp", alt: "jacket" },
  { img: "/home-slider/men-fashion.webp", alt: "men-fashion" },
];

const sliderConfig: Settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export const HomeSlider = ({
  height,
}: {
  height: StyleProp<React.CSSProperties["height"]>;
}) => {
  return (
    <Slider {...sliderConfig}>
      {data.map((item, index) => (
        <Card key={index} pos="relative" h={height}>
          <Image src={item.img} alt={item.alt} fill />
        </Card>
      ))}
    </Slider>
  );
};
