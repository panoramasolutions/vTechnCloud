import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
// FAQ data object
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

export const FaqSectionDesktop = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[60px] pt-32 pb-28 px-8 relative self-stretch w-full flex-[0_0_auto] mb-[-146.22px] bg-white">
      <div className="flex-wrap items-start gap-[48px_48px] flex-[0_0_auto] flex max-w-[1204px] relative w-full">
        <div className="min-w-[360px] max-w-[476px] items-start justify-end gap-6 pl-0 pr-10 py-0 flex-1 grow flex flex-col relative">
          <div className="flex flex-col items-start gap-4 self-stretch w-full relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-white rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1">
              <div className="relative w-5 h-5">
                <img
                  className="absolute w-[18px] h-[17px] top-0.5 left-px"
                  alt="Vector"
                  src="https://c.animaapp.com/md8b7ghrplsItz/img/vector-1.svg"
                />
              </div>
              <div className="relative w-fit mt-[-1.00px] font-body-base-medium font-[number:var(--body-base-medium-font-weight)] text-[#4b5162] text-[length:var(--body-base-medium-font-size)] text-center tracking-[var(--body-base-medium-letter-spacing)] leading-[var(--body-base-regular-line-height)] whitespace-nowrap [font-style:var(--body-base-medium-font-style)]">
                FAQ
              </div>
            </div>
            <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-heading-desktop-h2-bold font-[number:var(--heading-desktop-h2-bold-font-weight)] text-[#1c1f25] text-[length:var(--heading-desktop-h2-bold-font-size)] tracking-[var(--heading-desktop-h2-bold-letter-spacing)] leading-[var(--heading-desktop-h2-bold-line-height)] [font-style:var(--heading-desktop-h2-bold-font-style)]">
                Frequently asked questions
              </div>
            </div>
            <div className="flex pl-0 pr-6 py-0 self-stretch w-full items-center gap-2 relative flex-[0_0_auto]">
              <div className="flex-1 mt-[-1.00px] relative opacity-80 font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-[#4b5162] text-[length:var(--body-base-regular-font-size)] tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                Explore our frequently asked questions to learn more about
                Neuros’s features, security, integration capabilities, and
                more
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col min-w-[360px] items-center gap-6 flex-1 grow flex relative">
          {/* FAQ Items */}
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