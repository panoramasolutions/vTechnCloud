import React,{useState} from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import bannervideo from "../../../../assets/bannervideo.mp4";
import whatsup from '../../../../assets/w.jpg';
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
              {/* <Button
                className="items-center justify-center gap-2 px-5 py-3 bg-[#ffffff1a] rounded-xl overflow-hidden border border-solid border-[#b6bbcd] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] inline-flex relative flex-[0_0_auto]"
                variant="outline"
                  onClick={() => setShowPopup(true)}
              >
                <img
                  className="relative w-[18px] h-[18px]"
                  alt="Play icon"
                  src="https://c.animaapp.com/md8qit7hIsaPL2/img/icon-play.svg"
                />
                <span className="font-button-small-bold font-[number:var(--button-small-bold-font-weight)] text-[#4b5162] text-[length:var(--button-small-bold-font-size)] tracking-[var(--button-small-bold-letter-spacing)] leading-[var(--button-small-bold-line-height)] whitespace-nowrap [font-style:var(--button-small-bold-font-style)]">
                  Get a Free Strategy Call
                </span>
              </Button>
              {showPopup && (
                              <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>
                                <div className='bg-white rounded-xl p-8 flex flex-col items-center gap-4 shadow-lg relative'>
                                  <button
                                    className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 w-8'
                                    onClick={() => setShowPopup(false)}
                                  >
                                    &times;
                                  </button>
                                  <img
                                    src={whatsup}
                                    alt='Welcome'
                                    className='w-[200px] h-[200px]'
                                  />
                                  <div className='text-xl font-bold text-[#343844]'>
                                    Whatsapp us on : +91 9096806080”
                                  </div>
                                </div>
                              </div>
                            )} */}
            </div>
            {/* Mobile */}
            <div className="sm:hidden flex flex-col items-start gap-3 w-full">
              <Button className="w-full py-3 bg-[#387ff5] rounded-xl font-button-base-bold font-[number:var(--button-base-bold-font-weight)] text-white text-[length:var(--button-base-bold-font-size)] tracking-[var(--button-base-bold-letter-spacing)] leading-[var(--button-base-bold-line-height)] [font-style:var(--button-base-bold-font-style)]"  onClick={() => handleNavClick('Our Services')} >
                Explore Our Services
              </Button>
              {/* <Button
                variant="outline"
                className="w-full py-3 bg-[#ffffff1a] rounded-xl border-[#b6bbcd] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] flex items-center justify-center gap-2"
                  onClick={() => setShowPopup(true)}  
              >
                <img
                  className="w-[18px] h-[18px]"
                  alt="Play icon"
                  src="https://c.animaapp.com/mda992oeRqV2dl/img/l-icon-2.svg"
                />
                <span className="font-button-small-bold font-[number:var(--button-small-bold-font-weight)] text-[#4b5162] text-[length:var(--button-small-bold-font-size)] tracking-[var(--button-small-bold-letter-spacing)] leading-[var(--button-small-bold-line-height)] [font-style:var(--button-small-bold-font-style)]">
                  Get a Free Strategy Call
                </span>
              </Button>
              {showPopup && (
                              <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>
                                <div className='bg-white rounded-xl p-8 flex flex-col items-center gap-4 shadow-lg relative'>
                                  <button
                                    className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 w-8'
                                    onClick={() => setShowPopup(false)}
                                  >
                                    &times;
                                  </button>
                                  <img
                                    src={whatsup}
                                    alt='Welcome'
                                    className='w-[200px] h-[200px]'
                                  />
                                  <div className='text-xl font-bold text-[#343844]'>
                                    Whatsapp us on : +91 9096806080”
                                  </div>
                                </div>
                              </div>
                            )} */}
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
                           poster="https://c.animaapp.com/mdd04i9koSfWJV/img/image-2.png"
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
                           poster="https://c.animaapp.com/mdd04i9koSfWJV/img/image-2.png"
                         />
               
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};