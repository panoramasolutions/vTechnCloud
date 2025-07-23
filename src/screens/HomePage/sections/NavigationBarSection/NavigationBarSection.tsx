import React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";
import logo from "../../../../assets/logo.png";

type NavigationBarSectionProps = {
  onFeaturesClick?: () => void;
};

export const NavigationBarSection = ({ onFeaturesClick }: NavigationBarSectionProps): JSX.Element => {
  // Top navigation items data
  const topNavLeft = [
    { label: "English", hasDropdown: true },
    { label: "Support", hasDropdown: false },
  ];

  const topNavRight = [
    { label: "Blog", hasDropdown: false },
    { label: "About us", hasDropdown: true },
  ];

  // Main navigation items data
  const mainNavItems = [
    { label: "Features", hasDropdown: true },
    { label: "Case Studies", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
    { label: "Applications", hasDropdown: false },
  ];

  return (
    <header className="flex items-center justify-around gap-[167px] px-8 py-0 relative self-stretch w-full flex-[0_0_auto] z-[2] bg-white">
      <div className="flex flex-col max-w-[1204px] items-start relative flex-1 grow border-b [border-bottom-style:solid] border-[#d1d5e2]">
        {/* Top navigation bar */}
        <div className="flex items-center justify-between pt-5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <nav className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
            {topNavLeft.map((item, index) => (
              <div
                key={`top-left-${index}`}
                className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
              >
                <span className="relative w-fit mt-[-1.00px] font-button-small-medium font-[number:var(--button-small-medium-font-weight)] text-[#343844] text-[length:var(--button-small-medium-font-size)] text-center tracking-[var(--button-small-medium-letter-spacing)] leading-[var(--button-small-medium-line-height)] whitespace-nowrap [font-style:var(--button-small-medium-font-style)]">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-4 h-4 text-[#79829f]" />
                )}
              </div>
            ))}
          </nav>

          <nav className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
            {topNavRight.map((item, index) => (
              <div
                key={`top-right-${index}`}
                className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
              >
                <span className="relative w-fit mt-[-1.00px] font-button-small-medium font-[number:var(--button-small-medium-font-weight)] text-[#343844] text-[length:var(--button-small-medium-font-size)] text-center tracking-[var(--button-small-medium-letter-spacing)] leading-[var(--button-small-medium-line-height)] whitespace-nowrap [font-style:var(--button-small-medium-font-style)]">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-4 h-4 text-[#79829f]" />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Main navigation bar */}
        <div className="flex items-center justify-between px-0 py-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-10 relative self-stretch flex-[0_0_auto]">
            {/* Logo */}
            <div className="relative w-[180px] h-[44px]">
                <img
                src={logo}
                alt="Nimbus logo"
                className="absolute w-[180] h-[45] top-[3px] left-0"
                />
             
            </div>

            {/* Main navigation items */}
            <NavigationMenu>
              <NavigationMenuList className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
                {mainNavItems.map((item, index) => (
                  <NavigationMenuItem key={`main-nav-${index}`}>
                    {item.hasDropdown ? (
                        <NavigationMenuTrigger
                        className="inline-flex items-center gap-1 relative flex-[0_0_auto] bg-transparent hover:bg-transparent focus:bg-transparent text-[#343844]"
                        onClick={
                          item.label === "Features" && onFeaturesClick
                          ? onFeaturesClick
                          : undefined
                        }
                        >
                        <span className="relative w-fit mt-[-1.00px] font-button-base-medium font-[number:var(--button-base-medium-font-weight)] text-[#343844] text-[length:var(--button-base-medium-font-size)] text-center tracking-[var(--button-base-medium-letter-spacing)] leading-[var(--button-base-medium-line-height)] whitespace-nowrap [font-style:var(--button-base-medium-font-style)]">
                          {item.label}
                        </span>
                        </NavigationMenuTrigger>
                    ) : (
                      <span className="relative w-fit mt-[-1.00px] font-button-base-medium font-[number:var(--button-base-medium-font-weight)] text-[#4b5162] text-[length:var(--button-base-medium-font-size)] text-center tracking-[var(--button-base-medium-letter-spacing)] leading-[var(--button-base-medium-line-height)] whitespace-nowrap [font-style:var(--button-base-medium-font-style)]">
                        {item.label}
                      </span>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons */}
          <div className="inline-flex items-center justify-end gap-2 relative flex-[0_0_auto]">
            <Button
              variant="outline"
              className="items-center justify-center px-4 py-3 bg-white rounded-lg overflow-hidden border border-solid border-[#b6d0fb] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] h-auto"
            >
              <span className="font-button-small-bold font-[number:var(--button-small-bold-font-weight)] text-[#387ff5] text-[length:var(--button-small-bold-font-size)] tracking-[var(--button-small-bold-letter-spacing)] leading-[var(--button-small-bold-line-height)] whitespace-nowrap [font-style:var(--button-small-bold-font-style)]">
                Get a demo
              </span>
            </Button>

            <Button className="items-center justify-center px-4 py-3 bg-[#387ff5] rounded-lg overflow-hidden h-auto">
              <span className="font-button-small-bold font-[number:var(--button-small-bold-font-weight)] text-white text-[length:var(--button-small-bold-font-size)] tracking-[var(--button-small-bold-letter-spacing)] leading-[var(--button-small-bold-line-height)] whitespace-nowrap [font-style:var(--button-small-bold-font-style)]">
                Start your free trial
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};