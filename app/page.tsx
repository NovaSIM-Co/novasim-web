"use client";

import { useRef, useState } from "react";

const categories = [
  {
    number: "01",
    label: "TRAVEL",
    title: "eSIM by Country",
    description: "Choose your destination and find the right eSIM.",
    icon: "globe",
    action: "pending",
  },
  {
    number: "02",
    label: "EXTENDED USE",
    title: "Multi-Month",
    description: "Large-data connectivity for longer periods.",
    icon: "calendar",
    action: "pending",
  },
  {
    number: "03",
    label: "PROFESSIONAL",
    title: "Business & Fleets",
    description: "Connectivity solutions for companies and fleets.",
    icon: "building",
    action: "pending",
  },
  {
    number: "04",
    label: "ON THE ROAD",
    title: "Truck Drivers & Caravans",
    description: "High-data connectivity for life on the road.",
    icon: "road",
    action: "truck",
  },
  {
    number: "05",
    label: "PHYSICAL CONNECTIVITY",
    title: "Physical SIM",
    description: "Physical SIM options for compatible devices.",
    icon: "sim",
    action: "pending",
  },
];

const truckPlans = [
  {
    data: "200 GB",
    duration: "30 DAYS",
    price: "€39.90",
    description:
      "A flexible data plan for drivers who need reliable connectivity across Europe.",
  },
  {
    data: "500 GB",
    duration: "30 DAYS",
    price: "€54.90",
    description:
      "More data for everyday use on the road, streaming, navigation and hotspot.",
    featured: true,
  },
  {
    data: "750 GB FUP",
    duration: "30 DAYS",
    price: "€64.90",
    description:
      "Our largest current data option for heavy connectivity needs on the road.",
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

        <a href="#connections" className="accordionLink">
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

function TruckPlans({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <section className="truckPlansSection">
      <style>{`
        .truckPlansSection {
          width: min(calc(100% - 64px), var(--max-width));
          margin: 0 auto;
          padding: 12px 0 72px;
          animation: truckReveal .35s ease;
        }

        @keyframes truckReveal {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .truckPlansShell {
          position: relative;
          overflow: hidden;
          padding: 38px;
          border-radius: 14px;
          border: 1px solid rgba(36,216,200,.18);
          background:
            radial-gradient(
              circle at 88% 5%,
              rgba(36,216,200,.075),
              transparent 30%
            ),
            linear-gradient(145deg,#071011,#050a0b);
        }

        .truckPlansShell::before {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          right: -170px;
          top: -180px;
          border-radius: 50%;
          border: 1px solid rgba(36,216,200,.08);
          pointer-events: none;
        }

        .truckPlansTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        .truckPlansLabel {
          color: var(--aqua);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .truckPlansTop h2 {
          margin-top: 12px;
          font-size: clamp(36px,4vw,52px);
          line-height: 1;
          letter-spacing: -2.6px;
        }

        .truckPlansTop h2 span {
          color: var(--aqua);
        }

        .truckPlansTop p {
          max-width: 520px;
          margin-top: 14px;
          color: #758183;
          font-size: 12px;
          line-height: 1.65;
        }

        .truckClose {
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.025);
          color: #829092;
          cursor: pointer;
          font-size: 20px;
          transition:
            border-color 160ms ease,
            color 160ms ease,
            background 160ms ease,
            box-shadow 160ms ease;
        }

        .truckClose:hover {
          color: var(--aqua);
          border-color: rgba(36,216,200,.3);
          background: rgba(36,216,200,.05);
        }

        .truckGrid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 10px;
          margin-top: 32px;
          position: relative;
          z-index: 2;
        }

        .truckPlanCard {
          min-height: 360px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          border-radius: 11px;
          border: 1px solid rgba(255,255,255,.07);
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(36,216,200,.025),
              transparent 36%
            ),
            #060c0d;
        }

        .truckPlanFeatured {
          border-color: rgba(36,216,200,.28);
          box-shadow: 0 0 28px rgba(36,216,200,.04);
        }

        .truckPopular {
          position: absolute;
          right: 16px;
          top: 16px;
          padding: 6px 8px;
          border-radius: 6px;
          color: var(--aqua);
          background: rgba(36,216,200,.07);
          border: 1px solid rgba(36,216,200,.16);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .truckDuration {
          color: #4d595b;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .truckPlanCard h3 {
          margin-top: 22px;
          font-size: 32px;
          line-height: 1;
          letter-spacing: -1.7px;
        }

        .truckPlanDescription {
          min-height: 54px;
          max-width: 280px;
          margin-top: 12px;
          color: #687476;
          font-size: 10px;
          line-height: 1.55;
        }

        .truckPrice {
          margin-top: 23px;
          display: flex;
          align-items: flex-end;
          gap: 6px;
        }

        .truckPrice strong {
          font-size: 27px;
          letter-spacing: -1.2px;
        }

        .truckPrice span {
          color: #566164;
          font-size: 8px;
          padding-bottom: 4px;
        }

        .truckFeatures {
          margin-top: 21px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,.055);
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: #7b8789;
          font-size: 9px;
        }

        .truckFeatures span {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .truckFeatures i {
          color: var(--aqua);
          font-style: normal;
        }

        .truckPlanAction {
          min-height: 44px;
          width: 100%;
          margin-top: auto;
          padding: 0 14px;
          border-radius: 7px;
          border: 1px solid rgba(36,216,200,.18);
          background: rgba(36,216,200,.045);
          color: var(--aqua);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 9px;
          font-weight: 900;
          cursor: default;
        }

        .truckPlansFootnote {
          margin-top: 15px;
          color: #4f5b5d;
          font-size: 8px;
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 850px) {
          .truckGrid {
            grid-template-columns: 1fr;
          }

          .truckPlanCard {
            min-height: 325px;
          }
        }

        @media (max-width: 720px) {
          .truckPlansSection {
            width: calc(100% - 28px);
            padding: 0 0 48px;
          }

          .truckPlansShell {
            padding: 20px;
            border-radius: 11px;
          }

          .truckPlansTop {
            gap: 14px;
          }

          .truckPlansLabel {
            font-size: 7px;
            letter-spacing: 1.2px;
          }

          .truckPlansTop h2 {
            margin-top: 9px;
            font-size: 30px;
            letter-spacing: -1.7px;
          }

          .truckPlansTop p {
            max-width: 300px;
            margin-top: 10px;
            font-size: 8.5px;
            line-height: 1.55;
          }

          .truckClose {
            width: 34px;
            height: 34px;
            border-radius: 8px;
            font-size: 17px;
          }

          .truckGrid {
            margin-top: 22px;
            gap: 8px;
          }

          .truckPlanCard {
            min-height: 300px;
            padding: 18px;
            border-radius: 9px;
          }

          .truckPopular {
            right: 12px;
            top: 12px;
            font-size: 5.5px;
          }

          .truckDuration {
            font-size: 6px;
          }

          .truckPlanCard h3 {
            margin-top: 17px;
            font-size: 28px;
          }

          .truckPlanDescription {
            min-height: auto;
            margin-top: 9px;
            font-size: 8.5px;
          }

          .truckPrice {
            margin-top: 18px;
          }

          .truckPrice strong {
            font-size: 24px;
          }

          .truckPrice span {
            font-size: 7px;
          }

          .truckFeatures {
            margin-top: 16px;
            padding-top: 14px;
            gap: 7px;
            font-size: 8px;
          }

          .truckPlanAction {
            min-height: 40px;
            margin-top: 19px;
            font-size: 8px;
          }

          .truckPlansFootnote {
            font-size: 7px;
          }
        }
      `}</style>

      <div className="truckPlansShell">
        <div className="truckPlansTop">
          <div>
            <span className="truckPlansLabel">
              TRUCK DRIVERS & CARAVANS
            </span>

            <h2>
              Built for life <span>on the road.</span>
            </h2>

            <p>
              Large-data NovaSIM options for drivers, caravans and customers
              who need serious mobile connectivity while travelling across
              Europe.
            </p>
          </div>

          <button
            type="button"
            className="truckClose"
            onClick={onClose}
            aria-label="Close plans"
          >
            ×
          </button>
        </div>

        <div className="truckGrid">
          {truckPlans.map((plan) => (
            <article
              key={plan.data}
              className={`truckPlanCard ${
                plan.featured ? "truckPlanFeatured" : ""
              }`}
            >
              {plan.featured && (
                <span className="truckPopular">POPULAR</span>
              )}

              <span className="truckDuration">{plan.duration}</span>

              <h3>{plan.data}</h3>

              <p className="truckPlanDescription">
                {plan.description}
              </p>

              <div className="truckPrice">
                <strong>{plan.price}</strong>
                <span>/ 30 days</span>
              </div>

              <div className="truckFeatures">
                <span>
                  <i>✓</i> Data-only eSIM
                </span>

                <span>
                  <i>✓</i> 4G / 5G connectivity
                </span>

                <span>
                  <i>✓</i> Hotspot included
                </span>

                <span>
                  <i>✓</i> QR eSIM activation
                </span>
              </div>

              <div className="truckPlanAction">
                <span>Purchase connection coming next</span>
                <ArrowRight />
              </div>
            </article>
          ))}
        </div>

        <p className="truckPlansFootnote">
          Purchase buttons will be connected after the new NovaSIM website and
          navigation are fully completed and tested.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [showTruckPlans, setShowTruckPlans] = useState(false);
  const truckPlansRef = useRef<HTMLDivElement | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const handleCategory = (action: string) => {
    if (action !== "truck") {
      return;
    }

    setShowTruckPlans(true);

    window.setTimeout(() => {
      truckPlansRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

  const closeTruckPlans = () => {
    setShowTruckPlans(false);

    window.setTimeout(() => {
      document.getElementById("connections")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <main>
      <header className="navbar">
        <a href="/" className="brand" aria-label="NovaSIM Home">
          <NovaLogo small />
          <span className="brandName">NovaSIM</span>
        </a>

        <nav className="desktopNav" aria-label="Main navigation">
          <a href="#connections">Connections</a>
          <a href="#how-it-works">How It Works</a>
          <a href="/coverage">Coverage</a>
          <a href="/support">Support</a>
        </nav>

        <div className="navActions">
          <button className="languageButton" type="button">
            EN
          </button>

          <a href="#connections" className="navCta">
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
              <a href="#connections" className="primaryButton">
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

      <section className="categorySection" id="connections">
        <div className="categoryIntro">
          <div>
            <span className="sectionLabel">
              CHOOSE YOUR CONNECTION
            </span>

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
            <button
              type="button"
              className={`categoryCard categoryCardButton ${
                category.action === "truck" && showTruckPlans
                  ? "categoryCardActive"
                  : ""
              }`}
              key={category.title}
              onClick={() => handleCategory(category.action)}
              aria-expanded={
                category.action === "truck"
                  ? showTruckPlans
                  : undefined
              }
            >
              <div className="categoryTop">
                <span className="categoryNumber">
                  {category.number}
                </span>

                <span className="categoryIcon">
                  <CategoryIcon type={category.icon} />
                </span>
              </div>

              <div className="categoryContent">
                <span className="categoryLabel">
                  {category.label}
                </span>

                <h3>{category.title}</h3>

                <p>{category.description}</p>
              </div>

              <span className="categoryArrow">
                <ArrowRight />
              </span>
            </button>
          ))}
        </div>

        <style>{`
          .categoryCardButton {
            width: 100%;
            color: inherit;
            font: inherit;
            text-align: left;
            cursor: pointer;
          }

          .categoryCardButton:focus-visible {
            outline: 1px solid rgba(98,243,230,.65);
            outline-offset: 3px;
          }

          .categoryCardActive {
            border-color: rgba(36,216,200,.38);
            background:
              radial-gradient(
                circle at 90% 10%,
                rgba(36,216,200,.085),
                transparent 42%
              ),
              #081011;
            box-shadow:
              0 0 0 1px rgba(36,216,200,.035),
              0 0 30px rgba(36,216,200,.07);
          }
        `}</style>
      </section>

      {showTruckPlans && (
        <div ref={truckPlansRef}>
          <TruckPlans onClose={closeTruckPlans} />
        </div>
      )}

      <section className="howSection" id="how-it-works">
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
                  <span className="accordionNumber">
                    {item.number}
                  </span>

                  <span className="accordionTitle">
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>

                  <span className="accordionToggle">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`accordionContent ${
                    isOpen ? "open" : ""
                  }`}
                >
                  <div className="accordionContentInner">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="reviewsSection">
        <div className="reviewsHeader">
          <div>
            <span className="sectionLabel">
              CUSTOMER REVIEWS
            </span>

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
            <span className="reviewsMiniLabel">
              NOVASIM REVIEWS
            </span>

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
              href="/reviews/leave"
              className="reviewPrimaryButton"
            >
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
            <a href="#connections">eSIM by Country</a>
            <a href="#connections">Multi-Month</a>
            <a href="/coverage">Europe Coverage</a>
          </div>

          <div>
            <strong>SOLUTIONS</strong>
            <a href="#connections">Business & Fleets</a>

            <a
              href="#connections"
              onClick={(event) => {
                event.preventDefault();
                handleCategory("truck");
              }}
            >
              Truck Drivers & Caravans
            </a>

            <a href="#connections">Physical SIM</a>
          </div>

          <div>
            <strong>HELP</strong>
            <a href="#how-it-works">How It Works</a>
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
