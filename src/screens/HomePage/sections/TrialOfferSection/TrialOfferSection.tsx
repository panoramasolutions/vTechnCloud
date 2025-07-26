import {
  ArrowRightIcon,
  CreditCardIcon,
  GlobeIcon,
  ShieldIcon,
  ClockIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Responsive TrialOfferSection: uses window width to switch layouts
export const TrialOfferSection = (): JSX.Element => {
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== "undefined" ? window.innerWidth > 810 : true
  );

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 810);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Feature/benefit cards data for mapping (handles both desktop and mobile)
  const featureCards = [
    {
      icon: <CreditCardIcon className="w-6 h-6 text-white sm:text-inherit" />,
      iconSrc:
        "https://c.animaapp.com/mda992oeRqV2dl/img/icon-credit-card-cursor-click.svg",
     title: "Let's Talk Goals",
      description: 'We dig deep to get your business + tech aligned.',
    },
    {
      icon: <ShieldIcon className="w-6 h-6 text-white sm:text-inherit" />,
      iconSrc: "https://c.animaapp.com/mda992oeRqV2dl/img/vector-3.svg",
     title: 'Plan Like Pros',
      description: 'We map out what works—and what scales.',
    },
    {
      icon: <GlobeIcon className="w-6 h-6 text-white sm:text-inherit" />,
      iconSrc:
        "https://c.animaapp.com/mda992oeRqV2dl/img/icon-world--transaction--transfer.svg",
       title: 'Make It Happen',
      description: 'From idea to impact, fast.',
    },

     {title: 'Keep Getting Better',
      description: "We don't stop. We fine-tune and future-proof.",
     icon: <GlobeIcon className="w-6 h-6 text-white sm:text-inherit" />,
      iconSrc:
        "https://c.animaapp.com/mda992oeRqV2dl/img/icon-world--transaction--transfer.svg",}
  ];



  // Desktop version (width > 810px)
  if (isDesktop) {
    return (
      <section className="flex flex-col items-center gap-[60px] px-8 py-12 sm:py-20 sm:px-8 px-5 py-[60px] w-full bg-white">
        <Card className="flex flex-col items-start gap-2 p-[60px] sm:p-[60px] pt-8 pb-[60px] px-8 bg-[#387ff5] rounded-[32px] max-w-[1204px] w-full border-none relative overflow-visible">
          {/* Desktop background */}
          <img
            className="absolute w-[746px] h-[424px] top-[232px] left-0 sm:block hidden"
            alt="Mask group"
            src="https://c.animaapp.com/md8qit7hIsaPL2/img/mask-group.svg"
          />
          {/* Mobile background */}
          <img
            className="absolute w-[420px] h-[308px] top-[400px] left-0 sm:hidden block"
            alt="Decorative background pattern"
            src="https://c.animaapp.com/mda992oeRqV2dl/img/mask-group.svg"
          />

          <CardContent className="flex flex-wrap items-start gap-[40px] w-full p-0">
            <div className="flex flex-col  items-start gap-10 flex-1 grow">
              <h1 className="
                self-stretch
                font-heading-desktop-h1-bold font-[number:var(--heading-desktop-h1-bold-font-weight)] text-white text-[length:var(--heading-desktop-h1-bold-font-size)] tracking-[var(--heading-desktop-h1-bold-letter-spacing)] leading-[var(--heading-desktop-h1-bold-line-height)] [font-style:var(--heading-desktop-h1-bold-font-style)]
                sm:font-heading-desktop-h1-bold sm:text-[length:var(--heading-desktop-h1-bold-font-size)] sm:leading-[var(--heading-desktop-h1-bold-line-height)]
                font-heading-mobile-h1-bold text-[length:var(--heading-mobile-h1-bold-font-size)] leading-[var(--heading-mobile-h1-bold-line-height)] sm:font-heading-desktop-h1-bold sm:text-[length:var(--heading-desktop-h1-bold-font-size)] sm:leading-[var(--heading-desktop-h1-bold-line-height)]
              ">
               How we work
              </h1>

              <Button
                className="
                  items-center justify-center px-8 py-4 rounded-xl
                  bg-[linear-gradient(140deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.25)_100%)]
                  text-white
                  hover:bg-[linear-gradient(140deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.3)_100%)]
                  sm:w-fit w-full
                "
                variant="ghost"
              >
                <span className="font-button-base-bold font-[number:var(--button-base-bold-font-weight)] text-[length:var(--button-base-bold-font-size)] tracking-[var(--button-base-bold-letter-spacing)] leading-[var(--button-base-bold-line-height)] whitespace-nowrap [font-style:var(--button-base-bold-font-style)]">
                  Start your free trial
                </span>
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-col  items-start gap-5 flex-1 grow">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 pl-2 pr-[18px] py-2 self-stretch w-full rounded-2xl border border-solid border-[#ffffff33] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] bg-[linear-gradient(140deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.17)_100%)]"
                >
                  {/* Desktop icon */}
                  <div className="inline-flex gap-2 p-3 self-stretch bg-[#ffffff1a] rounded-xl backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] items-center relative flex-[0_0_auto] sm:flex hidden">
                    {card.icon}
                  </div>
                  {/* Mobile icon */}
                  <div className="inline-flex gap-2 p-3 self-stretch bg-[#ffffff1a] rounded-xl backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] items-center relative flex-[0_0_auto] sm:hidden flex">
                    <img
                      className="w-6 h-6"
                      alt={`Icon for ${card.title}`}
                      src={card.iconSrc}
                    />
                  </div>

                  <div className="flex flex-col items-start flex-1 grow">
                    <h3 className="w-fit font-semibold-medium-standard font-[number:var(--semibold-medium-standard-font-weight)] text-white text-[length:var(--semibold-medium-standard-font-size)] tracking-[var(--semibold-medium-standard-letter-spacing)] leading-[var(--semibold-medium-standard-line-height)] whitespace-nowrap [font-style:var(--semibold-medium-standard-font-style)]">
                      {card.title}
                    </h3>
                    <p className="self-stretch font-regular-medium-compact font-[number:var(--regular-medium-compact-font-weight)] text-[#ffffffb2] text-[length:var(--regular-medium-compact-font-size)] tracking-[var(--regular-medium-compact-letter-spacing)] leading-[var(--regular-medium-compact-line-height)] [font-style:var(--regular-medium-compact-font-style)]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Desktop background overlay */}
          <div className="absolute w-[746px] h-[656px] top-0 left-0 bg-[#387ff51a] sm:block hidden" />
          {/* Mobile background overlay */}
          <div className="absolute w-[420px] h-[708px] top-0 left-0 bg-[#387ff51a] sm:hidden block" />
        </Card>
      </section>
    );
  }

  // Mobile version (width <= 810px)
  return (
    <section className="flex flex-col items-center gap-[60px] py-[30px] w-full bg-white">
      <Card className="flex-col items-start gap-2 pt-8 pb-[60px] px-8 bg-[#387ff5] max-w-[1204px] w-full border-none relative overflow-visible">
        <CardContent className="flex flex-wrap items-start gap-[40px] w-full p-0">
          <div className="flex flex-col  items-start gap-10 flex-1">
            <h2 className="self-stretch font-heading-mobile-h1-bold font-[number:var(--heading-mobile-h1-bold-font-weight)] text-white text-[length:var(--heading-mobile-h1-bold-font-size)] tracking-[var(--heading-mobile-h1-bold-letter-spacing)] leading-[var(--heading-mobile-h1-bold-line-height)] [font-style:var(--heading-mobile-h1-bold-font-style)]">
          How we work
            </h2>

            <Button
              className="flex items-center justify-center px-8 py-4 self-stretch w-full rounded-xl overflow-hidden backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)] bg-[linear-gradient(140deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.25)_100%)] text-white hover:bg-[linear-gradient(140deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.3)_100%)]"
              variant="ghost"
            >
              <span className="font-button-base-bold font-[number:var(--button-base-bold-font-weight)] text-[length:var(--button-base-bold-font-size)] tracking-[var(--button-base-bold-letter-spacing)] leading-[var(--button-base-bold-line-height)] whitespace-nowrap [font-style:var(--button-base-bold-font-style)]">
                Start your free trial
              </span>
              <ArrowRightIcon className="w-[21px] h-5 ml-2" />
            </Button>
          </div>

          <div className="flex flex-col  items-start gap-5 flex-1">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="flex items-center gap-3 pl-2 pr-[18px] py-2 w-full rounded-2xl border border-solid border-[#ffffff33] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] bg-[linear-gradient(140deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.17)_100%)]"
              >
                <div className="inline-flex gap-2 p-3 bg-[#ffffff1a] rounded-xl backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] items-center">
                  <img
                    className="w-6 h-6"
                    alt={`Icon for ${card.title}`}
                    src={card.iconSrc}
                  />
                </div>

                <CardContent className="flex flex-col items-start p-0 flex-1">
                  <h3 className="font-semibold-medium-standard font-[number:var(--semibold-medium-standard-font-weight)] text-white text-[length:var(--semibold-medium-standard-font-size)] tracking-[var(--semibold-medium-standard-letter-spacing)] leading-[var(--semibold-medium-standard-line-height)] whitespace-nowrap [font-style:var(--semibold-medium-standard-font-style)]">
                    {card.title}
                  </h3>
                  <p className="self-stretch font-regular-medium-compact font-[number:var(--regular-medium-compact-font-weight)] text-[#ffffffb2] text-[length:var(--regular-medium-compact-font-size)] tracking-[var(--regular-medium-compact-letter-spacing)] leading-[var(--regular-medium-compact-line-height)] [font-style:var(--regular-medium-compact-font-style)]">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>

        {/* Background decorative elements */}
        {/* <div className="absolute w-[420px] h-[708px] top-0 left-0 bg-[#387ff51a]" />
        <img
          className="absolute w-[420px] h-[308px] top-[400px] left-0"
          alt="Decorative background pattern"
          src="https://c.animaapp.com/mda992oeRqV2dl/img/mask-group.svg"
        /> */}
      </Card>
    </section>
  );
};