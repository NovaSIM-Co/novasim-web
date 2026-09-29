"use client";

import { useState } from "react";

type IconName =
  | "globe"
  | "calendar"
  | "business"
  | "road"
  | "sim";

const categories: {
  number: string;
  label: string;
  title: string;
  description: string;
  href: string;
  icon: IconName;
}[] = [
  {
    number: "01",
    label: "TRAVEL",
    title: "eSIM by Country",
    description: "Choose your destination and find the right eSIM.",
    href: "/esim-country",
    icon: "globe",
  },
  {
    number: "02",
    label: "EXTENDED USE",
    title: "Multi-Month",
    description: "Large-data connectivity for longer periods.",
    href: "/multi-month",
    icon: "calendar",
  },
  {
    number: "03",
    label: "PROFESSIONAL",
    title: "Business & Fleets",
    description: "Connectivity solutions for companies and fleets.",
    href: "/business",
    icon: "business",
  },
  {
    number: "04",
    label: "ON THE ROAD",
    title: "Truck Drivers & Caravans",
    description: "High-data connectivity for life on the road.",
    href: "/truck-drivers",
    icon: "road",
  },
  {
    number: "05",
    label: "PHYSICAL CONNECTIVITY",
    title: "Physical SIM",
    description: "Physical SIM options for compatible devices.",
    href: "/physical-sim",
    icon: "sim",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Check compatibility",
    description: "Make sure your device supports eSIM before purchasing.",
    content: (
      <>
        <p>
          Open your phone dialer and enter <strong>*#06#</strong>. If an{" "}
          <strong>EID</strong> number appears, your device supports eSIM.
        </p>

        <p>
          Your device must also be unlocked from carrier restrictions to use
          an eSIM from another provider.
        </p>

        <a href="/compatibility" className="accordionLink">
          Check compatible devices
          <ArrowIcon />
        </a>
      </>
    ),
  },
  {
    number: "02",
    title: "Choose your connection",
    description: "Select the NovaSIM option that fits your needs.",
    content: (
      <>
        <p>
          Choose the type of NovaSIM connectivity that fits your trip, longer
          stay, business needs or life on the road.
        </p>

        <a href="#connections" className="accordionLink">
          View NovaSIM options
          <UpIcon />
        </a>
      </>
    ),
  },
  {
    number: "03",
    title: "Install & connect",
    description: "Follow the instructions you receive after your purchase.",
    content: (
      <>
        <p>
          After purchasing your eSIM, you receive the information needed to
          install it on your compatible device.
        </p>

        <p>
          Follow the provided setup instructions and connect when your NovaSIM
          plan is ready to use.
        </p>

        <a href="/how-it-works" className="accordionLink">
          Installation guide
          <ArrowIcon />
        </a>
      </>
    ),
  },
];

function NovaLogo({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "novaLogo novaLogoSmall" : "novaLogo"}>
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="NovaSIM"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="novaLogoLeft"
          d="M13 49V15h9.5l19 25V15H51v34h-9.5l-19-25v25H13Z"
        />
        <path
          className="novaLogoCut"
          d="M22.5 15 51 49h-9.5L13 15h9.5Z"
        />
      </svg>
    </span>
  );
}

function CategoryIcon({ name }: { name: IconName }) {
  if (name === "globe") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4c2.3 2.2 3.5 4.9 3.5 8S14.3 17.8 12 20" />
        <path d="M12 4c-2.3 2.2-3.5 4.9-3.5 8S9.7 17.8 12 20" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5.5" width="16" height="14" rx="2" />
        <path d="M8 3.5v4" />
        <path d="M16 3.5v4" />
        <path d="M4 9.5h16" />
        <path d="M8 13h3" />
        <path d="M13 13h3" />
        <path d="M8 16h3" />
      </svg>
    );
  }

  if (name === "business") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="4" width="14" height="16" rx="1.5" />
        <path d="M9 20v-4h6v4" />
        <path d="M8 8h2" />
        <path d="M14 8h2" />
        <path d="M8 12h2" />
        <path d="M14 12h2" />
      </svg>
    );
  }

  if (name === "road") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 20 11 4" />
        <path d="M15 20 13 4" />
        <path d="M12 6v3" />
        <path d="M12 12v3" />
        <path d="M12 18v2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="3.5" width="12" height="17" rx="2" />
      <path d="M9 3.5v4h6v-4" />
      <path d="M9 11h6" />
      <path d="M9 14h6" />
      <path d="M9 17h3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="inlineIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function UpIcon() {
  return (
    <svg className="inlineIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 19V5" />
      <path d="m7 10 5-5 5 5" />
    </svg>
  );
}

export default function Home() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  function toggleStep(index: number) {
    setOpenStep((current) => (current === index ? null : index));
  }

  return (
    <main>
      {/* HEADER */}
      <header className="navbar">
        <a href="/" className="brand" aria-label="NovaSIM Home">
          <NovaLogo small />
          <span className="brandName">NovaSIM</span>
        </a>

        <nav className="desktopNav" aria-label="Main navigation">
          <a href="/esim-country">Destinations</a>
          <a href="/multi-month">Multi-Month</a>
          <a href="/business">Business</a>
          <a href="/coverage">Coverage</a>
          <a href="/support">Support</a>
        </nav>

        <div className="navActions">
          <button className="languageButton" type="button">
            EN
          </button>

          <a href="/esim-country" className="navCta">
            Get eSIM
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroGrid" />
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <div className="heroInner">
          <div className="heroCopy">
            <div className="eyebrow">
              <span className="statusDot" />
              PREMIUM CONNECTIVITY ACROSS EUROPE
            </div>

            <h1>
              EUROPE eSIM.
              <br />
              <span>STAY CONNECTED.</span>
              <br />
              EVERYWHERE.
            </h1>

            <p className="heroDescription">
              High-speed 4G/5G mobile data across Europe. Instant eSIM
              activation. Hotspot included.
            </p>

            <div className="heroButtons">
              <a href="/esim-country" className="primaryButton">
                Explore eSIMs
                <ArrowIcon />
              </a>

              <a href="/coverage" className="secondaryButton">
                Europe Coverage
              </a>
            </div>

            <div className="heroTrust">
              <span>
                <i>✓</i> Instant activation
              </span>
              <span>
                <i>✓</i> 4G / 5G
              </span>
              <span>
                <i>✓</i> Hotspot included
              </span>
            </div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="visualGlow" />
            <div className="orbit orbitOne" />
            <div className="orbit orbitTwo" />
            <div className="orbit orbitThree" />

            <div className="floatingTag tagOne">
              <span className="tagDot" />
              CONNECTED
            </div>

            <div className="floatingTag tagTwo">5G READY</div>

            <div className="phone">
              <div className="phoneFrame">
                <div className="dynamicIsland" />

                <div className="phoneStatus">
                  <span>9:41</span>
                  <span>5G</span>
                </div>

                <div className="phoneContent">
                  <div className="phoneLogo">
                    <NovaLogo />
                  </div>

                  <p className="phoneLabel">NOVASIM</p>

                  <div className="connectionState">
                    <span />
                    CONNECTED
                  </div>

                  <div className="networkCard">
                    <small>NETWORK</small>
                    <strong>Europe</strong>

                    <div className="networkLine">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="phoneStats">
                    <div>
                      <small>STATUS</small>
                      <strong>ACTIVE</strong>
                    </div>

                    <div>
                      <small>NETWORK</small>
                      <strong>4G / 5G</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="simCard">
              <div className="simTop">
                <span>NovaSIM</span>
                <small>eSIM</small>
              </div>

              <div className="simLogo">
                <NovaLogo small />
              </div>

              <div className="simBottom">
                <span>EUROPE</span>
                <span>5G</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTIONS */}
      <section className="categorySection" id="connections">
        <div className="categoryIntro">
          <div>
            <span className="sectionLabel">CHOOSE YOUR CONNECTION</span>

            <h2>
              One NovaSIM.
              <br />
              <span>Your way.</span>
            </h2>
          </div>

          <p>
            From short trips to long-term connectivity, professional fleets
            and life on the road — choose what fits you.
          </p>
        </div>

        <div className="categoryGrid">
          {categories.map((category) => (
            <a
              href={category.href}
              className="categoryCard"
              key={category.title}
            >
              <div className="categoryTop">
                <span className="categoryNumber">{category.number}</span>

                <span className="categoryIcon">
                  <CategoryIcon name={category.icon} />
                </span>
              </div>

              <div className="categoryContent">
                <span className="categoryLabel">{category.label}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

              <span className="categoryArrow">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* HOW NOVASIM WORKS */}
      <section className="howSection">
        <div className="howIntro">
          <span className="sectionLabel">GET CONNECTED</span>

          <h2>
            How NovaSIM <span>works.</span>
          </h2>

          <p>
            Check your device, choose your connection and follow the setup
            instructions.
          </p>
        </div>

        <div className="accordion">
          {howItWorks.map((step, index) => {
            const isOpen = openStep === index;

            return (
              <div
                className={`accordionItem ${
                  isOpen ? "accordionItemOpen" : ""
                }`}
                key={step.title}
              >
                <button
                  className="accordionButton"
                  type="button"
                  onClick={() => toggleStep(index)}
                  aria-expanded={isOpen}
                >
                  <span className="accordionNumber">{step.number}</span>

                  <span className="accordionTitle">
                    <strong>{step.title}</strong>
                    <small>{step.description}</small>
                  </span>

                  <span className="accordionToggle" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`accordionContent ${isOpen ? "open" : ""}`}
                >
                  <div className="accordionContentInner">
                    {step.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviewsSection">
        <div className="reviewsHeader">
          <div>
            <span className="sectionLabel">CUSTOMER REVIEWS</span>

            <h2>
              Your experience
              <br />
              <span>matters.</span>
            </h2>
          </div>

          <p>
            Already used NovaSIM? Share your experience and help other
            customers choose with confidence.
          </p>
        </div>

        <div className="reviewsEntry">
          <div className="reviewsEntryCopy">
            <span className="reviewsMiniLabel">NOVASIM REVIEWS</span>
            <h3>Used NovaSIM?</h3>
            <p>
              Tell us about your experience with your NovaSIM connection.
            </p>
          </div>

          <div className="reviewsActions">
            <a href="/reviews" className="secondaryButton">
              See reviews
            </a>

            <a
              href="/reviews#leave-review"
              className="reviewPrimaryButton"
            >
              Leave a review
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footerTop">
          <div>
            <a href="/" className="brand">
              <NovaLogo small />
              <span className="brandName">NovaSIM</span>
            </a>

            <p>
              Premium mobile connectivity
              <br />
              designed for Europe.
            </p>
          </div>
        </div>

        <div className="footerGrid">
          <div>
            <strong>CONNECTIVITY</strong>
            <a href="/esim-country">eSIM by Country</a>
            <a href="/multi-month">Multi-Month</a>
            <a href="/coverage">Europe Coverage</a>
          </div>

          <div>
            <strong>SOLUTIONS</strong>
            <a href="/business">Business & Fleets</a>
            <a href="/truck-drivers">Truck Drivers & Caravans</a>
            <a href="/physical-sim">Physical SIM</a>
          </div>

          <div>
            <strong>HELP</strong>
            <a href="/how-it-works">How It Works</a>
            <a href="/faq">FAQ</a>
            <a href="/support">Support</a>
          </div>

          <div>
            <strong>NOVASIM</strong>
            <a href="/why-novasim">Why NovaSIM</a>
            <a href="/reviews">Reviews</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 NovaSIM. All rights reserved.</span>

          <div>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
