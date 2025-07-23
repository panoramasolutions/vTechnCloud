import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import StarSvg from "../../../../svgcomponent/StarSvg";

const faqItems = [
  {
    question:
      "What is Neuros and how does it differ from other analytics platforms?",
    answer:
      "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes.",
    defaultOpen: true,
  },
  {
    question: "How does the AI-driven predictive analytics feature work?",
    answer: "",
    defaultOpen: false,
  },
  {
    question: "Is my data secure with Neuros?",
    answer: "",
    defaultOpen: false,
  },
  {
    question:
      "Can I integrate Neuros with other tools and platforms I currently use?",
    answer: "",
    defaultOpen: false,
  },
  {
    question:
      "How is the pricing structured for Neuros? Are there any hidden fees?",
    answer: "",
    defaultOpen: false,
  },
  {
    question:
      "I'm new to business analytics. Does Neuros offer any support or tutorials?",
    answer: "",
    defaultOpen: false,
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section
      className="
        flex flex-col items-center
        gap-[60px]
        pt-32 pb-28 px-8
        sm:pt-32 sm:pb-28 sm:px-8
        px-5 py-[60px]
        relative w-full bg-white
      "
    >
      <div className="flex flex-wrap items-start gap-[48px] max-w-[1204px] w-full">
        {/* Left column - Title and description */}
        <div className="min-w-[360px] max-w-[476px] flex-1 flex flex-col items-start gap-6 pr-10">
          <div className="flex flex-col items-start gap-4 w-full">
            <Badge
              variant="outline"
              className={`
                px-3 py-2 bg-white rounded-[20px] border-[#b6bbcd] shadow-shadow-to-bot-neutral-1 flex items-center gap-2
                sm:flex
                ${/* On mobile, add gap-2 for badge */ ""} sm:gap-2
              `}
            >
              <div className="relative w-5 h-5">
                <StarSvg className="absolute w-[18px] h-[17px] top-0.5 left-px sm:hidden block" />
                {/* <img
                  className="absolute w-[18px] h-[17px] top-0.5 left-px sm:hidden block"
                  alt="Vector"
                  src="https://c.animaapp.com/mda992oeRqV2dl/img/vector-2.svg"
                /> */}
              </div>
              <span className="font-body-base-medium text-[#4b5162]">FAQ</span>
            </Badge>

            <h2 className="font-heading-desktop-h2-bold text-[#1c1f25] w-full">
              Frequently asked questions
            </h2>

            <p className="opacity-80 font-body-base-regular text-[#4b5162] pr-6">
              Explore our frequently asked questions to learn more about
              Neuros&apos;s features, security, integration capabilities, and
              more
            </p>
          </div>
        </div>

        {/* Right column - FAQ accordion */}
        <div className="min-w-[360px] flex-1 flex flex-col gap-6">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className={
                  // On mobile, first item border is #b6bbcd, others #ebedf3; on desktop all #ebedf3
                  `border-b ${
                    index === 0
                      ? "sm:border-[#ebedf3] border-[#b6bbcd]"
                      : "border-[#ebedf3]"
                  }`
                }
              >
                <div className="flex items-start gap-4 pr-5">
                  <div className="flex w-1 self-stretch py-1.5">
                    <div className="flex-1 self-stretch bg-[#387ff5] rounded-sm" />
                  </div>
                  <AccordionTrigger className="py-6 hover:no-underline flex-1 text-left">
                    <h3 className="font-heading-desktop-h5-bold text-[#1c1f25] text-left">
                      {item.question}
                    </h3>
                  </AccordionTrigger>
                </div>
                <AccordionContent className="pl-5 pr-5 pb-5">
                  <p className="font-body-base-regular text-[#4b5162]">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};