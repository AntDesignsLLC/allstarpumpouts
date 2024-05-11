import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="/logo.png" alt="logo-ct" className="w-30" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#services"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="tel:7865121665"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography
        color="blue-gray"
        className="text-center font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        as="a"
        href="https://antdesignsllc.github.io/antdesllc/"
        target="_blank"
      >
        Made by ANT DESIGNS LLC
      </Typography>
    </footer>
  );
}
