import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center pt-28 pb-20 px-8 sm:pt-28 sm:pb-20 sm:px-8 px-5 py-[60px] relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col max-w-[1204px] items-center gap-[60px] sm:gap-[60px] gap-8 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-[860px] items-center gap-10 sm:gap-10 gap-8 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-5 self-stretch w-full relative flex-[0_0_auto]">
            <Badge
              className="inline-flex items-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-white rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1"
              variant="outline"
            >
              <div className="relative w-5 h-5">
                {/* Desktop/Tablet icon */}
                <img
                  className="absolute w-[18px] h-[17px] top-0.5 left-px sm:block hidden"
                  alt="Vector"
                  src="https://c.animaapp.com/md8qit7hIsaPL2/img/vector-18.svg"
                />
                {/* Mobile icon */}
                <img
                  className="absolute w-[18px] h-[17px] top-0.5 left-px sm:hidden block"
                  alt="Vector"
                  src="https://c.animaapp.com/mda992oeRqV2dl/img/vector-2.svg"
                />
              </div>
              <span className="relative w-fit mt-[-1.00px] font-body-base-medium font-[number:var(--body-base-medium-font-weight)] text-[#4b5162] text-[length:var(--body-base-medium-font-size)] text-center tracking-[var(--body-base-medium-letter-spacing)] leading-[var(--body-base-medium-line-height)] whitespace-nowrap [font-style:var(--body-base-medium-font-style)]">
                <span className="sm:inline hidden">
                  Generative Business Intelligence for Analysts
                </span>
                <span className="sm:hidden inline">
                  Generative Intelligence for Analysts
                </span>
              </span>
            </Badge>

            <h1 className="
              relative self-stretch text-center
              font-heading-desktop-h1-bold font-[number:var(--heading-desktop-h1-bold-font-weight)] text-[#1c1f25] text-[length:var(--heading-desktop-h1-bold-font-size)] tracking-[var(--heading-desktop-h1-bold-letter-spacing)] leading-[var(--heading-desktop-h1-bold-line-height)] [font-style:var(--heading-desktop-h1-bold-font-style)]
              sm:font-heading-desktop-h1-bold sm:text-[length:var(--heading-desktop-h1-bold-font-size)] sm:leading-[var(--heading-desktop-h1-bold-line-height)]
              font-heading-mobile-h1-bold text-[length:var(--heading-mobile-h1-bold-font-size)] leading-[var(--heading-mobile-h1-bold-line-height)] sm:font-heading-desktop-h1-bold sm:text-[length:var(--heading-desktop-h1-bold-font-size)] sm:leading-[var(--heading-desktop-h1-bold-line-height)]
            ">
              Revolutionizing Business Decisions with AI-Powered Analytics
            </h1>

            <div className="items-start px-20 py-0 flex gap-2 relative self-stretch w-full flex-[0_0_auto] sm:flex sm:px-20 px-5 sm:py-0 py-0">
              <p className="relative flex-1 mt-[-1.00px] opacity-80 font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-[#4b5162] text-[length:var(--body-base-regular-font-size)] text-center tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                Harnesses the power of artificial intelligence to transform your
                business data into actionable insights, propelling you to new
                heights of success
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="sm:items-start sm:gap-3 sm:inline-flex sm:relative sm:flex-[0_0_auto] flex flex-col items-start gap-3 w-full">
            {/* Desktop/Tablet */}
            <div className="sm:flex hidden items-start gap-3">
              <Button
                className="items-center justify-center px-5 py-3 bg-[#387ff5] rounded-xl overflow-hidden inline-flex relative flex-[0_0_auto]"
                variant="default"
              >
                <span className="font-button-base-bold font-[number:var(--button-base-bold-font-weight)] text-white text-[length:var(--button-base-bold-font-size)] tracking-[var(--button-base-bold-letter-spacing)] leading-[var(--button-base-bold-line-height)] whitespace-nowrap [font-style:var(--button-base-bold-font-style)]">
                  Start your free trial
                </span>
              </Button>
              <Button
                className="items-center justify-center gap-2 px-5 py-3 bg-[#ffffff1a] rounded-xl overflow-hidden border border-solid border-[#b6bbcd] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] inline-flex relative flex-[0_0_auto]"
                variant="outline"
              >
                <img
                  className="relative w-[18px] h-[18px]"
                  alt="Play icon"
                  src="https://c.animaapp.com/md8qit7hIsaPL2/img/icon-play.svg"
                />
                <span className="font-button-small-bold font-[number:var(--button-small-bold-font-weight)] text-[#4b5162] text-[length:var(--button-small-bold-font-size)] tracking-[var(--button-small-bold-letter-spacing)] leading-[var(--button-small-bold-line-height)] whitespace-nowrap [font-style:var(--button-small-bold-font-style)]">
                  Watch video
                </span>
              </Button>
            </div>
            {/* Mobile */}
            <div className="sm:hidden flex flex-col items-start gap-3 w-full">
              <Button className="w-full py-3 bg-[#387ff5] rounded-xl font-button-base-bold font-[number:var(--button-base-bold-font-weight)] text-white text-[length:var(--button-base-bold-font-size)] tracking-[var(--button-base-bold-letter-spacing)] leading-[var(--button-base-bold-line-height)] [font-style:var(--button-base-bold-font-style)]">
                Start your free trial
              </Button>
              <Button
                variant="outline"
                className="w-full py-3 bg-[#ffffff1a] rounded-xl border-[#b6bbcd] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] flex items-center justify-center gap-2"
              >
                <img
                  className="w-[18px] h-[18px]"
                  alt="Play icon"
                  src="https://c.animaapp.com/mda992oeRqV2dl/img/l-icon-2.svg"
                />
                <span className="font-button-small-bold font-[number:var(--button-small-bold-font-weight)] text-[#4b5162] text-[length:var(--button-small-bold-font-size)] tracking-[var(--button-small-bold-letter-spacing)] leading-[var(--button-small-bold-line-height)] [font-style:var(--button-small-bold-font-style)]">
                  Watch video
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Card/graphic */}
        <div className="w-full">
          {/* Desktop/Tablet */}
          <Card className="relative self-stretch w-full h-[480px] bg-[#387ff5] rounded-3xl overflow-hidden border border-solid border-[#d1d5e2] sm:block hidden">
            <div className="relative w-[746px] h-[480px]">
              <div className="absolute w-[746px] h-[480px] top-0 left-0 bg-[#6099f7] overflow-hidden">
                <div className="absolute w-[1173px] h-[716px] top-0 left-0">
                  <img
                    className="absolute w-[746px] h-[480px] top-0 left-0"
                    alt="Grid"
                    src="https://c.animaapp.com/md8qit7hIsaPL2/img/grid.svg"
                  />
                  <div className="absolute w-[186px] h-[186px] top-[148px] left-[239px]">
                    <div className="h-[186px]">
                      <div className="relative w-[186px] h-[186px] rounded-[92.76px]">
                        <div className="absolute w-[186px] h-[186px] top-0 left-0 bg-[#ffffff66] rounded-[92.76px] opacity-20" />
                        <div className="absolute w-[135px] h-[136px] top-[23px] left-6 bg-[#ffffff99] rounded-[67.5px/68px] opacity-20" />
                        <div className="absolute w-[27px] h-[27px] top-[78px] left-[78px] bg-[#ffffff99] rounded-[13.25px]" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[55px] h-[55px] top-24 left-[410px]">
                    <div className="relative h-[55px] rounded-[27.5px]">
                      <div className="absolute w-[55px] h-[55px] top-0 left-0 bg-[#ffffff66] rounded-[27.5px] opacity-20" />
                      <div className="absolute w-[35px] h-[35px] top-[9px] left-[9px] bg-[#ffffff99] rounded-[17.5px] opacity-20" />
                      <div className="absolute w-[18px] h-[18px] top-[18px] left-[18px] bg-[#ffffff99] rounded-[8.75px]" />
                    </div>
                  </div>
                  <div className="absolute w-[129px] h-[129px] top-[334px] left-[158px]">
                    <div className="relative h-[129px] rounded-[64.5px]">
                      <div className="absolute w-[129px] h-[129px] top-0 left-0 bg-[#ffffff66] rounded-[64.5px] opacity-20" />
                      <div className="absolute w-[69px] h-[69px] top-[29px] left-[29px] bg-[#ffffff99] rounded-[34.73px] opacity-20" />
                      <div className="absolute w-[35px] h-[35px] top-[46px] left-[46px] bg-[#ffffff99] rounded-[17.37px]" />
                    </div>
                  </div>
                  <div className="absolute w-[472px] h-[472px] top-[244px] left-[701px]">
                    <div className="relative h-[472px] rounded-[236px]">
                      <div className="absolute w-[472px] h-[472px] top-0 left-0 bg-[#ffffff66] rounded-[236px] opacity-20" />
                      <div className="absolute w-[254px] h-[254px] top-[104px] left-[104px] bg-[#ffffff99] rounded-[127.08px] opacity-20" />
                    </div>
                  </div>
                  <div className="absolute w-[746px] h-[480px] top-0 left-0 bg-[#387ff51a]" />
                </div>
                <div className="absolute w-[352px] h-[352px] -top-32 left-[-353px]">
                  <div className="relative h-[352px] rounded-[176px]">
                    <div className="absolute w-[352px] h-[352px] top-0 left-0 bg-[#ffffff66] rounded-[176px] opacity-20" />
                    <div className="absolute w-[190px] h-[190px] top-[78px] left-[78px] bg-[#ffffff99] rounded-[94.77px] opacity-20" />
                  </div>
                </div>
              </div>
              <Button
                className="inline-flex items-center gap-3 pl-3 pr-6 py-3 absolute top-[186px] left-[198px] bg-white rounded-[48px] border-[12px] border-solid border-[#c3d0ff59] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]"
                variant="ghost"
              >
                <div className="relative w-[60px] h-[60px]">
                  <img
                    className="absolute w-[53px] h-[53px] top-1 left-1"
                    alt="Icon play"
                    src="https://c.animaapp.com/md8qit7hIsaPL2/img/icon-play.svg"
                  />
                </div>
                <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                  <h3 className="relative w-fit mt-[-1.00px] font-body-md-semibold font-[number:var(--body-md-semibold-font-weight)] text-[#1c1f25] text-[length:var(--body-md-semibold-font-size)] tracking-[var(--body-md-semibold-letter-spacing)] leading-[var(--body-md-semibold-line-height)] whitespace-nowrap [font-style:var(--body-md-semibold-font-style)]">
                    Watch introduce video
                  </h3>
                  <div className="inline-flex gap-2 items-center relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] opacity-80 font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-[#4b5162] text-[length:var(--body-base-regular-font-size)] tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] whitespace-nowrap [font-style:var(--body-base-regular-font-style)]">
                      5 mins
                    </span>
                    <div className="relative w-1 h-1 bg-[#32438b33] rounded-sm" />
                    <span className="relative w-fit mt-[-1.00px] font-body-base-medium font-[number:var(--body-base-medium-font-weight)] text-[#387ff5] text-[length:var(--body-base-medium-font-size)] tracking-[var(--body-base-medium-letter-spacing)] leading-[var(--body-base-medium-line-height)] whitespace-nowrap [font-style:var(--body-base-medium-font-style)]">
                      Play video
                    </span>
                  </div>
                </div>
              </Button>
            </div>
          </Card>
          {/* Mobile */}
          <Card className="w-full h-[267px] bg-[#387ff5] rounded-3xl overflow-hidden border-[#d1d5e2] sm:hidden block">
            <CardContent className="p-0 h-full relative">
              <div className="relative w-[380px] h-[267px]">
                <div className="absolute w-[380px] h-[267px] top-0 left-0 bg-[#6099f7] overflow-hidden">
                  <div className="absolute w-[405px] h-[367px] -top-2.5 left-[-25px]">
                    <img
                      className="absolute w-[380px] h-[267px] top-2.5 left-[25px]"
                      alt="Grid"
                      src="https://c.animaapp.com/mda992oeRqV2dl/img/grid.svg"
                    />
                    <div className="absolute w-[186px] h-[186px] top-[52px] left-[81px]">
                      <div className="h-[186px]">
                        <div className="relative w-[186px] h-[186px] rounded-[92.76px]">
                          <div className="absolute w-[186px] h-[186px] top-0 left-0 bg-[#ffffff66] rounded-[92.76px] opacity-20" />
                          <div className="absolute w-[135px] h-[136px] top-[23px] left-6 bg-[#ffffff99] rounded-[67.5px/68px] opacity-20" />
                          <div className="absolute w-[27px] h-[27px] top-[78px] left-[78px] bg-[#ffffff99] rounded-[13.25px]" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-[55px] h-[55px] top-0 left-[252px]">
                      <div className="relative h-[55px] rounded-[27.5px]">
                        <div className="absolute w-[55px] h-[55px] top-0 left-0 bg-[#ffffff66] rounded-[27.5px] opacity-20" />
                        <div className="absolute w-[35px] h-[35px] top-[9px] left-[9px] bg-[#ffffff99] rounded-[17.5px] opacity-20" />
                        <div className="absolute w-[18px] h-[18px] top-[18px] left-[18px] bg-[#ffffff99] rounded-[8.75px]" />
                      </div>
                    </div>
                    <div className="absolute w-[129px] h-[129px] top-[238px] left-0">
                      <div className="relative h-[129px] rounded-[64.5px]">
                        <div className="absolute w-[129px] h-[129px] top-0 left-0 bg-[#ffffff66] rounded-[64.5px] opacity-20" />
                        <div className="absolute w-[69px] h-[69px] top-[29px] left-[29px] bg-[#ffffff99] rounded-[34.73px] opacity-20" />
                        <div className="absolute w-[35px] h-[35px] top-[46px] left-[46px] bg-[#ffffff99] rounded-[17.37px]" />
                      </div>
                    </div>
                    <div className="absolute w-[380px] h-[267px] top-2.5 left-[25px] bg-[#387ff51a]" />
                  </div>
                  <div className="absolute w-[352px] h-[352px] top-[-234px] left-[-536px]">
                    <div className="relative h-[352px] rounded-[176px]">
                      <div className="absolute w-[352px] h-[352px] top-0 left-0 bg-[#ffffff66] rounded-[176px] opacity-20" />
                      <div className="absolute w-[190px] h-[190px] top-[78px] left-[78px] bg-[#ffffff99] rounded-[94.77px] opacity-20" />
                    </div>
                  </div>
                  <div className="absolute w-[472px] h-[472px] top-[138px] left-[518px]">
                    <div className="relative h-[472px] rounded-[236px]">
                      <div className="absolute w-[472px] h-[472px] top-0 left-0 bg-[#ffffff66] rounded-[236px] opacity-20" />
                      <div className="absolute w-[254px] h-[254px] top-[104px] left-[104px] bg-[#ffffff99] rounded-[127.08px] opacity-20" />
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center absolute top-20 left-[136px] bg-white rounded-[48px] border-[12px] border-solid border-[#c3d0ff59] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
                  <div className="relative w-[60px] h-[60px] flex items-center justify-center">
                    <img
                      className="w-[53px] h-[53px]"
                      alt="Play icon"
                      src="https://c.animaapp.com/mda992oeRqV2dl/img/l-icon-2.svg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};