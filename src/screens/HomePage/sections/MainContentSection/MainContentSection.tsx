import React, { useState } from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

import bannervideo from '../../../../assets/bannervideo.mp4';
import company from '../../../../assets/Pic.png';
import companies from '../../../../assets/Pict.png';
import whatsup from '../../../../assets/w.jpg';
import be from '../../../../assets/be.jpg';
import dail from '../../../../assets/dailmler.png';
import download from '../../../../assets/download.jpg';
import dtcc from '../../../../assets/dtcc.png';
import gat from '../../../../assets/gat.png';
import ge from '../../../../assets/ge.png';
import ver from '../../../../assets/ver.png';
import visa from '../../../../assets/visa.jpg';
import wu from '../../../../assets/wu.png';
import w from '../../../../assets/w.jpg';
import ai from '../../../../assets/AI.png';
import deep from '../../../../assets/deep.png';
import future from '../../../../assets/future.png';
import tr from '../../../../assets/true.png';
import big from '../../../../assets/big.png';
import mas from '../../../../assets/mas.png';
import l from '../../../../assets/l.png';
import p from '../../../../assets/p.png';
import m from '../../../../assets/m.png';
import secure from '../../../../assets/secure.png';
import smart from '../../../../assets/smart.png';
import data from '../../../../assets/data.png';
import auto from '../../../../assets/auto.png';
import one from '../../../../assets/1.png';
import two from '../../../../assets/2.png';
import three from '../../../../assets/3.png';

export const MainContentSection = ({
  keyFeaturesRef,
  aboutusRef,
  ourServicesRef,
  testimonialRef,
  faqRef,
  handleNavClick,
}: any) => {
  // Data for the "About Us" feature cards
  const featureCards = [
    {
      icon: deep,
      title: 'Deep Industry Insight',
      description:
        'We blend domain expertise with cutting-edge tech—AI, ML, and cybersecurity.',
    },
    {
      icon: tr,
      title: 'True Client Partnership',
      description:
        'We work as an extension of your team to solve real-world business challenges.',
    },
    {
      icon: future,
      title: 'Future-Ready Approach',
      description:
        '24/7 monitoring, predictive maintenance, and roadmaps designed for growth.',
    },
  ];

  const featureCard1s = [
    {
      icon: deep,
      title: 'End-to-End Solutions',
      description:
        'We provide complete IT Solutions tailored to your Business—from Strategy and Architecture to Development, Deployment, and Ongoing Support. Our Core focus areas include Cloud Technologies, DevSecOps, and Scalable Digital Infrastructure.',
    },
    {
      icon: future,
      title: 'Staffing',
      description:
        'We help Companies scale their teams with highly skilled Professionals across various Technologies. Whether its short-term project support or long-term resource needs, we provide reliable talent for all the major technologies.',
    },
  ];

  // Data for the service cards
  const serviceCards = [
    {
      icon: one,
      title: 'AI/ML',
      description:
        'Deploy cutting-edge AI/ML solutions to automate decision-making, detect patterns, and enhance user experience with predictive insights',
    },
    {
      icon: two,
      title: 'Cloud Strategy & Consulting',
      description:
        'From total visioning to tactical cloud roadmaps, cost modeling, and vendor-neutral governance across AWS, Azure & GCP.',
    },
    {
      icon: three,
      title: 'Data Engineering',
      description:
        'We provide support for any models ranging from data analysis,data engineering to even data science.',
    },
    {
      icon: three,
      title: 'Full-Stack Development',
      description:
        'Build robust end to end solutions in any full stack frameworks like Java, Dotnet, MEAN, MERN etc.',
    },

    {
      icon: one,
      title: 'Python Expert',
      description:
        'Develop robust, scalable, and secure backend systems, automate business tasks, and build APIs using industry-best Python practices',
    },

    {
      icon: two,
      title: 'Business Intelligence(Power BI)',
      description:
        'Leverage Power BI dashboards and reports to gain visual insights, monitor KPIs, and drive smarter business strategies',
    },

    {
      icon: two,
      title: 'Automation & DevOps',
      description:
        'Streamline delivery pipelines, cut errors, and embrace agility with full-stack CI/CD and IaC.',
    },

    {
      icon: one,
      title: 'Business Development',
      description:
        "Receive automated insights and recommendations tailored to your business needs. Let VTECHNOCLOUD's AI guide your strategies.",
    },

    {
      icon: three,
      title: 'Networking & Infrastructure',
      description:
        'Architect resilient networks—wired, wireless, hybrid—designed for performance and security.',
    },
  ];

  // Data for the "How We Work" steps
  const workSteps = [
    {
      icon: l,
      title: "Let's Talk Goals",
      description: 'We dig deep to get your business + tech aligned.',
    },
    {
      icon: p,
      title: 'Plan Like Pros',
      description: 'We map out what works—and what scales.',
    },
    {
      icon: m,
      title: 'Make It Happen',
      description: 'From idea to impact, fast.',
    },
    {
      icon: m,
      title: 'Keep Getting Better',
      description: "We don't stop. We fine-tune and future-proof.",
    },
  ];

  const [showAllServices, setShowAllServices] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // How many to show initially
  const initialServiceCount = 9;

  return (
    <div className='flex flex-col items-start w-full relative z-[3]'>
      {/* Hero Section */}
      <section className='flex flex-col items-center pt-12 pb-[34px] px-8 w-full bg-white'>
        <div className='flex flex-col max-w-[1204px] items-center gap-[60px] w-full'>
          <div className='flex flex-col max-w-[860px] items-center gap-10 w-full'>
            <div className='flex flex-col items-center gap-5 w-full'>
              <Badge className='flex items-center gap-2 px-3 py-2 rounded-[20px] border border-solid border-[#6099f7] shadow-shadow-to-bot-neutral-1 bg-white'>
                <div className='relative w-5 h-5'>
                  <img
                    className='absolute w-[18px] h-[17px] top-0.5 left-0'
                    alt='Vector'
                    src={ai}
                  />
                </div>
                <span className='font-body-base-medium text-[#343844]'>
                  Smarter IT. Stronger Business.
                </span>
              </Badge>

              <h1 className='text-[48px] font-bold font-inter font-heading-desktop-h1-bold text-[#343844] text-center'>
                Empowering Digital Acceleration with Smarter Cloud, Data &amp;
                Automation Solutions
              </h1>

              <div className='flex items-start px-20 py-0 w-full gap-2'>
                <p className='flex-1 opacity-80 font-body-base-regular text-[#343844] text-center'>
                  From strategy to execution, we help businesses unlock agility,
                  scale, and intelligence—securely and seamlessly.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <Button
                className='px-5 py-3 bg-[#387ff5] rounded-xl text-white'
                onClick={() => handleNavClick('Our Services')}
              >
                Explore Our Services
              </Button>

              
            </div>
          </div>

          <div className='relative w-full h-[556px] bg-[#387ff5] rounded-3xl overflow-hidden border border-solid border-[#f5f6f9]'>
            <div className='absolute w-full h-[556px] top-0 left-0 bg-[#6099f7] overflow-hidden'>
              <video
                className='absolute w-full h-[556px]  object-cover'
                src={bannervideo}
                controls
               
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className='flex flex-col items-center pt-10 pb-[60px] px-8 w-full bg-white'>
        <div className='flex flex-col items-center gap-5 w-full max-w-[1204px]'>
          <p className='opacity-80 font-body-base-regular text-[#343844] text-center'>
            500+ customers in over 20 countries grow their businesses with
            vTechnoCloud
          </p>
          <div className='grid grid-cols-4 gap-6 w-full justify-items-center'>
            <img
              className=''
              alt='Logo'
              src={wu}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={visa}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={ver}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={ge}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={gat}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={dtcc}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={dail}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
            <img
              className=''
              alt='Logo'
              src={be}
              style={{ height: 60, width: 200, objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        ref={aboutusRef}
        className='pt-[60px] pb-20 px-8 w-full flex flex-col items-center gap-[60px] bg-white  w-full'
      >
        <div className='flex flex-col items-center gap-[60px] w-full max-w-[1204px]'>
          <div className='flex flex-col max-w-[520px] items-center gap-8 w-full'>
            <div className='flex flex-col items-center gap-4 w-full'>
              <Badge className='flex items-center gap-2 px-3 py-2 rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1 bg-white'>
                <div className='relative w-5 h-5'>
                  <img
                    className='absolute w-[18px] h-[17px] top-0.5 left-px'
                    alt='Vector'
                    src={ai}
                  />
                </div>
                <span className='font-body-base-medium text-[#343844]'>
                  About Us
                </span>
              </Badge>

              <div className='flex items-center gap-2 w-full'>
                <h1 className='text-[39px] font-bold font-inter font-heading-desktop-h1-bold text-[#343844] text-center'>
                  Your Strategic Tech Partner
                </h1>
              </div>

              <div className='flex max-w-[820px] items-center px-5 py-0 mx-[-150px]'>
                <p className='flex-1 opacity-80 font-body-base-regular text-[#343844] text-center'>
                  At VTechnoCloud, we blend deep technical expertise with
                  forward-looking vision to help businesses thrive in the
                  digital era. With a rich history in delivering AI-driven,
                  cloud-first, and data-centric platforms, we specialize in
                  bespoke solutions that are robust, scalable, and secure.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center gap-10 w-full'>
            <div className='flex flex-wrap items-start justify-center gap-6 w-full'>
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className='flex-1 min-w-[360px] border border-solid border-[#387ff5] shadow-shadow-to-bot-primary-4 rounded-xl'
                >
                  <CardContent className='flex flex-col items-start gap-2 px-5 py-4'>
                    <div className='flex items-start gap-3 w-full'>
                      <div className='flex items-start gap-2'>
                        <div className='relative w-6 h-6'>
                          <img
                            className='absolute w-5 h-5 top-0.5 left-0.5'
                            alt='Vector'
                            src={card.icon}
                          />
                        </div>
                      </div>
                      <h3
                        className='flex-1 font-body-base-semibold text-[#343844] font-semibold'
                        style={{ fontWeight: 600 }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <p className='opacity-80 font-body-base-regular text-[#343844]'>
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className='relative w-full h-[480px] rounded-3xl overflow-hidden border border-solid border-[#f5f6f9] bg-[linear-gradient(135deg,rgba(128,159,240,1)_0%,rgba(76,98,197,1)_100%)]'>
              <div className='w-full h-[480px] bg-[#6099f7] overflow-hidden'>
                <img src={big} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section
        ref={ourServicesRef}
        className='flex flex-col items-center gap-[60px] pb-4 px-8 w-full bg-white'
      >
        <div className='flex flex-col items-center gap-[60px] w-full max-w-[1204px]'>
          <div className='max-w-[800px] w-full flex flex-col items-center gap-8'>
            <div className='flex flex-col items-center gap-4 w-full'>
              <Badge className='flex items-center gap-2 px-3 py-2 rounded-[20px] border border-solid border-[#b6bbcd] shadow-shadow-to-bot-neutral-1 bg-white'>
                <div className='relative w-5 h-5'>
                  <img
                    className='absolute w-[18px] h-[17px] top-0.5 left-px'
                    alt='Vector'
                    src={ai}
                  />
                </div>
                <span className='font-body-base-medium text-[#343844]'>
                  What We Do
                </span>
              </Badge>

              <div className='flex items-center gap-2 w-full'>
                <h2 className='flex-1 font-heading-desktop-h2-bold text-[#343844] text-center text-[39px] font-bold font-inter'>
                  Our Services
                </h2>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center gap-10 w-full'>
            <div className='flex flex-wrap flex-col items-start justify-center gap-6 w-full'>
              {featureCard1s.map((card, index) => (
                <Card
                  key={index}
                  className='flex-1 min-w-[360px] min-h-[150px] border border-solid border-[#387ff5] shadow-shadow-to-bot-primary-4 rounded-xl'
                >
                  <CardContent className='flex flex-col items-start gap-2 px-5 py-4'>
                    <div className='flex items-start gap-3 w-full'>
                      <div className='flex items-start gap-2'>
                        <div className='relative w-6 h-6'>
                          <img
                            className='absolute w-5 h-5 top-0.5 left-0.5'
                            alt='Vector'
                            src={card.icon}
                          />
                        </div>
                      </div>
                      <h3
                        className='flex-1 font-body-base-semibold text-[#343844] font-semibold'
                        style={{ fontWeight: 600 }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <p className='opacity-80 font-body-base-regular text-[#343844]'>
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className='relative flex flex-wrap max-w-[1204px] items-start justify-center gap-8 pb-12 w-full'>
            <div className='flex flex-wrap items-start justify-center gap-8 flex-1'>
              {(showAllServices
                ? serviceCards
                : serviceCards.slice(0, initialServiceCount)
              ).map((service, index) => (
                <Card
                  key={index}
                  className={`flex-1 min-w-[292px] bg-[#1c1f25] rounded-xl border border-solid ${
                    service.highlighted
                      ? 'border-[#387ff5]'
                      : 'border-[#b6bbcd]'
                  }`}
                >
                  <CardContent className='flex flex-col items-start justify-center gap-4 p-8'>
                    <img
                      className='w-[131.09px] h-[131.09px] mt-[-5.09px] ml-[-30.55px]'
                      alt='Component'
                      src={service.icon}
                    />
                    <div className='flex flex-col h-[110px] items-start justify-center gap-1 w-full'>
                      <h3 className='h-7 font-heading-desktop-h5-bold text-[#e7f4ff] whitespace-nowrap'>
                        {service.title}
                      </h3>
                      <p className='opacity-80 font-body-base-regular text-[#9da4bd]'>
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        
        </div>
      </section>

      {/* Key Features Section */}
      <section
        ref={keyFeaturesRef}
        className='pt-[50px] pb-28 px-8 flex flex-col items-center gap-[60px] bg-white  w-full'
      >
        <div className='flex flex-col w-full items-center gap-20 max-w-[1204px]'>
          <div className='max-w-[612px] w-[612px] flex flex-col items-center gap-8'>
            <div className='flex flex-col items-center gap-4 w-full'>
              <div className='flex items-center gap-2 w-full'>
                <h2 className='flex-1 font-heading-desktop-h2-bold text-[#343844] text-center text-[39px] font-bold font-inter'>
                  Key Features and Capabilities
                </h2>
              </div>

              <div className='flex max-w-[820px] items-center gap-2 px-5 py-0 w-full'>
                <p className='flex-1 opacity-80 font-body-base-regular text-[#343844] text-center'>
                  What sets our solutions apart—and pushes your business
                  forward.
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col w-full items-center gap-6'>
            {/* Secure by Design */}
            <div className='flex flex-wrap items-center gap-20 w-full justify-center bg-white'>
              <div className='flex flex-col min-w-[360px] max-w-[480px] items-start justify-center gap-4 flex-1'>
                <h3 className='font-heading-desktop-h3-bold text-[#343844] text-[31px] font-bold'>
                  Secure by Design
                </h3>

                <p className='opacity-80 font-body-base-regular text-[#343844]'>
                  Cybersecurity is at the core of everything we build. With
                  zero-trust frameworks, continuous monitoring, and
                  compliance-ready architectures, your systems stay protected.
                </p>
              </div>

              <div className='flex flex-col min-w-[360px] items-center gap-2 flex-1'>
                <img src={secure} />
              </div>
            </div>

            {/* Smart Cloud Engineering */}
            <div className='flex flex-wrap items-center gap-20 w-full justify-center bg-white'>
              <div className='flex flex-col min-w-[360px] items-center gap-2 flex-1'>
               <img src={smart} />
              </div>

              <div className='flex flex-col min-w-[360px] max-w-[480px] items-start justify-center gap-3 flex-1'>
                <h3 className='font-heading-desktop-h3-bold text-[#343844] text-[31px] font-bold'>
                  Smart Cloud Engineering
                </h3>

                <p className='opacity-80 font-body-base-regular text-[#343844]'>
                  We help you build high-performing cloud environments that
                  scale with your business. From secure migration to cost
                  optimization, our cloud-native solutions are agile, automated,
                  and future-proof—across AWS, Azure, and GCP.
                </p>
              </div>
            </div>

            {/* Data-Driven Decisions */}
            <div className='flex flex-wrap items-center gap-20 w-full justify-center bg-white'>
              <div className='flex flex-col min-w-[360px] max-w-[480px] items-start justify-center gap-3 flex-1'>
                <h3 className='font-heading-desktop-h3-bold text-[#343844] text-[31px] font-bold'>
                  Data-Driven Decisions
                </h3>

                <p className='opacity-80 font-body-base-regular text-[#343844]'>
                  Your data holds the answers—we help you unlock them. With
                  real-time dashboards, predictive analytics, and AI models, we
                  turn scattered information into strategic insights that drive
                  action and growth.
                </p>
              </div>

              <div className='flex flex-col min-w-[360px] items-center gap-2 flex-1'>
             <img src={data} />
              </div>
            </div>

            {/* Automation & Integration */}
            <div className='flex flex-wrap items-center gap-20 w-full justify-center bg-white'>
              <div className='flex flex-col min-w-[360px] items-center gap-2 flex-1'>
                <img src={auto} />
              </div>

              <div className='flex flex-col min-w-[360px] max-w-[480px] items-start justify-center gap-3 flex-1'>
                <h3 className='font-heading-desktop-h3-bold text-[#343844] text-[31px] font-bold'>
                  Automation &amp; Integration
                </h3>

                <p className='opacity-80 font-body-base-regular text-[#343844]'>
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
      <section className='flex flex-col items-center gap-[60px] px-8 py-20 flex-1 w-full bg-white'>
        <div className='flex flex-col h-[520px] items-start gap-2 p-[60px] w-full bg-[#387ff5] rounded-[32px] overflow-hidden max-w-[1204px] relative'>
          <img
            className='absolute w-[879px] h-[424px] top-24 left-0'
            alt='Mask group'
            src={mas}
          />

          <div className='flex flex-wrap h-[437px] items-start gap-10 w-full'>
            <div className='flex flex-col min-w-[360px] items-start gap-10 flex-1'>
              <h2 className='font-heading-desktop-h1-bold text-white text-[39px] font-bold'>
                How We Work
              </h2>

              <Button className='px-8 py-4 rounded-xl bg-[linear-gradient(140deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.25)_100%)] text-white'>
                <span className='font-button-base-bold'>
                  Start your free trial
                </span>
                <div className='relative w-6 h-6'>
                  <img
                    className='absolute w-[21px] h-5 top-0.5 left-px'
                    alt='Vector'
                    src={ai}
                  />
                </div>
              </Button>
            </div>

            <div className='flex flex-col w-[381px] h-[413px] items-start gap-5'>
              {workSteps.map((step, index) => (
                <Card
                  key={index}
                  className='flex items-center gap-3 pl-2 pr-[18px] py-2 w-full rounded-2xl border border-solid border-[#ffffff33] backdrop-blur-[10px] bg-[linear-gradient(140deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.17)_100%)]'
                >
                  <CardContent className='p-0 flex items-center gap-3 w-full'>
                    {step.icon && (
                      <div className='flex gap-2 p-3 bg-[#ffffff1a] rounded-xl backdrop-blur-[6px]'>
                        <img className='w-6 h-6' alt='Icon' src={step.icon} />
                      </div>
                    )}
                    <div className='flex flex-col items-start flex-1'>
                      <div className='font-semibold-medium-standard text-white'>
                        {step.title}
                      </div>
                      <div className='font-regular-medium-compact text-[#ffffffb2]'>
                        {step.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className='w-full h-[520px] top-0 left-0 absolute bg-[#387ff51a]' />
        </div>
      </section>
    </div>
  );
};
