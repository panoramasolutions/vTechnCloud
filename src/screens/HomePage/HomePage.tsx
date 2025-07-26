import React, { useRef,useState,useEffect } from "react";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { HeroSection } from "./sections/HeroSection";
import { SolutionOverviewSection } from "./sections/SolutionOverviewSection/SolutionOverviewSection";
import { TestimonialCarouselSection } from "./sections/TestimonialCarouselSection";
import { TrialOfferSection } from "./sections/TrialOfferSection";
import { ValuePropositionSection } from "./sections/ValuePropositionSection";
import { FaqSection } from "./sections/FaqSection";
import { KeyFeatureMobile } from "./sections/KeyFeatureMobile";
import company from "../../assets/Pic.png";
import companies from "../../assets/Pict.png";


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
export const HomePage = (): JSX.Element => {
  // Refs for scroll functionality
  const refs = {
    keyFeatures: useRef<HTMLDivElement>(null),
    aboutUs: useRef<HTMLDivElement>(null),
    ourServices: useRef<HTMLDivElement>(null),
    testimonial: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
  };

  // Window size hook for responsive layout
  const { width } = useWindowSize();
  const isDesktop = width >= 1200;

  // Navigation click handler
  const handleNavClick = (label: string) => {
    const refMap: Record<string, keyof typeof refs> = {
      "Features": "keyFeatures",
      "About us": "aboutUs",
      "Our Services": "ourServices",
      "Testimonial": "testimonial",
      "FAQ": "faq",
    };

    const refKey = refMap[label];
    if (refKey && refs[refKey].current) {
      refs[refKey].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Common sections that appear in both layouts
  const commonSections = {
    navigation: <NavigationBarSection handleNavClick={handleNavClick} />,
    footer: <FooterSection />,
    testimonials: (
      <TestimonialCarouselSection testimonialRef={refs.testimonial} />
    ),
    faq: <FaqSection faqRef={refs.faq} />,
  };

  // Desktop-specific layout
  const DesktopLayout = () => (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {commonSections.navigation}
      <MainContentSection
        keyFeaturesRef={refs.keyFeatures}
        aboutusRef={refs.aboutUs}
        ourServicesRef={refs.ourServices}
        testimonialRef={refs.testimonial}
        faqRef={refs.faq}
        handleNavClick={handleNavClick}
      />
      {commonSections.testimonials}
      {commonSections.faq}
      {commonSections.footer}
    </div>
  );

  // Mobile-specific layout
  const MobileLayout = () => (
    <div className="flex flex-col w-full items-start relative bg-white">
      {commonSections.navigation}
      <main className="flex flex-col items-start pt-0 pb-[60px] px-0 relative self-stretch w-full flex-[0_0_auto] z-[1]">
        <HeroSection   handleNavClick={handleNavClick}  />
        <CompanyStats />
        <ValuePropositionSection  aboutusRef={refs.aboutUs} />
        {commonSections.testimonials}
        
        <TrialOfferSection />
        <KeyFeatureMobile  keyFeaturesRef={refs.keyFeatures}/>
        <SolutionOverviewSection  ourServicesRef={refs.ourServices} />
        {commonSections.faq}
        
      </main>
      {commonSections.footer}
    </div>
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {isDesktop ? <DesktopLayout /> : <MobileLayout />}
    </div>
  );
};

// Separate component for company stats section
const CompanyStats = () => (
  <section className="flex flex-col items-center gap-5 pt-8 pb-[45px] px-8 relative self-stretch w-full flex-[0_0_auto] bg-white">
    <div className="flex-col items-center gap-5 flex max-w-[1204px] relative w-full flex-[0_0_auto]">
      <p className="relative self-stretch mt-[-1.00px] opacity-80 font-body-base-regular text-[#4b5162] text-center">
        160,000+ customers in over 120 countries grow their businesses with Neuros
      </p>
      
      <img
                   className="relative max-w-[1204px] w-full flex-[0_0_auto]"
                  alt="Logo"
                  src={company}
                />
                 <img
                   className="relative max-w-[1204px] w-full flex-[0_0_auto]"
                  alt="Logo"
                  src={companies}
                />
    </div>
  </section>
);