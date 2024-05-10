"use client";
import { Button, ButtonGroup, Carousel } from "@material-tailwind/react";
import localFont from "next/font/local";

const myFont = localFont({ src: "./AlienAiItalic-PKnO7.ttf" });

export function CarouselDefault() {
  return (
    <div>
      <Carousel
        className="rounded-xl"
        autoplay
        loop
        navigation={({ setActiveIndex, activeIndex, length }) => <div></div>}
      >
        <img
          src="/images/resized/file.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/images/resized/file (1).jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/images/resized/file (2).jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/images/resized/file (3).jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/images/resized/file (4).jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/images/resized/file (5).jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/images/resized/file (6).jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/images/resized/file (7).jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/images/resized/file (8).jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/images/resized/file (9).jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </Carousel>
      <div
        className="lg:text-5xl xl:top-[60%] lg:top-[50%] md:top-[35%] top-[24%] md:text-3xl text-sm drop-shadow-2xl[0_1.2px_1.2px_rgba(0,0,0,1)]"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          fontWeight: "bolder",
        }}
      >
        <div className={myFont.className}>
          <h1 className="drop-shadow-[-3px_3px_var(--tw-shadow-color)] shadow-blue-500">
            "Best Team On The Roster"
          </h1>
        </div>
      </div>
      <div
        className="lg:text-5xl xl:top-[90%] lg:top-[80%] md:top-[50%] top-[32%] drop-shadow-2xl[0_1.2px_1.2px_rgba(0,0,0,1)]"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ButtonGroup ripple color="blue" size="lg" className="mb-2">
          <Button>
            <a href="tel:+17865121665">Contact Us: (786) 512-1665</a>
          </Button>
        </ButtonGroup>
        <Button ripple color="blue">
          <a href="mailto:Allstarpumpouts@yahoo.com">
            Allstarpumpouts@yahoo.com
          </a>
        </Button>
      </div>
    </div>
  );
}
