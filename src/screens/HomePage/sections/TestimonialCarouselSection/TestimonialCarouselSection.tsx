import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

// Testimonial data for 
const testimonials = [
  {
    quote:
      "In healthcare, data accuracy is paramount. Neuros ensures we have real-time analytics, leading to improved patient care.",
    name: "Aiden Z. Lee",
    role: "Operations Lead",
  },
  {
    quote:
      "From the intuitive interface to top-tier customer support, Neuros has exceeded all our expectations.",
    name: "Linda F.",
    role: "Marketing Manager",
  },
  {
    quote:
      "The seamless integrations and customizable dashboards make Neuros an indispensable tool for our business operations.",
    name: "Rajesh K. Patel",
    role: "CTO",
  },
  {
    quote:
      "Project management is smoother with Neuros. Its dashboards provide a clear view of progress and areas of improvement.",
    name: "Nathan D. Hall",
    role: "Project Lead",
  },
  {
    quote:
      "Neuros's real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.",
    name: "Naomi K. Johnson",
    role: "Product Manager",
  },
  {
    quote:
      "Real-time data processing with Neuros has changed how we make decisions. It's a must-have tool for modern businesses.",
    name: "Michael O. Lopez",
    role: "Operations Director",
  },
  {
    quote:
      "The seamless integrations and customizable dashboards make Neuros an indispensable tool for our business operations.",
    name: "Rajesh K. Patel",
    role: "CTO",
  },
  {
    quote:
      "Financial forecasting is complex, but Neuros has simplified it for us. Its predictive analytics are second to none.",
    name: "Isaac L. Kim",
    role: "Chief Financial Officer",
  },
  {
    quote:
      "The seamless integrations and customizable dashboards make Neuros an indispensable tool for our business.",
    name: "Raj K.",
    role: "CTO",
  },
];

export const TestimonialCarouselSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 py-32 px-8 sm:py-32 sm:px-8 py-[60px] px-5 w-full bg-white">
      <div className="flex flex-col max-w-[1204px] gap-12 w-full items-center">
        <header className="flex flex-col max-w-[800px] items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="w-full text-center
              font-heading-desktop-h2-bold font-[number:var(--heading-desktop-h2-bold-font-weight)] text-[#1c1f25] text-[length:var(--heading-desktop-h2-bold-font-size)] tracking-[var(--heading-desktop-h2-bold-letter-spacing)] leading-[var(--heading-desktop-h2-bold-line-height)] [font-style:var(--heading-desktop-h2-bold-font-style)]
              sm:font-heading-desktop-h2-bold sm:text-[length:var(--heading-desktop-h2-bold-font-size)] sm:leading-[var(--heading-desktop-h2-bold-line-height)]
              font-heading-mobile-h2-bold text-[length:var(--heading-mobile-h2-bold-font-size)] leading-[var(--heading-mobile-h2-bold-line-height)] sm:font-heading-desktop-h2-bold sm:text-[length:var(--heading-desktop-h2-bold-font-size)] sm:leading-[var(--heading-desktop-h2-bold-line-height)]
            ">
              The Neuros Experience
            </h2>
            <p className="max-w-[820px] w-full text-center opacity-80 font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-[#4b5162] text-[length:var(--body-base-regular-font-size)] tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
              At Neuros, we pride ourselves on delivering top-notch AI-driven
              business analytics. But don't just take our word for it. Hear what
              our satisfied users have to say.
            </p>
          </div>
        </header>

        <Carousel className="w-full">
          <CarouselContent className="py-4 -ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-[524px] border border-solid border-[#b6bbcd] rounded-[20px] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]">
                  <CardContent className="flex flex-col items-center justify-between h-full gap-5 p-8 sm:p-10">
                    <div className="w-[161.99px] h-12" />
                    <p className="flex-1 font-body-md-medium font-[number:var(--body-md-medium-font-weight)] text-[#1c1f25] text-[length:var(--body-md-medium-font-size)] text-center tracking-[var(--body-md-medium-letter-spacing)] leading-[var(--body-md-medium-line-height)] [font-style:var(--body-md-medium-font-style)]">
                      {testimonial.quote}
                    </p>
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="w-8 h-8 rounded-[40px] border border-solid border-[#ffffff99]">
                        <AvatarImage
                          src={
                            // Use different avatar for mobile/desktop if needed
                            "https://c.animaapp.com/md8qit7hIsaPL2/img/image-ava.svg"
                          }
                          alt="Profile avatar"
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-center">
                        <span className="font-body-base-semibold font-[number:var(--body-base-semibold-font-weight)] text-[#343844] text-[length:var(--body-base-semibold-font-size)] text-center tracking-[var(--body-base-semibold-letter-spacing)] leading-[var(--body-base-semibold-line-height)] whitespace-nowrap [font-style:var(--body-base-semibold-font-style)]">
                          {testimonial.name}
                        </span>
                        <span className="font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-[#4b5162] text-[length:var(--body-base-regular-font-size)] text-center tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] whitespace-nowrap [font-style:var(--body-base-regular-font-style)]">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Show carousel arrows only on desktop/tablet */}
          <CarouselPrevious className="left-4 sm:flex hidden" />
          <CarouselNext className="right-4 sm:flex hidden" />
        </Carousel>
      </div>
    </section>
  );
};