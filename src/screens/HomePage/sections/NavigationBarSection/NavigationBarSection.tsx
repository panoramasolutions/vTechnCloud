import React, { useState ,useEffect} from "react";
import { ChevronDownIcon, Menu, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../../../../components/ui/sheet";
import logo from "../../../../assets/logo.svg";
// import { useWindowSize } from "../../../../hooks/useWindowSize";

type NavigationBarSectionProps = {
  handleNavClick?: (label: string) => void;
};

const useWindowSize = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export const NavigationBarSection = ({ handleNavClick }: NavigationBarSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowSize();
  const isMobile = width < 800;

  const mainNavItems = [
    { label: "Home", hasDropdown: true },
    { label: "About us", hasDropdown: true },
    { label: "Our Services", hasDropdown: true },
    { label: "Features", hasDropdown: true },
    { label: "Testimonial", hasDropdown: true },
    { label: "FAQ", hasDropdown: true },
  ];

  const NavItems = () => (
    <>
      {mainNavItems.map((item, index) => (
        <NavigationMenuItem 
          key={`main-nav-${index}`}
          className={isMobile ? "w-full" : ""}
        >
          <NavigationMenuTrigger
            className={`
              inline-flex items-center gap-1 relative flex-[0_0_auto] 
              bg-transparent hover:bg-transparent focus:bg-transparent text-[#343844]
              ${isMobile ? "w-full justify-start" : ""}
            `}
            onClick={() => {
              handleNavClick?.(item.label);
              setIsOpen(false);
            }}
          >
            <span className="relative w-fit mt-[-1.00px] font-button-base-medium text-[#ffffff] whitespace-nowrap">
              {item.label}
            </span>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
      ))}
    </>
  );

  return (
    <header className="flex items-center justify-around gap-[167px] px-8 py-0 relative self-stretch w-full flex-[0_0_auto] z-[2] bg-[#041025]">
      <div className="flex flex-col max-w-[1204px] items-start relative flex-1 grow border-b border-[#d1d5e2]">
        <div className="flex items-center justify-between px-0 py-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-10 relative self-stretch flex-[0_0_auto]">
            {/* Logo */}
            <div className="relative w-[113.78px] h-12">
              <img
                src={logo}
                alt="Nimbus logo"
                className="absolute w-[180] h-[6] top-[-30px] left-0"
              />
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <NavigationMenu>
                <NavigationMenuList className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
                  <NavItems />
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>

          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 py-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                  <NavigationMenu orientation="vertical" className="w-full">
                    <NavigationMenuList className="flex-col items-start w-full">
                      <NavItems />
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};