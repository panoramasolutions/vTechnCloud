import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/seperator";
import logo from "../../../../assets/logo.svg";
export const FooterSection = (): JSX.Element => {
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== "undefined" ? window.innerWidth > 810 : true
  );

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 810);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Shared data
  const legalLinks = [
    { text: "Term of use", url: "#" },
    { text: "Privacy policy", url: "#" },
    { text: "Security", url: "#" },
  ];

  type FooterLink = {
    text: string;
    url: string;
    icon?: JSX.Element;
  };

  const footerColumnsDesktop: {
    title: string;
    links: FooterLink[];
  }[] = [
    {
      title: "Address",
      links: [
        { text: "VTECHNOCLOUD SOLUTIONS INC.1550 WATERS RIDGE DR BLDG1 STE 300 LEWISVILLE, TX 75057", url: "#" },
        { text: "E-Mail: info@vtechnocloud.com", url: "#" },
        { text: "Phone: ‪+1 (469) 427-0751", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "#" },
        { text: "Help Center", url: "#" },
      ],
    },
    {
      title: "Support & Contact",
      links: [
        { text: "Contact Us", url: "#" },
        { text: "Feedback", url: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          text: "Instagram",
          url: "#",
          icon: <InstagramIcon className="w-[18px] h-[18px]" />,
        },
        {
          text: "Facebook",
          url: "#",
          icon: <FacebookIcon className="w-[18px] h-[18px]" />,
        },
        {
          text: "TwitterIcon / X",
          url: "#",
          icon: <TwitterIcon className="w-[18px] h-[18px]" />,
        },
        {
          text: "Linkedin",
          url: "#",
          icon: <LinkedinIcon className="w-[18px] h-[18px]" />,
        },
      ],
    },
  ];

  const footerCategoriesMobile = [
    {
      title: "About VTECHNOCLOUD",
      links: ["Address:","VTECHNOCLOUD ","SOLUTIONS ","INC.","1550 WATERS RIDGE", "DR BLDG1", "STE 300 LEWISVILLE, TX 75057","Email:","info@vtechnocloud.com","Phone:", "+1 (469) 427-0751",],
    },
    {
      title: "Resources",
      links: [ "Help Center", "Case Studies"],
    },
    {
      title: "Support & Contact",
      links: ["Contact Us", "Technical Support", "Feedback"],
    },
  ];

  const socialLinksMobile = [
    {
      name: "Instagram",
      icon: <InstagramIcon className="w-[18px] h-[18px]" />,
    },
    {
      name: "Facebook",
      icon: <FacebookIcon className="w-[18px] h-[18px]" />,
    },
    {
      name: "Twitter / X",
      icon: <TwitterIcon className="w-[18px] h-[18px]" />,
    },
    {
      name: "Linkedin",
      icon: <LinkedinIcon className="w-[18px] h-[18px]" />,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-around gap-[50px] px-8 py-10 relative w-full bg-white">
      <div className="flex flex-col max-w-[1204px] items-center w-full">
        <div className="flex flex-col items-start gap-[60px] pb-28 w-full">
          <div className="flex items-center gap-5 w-full">
            <div className="relative w-[113.78px] h-12" >    <img
                            src={logo}
                            alt="Nimbus logo"
                            className="absolute w-[180] h-[30] top-[-30px] left-0"
                            /></div>
            <div className="flex flex-col h-px items-center justify-center gap-2 flex-1">
              <Separator className="w-full h-px" />
            </div>
          </div>
          <div className="flex flex-wrap gap-[32px] w-full items-start">
            {isDesktop
              ? footerColumnsDesktop.map((column, index) => (
                  <div
                    key={`column-${index}`}
                    className="flex flex-col min-w-40 justify-center gap-4 flex-1 grow items-start"
                  >
                    <h3 className="font-heading-desktop-h6-bold text-[#343844] text-[length:var(--heading-desktop-h6-bold-font-size)] tracking-[var(--heading-desktop-h6-bold-letter-spacing)] leading-[var(--heading-desktop-h6-bold-line-height)] font-bold">
                      {column.title}
                    </h3>
                    <div className="flex flex-col items-start justify-center gap-2">
                      {column.links.map((link, linkIndex) => (
                          <span className="font-button-base-medium text-[#343844] text-[length:var(--button-base-medium-font-size)] tracking-[var(--button-base-medium-letter-spacing)] leading-[var(--button-base-medium-line-height)] inline-flex gap-2">
                            {link.icon}{"  "} {link.text}
                          </span>
                       
                      ))}
                    </div>
                  </div>
                ))
              : (
                <>
                  {footerCategoriesMobile.map((category, index) => (
                    <div
                      key={`category-${index}`}
                      className="flex-col min-w-40 justify-center gap-4 flex-1 grow flex items-start relative"
                    >
                      <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                        <h6 className="relative w-fit mt-[-1.00px] font-heading-desktop-h6-bold font-[number:var(--heading-desktop-h6-bold-font-weight)] text-[#343844] text-[length:var(--heading-desktop-h6-bold-font-size)] tracking-[var(--heading-desktop-h6-bold-letter-spacing)] leading-[var(--heading-desktop-h6-bold-line-height)] whitespace-nowrap [font-style:var(--heading-desktop-h6-bold-font-style)]">
                          {category.title}
                        </h6>
                      </div>
                      <div className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]">
                        {category.links.map((link, linkIndex) => (
                          <div
                            key={`link-${linkIndex}`}
                            className="items-start inline-flex relative flex-[0_0_auto]"
                          >
                            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                              <div className="inline-flex items-start relative flex-[0_0_auto]">
                                <button className="relative w-fit mt-[-1.00px] font-button-base-medium font-[number:var(--button-base-medium-font-weight)] text-[#4b5162] text-[length:var(--button-base-medium-font-size)] text-center tracking-[var(--button-base-medium-letter-spacing)] leading-[var(--button-base-medium-line-height)] whitespace-nowrap [font-style:var(--button-base-medium-font-style)]">
                                  {link}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* Connect section with social icons */}
                  <div className="flex-col min-w-40 justify-center gap-4 flex-1 grow flex items-start relative">
                    <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                      <h6 className="relative w-fit mt-[-1.00px] font-heading-desktop-h6-bold font-[number:var(--heading-desktop-h6-bold-font-weight)] text-[#343844] text-[length:var(--heading-desktop-h6-bold-font-size)] tracking-[var(--heading-desktop-h6-bold-letter-spacing)] leading-[var(--heading-desktop-h6-bold-line-height)] whitespace-nowrap [font-style:var(--heading-desktop-h6-bold-font-style)]">
                        Connect
                      </h6>
                    </div>
                    <div className="inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]">
                      {socialLinksMobile.map((social, index) => (
                        <div
                          key={`social-${index}`}
                          className="items-start inline-flex relative flex-[0_0_auto]"
                        >
                          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            {social.icon}
                            <div className="inline-flex items-start relative flex-[0_0_auto]">
                              <button className="relative w-fit mt-[-1.00px] font-button-base-medium font-[number:var(--button-base-medium-font-weight)] text-[#4b5162] text-[length:var(--button-base-medium-font-size)] text-center tracking-[var(--button-base-medium-letter-spacing)] leading-[var(--button-base-medium-line-height)] whitespace-nowrap [font-style:var(--button-base-medium-font-style)]">
                                {social.name}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )
            }
          </div>
        </div>
        <Separator className="w-full h-px" />
        <footer className="flex flex-wrap items-center justify-center gap-6 py-5 w-full">
          <div className="flex-1 font-body-sm-regular text-[#343844] text-[length:var(--body-sm-regular-font-size)] tracking-[var(--body-sm-regular-letter-spacing)] leading-[var(--body-sm-regular-line-height)]">
            ©2025 VTECHNOCLOUD · All rights reserved.
          </div>
        
        </footer>
      </div>
    </section>
  );
};