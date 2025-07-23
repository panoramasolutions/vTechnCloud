import React,{useState} from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

import bannervideo from "../../../../assets/bannervideo.mp4";

export const MainContentSection = ({ keyFeaturesRef }: { keyFeaturesRef?: React.RefObject<HTMLDivElement> })=> {
  // Data for the "About Us" feature cards
  const featureCards = [
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/vector-32.svg",
      title: "Deep Industry Insight",
      description:
        "We blend domain expertise with cutting-edge tech—AI, ML, and cybersecurity.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/vector-45.svg",
      title: "True Client Partnership",
      description:
        "We work as an extension of your team to solve real-world business challenges.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/vector-36.svg",
      title: "Future-Ready Approach",
      description:
        "24/7 monitoring, predictive maintenance, and roadmaps designed for growth.",
    },
  ];

  // Data for the service cards
  const serviceCards = [
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-7.svg",
      title: "Cloud Engineering & Migration",
      description:
        "Migrate securely, optimize costs, and scale dynamically—without disruption.",
      highlighted: true,
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-8.svg",
      title: "Intelligent Data & Analytics",
      description:
        "From ETL modernization to AI‑powered BI, we turn raw data into real-time insights and action.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-4.svg",
      title: "Secured Backup",
      description:
        "Automated, encrypted backups plus disaster-ready recovery plans—always business-ready.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-2.svg",
      title: "Networking & Infrastructure",
      description:
        "Architect resilient networks—wired, wireless, hybrid—designed for performance and security.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1.svg",
      title: "Automation & DevOps",
      description:
        "Streamline delivery pipelines, cut errors, and embrace agility with full-stack CI/CD and IaC.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-3.svg",
      title: "Cloud Strategy & Consulting",
      description:
        "From total visioning to tactical cloud roadmaps, cost modeling, and vendor-neutral governance.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-6.svg",
      title: "Data Engineering",
      description:
        "We offer an intuitive interface that's easy to navigate, ensuring you spend less time figuring things out and more time analyzing.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-1.svg",
      title: "Business Intelligence",
      description:
        "Receive automated insights and recommendations tailored to your business needs. Let Neuros's AI guide your strategies.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-5.svg",
      title: "Full-Stack Development",
      description:
        "Whether you're a startup or an enterprise, Neuros scales with you. Experience robust analytics solutions that adapt to your growth.",
    },
      {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-6.svg",
      title: "Data Engineering",
      description:
        "We offer an intuitive interface that's easy to navigate, ensuring you spend less time figuring things out and more time analyzing.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-1.svg",
      title: "Business Intelligence",
      description:
        "Receive automated insights and recommendations tailored to your business needs. Let Neuros's AI guide your strategies.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/component-1-5.svg",
      title: "Full-Stack Development",
      description:
        "Whether you're a startup or an enterprise, Neuros scales with you. Experience robust analytics solutions that adapt to your growth.",
    },
  ];

  // Data for the "How We Work" steps
  const workSteps = [
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/icon-credit-card-cursor-click.svg",
      title: "Let's Talk Goals",
      description: "We dig deep to get your business + tech aligned.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/vector-19.svg",
      title: "Plan Like Pros",
      description: "We map out what works—and what scales.",
    },
    {
      icon: "https://c.animaapp.com/mdd04i9koSfWJV/img/icon-world--transaction--transfer.svg",
      title: "Make It Happen",
      description: "From idea to impact, fast.",
    },
    {
      title: "Keep Getting Better",
      description: "We don't stop. We fine-tune and future-proof.",
    },
  ];

    const [showAllServices, setShowAllServices] = useState(false);

  // How many to show initially
  const initialServiceCount = 9;

  return (
    <div className="flex flex-col items-start w-full relative z-[3]">
      {/* Hero Section */}
      <section className="flex flex-col items-center pt-28 pb-[34px] px-8 w-full bg-white">
        <div className="flex flex-col max-w-[1204px] items-center gap-[60px] w-full">
          <div className="flex flex-col max-w-[860px] items-center gap-10 w-full">
            <div className="flex flex-col items-center gap-5 w-full">
              <Badge className="flex items-center gap-2 px-3 py-2 rounded-[20px] border border-solid border-[#6099f7] shadow-shadow-to-bot-neutral-1 bg-white">
                <div className="relative w-5 h-5">
                  <img
                    className="absolute w-[18px] h-[17px] top-0.5 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-25.svg"
                  />
                </div>
                <span className="font-body-base-medium text-[#343844]">
                  Smarter IT. Stronger Business.
                </span>
              </Badge>

                <h1 className="text-[48px] font-bold font-inter font-heading-desktop-h1-bold text-[#343844] text-center">
                  Empowering Digital Acceleration with Smarter Cloud, Data &amp; Automation Solutions
                </h1>

              <div className="flex items-start px-20 py-0 w-full gap-2">
                <p className="flex-1 opacity-80 font-body-base-regular text-[#343844] text-center">
                  From strategy to execution, we help businesses unlock agility,
                  scale, and intelligence—securely and seamlessly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Button className="px-5 py-3 bg-[#387ff5] rounded-xl text-white">
                Explore Our Services
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-solid border-[#343844] backdrop-blur-[6px]"
              >
                <img
                  className="w-6 h-6"
                  alt="L icon"
                  src="https://c.animaapp.com/mdd04i9koSfWJV/img/l-icon-1.svg"
                />
                <span className="font-button-base-bold text-[#343844]">
                  Get a Free Strategy Call
                </span>
              </Button>
            </div>
          </div>

          <div className="relative w-full h-[556px] bg-[#387ff5] rounded-3xl overflow-hidden border border-solid border-[#f5f6f9]">
        
              <div className="absolute w-full h-[556px] top-0 left-0 bg-[#6099f7] overflow-hidden">
                <video
                  className="absolute w-full h-[556px]  object-cover"
                  src={bannervideo}
                  controls
                  poster="https://c.animaapp.com/mdd04i9koSfWJV/img/image-2.png"
                />
              </div>

            
           
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="flex flex-col items-center pt-10 pb-[60px] px-8 w-full bg-white">
        <div className="flex flex-col items-center gap-5 w-full max-w-[1204px]">
          <p className="opacity-80 font-body-base-regular text-[#343844] text-center">
            500+ customers in over 20 countries grow their businesses with
            vTechnoCloud
          </p>

          <img
            className="min-w-[1000px] max-w-[1204px] w-full"
            alt="Logo"
            src="https://c.animaapp.com/mdd04i9koSfWJV/img/logo.svg"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="pt-[75px] pb-28 px-8 w-full flex flex-col items-center gap-[60px] bg-white  w-full">
        <div className="flex flex-col items-center gap-[60px] w-full max-w-[1204px]">
          <div className="flex flex-col max-w-[520px] items-center gap-8 w-full">
            <div className="flex flex-col items-center gap-4 w-full">
              <Badge className="flex items-center gap-2 px-3 py-2 rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1 bg-white">
                <div className="relative w-5 h-5">
                  <img
                    className="absolute w-[18px] h-[17px] top-0.5 left-px"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-16.svg"
                  />
                </div>
                <span className="font-body-base-medium text-[#343844]">
                  About Us
                </span>
              </Badge>

              <div className="flex items-center gap-2 w-full">
                 <h1 className="text-[39px] font-bold font-inter font-heading-desktop-h1-bold text-[#343844] text-center">
                  Your Strategic Tech Partner
                </h1>
              </div>

              <div className="flex max-w-[820px] items-center px-5 py-0 mx-[-150px]">
                <p className="flex-1 opacity-80 font-body-base-regular text-[#343844] text-center">
                  At VTechnoCloud, we blend deep technical expertise with
                  forward-looking vision to help businesses thrive in the
                  digital era. With a rich history in delivering AI-driven,
                  cloud-first, and data-centric platforms, we specialize in
                  bespoke solutions that are robust, scalable, and secure.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-10 w-full">
            <div className="flex flex-wrap items-start justify-center gap-6 w-full">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="flex-1 min-w-[360px] border border-solid border-[#387ff5] shadow-shadow-to-bot-primary-4 rounded-xl"
                >
                  <CardContent className="flex flex-col items-start gap-2 px-5 py-4">
                    <div className="flex items-start gap-3 w-full">
                      <div className="flex items-start gap-2">
                        <div className="relative w-6 h-6">
                          <img
                            className="absolute w-5 h-5 top-0.5 left-0.5"
                            alt="Vector"
                            src={card.icon}
                          />
                        </div>
                      </div>
                        <h3 className="flex-1 font-body-base-semibold text-[#343844] font-semibold" style={{ fontWeight: 600 }}>
                        {card.title}
                        </h3>
                    </div>
                    <p className="opacity-80 font-body-base-regular text-[#343844]">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative w-full h-[480px] rounded-3xl overflow-hidden border border-solid border-[#f5f6f9] bg-[linear-gradient(135deg,rgba(128,159,240,1)_0%,rgba(76,98,197,1)_100%)]">
              <div className="w-full h-[480px] bg-[#6099f7] overflow-hidden">
                <div className="relative w-[1554px] h-[480px] left-[-89px]">
                  <img
                    className="absolute w-[1526px] h-[341px] top-[23px] left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-34.svg"
                  />

                  <img
                    className="absolute w-[1204px] h-[480px] top-0 left-[89px]"
                    alt="Grid"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/grid-3.svg"
                  />

                  <img
                    className="absolute w-[1526px] h-[331px] top-[66px] left-7"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-37.svg"
                  />

                  <img
                    className="absolute w-[1380px] h-[260px] top-[103px] left-[33px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-40.svg"
                  />

                  <img
                    className="absolute w-2 h-2 top-[209px] left-[877px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-38.svg"
                  />

                  <img
                    className="absolute w-2 h-2 top-[121px] left-[1001px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-42.svg"
                  />

                  <img
                    className="absolute w-[15px] h-[15px] top-[129px] left-[1034px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-39.svg"
                  />

                  <img
                    className="absolute w-[33px] h-[33px] top-[213px] left-[878px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-3.svg"
                  />

                  <img
                    className="absolute w-[33px] h-[33px] top-[92px] left-[1003px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-4.svg"
                  />

                  <img
                    className="absolute w-[33px] h-[33px] top-[265px] left-[304px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector.svg"
                  />

                  <img
                    className="absolute w-3 h-[11px] top-[295px] left-[300px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-1.svg"
                  />

                  <img
                    className="absolute w-3 h-[11px] top-[251px] left-[306px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-2.svg"
                  />

                  <img
                    className="absolute w-[29px] h-[29px] top-[286px] left-[477px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-5.svg"
                  />

                  <img
                    className="absolute w-3.5 h-3.5 top-[318px] left-[477px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-8.svg"
                  />

                  <img
                    className="absolute w-[222px] h-[222px] top-[135px] left-[483px]"
                    alt="Group"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/group.png"
                  />

                  <div className="w-[1204px] h-[480px] top-0 left-[89px] absolute bg-[#387ff51a]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="flex flex-col items-center gap-[60px] pb-28 px-8 w-full bg-white">
        <div className="flex flex-col items-center gap-[60px] w-full max-w-[1204px]">
          <div className="max-w-[800px] w-full flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4 w-full">
              <Badge className="flex items-center gap-2 px-3 py-2 rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1 bg-white">
                <div className="relative w-5 h-5">
                  <img
                    className="absolute w-[18px] h-[17px] top-0.5 left-px"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-16.svg"
                  />
                </div>
                <span className="font-body-base-medium text-[#343844]">
                  What We Do
                </span>
              </Badge>

              <div className="flex items-center gap-2 w-full">
                <h2 className="flex-1 font-heading-desktop-h2-bold text-[#343844] text-center text-[39px] font-bold font-inter">
                  Our Services
                </h2>
              </div>
            </div>
          </div>

         <div className="relative flex flex-wrap max-w-[1204px] items-start justify-center gap-8 pb-20 w-full">
            <div className="flex flex-wrap items-start justify-center gap-8 flex-1">
              {(showAllServices ? serviceCards : serviceCards.slice(0, initialServiceCount)).map((service, index) => (
                <Card
                  key={index}
                  className={`flex-1 min-w-[292px] bg-[#1c1f25] rounded-xl border border-solid ${service.highlighted ? "border-[#387ff5]" : "border-[#b6bbcd]"}`}
                >
                  <CardContent className="flex flex-col items-start justify-center gap-4 p-8">
                    <img
                      className="w-[131.09px] h-[131.09px] mt-[-5.09px] ml-[-30.55px]"
                      alt="Component"
                      src={service.icon}
                    />
                    <div className="flex flex-col h-[110px] items-start justify-center gap-1 w-full">
                      <h3 className="h-7 font-heading-desktop-h5-bold text-[#e7f4ff] whitespace-nowrap">
                        {service.title}
                      </h3>
                      <p className="opacity-80 font-body-base-regular text-[#9da4bd]">
                        {service.description}
                      </p>
                    </div>
                    <div className="font-body-sm-regular text-[#387ff5]">
                      Know more
                    </div>
                    <img
                      className="w-[11.03px] h-[10.74px]"
                      alt="Vector"
                      src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-9.svg"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Button and image always at the bottom after all cards */}
          <div className="flex flex-col w-full items-center justify-end gap-2 px-6 py-0 mt-8 relative">
            <img
              className="absolute w-full h-[263px] top-[-300px] left-0"
              alt="Gradient mask"
              src="https://c.animaapp.com/mdd04i9koSfWJV/img/gradient-mask.svg"
            />
            <Button
              variant="outline"
              className="px-5 py-3 rounded-xl border border-solid border-[#343844] backdrop-blur-[6px] z-10"
              onClick={() => setShowAllServices(prev => !prev)}
            >
              <span className="font-button-small-bold text-[#343844]">
                {showAllServices ? "Reduce applications" : "Explore more application"}
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="pt-[50px] pb-28 px-8 flex flex-col items-center gap-[60px] bg-white  w-full" ref={keyFeaturesRef}>
        <div className="flex flex-col w-full items-center gap-20 max-w-[1204px]">
          <div className="max-w-[612px] w-[612px] flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex items-center gap-2 w-full">
                <h2 className="flex-1 font-heading-desktop-h2-bold text-[#343844] text-center text-[39px] font-bold font-inter">
                  Key Features and Capabilities
                </h2>
              </div>

              <div className="flex max-w-[820px] items-center gap-2 px-5 py-0 w-full">
                <p className="flex-1 opacity-80 font-body-base-regular text-[#343844] text-center">
                  What sets our solutions apart—and pushes your business
                  forward.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center gap-6">
            {/* Secure by Design */}
            <div className="flex flex-wrap items-center gap-20 w-full justify-center bg-white">
              <div className="flex flex-col min-w-[360px] max-w-[480px] items-start justify-center gap-4 flex-1">
                <h3 className="font-heading-desktop-h3-bold text-[#343844] text-[31px] font-bold">
                  Secure by Design
                </h3>

                <p className="opacity-80 font-body-base-regular text-[#343844]">
                  Cybersecurity is at the core of everything we buil d. With
                  zero-trust frameworks, continuous monitoring, and
                  compliance-ready architectures, your systems stay
                  protected—now and in the future.
                </p>
              </div>

              <div className="flex flex-col min-w-[360px] items-center gap-2 flex-1">
                <div className="relative w-[524px] h-[341px]">
                  <div className="relative h-[341px]">
                    <div className="absolute w-[433px] h-[304px] top-0 left-[91px] rounded-2xl overflow-hidden">
                      <div className="relative h-[304px] bg-[#387ff5] overflow-hidden">
                        <div className="w-[805px] h-[402px] top-[-49px] absolute left-0">
                          <div className="absolute w-[191px] h-[191px] top-[106px] left-[120px]">
                            <div className="relative h-[191px] rounded-[95.27px]">
                              <div className="absolute w-[191px] h-[191px] top-0 left-0 bg-[#ffffff66] rounded-[95.27px] opacity-20" />
                              <div className="absolute w-[103px] h-[103px] top-[42px] left-[42px] bg-[#171c2f] rounded-[51.3px] opacity-20" />
                            </div>
                          </div>

                          <img
                            className="absolute w-[433px] h-[304px] top-[49px] left-0"
                            alt="Grid"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/grid-2.svg"
                          />

                          <div className="absolute w-[141px] h-[141px] top-[131px] left-[146px] backdrop-blur-[2.35px]">
                            <img
                              className="absolute w-[120px] h-[120px] top-[7px] left-[13px]"
                              alt="Vector"
                              src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-21.svg"
                            />
                          </div>

                          <div className="absolute w-8 h-8 top-[90px] left-[214px]">
                            <div className="relative h-8 rounded-[16.12px]">
                              <div className="absolute w-8 h-8 top-0 left-0 bg-[#ffffff66] rounded-[16.12px] opacity-20" />
                              <div className="absolute w-[21px] h-[21px] top-[5px] left-[5px] bg-[#171c2f] rounded-[10.26px] opacity-20" />
                              <div className="absolute w-2.5 h-2.5 top-[11px] left-[11px] bg-[#171c2f] rounded-[5.13px]" />
                            </div>
                          </div>

                          <div className="absolute w-[402px] h-[402px] top-0 left-[402px]">
                            <div className="relative h-[402px] rounded-[201.1px]">
                              <div className="absolute w-[402px] h-[402px] top-0 left-0 bg-[#ffffff66] rounded-[201.1px] opacity-20" />
                              <div className="absolute w-[217px] h-[217px] top-[89px] left-[89px] bg-[#171c2f] rounded-[108.28px] opacity-20" />
                            </div>
                          </div>

                          <div className="w-[433px] h-[304px] top-[49px] left-0 absolute bg-[#387ff51a]" />

                          <div className="absolute w-[76px] h-[76px] top-[213px] left-[93px]">
                            <div className="relative h-[76px] rounded-[37.82px]">
                              <div className="absolute w-[76px] h-[76px] top-0 left-0 bg-[#ffffff66] rounded-[37.82px] opacity-20" />
                              <div className="absolute w-[41px] h-[41px] top-[17px] left-[17px] bg-[#171c2f] rounded-[20.36px] opacity-20" />
                              <div className="absolute w-5 h-5 top-[27px] left-[27px] bg-[#171c2f] rounded-[10.18px]" />
                            </div>
                          </div>
                        </div>

                        <div className="absolute w-[206px] h-[206px] top-[149px] left-[-241px]">
                          <div className="relative h-[206px] rounded-[103.19px]">
                            <div className="absolute w-[206px] h-[206px] top-0 left-0 bg-[#ffffff66] rounded-[103.19px] opacity-20" />
                            <div className="absolute w-[111px] h-[111px] top-[46px] left-[46px] bg-[#171c2f] rounded-[55.56px] opacity-20" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute w-56 h-52 top-[133px] left-0 bg-[#171c2f] rounded-xl overflow-hidden border border-solid border-[#e7f4ff] shadow-shadow-to-bot-neutral-2">
                      <div className="relative w-[155px] h-[163px] top-[21px] left-[35px]">
                        <img
                          className="absolute w-px h-px top-1.5 left-0"
                          alt="Your weekly activity"
                        />

                        <div className="absolute w-[92px] h-[5px] top-[42px] left-[31px] bg-[#f5f6f9] rounded" />

                        <div className="absolute w-[154px] h-[76px] top-16 left-0">
                          <div className="w-[37px] left-0 absolute h-[76px] top-0">
                            <div className="inline-flex items-center gap-1 relative top-[62px] left-1.5">
                              <img
                                className="relative w-[13px] h-[9px]"
                                alt="Vector"
                                src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-23.svg"
                              />

                              <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-bold text-[#f5f6f9] text-xs text-center tracking-[0] leading-[14.4px] whitespace-nowrap">
                                4
                              </div>
                            </div>
                          </div>

                          <div className="w-[33px] left-[53px] absolute h-[76px] top-0">
                            <div className="left-[5px] inline-flex items-center gap-1 relative top-[62px]">
                              <img
                                className="relative w-[13px] h-[9px]"
                                alt="Vector"
                                src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-23.svg"
                              />

                              <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-bold text-[#f5f6f9] text-xs text-center tracking-[0] leading-[14.4px] whitespace-nowrap">
                                7
                              </div>
                            </div>
                          </div>

                          <div className="w-[52px] left-[102px] absolute h-[76px] top-0">
                            <div className="left-3.5 inline-flex items-center gap-1 relative top-[62px]">
                              <img
                                className="relative w-[13px] h-[9px]"
                                alt="Vector"
                                src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-23.svg"
                              />

                              <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-bold text-[#f5f6f9] text-xs text-center tracking-[0] leading-[14.4px] whitespace-nowrap">
                                2
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute w-[84px] h-[5px] top-[158px] left-[35px]">
                          <div className="absolute w-[57px] h-[5px] top-0 left-0 bg-[#f5f6f9] rounded" />
                          <div className="absolute w-3.5 h-[5px] top-0 left-[70px] bg-[#f5f6f9] rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Cloud Engineering */}
            <div className="flex flex-wrap items-center gap-20 w-full justify-center bg-white">
              <div className="flex flex-col min-w-[360px] items-center gap-2 flex-1">
                <div className="relative w-[522px] h-[339px]">
                  <div className="relative w-[586px] h-[337px] -top-2.5 -left-8">
                    <div className="absolute w-[425px] h-[298px] top-[39px] left-[79px] rounded-2xl overflow-hidden">
                      <div className="relative h-[299px] bg-[#387ff5] overflow-hidden">
                        <div className="w-[425px] h-[303px] top-0 absolute left-0">
                          <img
                            className="absolute w-[425px] h-[298px] top-0 left-0"
                            alt="Grid"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/grid-1.svg"
                          />

                          <div className="absolute w-32 h-32 top-[85px] left-[119px]">
                            <div className="h-32">
                              <div className="relative w-32 h-32 rounded-[64.16px]">
                                <div className="absolute w-32 h-32 top-0 left-0 bg-[#ffffff66] rounded-[64.16px] opacity-20" />
                                <div className="absolute w-[93px] h-[94px] top-4 left-4 bg-[#171c2f] rounded-[46.69px/47.03px] opacity-20" />
                                <div className="absolute w-[18px] h-[18px] top-[54px] left-[54px] bg-[#171c2f] rounded-[9.17px]" />
                              </div>
                            </div>
                          </div>

                          <div className="absolute w-[38px] h-[38px] top-[49px] left-[238px]">
                            <div className="relative h-[38px] rounded-[19.02px]">
                              <div className="absolute w-[38px] h-[38px] top-0 left-0 bg-[#ffffff66] rounded-[19.02px] opacity-20" />
                              <div className="absolute w-6 h-6 top-1.5 left-1.5 bg-[#171c2f] rounded-[12.1px] opacity-20" />
                              <div className="absolute w-3 h-3 top-[13px] left-[13px] bg-[#171c2f] rounded-[6.05px]" />
                            </div>
                          </div>

                          <div className="absolute w-[89px] h-[89px] top-[214px] left-[63px]">
                            <div className="relative h-[89px] rounded-[44.61px]">
                              <div className="absolute w-[89px] h-[89px] top-0 left-0 bg-[#ffffff66] rounded-[44.61px] opacity-20" />
                              <div className="absolute w-12 h-12 top-5 left-5 bg-[#171c2f] rounded-[24.02px] opacity-20" />
                              <div className="absolute w-6 h-6 top-8 left-8 bg-[#171c2f] rounded-[12.01px]" />
                            </div>
                          </div>

                          <div className="absolute w-[425px] h-[299px] top-0 left-0 bg-[#387ff51a]" />
                        </div>

                        <div className="absolute w-[243px] h-[243px] top-[-106px] left-[-290px]">
                          <div className="relative h-[243px] rounded-[121.73px]">
                            <div className="absolute w-[243px] h-[243px] top-0 left-0 bg-[#ffffff66] rounded-[121.73px] opacity-20" />
                            <div className="absolute w-[131px] h-[131px] top-[54px] left-[54px] bg-[#171c2f] rounded-[65.55px] opacity-20" />
                          </div>
                        </div>

                        <div className="absolute w-[326px] h-[326px] top-[152px] left-[439px]">
                          <div className="relative h-[326px] rounded-[163.23px]">
                            <div className="absolute w-[326px] h-[326px] top-0 left-0 bg-[#ffffff66] rounded-[163.23px] opacity-20" />
                            <div className="absolute w-44 h-44 top-[72px] left-[72px] bg-[#171c2f] rounded-[87.89px] opacity-20" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <img
                      className="absolute w-[266px] h-[201px] top-[121px] left-80"
                      alt="Img lib metric pie"
                      src="https://c.animaapp.com/mdd04i9koSfWJV/img/img-lib-metric-pie-chart-2.svg"
                    />

                    <img
                      className="absolute w-[281px] h-[280px] top-0 left-0"
                      alt="Img lib metric line"
                      src="https://c.animaapp.com/mdd04i9koSfWJV/img/img-lib-metric-line-styling.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col min-w-[360px] max-w-[480px] items-start justify-center gap-3 flex-1">
                <h3 className="font-heading-desktop-h3-bold text-[#343844] text-[31px] font-bold">
                  Smart Cloud Engineering
                </h3>

                <p className="opacity-80 font-body-base-regular text-[#343844]">
                  We help you build high-performing cloud environments that
                  scale with your business. From secure migration to cost
                  optimization, our cloud-native solutions are agile, automated,
                  and future-proof—across AWS, Azure, and GCP.
                </p>
              </div>
            </div>

            {/* Data-Driven Decisions */}
            <div className="flex flex-wrap items-center gap-20 w-full justify-center bg-white">
              <div className="flex flex-col min-w-[360px] max-w-[480px] items-start justify-center gap-3 flex-1">
                <h3 className="font-heading-desktop-h3-bold text-[#343844] text-[31px] font-bold">
                  Data-Driven Decisions
                </h3>

                <p className="opacity-80 font-body-base-regular text-[#343844]">
                  Your data holds the answers—we help you unlock them. With
                  real-time dashboards, predictive analytics, and AI models, we
                  turn scattered information into strategic insights that drive
                  action and growth.
                </p>
              </div>

              <div className="flex flex-col min-w-[360px] items-center gap-2 flex-1">
                <div className="relative w-[524px] h-[341px]">
                  <div className="relative w-[556px] h-[390px] -left-8">
                    <div className="absolute w-[433px] h-[304px] top-0 left-[123px] rounded-2xl overflow-hidden">
                      <div className="relative w-[432px] h-[304px] left-px bg-[#387ff5] overflow-hidden">
                        <div className="absolute w-[1087px] h-[304px] top-0 left-[-268px]">
                          <img
                            className="absolute w-[1068px] h-[239px] top-0 left-0"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-7.svg"
                          />

                          <img
                            className="absolute w-[432px] h-[304px] top-0 left-[268px]"
                            alt="Grid"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/grid.svg"
                          />

                          <img
                            className="absolute w-[1068px] h-[232px] top-[30px] left-5"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-28.svg"
                          />

                          <img
                            className="absolute w-[966px] h-[182px] top-14 left-[23px]"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-10.svg"
                          />

                          <img
                            className="absolute w-1.5 h-1.5 top-[130px] left-[614px]"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-11.svg"
                          />

                          <img
                            className="absolute w-[23px] h-[23px] top-[133px] left-[615px]"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-41.svg"
                          />

                          <img
                            className="absolute w-5 h-5 top-[184px] left-[334px]"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-24.svg"
                          />

                          <img
                            className="absolute w-2.5 h-2.5 top-[207px] left-[334px]"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-27.svg"
                          />

                          <img
                            className="absolute w-[155px] h-[155px] top-[78px] left-[338px]"
                            alt="Group"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/group-1.png"
                          />

                          <div className="w-[432px] h-[304px] top-0 left-[268px] absolute bg-[#387ff51a]" />
                        </div>

                        <div className="absolute w-[21px] h-[21px] top-[-4890px] left-[805px]">
                          <img
                            className="absolute w-1.5 h-1.5 top-0 left-0"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-13.svg"
                          />

                          <img
                            className="absolute w-2.5 h-2.5 top-0 left-0"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-6.svg"
                          />

                          <img
                            className="absolute w-[21px] h-[21px] top-0 left-0"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-22.svg"
                          />

                          <img
                            className="absolute w-[21px] h-[21px] top-0 left-0"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-26.svg"
                          />

                          <img
                            className="absolute w-2 h-2 top-0 left-0"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-29.svg"
                          />

                          <img
                            className="absolute w-2 h-2 top-0 left-0"
                            alt="Vector"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-30.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <img
                      className="absolute w-[392px] h-[285px] top-[105px] left-0"
                      alt="Img lib metric"
                      src="https://c.animaapp.com/mdd04i9koSfWJV/img/img-lib-metric-stacked-bar-chart-1--medium-.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Automation & Integration */}
            <div className="flex flex-wrap items-center gap-20 w-full justify-center bg-white">
              <div className="flex flex-col min-w-[360px] items-center gap-2 flex-1">
                <div className="relative w-[522px] h-[339px]">
                  <div className="relative w-[554px] h-[349px] -top-2.5 -left-8">
                    <div className="absolute w-[425px] h-[298px] top-[39px] left-[79px] rounded-2xl overflow-hidden">
                      <div className="h-[299px] bg-[#387ff5]">
                        <div className="relative w-[425px] h-[299px]">
                          <img
                            className="absolute w-[425px] h-[298px] top-0 left-0"
                            alt="Group"
                            src="https://c.animaapp.com/mdd04i9koSfWJV/img/group-2.png"
                          />

                          <div className="absolute w-[425px] h-[299px] top-0 left-0 bg-[#387ff51a]" />
                        </div>
                      </div>
                    </div>

                    <img
                      className="absolute w-[276px] h-[283px] top-0 left-0"
                      alt="Img lib metric chart"
                      src="https://c.animaapp.com/mdd04i9koSfWJV/img/img-lib-metric-chart-3--small-.svg"
                    />

                    <div className="absolute w-[186px] h-[191px] top-[158px] left-[368px] bg-[#171c2f] rounded-xl overflow-hidden border border-solid border-[#e7f4ff] shadow-shadow-to-bot-neutral-2">
                      <img
                        className="absolute w-[149px] h-[152px] top-4 left-[19px]"
                        alt="Content"
                        src="https://c.animaapp.com/mdd04i9koSfWJV/img/content.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col min-w-[360px] max-w-[480px] items-start justify-center gap-3 flex-1">
                <h3 className="font-heading-desktop-h3-bold text-[#343844] text-[31px] font-bold">
                  Automation &amp; Integration
                </h3>

                <p className="opacity-80 font-body-base-regular text-[#343844]">
                  Automate what slows you down. We streamline your operations
                  with DevOps pipelines, infrastructure-as-code, and smooth
                  integration across your cloud tools, APIs, and legacy
                  systems—ensuring faster delivery and better collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="flex flex-col items-center gap-[60px] px-8 py-20 flex-1 w-full bg-white">
        <div className="flex flex-col h-[520px] items-start gap-2 p-[60px] w-full bg-[#387ff5] rounded-[32px] overflow-hidden max-w-[1204px] relative">
          <img
            className="absolute w-[879px] h-[424px] top-24 left-0"
            alt="Mask group"
            src="https://c.animaapp.com/mdd04i9koSfWJV/img/mask-group.svg"
          />

          <div className="flex flex-wrap h-[437px] items-start gap-10 w-full">
            <div className="flex flex-col min-w-[360px] items-start gap-10 flex-1">
              <h2 className="font-heading-desktop-h1-bold text-white text-[39px] font-bold">
                How We Work
              </h2>

              <Button className="px-8 py-4 rounded-xl bg-[linear-gradient(140deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.25)_100%)] text-white">
                <span className="font-button-base-bold">
                  Start your free trial
                </span>
                <div className="relative w-6 h-6">
                  <img
                    className="absolute w-[21px] h-5 top-0.5 left-px"
                    alt="Vector"
                    src="https://c.animaapp.com/mdd04i9koSfWJV/img/vector-25.svg"
                  />
                </div>
              </Button>
            </div>

            <div className="flex flex-col w-[381px] h-[413px] items-start gap-5">
              {workSteps.map((step, index) => (
                <Card
                  key={index}
                  className="flex items-center gap-3 pl-2 pr-[18px] py-2 w-full rounded-2xl border border-solid border-[#ffffff33] backdrop-blur-[10px] bg-[linear-gradient(140deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.17)_100%)]"
                >
                  <CardContent className="p-0 flex items-center gap-3 w-full">
                    {step.icon && (
                      <div className="flex gap-2 p-3 bg-[#ffffff1a] rounded-xl backdrop-blur-[6px]">
                        <img className="w-6 h-6" alt="Icon" src={step.icon} />
                      </div>
                    )}
                    <div className="flex flex-col items-start flex-1">
                      <div className="font-semibold-medium-standard text-white">
                        {step.title}
                      </div>
                      <div className="font-regular-medium-compact text-[#ffffffb2]">
                        {step.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full h-[520px] top-0 left-0 absolute bg-[#387ff51a]" />
        </div>
      </section>
      
    </div>
  );
};
