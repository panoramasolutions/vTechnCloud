import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { Button } from "../../components/ui/button";
import { FaqSection } from "./sections/FaqSection";
import { HeroSection } from "./sections/HeroSection";
import { SolutionOverviewSection } from "./sections/SolutionOverviewSection/SolutionOverviewSection";
import { TestimonialCarouselSection } from "./sections/TestimonialCarouselSection";
import { TrialOfferSection } from "./sections/TrialOfferSection";
import { ValuePropositionSection } from "./sections/ValuePropositionSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import {FaqSectionDesktop} from "./sections/FaqSectionDesktop/FaqSectionDesktop";
export const HomePage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* >=1200px: original layout */}
      <div className="hidden lg:flex flex-col w-full min-h-screen bg-white" data-model-id="540:12604">
        <NavigationBarSection />
        <MainContentSection />
        <ClientTestimonialsSection/>
        <FaqSectionDesktop/>
        <FooterSection />
      </div>

      {/* <1200px: responsive layout */}
      <div className="flex flex-col w-full items-start relative bg-white lg:hidden" data-model-id="223:63915">
        <header className="flex flex-col items-start px-8 py-0 relative self-stretch w-full flex-[0_0_auto] z-[2] bg-white">
          <nav className="flex flex-col max-w-[1204px] items-start relative w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#d1d5e2]">
            <div className="flex items-center justify-between px-0 py-3.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-10 relative self-stretch flex-[0_0_auto]">
                <div className="relative w-[114px] h-8">
                  <div className="absolute w-[93px] h-[21px] top-[3px] left-0">
                    <img
                      className="absolute w-3 h-4 top-1.5 left-[81px]"
                      alt="Vector"
                      src="https://c.animaapp.com/md8qit7hIsaPL2/img/vector-23.svg"
                    />
                    <img
                      className="absolute w-4 h-4 top-1.5 left-[63px]"
                      alt="Vector"
                      src="https://c.animaapp.com/md8qit7hIsaPL2/img/vector-12.svg"
                    />
                    <img
                      className="absolute w-2 h-[15px] top-1.5 left-[55px]"
                      alt="Vector"
                      src="https://c.animaapp.com/md8qit7hIsaPL2/img/vector-10.svg"
                    />
                    <img
                      className="absolute w-3.5 h-[15px] top-1.5 left-[37px]"
                      alt="Vector"
                      src="https://c.animaapp.com/md8qit7hIsaPL2/img/vector-13.svg"
                    />
                    <img
                      className="absolute w-[15px] h-4 top-1.5 left-[19px]"
                      alt="Vector"
                      src="https://c.animaapp.com/md8qit7hIsaPL2/img/vector-19.svg"
                    />
                    <img
                      className="absolute w-4 h-[21px] top-0 left-0"
                      alt="Vector"
                      src="https://c.animaapp.com/md8qit7hIsaPL2/img/vector.svg"
                    />
                  </div>
                  <img
                    className="absolute w-4 h-[17px] top-2 left-[99px]"
                    alt="Nimbus symbol"
                    src="https://c.animaapp.com/md8qit7hIsaPL2/img/nimbus-symbol.svg"
                  />
                </div>
              </div>

            <div className="inline-flex items-center justify-end gap-2 relative flex-[0_0_auto] min-[810px]:flex hidden min-[810px]:inline-flex">
                <Button
                    variant="outline"
                    className="items-center justify-center px-4 py-3 bg-white rounded-lg overflow-hidden border border-solid border-[#b6d0fb] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]"
                >
                    <span className="font-button-small-bold font-[number:var(--button-small-bold-font-weight)] text-[#387ff5] text-[length:var(--button-small-bold-font-size)] tracking-[var(--button-small-bold-letter-spacing)] leading-[var(--button-small-bold-line-height)] whitespace-nowrap [font-style:var(--button-small-bold-font-style)]">
                        Get a demo
                    </span>
                </Button>

                <Button className="items-center justify-center px-4 py-3 bg-[#387ff5] rounded-lg overflow-hidden">
                    <span className="font-button-small-bold font-[number:var(--button-small-bold-font-weight)] text-white text-[length:var(--button-small-bold-font-size)] tracking-[var(--button-small-bold-letter-spacing)] leading-[var(--button-small-bold-line-height)] whitespace-nowrap [font-style:var(--button-small-bold-font-style)]">
                        Start your free trial
                    </span>
                </Button>

                <div className="relative w-12 h-12 rounded-[999px]" />
            </div>
            </div>
          </nav>
        </header>

        <main className="flex flex-col items-start pt-0 pb-[60px] px-0 relative self-stretch w-full flex-[0_0_auto] z-[1]">
          <HeroSection />

          <section className="flex flex-col items-center gap-5 pt-10 pb-[60px] px-8 relative self-stretch w-full flex-[0_0_auto] bg-white">
            <div className="flex-col items-center gap-5 flex max-w-[1204px] relative w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] opacity-80 font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-[#4b5162] text-[length:var(--body-base-regular-font-size)] text-center tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                160,000+ customers in over 120 countries grow their businesses
                with Neuros
              </p>
              <img
                className="relative max-w-[1204px] w-full flex-[0_0_auto]"
                alt="Logo"
                src="https://c.animaapp.com/md8qit7hIsaPL2/img/logo.svg"
              />
            </div>
          </section>

          <ValuePropositionSection />
          <TestimonialCarouselSection />
          <TrialOfferSection />
          <SolutionOverviewSection />
          <FaqSection />
        </main>

        <FooterSection />
      </div>
    </div>
  );
};