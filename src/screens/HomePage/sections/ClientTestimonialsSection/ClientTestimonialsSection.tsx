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

export const ClientTestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      quote:
        "In healthcare, data accuracy is paramount. Neuros ensures we have real-time analytics, leading to improved patient care.",
      name: "Aiden Z. Lee",
      title: "Operations Lead",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "From the intuitive interface to top-tier customer support, Neuros has exceeded all our expectations.",
      name: "Linda F.",
      title: "Marketing Manager",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "The seamless integrations and customizable dashboards make Neuros an indispensable tool for our business operations.",
      name: "Rajesh K. Patel",
      title: "CTO",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "Transformed our data stack, halved our reporting lag and boosted actionable insight.",
      name: "Nathan D. Hall",
      title: "COO, Retail Chain",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "Cloud migration was flawless—and the AI layer? Budget-savvy and performance-ready.",
      name: "Naomi K. Johnson",
      title: "CTO, FinTech startup",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "Real-time data processing with vTechnoCloud has changed how we make decisions. It's a must-have tool for modern businesses.",
      name: "Michael O. Lopez",
      title: "Operations Director",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "The seamless integrations and customizable dashboards make Neuros an indispensable tool for our business operations.",
      name: "Rajesh K. Patel",
      title: "CTO",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "Financial forecasting is complex, but Neuros has simplified it for us. Its predictive analytics are second to none.",
      name: "Isaac L. Kim",
      title: "Chief Financial Officer",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "The seamless integrations and customizable dashboards make Neuros an indispensable tool for our business.",
      name: "Raj K.",
      title: "CTO",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-12 py-32 px-8 w-full bg-white shadow-md relative z-[2]">
      <div className="flex flex-col max-w-[1204px] gap-12 w-full items-center">
        <div className="max-w-[800px] w-full flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className=" text-[39px] w-full font-heading-desktop-h2-bold text-[#343844] text-center">
              Client Success Stories
            </h2>

            <p className="max-w-[820px] w-full opacity-80 font-body-base-regular text-[#343844] text-center px-5">
              At vTechnoCloud, we pride ourselves on delivering top-notch
              technology goals. But don&#39;t just take our word for it. Hear
              what our satisfied users have to say.
            </p>
          </div>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3 pl-0"
              >
                <Card className="bg-[#2e71e5] rounded-[20px] border border-solid border-[#b6bbcd] backdrop-blur-2xl h-[524px]">
                  <CardContent className="flex flex-col items-center gap-5 p-10 h-full">
                    <div className="w-[161.99px] h-12" />
                    <p className="flex-1 font-body-md-medium text-[#f5f6f9] text-center">
                      {testimonial.quote}
                    </p>
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="w-8 h-8 rounded-[40px] border border-solid border-[#ffffff99]">
                        <AvatarImage
                          src={testimonial.avatarSrc}
                          alt="Profile"
                        />
                        <AvatarFallback className="bg-[#2e71e5]"></AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-center">
                        <span className="font-body-base-semibold text-[#f5f6f9] text-center whitespace-nowrap">
                          {testimonial.name}
                        </span>
                        <span className="font-body-base-regular text-[#b6bbcd] text-center whitespace-nowrap">
                          {testimonial.title}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
          <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
};
