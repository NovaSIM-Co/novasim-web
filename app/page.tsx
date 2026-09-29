"use client";

import { useState } from "react";

const categories = [
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
    icon: "building",
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

const accordionItems = [
  {
    number: "01",
    title: "Check compatibility",
    subtitle: "Make sure your device supports eSIM before purchasing.",
    content: (
      <>
        <p>
          Open your phone dialer and enter <strong>*#06#</strong>. If an{" "}
          <strong>EID</strong> number appears, your device supports eSIM.
        </p>

        <p>
          Your device must also be unlocked from carrier restrictions to use an
          eSIM from another provider.
        </p>

        <a href="/compatible-devices" className="accordionLink">
          Check compatible devices
          <ArrowRight />
        </a>
      </>
    ),
  },
  {
    number: "02",
    title: "Choose your connection",
    subtitle: "Select the NovaSIM option that fits your needs.",
    content: (
      <>
        <p>
          Choose the type of NovaSIM connectivity that fits your trip, longer
          stay, business needs or life on the road.
        </p>

        <a href="/esim-country" className="accordionLink">
          View NovaSIM options
          <ArrowUpRight />
        </a>
      </>
    ),
  },
  {
    number: "03",
    title: "Install & connect",
    subtitle: "Follow the instructions you receive after your purchase.",
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
          <ArrowRight />
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

function ArrowRight() {
  return (
    <svg className="inlineIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg className="inlineIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function CategoryIcon({ type }: { type: string }) {
  if (type === "globe") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4c2.2 2.2 3.4 5 3.4 8S14.2 17.8 12 20" />
        <path d="M12 4c-2.2 2.2-3.4 5-3.4 8s1.2 5.8 3.4 8" />
      </svg>
    );
  }

  if (type === "calendar") {
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

  if (type === "building") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
        <path d="M9 7h2" />
        <path d="M13 7h2" />
        <path d="M9 11h2" />
        <path d="M13 11h2" />
        <path d="M9 15h2" />
        <path d="M13 15h2" />
        <path d="M10 20.5v-3h4v3" />
      </svg>
    );
  }

  if (type === "road") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 20 11 4h2l2 16" />
        <path d="M12 7v2" />
        <path d="M12 12v2" />
        <path d="M12 17v2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M9.5 6h5" />
      <path d="M9.5 9h5" />
      <path d="M9.5 12h5" />
      <path d="M10 17h4" />
    </svg>
  );
}

export default function Home() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <main>
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
              <span>STAY</span>
              <br />
              <span>CONNECTED.</span>
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
                <ArrowRight />
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
        </div>
      </section>

      <section className="categorySection">
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
                  <CategoryIcon type={category.icon} />
                </span>
              </div>

              <div className="categoryContent">
                <span className="categoryLabel">{category.label}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

              <span className="categoryArrow">
                <ArrowRight />
              </span>
            </a>
          ))}
        </div>
      </section>

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
          {accordionItems.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <div
                className={`accordionItem ${
                  isOpen ? "accordionItemOpen" : ""
                }`}
                key={item.title}
              >
                <button
                  className="accordionButton"
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span className="accordionNumber">{item.number}</span>

                  <span className="accordionTitle">
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>

                  <span className="accordionToggle">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className={`accordionContent ${isOpen ? "open" : ""}`}>
                  <div className="accordionContentInner">{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

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

            <a href="/reviews/leave" className="reviewPrimaryButton">
              Leave a review
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

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
