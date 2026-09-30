"use client";

import { useState } from "react";

type View =
  | "home"
  | "plans"
  | "truck"
  | "country"
  | "multi"
  | "account"
  | "loyalty"
  | "support"
  | "terms";

const WHATSAPP_URL =
  "https://wa.me/40742387131?text=Hello%2C%20I%20need%20help%20with%20my%20NovaSIM.";

const truckPlans = [
  {
    data: "200 GB",
    price: "€39.90",
    loyalty: "€35.91",
    duration: "30 days",
  },
  {
    data: "500 GB",
    price: "€54.90",
    loyalty: "€49.41",
    duration: "30 days",
    popular: true,
  },
  {
    data: "750 GB",
    price: "€64.90",
    loyalty: "€58.41",
    duration: "30 days",
  },
];

function ArrowRight() {
  return (
    <svg className="inlineIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg className="inlineIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 12H5" />
      <path d="m10 7-5 5 5 5" />
    </svg>
  );
}

function NovaLogo() {
  return (
    <span className="novaLogo novaLogoSmall">
      <svg viewBox="0 0 64 64" aria-hidden="true">
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

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.2 2.2 3.4 5 3.4 8S14.2 17.8 12 20" />
      <path d="M12 4c-2.2 2.2-3.4 5-3.4 8s1.2 5.8 3.4 8" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 20 11 4h2l2 16" />
      <path d="M12 7v2M12 12v2M12 17v2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5.5" width="16" height="14" rx="2" />
      <path d="M8 3.5v4M16 3.5v4M4 9.5h16" />
      <path d="M8 13h3M13 13h3M8 16h3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20c.7-4 3-6 6.5-6s5.8 2 6.5 6" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="9" width="16" height="11" rx="2" />
      <path d="M3 9h18M12 9v11M12 9H8.5a2.5 2.5 0 1 1 2.1-3.8L12 9Z" />
      <path d="M12 9h3.5a2.5 2.5 0 1 0-2.1-3.8L12 9Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 8h14M5 16h14" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z" />
      <path d="M9 8.5c.5 2.6 2 4.1 4.7 5" />
      <path d="M9.1 8.4 10 10" />
      <path d="m13.8 13.5 1.6.7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 12 4 4 8-9" />
    </svg>
  );
}

function AppHeader({
  menuOpen,
  setMenuOpen,
  go,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  go: (view: View) => void;
}) {
  return (
    <>
      <header className="newHeader">
        <button className="newBrand" onClick={() => go("home")}>
          <NovaLogo />
          <span>NovaSIM</span>
        </button>

        <div className="newHeaderActions">
          <button className="newAccount" onClick={() => go("account")}>
            <UserIcon />
            <span>My NovaSIM</span>
          </button>

          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <span className="menuX">×</span> : <MenuIcon />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="menuOverlay">
          <div className="menuInner">
            <span className="menuLabel">NOVASIM</span>

            <button onClick={() => go("account")}>
              <span className="menuItemIcon">
                <UserIcon />
              </span>
              <span>
                <strong>My NovaSIM</strong>
                <small>Your account and connections</small>
              </span>
              <ArrowRight />
            </button>

            <button onClick={() => go("plans")}>
              <span className="menuItemIcon">
                <GlobeIcon />
              </span>
              <span>
                <strong>eSIM Plans</strong>
                <small>Explore NovaSIM connectivity</small>
              </span>
              <ArrowRight />
            </button>

            <button onClick={() => go("loyalty")}>
              <span className="menuItemIcon">
                <GiftIcon />
              </span>
              <span>
                <strong>NovaSIM Loyalty</strong>
                <small>Exclusive savings for existing customers</small>
              </span>
              <ArrowRight />
            </button>

            <button onClick={() => go("support")}>
              <span className="menuItemIcon">
                <WhatsAppIcon />
              </span>
              <span>
                <strong>Support</strong>
                <small>Talk directly with NovaSIM support</small>
              </span>
              <ArrowRight />
            </button>

            <button onClick={() => go("terms")}>
              <span className="menuItemIcon">§</span>
              <span>
                <strong>Terms & Conditions</strong>
                <small>Legal information</small>
              </span>
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function BackButton({
  onClick,
  label = "Back",
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <button className="viewBack" onClick={onClick}>
      <ArrowLeft />
      {label}
    </button>
  );
}

function PlansView({ go }: { go: (view: View) => void }) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("home")} label="Back to home" />

      <div className="viewHeading">
        <span className="newEyebrow">ESIM PLANS</span>
        <h1>
          Choose your
          <br />
          <span>connection.</span>
        </h1>
        <p>
          Three ways to stay connected with NovaSIM. Choose the option that
          matches how you travel and how much data you need.
        </p>
      </div>

      <div className="mainCategoryGrid">
        <button className="mainCategory" onClick={() => go("country")}>
          <span className="mainCategoryIcon">
            <GlobeIcon />
          </span>
          <span className="mainCategoryTag">TRAVEL</span>
          <h2>eSIM by Country</h2>
          <p>Choose your destination and find the right NovaSIM eSIM.</p>
          <span className="mainCategoryAction">
            Explore destinations <ArrowRight />
          </span>
        </button>

        <button
          className="mainCategory mainCategoryFeatured"
          onClick={() => go("truck")}
        >
          <span className="mainCategoryIcon">
            <RoadIcon />
          </span>
          <span className="mainCategoryTag">ON THE ROAD</span>
          <h2>Truck Drivers & Caravans</h2>
          <p>Large-data connectivity designed for life on the road.</p>
          <span className="mainCategoryAction">
            View current plans <ArrowRight />
          </span>
        </button>

        <button className="mainCategory" onClick={() => go("multi")}>
          <span className="mainCategoryIcon">
            <CalendarIcon />
          </span>
          <span className="mainCategoryTag">LONGER CONNECTION</span>
          <h2>Multi-Month</h2>
          <p>Larger data allowances over longer periods.</p>
          <span className="mainCategoryAction">
            Explore Multi-Month <ArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
}

function TruckView({ go }: { go: (view: View) => void }) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("plans")} label="All eSIM plans" />

      <div className="viewHeading">
        <span className="newEyebrow">TRUCK DRIVERS & CARAVANS</span>
        <h1>
          Data for life
          <br />
          <span>on the road.</span>
        </h1>
        <p>
          Large-data NovaSIM plans for customers who need serious connectivity
          while travelling across Europe.
        </p>
      </div>

      <div className="realPlansGrid">
        {truckPlans.map((plan) => (
          <article
            className={`realPlan ${plan.popular ? "realPlanPopular" : ""}`}
            key={plan.data}
          >
            {plan.popular && <span className="popularBadge">POPULAR</span>}

            <span className="planDuration">{plan.duration.toUpperCase()}</span>
            <h2>{plan.data}</h2>

            <div className="planPrice">
              <strong>{plan.price}</strong>
              <span>/ 30 days</span>
            </div>

            <div className="planLine" />

            <div className="planFeatures">
              <span>✓ Data-only eSIM</span>
              <span>✓ 4G / 5G connectivity</span>
              <span>✓ Hotspot included</span>
              <span>✓ QR eSIM activation</span>
            </div>

            <button className="selectPlan" type="button">
              Select plan <ArrowRight />
            </button>

            <button className="loyaltyHint" onClick={() => go("loyalty")}>
              Existing customer?{" "}
              <strong>Save 10% with NovaSIM Loyalty</strong>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function CountryView({ go }: { go: (view: View) => void }) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("plans")} label="All eSIM plans" />

      <div className="viewHeading">
        <span className="newEyebrow">ESIM BY COUNTRY</span>
        <h1>
          Your destination.
          <br />
          <span>Your NovaSIM.</span>
        </h1>
        <p>
          Choose a destination and get connected with a NovaSIM eSIM designed
          for your trip.
        </p>
      </div>

      <div className="comingCard">
        <GlobeIcon />
        <span>DESTINATIONS</span>
        <h2>Country eSIM plans</h2>
        <p>
          The destination catalogue will be added here with the final available
          packages and pricing.
        </p>
      </div>
    </section>
  );
}

function MultiView({ go }: { go: (view: View) => void }) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("plans")} label="All eSIM plans" />

      <div className="viewHeading">
        <span className="newEyebrow">MULTI-MONTH</span>
        <h1>
          More time.
          <br />
          <span>More data.</span>
        </h1>
        <p>
          Extended NovaSIM connectivity for customers who need larger total
          data allowances over longer periods.
        </p>
      </div>

      <div className="multiPreview">
        <div>
          <span>LONGER DURATION</span>
          <strong>60 days</strong>
          <small>Extended connectivity over multiple months.</small>
        </div>

        <div>
          <span>EXTENDED DURATION</span>
          <strong>90 days</strong>
          <small>Designed for longer stays and life on the road.</small>
        </div>

        <div className="multiBig">
          <span>LARGE DATA</span>
          <strong>TB-scale options</strong>
          <small>
            Large total data allowances for customers who need serious
            connectivity over multiple months.
          </small>
        </div>
      </div>
    </section>
  );
}

function LoyaltyView({ go }: { go: (view: View) => void }) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("home")} />

      <div className="loyaltyHero">
        <span className="loyaltyGift">
          <GiftIcon />
        </span>

        <span className="newEyebrow">NOVASIM LOYALTY</span>

        <h1>
          Welcome back.
          <br />
          <span>You save 10%.</span>
        </h1>

        <p>
          NovaSIM Loyalty rewards existing NovaSIM customers with 10% off
          eligible plans.
        </p>

        <button className="loginLoyalty" onClick={() => go("account")}>
          Access My NovaSIM <ArrowRight />
        </button>
      </div>

      <div className="loyaltyPrices">
        {truckPlans.map((plan) => (
          <div className="loyaltyPriceCard" key={plan.data}>
            <div className="loyaltyCardTop">
              <span>{plan.data}</span>
              <span className="discountBadge">-10%</span>
            </div>

            <div className="loyaltyPriceRow">
              <del>{plan.price}</del>
              <strong>{plan.loyalty}</strong>
            </div>

            <small>NovaSIM Loyalty price</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function AccountView({ go }: { go: (view: View) => void }) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("home")} />

      <div className="accountBox">
        <span className="accountIcon">
          <UserIcon />
        </span>

        <span className="newEyebrow">MY NOVASIM</span>
        <h1>Your NovaSIM account.</h1>

        <p>
          Access your NovaSIM connections, purchases and Loyalty benefits using
          your email address.
        </p>

        <label>
          EMAIL ADDRESS
          <input
            type="email"
            placeholder="you@example.com"
            disabled
            aria-label="Email address"
          />
        </label>

        <button className="accountContinue" disabled>
          Continue with email <ArrowRight />
        </button>

        <small>Secure account access will be connected here.</small>
      </div>
    </section>
  );
}

function SupportView({ go }: { go: (view: View) => void }) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("home")} />

      <div className="viewHeading">
        <span className="newEyebrow">NOVASIM SUPPORT</span>
        <h1>
          Need help?
          <br />
          <span>Talk to us.</span>
        </h1>

        <p>
          Need help with installation, activation or your NovaSIM connection?
          Contact our technical support directly on WhatsApp.
        </p>
      </div>

      <div className="supportCard">
        <span className="supportIcon">
          <WhatsAppIcon />
        </span>

        <div className="supportCardCopy">
          <span>DIRECT SUPPORT</span>
          <h2>NovaSIM WhatsApp Support</h2>
          <p>
            Start a conversation with our support team and tell us what you
            need help with.
          </p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsappButton"
        >
          Contact us on WhatsApp <ArrowRight />
        </a>
      </div>
    </section>
  );
}

function TermsView({ go }: { go: (view: View) => void }) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("home")} />

      <div className="viewHeading">
        <span className="newEyebrow">LEGAL</span>
        <h1>
          Terms &
          <br />
          <span>Conditions.</span>
        </h1>
        <p>NovaSIM legal information and service terms.</p>
      </div>
    </section>
  );
}

function HowItWorks({ go }: { go: (view: View) => void }) {
  return (
    <section className="homeHow">
      <div className="homeHowHeading">
        <span className="newEyebrow">GET CONNECTED</span>
        <h2>
          Simple from the
          <br />
          <span>first step.</span>
        </h2>
        <p>
          Check your device, choose your NovaSIM and follow the installation
          instructions.
        </p>
      </div>

      <div className="homeHowSteps">
        <div className="homeHowStep">
          <span className="howNumber">01</span>
          <span className="howCheck">
            <CheckIcon />
          </span>
          <h3>Check compatibility</h3>
          <p>
            Dial <strong>*#06#</strong>. If your device shows an EID number, it
            supports eSIM.
          </p>
        </div>

        <div className="homeHowStep">
          <span className="howNumber">02</span>
          <span className="howCheck">
            <CheckIcon />
          </span>
          <h3>Choose your connection</h3>
          <p>
            Select the NovaSIM option that matches your destination, data needs
            and travel duration.
          </p>
        </div>

        <div className="homeHowStep">
          <span className="howNumber">03</span>
          <span className="howCheck">
            <CheckIcon />
          </span>
          <h3>Install & connect</h3>
          <p>
            Follow the eSIM installation information received after your
            purchase and get connected.
          </p>
        </div>
      </div>

      <button className="howExplore" onClick={() => go("plans")}>
        Explore NovaSIM plans <ArrowRight />
      </button>
    </section>
  );
}

function TrustBar({ go }: { go: (view: View) => void }) {
  return (
    <section className="trustBar">
      <div>
        <strong>4G / 5G</strong>
        <span>Fast mobile data</span>
      </div>

      <div>
        <strong>eSIM</strong>
        <span>Digital activation</span>
      </div>

      <div>
        <strong>HOTSPOT</strong>
        <span>Included</span>
      </div>

      <button onClick={() => go("support")}>
        <strong>SUPPORT</strong>
        <span>Direct assistance</span>
        <ArrowRight />
      </button>
    </section>
  );
}

function HomeFooter({ go }: { go: (view: View) => void }) {
  return (
    <footer className="premiumFooter">
      <div className="footerMain">
        <div className="footerIdentity">
          <button onClick={() => go("home")} className="footerBrand">
            <NovaLogo />
            <strong>NovaSIM</strong>
          </button>

          <p>
            Premium mobile connectivity
            <br />
            designed for Europe.
          </p>
        </div>

        <div className="footerLinks">
          <div>
            <span>CONNECT</span>
            <button onClick={() => go("plans")}>eSIM Plans</button>
            <button onClick={() => go("truck")}>Truck & Caravans</button>
            <button onClick={() => go("multi")}>Multi-Month</button>
          </div>

          <div>
            <span>NOVASIM</span>
            <button onClick={() => go("account")}>My NovaSIM</button>
            <button onClick={() => go("loyalty")}>NovaSIM Loyalty</button>
            <button onClick={() => go("support")}>Support</button>
          </div>

          <div>
            <span>LEGAL</span>
            <button onClick={() => go("terms")}>Terms & Conditions</button>
          </div>
        </div>
      </div>

      <div className="footerBottomNew">
        <span>© 2026 NovaSIM. All rights reserved.</span>
        <span>Stay connected.</span>
      </div>
    </footer>
  );
}

function HomeView({ go }: { go: (view: View) => void }) {
  return (
    <>
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
              <button className="primaryButton" onClick={() => go("plans")}>
                Explore eSIMs <ArrowRight />
              </button>

              <button className="secondaryButton" onClick={() => go("plans")}>
                View plans
              </button>
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

      <section className="newChoiceSection">
        <div className="newChoiceIntro">
          <span className="newEyebrow">NOVASIM CONNECTIVITY</span>

          <h2>
            Choose how you
            <br />
            <span>stay connected.</span>
          </h2>

          <p>
            Travel by country, stay connected on the road or choose a
            longer-duration NovaSIM plan.
          </p>
        </div>

        <div className="homeChoices">
          <button onClick={() => go("country")}>
            <span className="choiceNumber">01</span>
            <span className="choiceIcon">
              <GlobeIcon />
            </span>
            <small>TRAVEL</small>
            <strong>eSIM by Country</strong>
            <p>Connectivity for your destination.</p>
            <span className="choiceArrow">
              <ArrowRight />
            </span>
          </button>

          <button onClick={() => go("truck")}>
            <span className="choiceNumber">02</span>
            <span className="choiceIcon">
              <RoadIcon />
            </span>
            <small>ON THE ROAD</small>
            <strong>Truck Drivers & Caravans</strong>
            <p>Large-data plans for life on the road.</p>
            <span className="choiceArrow">
              <ArrowRight />
            </span>
          </button>

          <button onClick={() => go("multi")}>
            <span className="choiceNumber">03</span>
            <span className="choiceIcon">
              <CalendarIcon />
            </span>
            <small>LONGER CONNECTION</small>
            <strong>Multi-Month</strong>
            <p>More time and larger total data allowances.</p>
            <span className="choiceArrow">
              <ArrowRight />
            </span>
          </button>
        </div>

        <button className="loyaltyStrip" onClick={() => go("loyalty")}>
          <span className="loyaltyStripIcon">
            <GiftIcon />
          </span>

          <span className="loyaltyStripText">
            <small>EXISTING NOVASIM CUSTOMER?</small>
            <strong>NovaSIM Loyalty</strong>
            <p>Come back and save 10% on eligible NovaSIM plans.</p>
          </span>

          <span className="loyaltyTen">-10%</span>
          <ArrowRight />
        </button>
      </section>

      <HowItWorks go={go} />
      <TrustBar go={go} />
      <HomeFooter go={go} />
    </>
  );
}

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (next: View) => {
    setMenuOpen(false);
    setView(next);

    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 10);
  };

  return (
    <main className="novaApp">
      <style>{`
        .novaApp {
          min-height: 100vh;
          background: #040809;
        }

        .novaApp button {
          font-family: inherit;
        }

        .newHeader {
          width: min(calc(100% - 64px), var(--max-width));
          height: 88px;
          margin: 0 auto;
          position: relative;
          z-index: 1001;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,.055);
        }

        .newBrand,
        .footerBrand {
          padding: 0;
          border: 0;
          background: transparent;
          color: white;
          display: flex;
          align-items: center;
          gap: 9px;
          cursor: pointer;
        }

        .newBrand > span:last-child {
          font-size: 21px;
          font-weight: 900;
          letter-spacing: -.7px;
        }

        .newHeaderActions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .newAccount {
          min-height: 40px;
          padding: 0 14px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,.075);
          background: rgba(255,255,255,.02);
          color: #a2acad;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 10px;
          font-weight: 800;
        }

        .newAccount svg,
        .menuButton svg,
        .menuItemIcon svg,
        .mainCategoryIcon svg,
        .choiceIcon svg,
        .loyaltyStripIcon svg,
        .loyaltyGift svg,
        .accountIcon svg,
        .supportIcon svg,
        .comingCard svg,
        .howCheck svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .newAccount svg {
          color: var(--aqua);
          width: 15px;
          height: 15px;
        }

        .menuButton {
          width: 40px;
          height: 40px;
          padding: 0;
          border-radius: 8px;
          border: 1px solid rgba(54,201,190,.14);
          background: rgba(54,201,190,.04);
          color: var(--aqua);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .menuX {
          font-size: 22px;
        }

        .menuOverlay {
          position: absolute;
          z-index: 1000;
          top: 88px;
          left: 0;
          width: 100%;
          min-height: calc(100vh - 88px);
          background:
            radial-gradient(circle at 80% 10%,rgba(54,201,190,.065),transparent 28%),
            rgba(3,7,8,.985);
          backdrop-filter: blur(16px);
        }

        .menuInner {
          width: min(calc(100% - 64px),700px);
          margin: 0 auto;
          padding: 60px 0;
        }

        .menuLabel {
          display: block;
          margin-bottom: 18px;
          color: #465153;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .menuInner > button {
          width: 100%;
          min-height: 82px;
          padding: 14px 8px;
          border: 0;
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: transparent;
          color: white;
          display: grid;
          grid-template-columns: 44px 1fr 20px;
          align-items: center;
          gap: 14px;
          text-align: left;
          cursor: pointer;
        }

        .menuItemIcon,
        .mainCategoryIcon,
        .choiceIcon,
        .loyaltyStripIcon,
        .loyaltyGift,
        .accountIcon,
        .supportIcon,
        .howCheck {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--aqua);
          background: rgba(54,201,190,.04);
          border: 1px solid rgba(54,201,190,.11);
        }

        .menuItemIcon {
          width: 40px;
          height: 40px;
          border-radius: 9px;
        }

        .menuInner strong {
          display: block;
          font-size: 15px;
        }

        .menuInner small {
          display: block;
          margin-top: 4px;
          color: #667274;
          font-size: 9px;
        }

        .newChoiceSection,
        .homeHow,
        .trustBar,
        .premiumFooter {
          width: min(calc(100% - 64px),var(--max-width));
          margin-left: auto;
          margin-right: auto;
        }

        .newChoiceSection {
          padding: 80px 0 64px;
        }

        .newEyebrow {
          color: var(--aqua);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.6px;
        }

        .newChoiceIntro h2,
        .homeHowHeading h2 {
          margin-top: 13px;
          font-size: clamp(42px,4.7vw,62px);
          line-height: .98;
          letter-spacing: -3px;
        }

        .newChoiceIntro h2 span,
        .homeHowHeading h2 span {
          color: var(--aqua);
        }

        .newChoiceIntro > p,
        .homeHowHeading > p {
          max-width: 490px;
          margin-top: 17px;
          color: #748083;
          font-size: 12px;
          line-height: 1.65;
        }

        .homeChoices {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 10px;
        }

        .homeChoices > button {
          min-height: 240px;
          padding: 23px;
          position: relative;
          border-radius: 11px;
          border: 1px solid rgba(255,255,255,.07);
          background: #070c0d;
          color: white;
          text-align: left;
          cursor: pointer;
        }

        .choiceNumber {
          color: #3e494b;
          font-size: 8px;
          font-weight: 900;
        }

        .choiceIcon {
          position: absolute;
          right: 20px;
          top: 20px;
          width: 36px;
          height: 36px;
          border-radius: 8px;
        }

        .homeChoices small {
          display: block;
          margin-top: 48px;
          color: var(--aqua);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1.1px;
        }

        .homeChoices strong {
          display: block;
          margin-top: 8px;
          font-size: 19px;
        }

        .homeChoices p {
          margin-top: 8px;
          color: #667274;
          font-size: 10px;
        }

        .choiceArrow {
          position: absolute;
          right: 20px;
          bottom: 20px;
          color: #526063;
        }

        .loyaltyStrip {
          width: 100%;
          min-height: 112px;
          margin-top: 10px;
          padding: 20px 25px;
          border-radius: 11px;
          border: 1px solid rgba(54,201,190,.15);
          background:
            radial-gradient(circle at 82% 0%,rgba(54,201,190,.06),transparent 30%),
            #071011;
          color: white;
          display: grid;
          grid-template-columns: 48px 1fr auto 20px;
          align-items: center;
          gap: 17px;
          text-align: left;
          cursor: pointer;
        }

        .loyaltyStripIcon {
          width: 46px;
          height: 46px;
          border-radius: 10px;
        }

        .loyaltyStripText small {
          color: var(--aqua);
          font-size: 6.5px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .loyaltyStripText strong {
          display: block;
          margin-top: 5px;
          font-size: 17px;
        }

        .loyaltyStripText p {
          margin-top: 4px;
          color: #6e7a7c;
          font-size: 9px;
        }

        .loyaltyTen {
          color: var(--aqua);
          font-size: 26px;
          font-weight: 900;
        }

        .homeHow {
          padding: 68px 0;
          border-top: 1px solid rgba(255,255,255,.055);
        }

        .homeHowSteps {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 9px;
        }

        .homeHowStep {
          min-height: 190px;
          position: relative;
          padding: 22px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,.065);
          background: #070c0d;
        }

        .howNumber {
          color: #465153;
          font-size: 8px;
          font-weight: 900;
        }

        .howCheck {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 32px;
          height: 32px;
          border-radius: 8px;
        }

        .howCheck svg {
          width: 15px;
          height: 15px;
        }

        .homeHowStep h3 {
          margin-top: 45px;
          font-size: 17px;
          letter-spacing: -.5px;
        }

        .homeHowStep p {
          margin-top: 9px;
          color: #6c787a;
          font-size: 9px;
          line-height: 1.6;
        }

        .homeHowStep p strong {
          color: #dce2e2;
        }

        .howExplore {
          margin-top: 18px;
          padding: 0;
          border: 0;
          background: transparent;
          color: var(--aqua);
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 9px;
          font-weight: 900;
          cursor: pointer;
        }

        .trustBar {
          min-height: 110px;
          border-top: 1px solid rgba(255,255,255,.055);
          border-bottom: 1px solid rgba(255,255,255,.055);
          display: grid;
          grid-template-columns: repeat(4,1fr);
        }

        .trustBar > div,
        .trustBar > button {
          min-height: 110px;
          padding: 25px;
          border: 0;
          border-right: 1px solid rgba(255,255,255,.055);
          background: transparent;
          color: white;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .trustBar > button {
          position: relative;
          cursor: pointer;
        }

        .trustBar > :last-child {
          border-right: 0;
        }

        .trustBar strong {
          color: var(--aqua);
          font-size: 9px;
          letter-spacing: .8px;
        }

        .trustBar span {
          margin-top: 5px;
          color: #687476;
          font-size: 8px;
        }

        .trustBar button .inlineIcon {
          position: absolute;
          right: 22px;
          color: #596567;
        }

        .premiumFooter {
          padding: 62px 0 26px;
        }

        .footerMain {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 70px;
          padding-bottom: 52px;
        }

        .footerBrand strong {
          font-size: 21px;
        }

        .footerIdentity p {
          margin-top: 12px;
          color: #596567;
          font-size: 10px;
          line-height: 1.6;
        }

        .footerLinks {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 25px;
        }

        .footerLinks > div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
        }

        .footerLinks span {
          margin-bottom: 3px;
          color: #4e5a5c;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .footerLinks button {
          padding: 0;
          border: 0;
          background: transparent;
          color: #899496;
          font-size: 9px;
          cursor: pointer;
        }

        .footerLinks button:hover {
          color: var(--aqua);
        }

        .footerBottomNew {
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.055);
          display: flex;
          justify-content: space-between;
          color: #465153;
          font-size: 7px;
        }

        .viewPage {
          width: min(calc(100% - 64px),var(--max-width));
          min-height: calc(100vh - 88px);
          margin: 0 auto;
          padding: 48px 0 80px;
        }

        .viewBack {
          padding: 8px 0;
          border: 0;
          background: transparent;
          color: #778385;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
        }

        .viewHeading {
          max-width: 760px;
          margin-top: 58px;
        }

        .viewHeading h1,
        .loyaltyHero h1 {
          margin-top: 15px;
          font-size: clamp(48px,6vw,76px);
          line-height: .94;
          letter-spacing: -4px;
        }

        .viewHeading h1 span,
        .loyaltyHero h1 span {
          color: var(--aqua);
        }

        .viewHeading > p,
        .loyaltyHero > p {
          max-width: 550px;
          margin-top: 22px;
          color: #788486;
          font-size: 13px;
          line-height: 1.65;
        }

        .mainCategoryGrid,
        .realPlansGrid,
        .loyaltyPrices {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 10px;
        }

        .mainCategory,
        .realPlan,
        .loyaltyPriceCard,
        .comingCard,
        .multiPreview > div,
        .accountBox,
        .supportCard {
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.07);
          background: #070c0d;
        }

        .mainCategory {
          min-height: 300px;
          padding: 27px;
          color: white;
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .mainCategoryIcon {
          width: 43px;
          height: 43px;
          border-radius: 9px;
        }

        .mainCategoryTag {
          margin-top: 38px;
          color: var(--aqua);
          font-size: 7px;
          font-weight: 900;
        }

        .mainCategory h2 {
          margin-top: 9px;
          font-size: 23px;
        }

        .mainCategory p {
          margin-top: 11px;
          color: #697577;
          font-size: 10px;
        }

        .mainCategoryAction {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          color: #9ca6a7;
          font-size: 9px;
        }

        .realPlan {
          min-height: 410px;
          padding: 26px;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .realPlanPopular {
          border-color: rgba(54,201,190,.25);
        }

        .popularBadge,
        .discountBadge {
          padding: 6px 8px;
          border-radius: 5px;
          color: var(--aqua);
          border: 1px solid rgba(54,201,190,.16);
          font-size: 6px;
          font-weight: 900;
        }

        .popularBadge {
          position: absolute;
          right: 17px;
          top: 17px;
        }

        .planDuration {
          color: #566164;
          font-size: 7px;
          font-weight: 900;
        }

        .realPlan h2 {
          margin-top: 24px;
          font-size: 35px;
        }

        .planPrice {
          margin-top: 17px;
          display: flex;
          align-items: flex-end;
          gap: 6px;
        }

        .planPrice strong {
          font-size: 26px;
        }

        .planPrice span {
          color: #596567;
          font-size: 8px;
        }

        .planLine {
          height: 1px;
          margin: 23px 0;
          background: rgba(255,255,255,.055);
        }

        .planFeatures {
          display: flex;
          flex-direction: column;
          gap: 9px;
          color: #818d8f;
          font-size: 9px;
        }

        .selectPlan,
        .loginLoyalty,
        .whatsappButton {
          min-height: 45px;
          border-radius: 7px;
          border: 1px solid var(--aqua);
          background: var(--aqua);
          color: #02100f;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 9px;
          font-weight: 900;
        }

        .selectPlan {
          margin-top: auto;
          padding: 0 15px;
        }

        .loyaltyHint {
          padding: 11px 0 0;
          border: 0;
          background: transparent;
          color: #566164;
          font-size: 7px;
        }

        .loyaltyHint strong {
          color: var(--aqua);
        }

        .comingCard {
          max-width: 580px;
          min-height: 220px;
          margin-top: 45px;
          padding: 30px;
        }

        .comingCard svg {
          color: var(--aqua);
          width: 28px;
          height: 28px;
        }

        .comingCard > span {
          display: block;
          margin-top: 27px;
          color: var(--aqua);
          font-size: 7px;
        }

        .comingCard h2 {
          margin-top: 8px;
          font-size: 25px;
        }

        .comingCard p {
          margin-top: 9px;
          color: #697577;
          font-size: 10px;
        }

        .multiPreview {
          margin-top: 45px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .multiPreview > div {
          min-height: 180px;
          padding: 25px;
        }

        .multiPreview > .multiBig {
          grid-column: 1/-1;
        }

        .multiPreview span {
          color: var(--aqua);
          font-size: 7px;
          font-weight: 900;
        }

        .multiPreview strong {
          display: block;
          margin-top: 17px;
          font-size: 30px;
        }

        .multiPreview small {
          display: block;
          margin-top: 7px;
          color: #687476;
          font-size: 9px;
        }

        .loyaltyHero {
          max-width: 720px;
          margin-top: 50px;
        }

        .loyaltyGift,
        .accountIcon,
        .supportIcon {
          width: 52px;
          height: 52px;
          border-radius: 11px;
        }

        .loyaltyGift {
          margin-bottom: 24px;
        }

        .loginLoyalty {
          width: fit-content;
          margin-top: 27px;
          padding: 0 17px;
          gap: 25px;
        }

        .loyaltyPriceCard {
          min-height: 150px;
          padding: 21px;
          border-color: rgba(54,201,190,.12);
        }

        .loyaltyCardTop {
          display: flex;
          justify-content: space-between;
        }

        .loyaltyPriceRow {
          margin-top: 21px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .loyaltyPriceRow del {
          color: #596567;
          font-size: 12px;
        }

        .loyaltyPriceRow strong {
          color: var(--aqua);
          font-size: 24px;
        }

        .loyaltyPriceCard > small {
          display: block;
          margin-top: 8px;
          color: #657174;
          font-size: 7px;
        }

        .accountBox {
          width: min(100%,510px);
          margin: 55px auto 0;
          padding: 36px;
        }

        .accountBox h1 {
          margin-top: 13px;
          font-size: 34px;
        }

        .accountBox > p {
          margin-top: 12px;
          color: #758183;
          font-size: 10px;
        }

        .accountBox label {
          display: block;
          margin-top: 28px;
          color: #647072;
          font-size: 7px;
        }

        .accountBox input {
          width: 100%;
          height: 48px;
          margin-top: 8px;
          padding: 0 14px;
          border-radius: 7px;
          border: 1px solid rgba(255,255,255,.08);
          background: #050a0b;
          color: white;
        }

        .accountContinue {
          width: 100%;
          min-height: 46px;
          margin-top: 10px;
          padding: 0 14px;
          border: 0;
          border-radius: 7px;
          background: rgba(54,201,190,.28);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .accountBox > small {
          display: block;
          margin-top: 13px;
          color: #4f5b5d;
          font-size: 7px;
        }

        .supportCard {
          max-width: 760px;
          margin-top: 45px;
          padding: 28px;
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 20px;
        }

        .supportCardCopy > span {
          color: var(--aqua);
          font-size: 7px;
          font-weight: 900;
        }

        .supportCardCopy h2 {
          margin-top: 7px;
          font-size: 22px;
        }

        .supportCardCopy p {
          margin-top: 8px;
          color: #6e7a7c;
          font-size: 9px;
        }

        .whatsappButton {
          grid-column: 2;
          width: fit-content;
          margin-top: 4px;
          padding: 0 17px;
          gap: 25px;
        }

        @media (max-width:720px) {
          .newHeader {
            width: calc(100% - 28px);
            height: 74px;
          }

          .newAccount {
            width: 36px;
            height: 36px;
            min-height: 36px;
            padding: 0;
            justify-content: center;
          }

          .newAccount span {
            display: none;
          }

          .menuButton {
            width: 36px;
            height: 36px;
          }

          .menuOverlay {
            top: 74px;
          }

          .menuInner {
            width: calc(100% - 28px);
            padding: 32px 0;
          }

          .newChoiceSection,
          .homeHow,
          .trustBar,
          .premiumFooter {
            width: calc(100% - 28px);
          }

          .newChoiceSection {
            padding: 48px 0 44px;
          }

          .newChoiceIntro h2,
          .homeHowHeading h2 {
            font-size: 34px;
            letter-spacing: -1.9px;
          }

          .newChoiceIntro > p,
          .homeHowHeading > p {
            font-size: 9px;
          }

          .homeChoices,
          .homeHowSteps {
            grid-template-columns: 1fr;
          }

          .homeChoices > button {
            min-height: 155px;
            padding: 17px;
          }

          .homeChoices small {
            margin-top: 25px;
          }

          .loyaltyStrip {
            min-height: 105px;
            padding: 15px;
            grid-template-columns: 38px 1fr auto;
            gap: 11px;
          }

          .loyaltyStrip > .inlineIcon {
            display: none;
          }

          .loyaltyStripIcon {
            width: 38px;
            height: 38px;
          }

          .loyaltyTen {
            font-size: 20px;
          }

          .homeHow {
            padding: 48px 0;
          }

          .homeHowSteps {
            margin-top: 24px;
            gap: 8px;
          }

          .homeHowStep {
            min-height: 145px;
            padding: 18px;
          }

          .homeHowStep h3 {
            margin-top: 30px;
            font-size: 15px;
          }

          .homeHowStep p {
            max-width: 300px;
            font-size: 8px;
          }

          .trustBar {
            grid-template-columns: 1fr 1fr;
          }

          .trustBar > div,
          .trustBar > button {
            min-height: 88px;
            padding: 17px;
            border-bottom: 1px solid rgba(255,255,255,.055);
          }

          .trustBar > :nth-child(2) {
            border-right: 0;
          }

          .trustBar > :nth-child(3),
          .trustBar > :nth-child(4) {
            border-bottom: 0;
          }

          .premiumFooter {
            padding: 44px 0 22px;
          }

          .footerMain {
            grid-template-columns: 1fr;
            gap: 35px;
            padding-bottom: 36px;
          }

          .footerLinks {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }

          .footerBottomNew {
            gap: 20px;
          }

          .viewPage {
            width: calc(100% - 28px);
            min-height: calc(100vh - 74px);
            padding: 30px 0 55px;
          }

          .viewHeading {
            margin-top: 38px;
          }

          .viewHeading h1,
          .loyaltyHero h1 {
            font-size: 41px;
            letter-spacing: -2.5px;
          }

          .viewHeading > p,
          .loyaltyHero > p {
            font-size: 9.5px;
          }

          .mainCategoryGrid,
          .realPlansGrid,
          .loyaltyPrices {
            grid-template-columns: 1fr;
            margin-top: 30px;
          }

          .mainCategory {
            min-height: 220px;
            padding: 20px;
          }

          .realPlan {
            min-height: 360px;
            padding: 21px;
          }

          .loyaltyHero {
            margin-top: 37px;
          }

          .multiPreview {
            grid-template-columns: 1fr;
          }

          .multiPreview > .multiBig {
            grid-column: auto;
          }

          .accountBox {
            margin-top: 35px;
            padding: 25px 20px;
          }

          .supportCard {
            margin-top: 30px;
            padding: 20px;
            grid-template-columns: 42px 1fr;
            gap: 14px;
          }

          .whatsappButton {
            grid-column: 1/-1;
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>

      <AppHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        go={go}
      />

      {view === "home" && <HomeView go={go} />}
      {view === "plans" && <PlansView go={go} />}
      {view === "truck" && <TruckView go={go} />}
      {view === "country" && <CountryView go={go} />}
      {view === "multi" && <MultiView go={go} />}
      {view === "loyalty" && <LoyaltyView go={go} />}
      {view === "account" && <AccountView go={go} />}
      {view === "support" && <SupportView go={go} />}
      {view === "terms" && <TermsView go={go} />}
    </main>
  );
}
