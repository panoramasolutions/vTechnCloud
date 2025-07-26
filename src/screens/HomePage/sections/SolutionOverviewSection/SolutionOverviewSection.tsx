import { ChevronRightIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

// const solutionCards = [
//   {
//     image: "https://c.animaapp.com/md8qit7hIsaPL2/img/component-1-2.svg",
//     title: "Connect with Ease",
//     description:
//       "Integrate VTECHNOCLOUD with your existing tools and platforms for a unified analytics experience. From CRMs to ERPs, we've got you covered.",
//     category: "Know more",
//   },
//   {
//     image: "https://c.animaapp.com/md8qit7hIsaPL2/img/component-1-1.svg",
//     title: "Connect with Ease",
//     description:
//       "Integrate VTECHNOCLOUD with your existing tools and platforms for a unified analytics experience. From CRMs to ERPs, we've got you covered.",
//     category: "Tech, Healthcare, Manufacturing",
//   },
//   {
//     image: "https://c.animaapp.com/md8qit7hIsaPL2/img/component-1.svg",
//     title: "Visualize Your Success",
//     description:
//       "Craft bespoke dashboards that resonate with your brand's goals. With drag-and-drop functionalities, visualizing your data has never been this easy.",
//     category: "Marketing, Sales, Operations",
//   },
//   {
//     image: "https://c.animaapp.com/md8qit7hIsaPL2/img/component-1-4.svg",
//     title: "Stay Updated, Always",
//     description:
//       "With VTECHNOCLOUD's real-time data processing, you're always in the know. Make decisions based on the latest data and stay ahead of the curve.",
//     category: "E-commerce, Logistics, Supply Chain",
//   },
//   {
//     image: "https://c.animaapp.com/md8qit7hIsaPL2/img/component-1-3.svg",
//     title: "Your Data's Safe Haven",
//     description:
//       "Rest easy knowing your data is protected with VTECHNOCLOUD's top-tier security protocols. From encryption to access controls, we prioritize your data's safety.",
//     category: "Finance, Healthcare, Legal",
//   },
//   {
//     image: "https://c.animaapp.com/md8qit7hIsaPL2/img/component-1-6.svg",
//     title: "Collaborate and Conquer",
//     description:
//       "Work together seamlessly with VTECHNOCLOUD's collaborative features. Share insights, annotate charts, and drive collective growth.",
//     category: "Design, Development, Project Management",
//   },
//   {
//     image: "https://c.animaapp.com/md8qit7hIsaPL2/img/component-1-7.svg",
//     title: "Simplicity Meets Power",
//     description:
//       "VTECHNOCLOUD offers an intuitive interface that's easy to navigate, ensuring you spend less time figuring things out and more time analyzing.",
//     category: "All Industries",
//   },
//   {
//     image: "https://c.animaapp.com/md8qit7hIsaPL2/img/component-1-5.svg",
//     title: "Let AI Do the Heavy Lifting",
//     description:
//       "Receive automated insights and recommendations tailored to your business needs. Let VTECHNOCLOUD's AI guide your strategies.",
//     category: "Retail, Marketing, Sales",
//   },
//   {
//     image: "https://c.animaapp.com/md8qit7hIsaPL2/img/component-1-8.svg",
//     title: "Collaborate and Conquer",
//     description:
//       "Whether you're a startup or an enterprise, VTECHNOCLOUD scales with you. Experience robust analytics solutions that adapt to your growth.",
//     category: "Startups, SMEs, Enterprises",
//   },
// ];

  const solutionCards = [
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-3.svg',
      title: 'Cloud Strategy & Consulting',
      description:
        'From total visioning to tactical cloud roadmaps, cost modeling, and vendor-neutral governance.',
    },
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-6.svg',
      title: 'Data Engineering',
      description:
        "We offer an intuitive interface that's easy to navigate, ensuring you spend less time figuring things out and more time analyzing.",
    },
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-5.svg',
      title: 'Full-Stack Development',
      description:
        "Whether you're a startup or an enterprise, VTECHNOCLOUD scales with you. Experience robust analytics solutions that adapt to your growth.",
    },

    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-6.svg',
      title: 'Python Expert',
      description:
        'Develop robust, scalable, and secure backend systems, automate business tasks, and build APIs using industry-best Python practices',
    },

    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-6.svg',
      title: 'AI/ML',
      description:
        'Deploy cutting-edge AI/ML solutions to automate decision-making, detect patterns, and enhance user experience with predictive insights',
    },
    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-1.svg',
      title: 'Business Intelligence(Power BI)',
      description:
        'Leverage Power BI dashboards and reports to gain visual insights, monitor KPIs, and drive smarter business strategies',
    },

    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1.svg',
      title: 'Automation & DevOps',
      description:
        'Streamline delivery pipelines, cut errors, and embrace agility with full-stack CI/CD and IaC.',
    },

    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-1.svg',
      title: 'Business Development',
      description:
        "Receive automated insights and recommendations tailored to your business needs. Let VTECHNOCLOUD's AI guide your strategies.",
    },

    {
      icon: 'https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-2.svg',
      title: 'Networking & Infrastructure',
      description:
        'Architect resilient networks—wired, wireless, hybrid—designed for performance and security.',
    },
  ];

export const SolutionOverviewSection = ({ourServicesRef}): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[60px] py-12 px-5 sm:px-8 w-full bg-white" ref={ourServicesRef}>
      <div className="flex flex-col max-w-[1204px] items-center gap-[60px] w-full">
        {/* Header */}
        <header className="flex flex-col max-w-[800px] items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <Badge
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1"
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
              <span className="font-body-base-medium text-[#4b5162]">
                What we do
              </span>
            </Badge>

            <h2 className="font-heading-desktop-h2-bold text-[#1c1f25] text-center w-full">
              Our Services
            </h2>

          
          </div>
        </header>

        {/* Cards */}
        <div className="w-full">
          {/* Desktop/Tablet: flex-wrap, Mobile: grid */}
          <div className="hidden sm:flex flex-wrap justify-center gap-8 w-full pb-20 relative">
            {solutionCards.map((card, index) => (
              <Card
                key={`solution-card-${index}`}
                className="flex-1 min-w-[292px] border border-solid border-[#b6bbcd] rounded-xl"
              >
                <CardContent className="flex flex-col items-center gap-4 p-8">
                  <img
                    className="w-[65px] h-[65px] mt-[-5.09px] ml-[-30.55px]"
                    alt={`${card.title} illustration`}
                    src={card.icon}
                  />
                  <div className="flex flex-col h-[110px] items-center gap-1 w-full">
                    <h3 className="font-heading-desktop-h5-bold text-[#1c1f25] h-7">
                      {card.title}
                    </h3>
                    <p className="opacity-80 font-body-base-regular text-[#4b5162]">
                      {card.description}
                    </p>
                  </div>
                  
                </CardContent>
              </Card>
            ))}
            
          </div>
          {/* Mobile: grid */}
          <div className="grid sm:hidden grid-cols-1 gap-8 w-full pb-8">
            {solutionCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col min-h-[280px] border-[#b6bbcd] rounded-xl"
              >
                <CardContent className="flex flex-col gap-4 p-8 items-center">
                  <img
                    className="w-[65px] h-[65px] mt-[-5.09px] ml-[-30.55px]"
                    alt="Component"
                    src={card.icon}
                  />
                  <div className="flex flex-col h-[110px] gap-1 items-center">
                    <h5 className="font-heading-desktop-h5-bold text-[#1c1f25] items-center">
                      {card.title}
                    </h5>
                    <p className="opacity-80 font-body-base-regular text-[#4b5162] text-center">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
             
              </Card>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};