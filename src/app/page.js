"use client";

import { CarouselDefault } from "@/components/carousel";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Services } from "@/components/services";
import Stars from "@/components/stars";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      {/* Header */}
      <Header />

      {/* Images */}
      <section id="images">
        <CarouselDefault />
      </section>
      
      {/* Services */}
      <section id="services">
        <Services />
      </section>

      {/* Reviews */}
      <section className="" id="reviews">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center lg:text-5xl font-bold tracking-tight text-gray-900 text-2xl sm:text-2xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://lh3.googleusercontent.com/a-/ALV-UjXIN47xrsoLR6Ezpe0gWI0p94wp8EBdOLhgLdkdc1D3ZnA6NMM=s40-c-rp-mo-ba2-br100"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <Stars />

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Taz
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  I called around looking for a company to do a septic tank pump
                  out I got lucky and came across All-Star Pump Outs. From the
                  phone call to the quote to service, it was a phenomenal
                  experience. I like to give credit where credit is due and this
                  company definitely deserves it. This company cares about its
                  customers and goes above and beyond. <br />
                  Thanks again!!!
                  <br />
                  Taz
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="/images/profilepic.png"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <Stars />

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Fabien Pena
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  I am immensely grateful for their exceptional service. I
                  reached out on December 30th with an urgent issue regarding my
                  flooding septic tank, and they responded with remarkable
                  speed, arriving the very next day. Their team performed a
                  thorough cleaning and displayed outstanding professionalism
                  and friendliness throughout the process. Their expertise was
                  evident in the quality of their work. Additionally, the
                  affordability of their services was the icing on the cake. I
                  wholeheartedly recommend them for their excellent service and
                  value.
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="/images/profilepic.png"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <Stars />

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Wil
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Same day service (SEPTIC TANK PUMPED OUT & HYDRO JETTING ON
                  MAIN LINE) , great competitive prices. Andrew was very
                  professional, honest and knows his business. I would highly
                  recommend him.
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="/images/profilepic.png"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <Stars />

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Fernando Aranguren
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  It is simple, working with Andrew has been one of the best
                  decisions we have made. Andrew is always very understanding,
                  super responsive, and fantastic at his job. All Star has been
                  there for us every time that we’ve needed them. Even during
                  emergencies on a Sunday! Would recommend 100%. Will continue
                  to use his services for all my properties!
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="/images/profilepic.png"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <Stars />

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Agustin Garcia
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Excellent company, very professional, punctual, and fair on
                  the cost. Andrew explained everything he was doing with
                  details, very honest. He did three septic tank clean up and
                  maintenance for two of my properties.
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="/images/profilepic.png"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <Stars />

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Maria Anderson
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Andrew provided an excellent pumping service for our septic
                  tank. He was punctual, respectful and professional. He did an
                  amazing job not only pumping the tank, but using pressure
                  cleaning to ensure the job was successfully completed. I would
                  recommend All-Start Pump Outs to anyone looking for excellent
                  quality service. I will be using their services moving
                  forward. Happy customer! Maria Anderson
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://lh3.googleusercontent.com/a-/ALV-UjXjXKuSuOOgaZQKg7P4noRVR3VjoWY0Z1eFnL2WVfIT8kHAGJJo=s40-c-rp-mo-br100"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <Stars />

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Lauren Curbelo
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  Andrew did an amazing job and was extremely responsive. I
                  requested a quote via yelp and he replied within 15 minutes.
                  When he came to the house he explained what he was doing and
                  was transparent with what he could do to help us and even
                  provided me with an plumber that could help me use a camera to
                  identify the issue.
                  <br /> <br />I would highly recommend him and will be sharing
                  his information with friends. He definitely helped us remedy
                  the issue and I am grateful for the attention to detail and
                  how quickly he was able to get to my house.
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="/images/profilepic.png"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <Stars />

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Stefanie Mederos
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  I reached out late Monday for a quote. Andrew immediately
                  called me and scheduled to come to our house first thing the
                  next day. He provided excellent service, answered all of our
                  questions, gave us a good price, and was highly responsive and
                  very friendly throughout the process. We found our go-to
                  person for septic tanks at All-Star Pump Outs!
                </p>
              </blockquote>
            </div>

            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src="https://lh3.googleusercontent.com/a/ACg8ocIswMP0p9gB6GraLvFH-P3J6FDEOqitWAHmQZuS8UqPONYViA=s40-c-rp-mo-br100"
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <Stars />

                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Ana Shida
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">
                  It was a pleasure to deal with Andrew. Very knowledgeable and
                  honest . I had few estimates before him but I had a feeling
                  they overcharging me . Andrew took his time not even knowing
                  If he is getting the job and explained everything in detail .
                  He did the job the very next day . I am very pleased and bad
                  smell on my backyard is gone .
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        Hello
      </div> */}
      <Footer />
    </main>
  );
}
