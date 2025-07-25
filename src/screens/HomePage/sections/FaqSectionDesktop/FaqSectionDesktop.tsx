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
      "What services do you offer?",
    answer:
      "We offer end-to-end IT services including software development, cloud migration, AI/ML solutions, business intelligence (Power BI), data analytics, automation, secured backup systems, and technical consulting.",
    defaultOpen: true,
  },
  {
    question: "What industries do you work with?",
    answer: "We serve clients across multiple industries such as healthcare, finance, retail, logistics, education, and manufacturing. Our solutions are tailored to your domain-specific needs.",
    defaultOpen: false,
  },
  {
    question: "Do you offer custom software development?",
    answer: "Yes, we specialize in building custom software tailored to your business processes—from planning and design to development, deployment, and support.",
    defaultOpen: false,
  },
  {
    question:
      "How do you ensure data security and compliance?",
    answer: "Security is a top priority. We implement best practices in data encryption, access control, secure coding, and follow compliance standards like GDPR, HIPAA, and ISO where required",
    defaultOpen: false,
  },
  {
    question:
      "Can you help with legacy system modernization?",
    answer: "Absolutely. We help modernize outdated systems by migrating to modern tech stacks, improving performance, UI/UX, and overall maintainability.",
    defaultOpen: false,
  },
  {
    question:
      "What’s your development process like?",
    answer: "We follow agile methodology with iterative development, regular client feedback, continuous testing, and transparent progress tracking",
    defaultOpen: false,
  },
   {
    question:
      "Do you provide post-launch support and maintenance?",
    answer: "Yes. We offer ongoing support, bug fixes, upgrades, and performance monitoring to ensure your systems remain secure and up-to-date",
    defaultOpen: false,
  },
   {
    question:
      "How do we get started with your team?",
    answer: "You can contact us through our website, schedule a consultation, or email us directly. We'll set up an initial discovery session to understand your goals and propose a tailored solution",
    defaultOpen: false,
  },
   {
    question:
      "Do you work with startups and small businesses?",
    answer: "Yes! Whether you're a startup or a large enterprise, we scale our solutions and pricing to meet your needs and budget",
    defaultOpen: false,
  },
   {
    question:
      "Can I hire developers or a dedicated team from you?",
    answer: "Yes. We offer flexible engagement models including dedicated developers, project-based teams, and staff augmentation depending on your project scope.",
    defaultOpen: false,
  },
];

export const FaqSectionDesktop = ({faqRef}:any) => {
  return (
    <section ref={faqRef} className="flex flex-col items-center gap-[60px] pt-32 pb-28 px-8 relative self-stretch w-full flex-[0_0_auto] mb-[-146.22px] bg-white">
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