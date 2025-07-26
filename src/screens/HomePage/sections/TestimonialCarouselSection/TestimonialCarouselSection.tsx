import React,{useState,useEffect} from "react";
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
        "Thanks to their cloud migration strategy, we reduced our infrastructure costs and scaled seamlessly—without any downtime",
      name: "Madison Cole",
      title: "Operations Lead",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:"With their Power BI expertise, we now make faster, data-driven decisions—what used to take hours now takes minutes.",
      name: "Jackson Reed",
      title: "Marketing Manager",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "Their Python automation saved us hundreds of hours. Routine tasks that took days are now completed in just a few clicks.",
      name: "Avery Bennett",
      title: "CTO",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "The AI solution they built helped us understand customer behavior and boost retention by over 25%.",
      name: "Logan Brooks",
      title: "COO, Retail Chain",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "They modernized our legacy app into a sleek, high-performance platform—our users noticed the difference instantly",
      name: " Harper Sullivan",
      title: "CTO, FinTech startup",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "We sleep better knowing our backups are automated and disaster-ready. Their secured backup solution is rock solid.",
      name: "Mason Grant",
      title: "Operations Director",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "Real-time data integration changed how we operate. We now track shipments live and optimize routes on the go",
      name: "Chloe Hayes",
      title: "CTO",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "Financial forecasting is complex, but VTECHNOCLOUD has simplified it for us. Its predictive analytics are second to none.",
      name: "Ethan West",
      title: "Chief Financial Officer",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
    {
      quote:
        "The seamless integrations and customizable dashboards make VTECHNOCLOUD an indispensable tool for our business.",
      name: "Riley Dawson",
      title: "CTO",
      avatarSrc: "https://c.animaapp.com/mde1q96l7iAMhF/img/image-ava.svg",
    },
  ];
interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

 const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
interface TestimonialSectionProps {
  testimonialRef?: React.RefObject<HTMLElement>;
}

export const TestimonialCarouselSection = ({ testimonialRef }: TestimonialSectionProps): JSX.Element => {
  const { width } = useWindowSize();
  const isDesktop = width ? width >= 1200 : false;

  return (
    <section 
      ref={testimonialRef}
      className={`
        flex flex-col items-center gap-12 py-12 px-8 w-full bg-white
        ${isDesktop ? 'shadow-md relative z-[2]' : ''}
      `}
    >
      <div className="flex flex-col max-w-[1204px] gap-12 w-full items-center">
        <header className="flex flex-col max-w-[800px] items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className={`
              w-full text-center font-heading-desktop-h2-bold
              ${isDesktop ? 'text-[39px] text-[#343844]' : 'text-[#1c1f25] font-weight-bold'}
            `}>
             Client Success Stories
            </h2>
            <p className={`
              max-w-[820px] w-full text-center opacity-80 font-body-base-regular
              ${isDesktop ? 'text-[#343844] px-5' : 'text-[#4b5162]'}
            `}>
              At vTechnoCloud, we pride ourselves on delivering top-notch
              technology goals. But don't just take our word for it. Hear what
              our satisfied users have to say.
            </p>
          </div>
        </header>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: isDesktop,
          }}
        >
          <CarouselContent className={`${isDesktop ? 'flex items-center justify-center' : 'py-4 -ml-4'}`}>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className={`
                  ${isDesktop ? 'basis-full md:basis-1/2 lg:basis-1/3 pl-0' : 'pl-4 md:basis-1/2 lg:basis-1/3'}
                `}
              >
                <Card className={`
                  h-[524px] rounded-[20px] border border-solid border-[#b6bbcd] backdrop-blur-2xl
                  ${isDesktop ? 'bg-[#2e71e5]' : ''}
                `}>
                  <CardContent className={`
                    flex flex-col items-center h-full gap-5
                    ${isDesktop ? 'p-10' : 'p-8 sm:p-10 justify-between'}
                  `}>
                    <div className="w-[161.99px] h-12" />
                    <p className={`
                      flex-1 font-body-md-medium text-center
                      ${isDesktop ? 'text-[#f5f6f9]' : 'text-[#1c1f25]'}
                    `}>
                      {testimonial.quote}
                    </p>
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="w-8 h-8 rounded-[40px] border border-solid border-[#ffffff99]">
                        <AvatarImage
                          src={testimonial.avatarSrc}
                          alt="Profile avatar"
                        />
                        <AvatarFallback className={isDesktop ? 'bg-[#2e71e5]' : ''}>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-center">
                        <span className={`
                          font-body-base-semibold text-center whitespace-nowrap
                          ${isDesktop ? 'text-[#f5f6f9]' : 'text-[#343844]'}
                        `}>
                          {testimonial.name}
                        </span>
                        <span className={`
                          font-body-base-regular text-center whitespace-nowrap
                          ${isDesktop ? 'text-[#b6bbcd]' : 'text-[#4b5162]'}
                        `}>
                          {testimonial.title}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {isDesktop ? (
            <>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
            </>
          ) : (
            <>
              <CarouselPrevious className="left-4 sm:flex hidden" />
              <CarouselNext className="right-4 sm:flex hidden" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};