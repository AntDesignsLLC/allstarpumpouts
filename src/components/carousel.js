"use client";
import { Button, ButtonGroup, Carousel } from "@material-tailwind/react";
import localFont from "next/font/local";

const myFont = localFont({ src: "./AlienAiItalic-PKnO7.ttf" });

export function CarouselDefault() {
  return (
    <div className="relative w-full">
      <Carousel
        className="rounded-xl mb-10"
        autoplay
        loop
        navigation={({ setActiveIndex, activeIndex, length }) => <div></div>}
      >
        {[...Array(10)].map((_, i) => (
          <img
            key={i}
            src={`/images/resized/file${i === 0 ? "" : ` (${i})`}.jpg`}
            alt={`slide ${i + 1}`}
            className="h-[50vh] sm:h-[70vh] w-full object-cover"
          />
        ))}
      </Carousel>

      <div
        className="absolute text-center px-4 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold drop-shadow-xl"
        style={{ top: "32%", left: "50%", transform: "translate(-50%, -50%)", color: "black" }}
      >
        <div className={myFont.className}>
          <h1 className="drop-shadow-[-3px_3px_var(--tw-shadow-color)] shadow-blue-500">
            Best Team On The Roster
          </h1>
        </div>
      </div>

      <div
        className="absolute text-center px-4 text-base sm:text-lg md:text-3xl lg:text-5xl drop-shadow-xl"
        style={{ top: "65%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div className="flex flex-col items-center gap-2">
          <ButtonGroup ripple color="blue">
            <Button className="w-full sm:w-auto">
              <a href="tel:+17865121665">(786) 512-1665</a>
            </Button>
          </ButtonGroup>
          <Button ripple color="blue" className="w-full sm:w-auto">
            <a href="mailto:Allstarpumpouts@yahoo.com">
              Allstarpumpouts@yahoo.com
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
