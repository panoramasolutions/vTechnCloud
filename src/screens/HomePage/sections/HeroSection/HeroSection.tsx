import React,{useState} from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import bannervideo from "../../../../assets/bannervideo.mp4";
import whatsup from '../../../../assets/w.jpg';
import ai from '../../../../assets/ai.png';




export const HeroSection = ({ handleNavClick,}): JSX.Element => {
    const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="flex flex-col items-center pt-20 pb-18 px-8 sm:pt-20 sm:pb-20 sm:px-8 px-5 py-[45px] relative self-stretch w-full flex-[0_0_auto] bg-white">
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
                  src={ai}
                />
                {/* Mobile icon */}
                <img
                  className="absolute w-[18px] h-[17px] top-0.5 left-px sm:hidden block"
                  alt="Vector"
                  src={ai}
                />
              </div>
              <span className="relative w-fit mt-[-1.00px] font-body-base-medium font-[number:var(--body-base-medium-font-weight)] text-[#4b5162] text-[length:var(--body-base-medium-font-size)] text-center tracking-[var(--body-base-medium-letter-spacing)] leading-[var(--body-base-medium-line-height)] whitespace-nowrap [font-style:var(--body-base-medium-font-style)]">
                <span className="sm:inline hidden">
                  Smarter IT. Stronger Business.
                </span>
                <span className="sm:hidden inline">
                  Smarter IT. Stronger Business.
                </span>
              </span>
            </Badge>

            <h1 className="
              relative self-stretch text-center
              font-heading-desktop-h1-bold font-[number:var(--heading-desktop-h1-bold-font-weight)] text-[#1c1f25] text-[length:var(--heading-desktop-h1-bold-font-size)] tracking-[var(--heading-desktop-h1-bold-letter-spacing)] leading-[var(--heading-desktop-h1-bold-line-height)] [font-style:var(--heading-desktop-h1-bold-font-style)]
              sm:font-heading-desktop-h1-bold sm:text-[length:var(--heading-desktop-h1-bold-font-size)] sm:leading-[var(--heading-desktop-h1-bold-line-height)]
              font-heading-mobile-h1-bold text-[length:var(--heading-mobile-h1-bold-font-size)] leading-[var(--heading-mobile-h1-bold-line-height)] sm:font-heading-desktop-h1-bold sm:text-[length:var(--heading-desktop-h1-bold-font-size)] sm:leading-[var(--heading-desktop-h1-bold-line-height)]
            ">
              Empowering Digital Acceleration with Smarter Cloud, Data &amp; Automation Solutions
            </h1>

            <div className="items-start px-20 py-0 flex gap-2 relative self-stretch w-full flex-[0_0_auto] sm:flex sm:px-20 px-5 sm:py-0 py-0">
              <p className="relative flex-1 mt-[-1.00px] opacity-80 font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-[#4b5162] text-[length:var(--body-base-regular-font-size)] text-center tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                From strategy to execution, we help businesses unlock agility,
                  scale, and intelligence—securely and seamlessly.
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
             onClick={() => handleNavClick('Our Services')} 
              >
                <span className="font-button-base-bold font-[number:var(--button-base-bold-font-weight)] text-white text-[length:var(--button-base-bold-font-size)] tracking-[var(--button-base-bold-letter-spacing)] leading-[var(--button-base-bold-line-height)] whitespace-nowrap [font-style:var(--button-base-bold-font-style)]" >
                 Explore Our Services
                </span>
              </Button>
              
            </div>
            {/* Mobile */}
            <div className="sm:hidden flex flex-col items-start gap-3 w-full">
              <Button className="w-full py-3 bg-[#387ff5] rounded-xl font-button-base-bold font-[number:var(--button-base-bold-font-weight)] text-white text-[length:var(--button-base-bold-font-size)] tracking-[var(--button-base-bold-letter-spacing)] leading-[var(--button-base-bold-line-height)] [font-style:var(--button-base-bold-font-style)]"  onClick={() => handleNavClick('Our Services')} >
                Explore Our Services
              </Button>
              
            </div>
          </div>
        </div>

        {/* Card/graphic */}
        <div className="w-full">
          {/* Desktop/Tablet */}
          <Card className="relative self-stretch w-full h-[480px]  rounded-3xl overflow-hidden border border-solid border-[#d1d5e2] sm:block hidden">
            <div className="relative w-[746px] h-[480px]">
               <video
                           className="absolute w-full h-[480px]  object-cover"
                           src={bannervideo}
                           controls
                          
                         />
            </div>
          </Card>
          {/* Mobile */}
          <Card className="w-full h-[267px]  rounded-3xl overflow-hidden border-[#d1d5e2] sm:hidden block">
            <CardContent className="p-0 h-full relative">
              <div className="relative w-[380px] h-[267px]">
                  <video
                           className="absolute w-full h-[267px]  object-cover"
                           src={bannervideo}
                           controls
                          
                         />
               
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};