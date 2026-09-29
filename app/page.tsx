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
  | "support";

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
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.2 2.2 3.4 5 3.4 8S14.2 17.8 12 20" />
      <path d="M12 4c-2.2 2.2-3.4 5-3.4 8s1.2 5.8 3.4 8" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M9 20 11 4h2l2 16" />
      <path d="M12 7v2M12 12v2M12 17v2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="5.5" width="16" height="14" rx="2" />
      <path d="M8 3.5v4M16 3.5v4M4 9.5h16" />
      <path d="M8 13h3M13 13h3M8 16h3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20c.7-4 3-6 6.5-6s5.8 2 6.5 6" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="9" width="16" height="11" rx="2" />
      <path d="M3 9h18M12 9v11M12 9H8.5a2.5 2.5 0 1 1 2.1-3.8L12 9Z" />
      <path d="M12 9h3.5a2.5 2.5 0 1 0-2.1-3.8L12 9Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M5 8h14M5 16h14" />
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
            aria-label="Menu"
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
              <span className="menuItemIcon loyaltyIcon">
                <GiftIcon />
              </span>
              <span>
                <strong>NovaSIM Loyalty</strong>
                <small>Exclusive savings for existing customers</small>
              </span>
              <ArrowRight />
            </button>

            <button onClick={() => go("support")}>
              <span className="menuItemIcon">?</span>
              <span>
                <strong>Support</strong>
                <small>Get help with your NovaSIM</small>
              </span>
              <ArrowRight />
            </button>

            <a href="/terms">
              <span className="menuItemIcon">§</span>
              <span>
                <strong>Terms & Conditions</strong>
                <small>Legal information</small>
              </span>
              <ArrowRight />
            </a>
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
          <p>
            Choose your destination and find the NovaSIM plan that fits your
            trip.
          </p>
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
          <p>
            Large-data connectivity designed for customers spending more time
            on the road.
          </p>
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
          <p>
            Larger data allowances over longer periods for extended
            connectivity.
          </p>
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

      <div className="viewHeading compactHeading">
        <span className="newEyebrow">TRUCK DRIVERS & CARAVANS</span>
        <h1>
          Data for life
          <br />
          <span>on the road.</span>
        </h1>
        <p>
          Choose from our current large-data eSIM plans for connectivity across
          Europe.
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

            <button className="selectPlan">
              Select plan
              <ArrowRight />
            </button>

            <button className="loyaltyHint" onClick={() => go("loyalty")}>
              Existing customer?{" "}
              <strong>Save 10% with NovaSIM Loyalty</strong>
            </button>
          </article>
        ))}
      </div>

      <p className="checkoutNote">
        Checkout will be connected after the new NovaSIM website is fully
        completed and tested.
      </p>
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
          Country plans will appear here once the final destinations, packages
          and prices are confirmed.
        </p>
      </div>

      <div className="comingCard">
        <GlobeIcon />
        <span>COMING NEXT</span>
        <h2>Country eSIM plans</h2>
        <p>
          We will add the real destination catalogue here — no placeholder
          prices and no invented plans.
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
          Long-duration NovaSIM plans with larger total data allowances. Final
          packages and prices will be added after we finish the calculations.
        </p>
      </div>

      <div className="multiPreview">
        <div>
          <span>LONGER DURATION</span>
          <strong>60 days</strong>
          <small>Multi-cycle connectivity</small>
        </div>

        <div>
          <span>EXTENDED DURATION</span>
          <strong>90 days</strong>
          <small>Large total data allowances</small>
        </div>

        <div className="multiBig">
          <span>LARGE DATA</span>
          <strong>TB-scale</strong>
          <small>
            Options such as 1.5 TB will appear only after the final supplier
            packages are confirmed.
          </small>
        </div>
      </div>
    </section>
  );
}

function LoyaltyView({ go }: { go: (view: View) => void }) {
  return (
    <section className="viewPage loyaltyPage">
      <BackButton onClick={() => go("home")} label="Back" />

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
          NovaSIM Loyalty is reserved for existing NovaSIM customers. When the
          account system is connected, eligible customers will receive 10% off
          their next qualifying plan.
        </p>

        <button className="loginLoyalty" onClick={() => go("account")}>
          Access My NovaSIM
          <ArrowRight />
        </button>
      </div>

      <div className="loyaltyPrices">
        {truckPlans.map((plan) => (
          <div className="loyaltyPriceCard" key={plan.data}>
            <span>{plan.data}</span>

            <div>
              <del>{plan.price}</del>
              <strong>{plan.loyalty}</strong>
            </div>

            <small>-10% NovaSIM Loyalty</small>
          </div>
        ))}
      </div>

      <p className="loyaltyRule">
        Loyalty eligibility will be linked to existing customer accounts. New
        customers will not receive the Loyalty discount.
      </p>
    </section>
  );
}

function AccountView({ go }: { go: (view: View) => void }) {
  return (
    <section className="viewPage accountPage">
      <BackButton onClick={() => go("home")} label="Back" />

      <div className="accountBox">
        <span className="accountIcon">
          <UserIcon />
        </span>

        <span className="newEyebrow">MY NOVASIM</span>

        <h1>Your NovaSIM account.</h1>

        <p>
          Enter your email to access your NovaSIM connections, purchases and
          Loyalty benefits.
        </p>

        <label>
          EMAIL ADDRESS
          <input
            type="email"
            placeholder="you@example.com"
            disabled
          />
        </label>

        <button className="accountContinue" disabled>
          Continue with email
          <ArrowRight />
        </button>

        <small>
          Secure email login will be connected after the website interface is
          completed.
        </small>
      </div>
    </section>
  );
}

function SupportView({ go }: { go: (view: View) => void }) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("home")} label="Back" />

      <div className="viewHeading">
        <span className="newEyebrow">NOVASIM SUPPORT</span>
        <h1>
          Need help?
          <br />
          <span>We’re here.</span>
        </h1>

        <p>
          Support tools and direct contact options will live here in the new
          NovaSIM experience.
        </p>
      </div>

      <div className="comingCard">
        <span>SUPPORT</span>
        <h2>Technical support</h2>
        <p>
          Installation help, connection support and customer assistance will
          be available from this section.
        </p>
      </div>
    </section>
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
              <button
                className="primaryButton homeButtonReset"
                onClick={() => go("plans")}
              >
                Explore eSIMs
                <ArrowRight />
              </button>

              <button
                className="secondaryButton homeButtonReset"
                onClick={() => go("plans")}
              >
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
            <p>Come back and save 10% on your next qualifying plan.</p>
          </span>

          <span className="loyaltyTen">-10%</span>

          <ArrowRight />
        </button>
      </section>
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
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 10);
  };

  return (
    <main className="novaApp">
      <style>{`
        .novaApp {
          min-height: 100vh;
          background: #040809;
        }

        button {
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

        .newBrand {
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
        .comingCard svg {
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
          border: 1px solid rgba(36,216,200,.15);
          background: rgba(36,216,200,.045);
          color: var(--aqua);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .menuX {
          font-size: 22px;
          line-height: 1;
        }

        .menuOverlay {
          position: absolute;
          z-index: 1000;
          top: 88px;
          left: 0;
          width: 100%;
          min-height: calc(100vh - 88px);
          background:
            radial-gradient(circle at 80% 10%,rgba(36,216,200,.08),transparent 28%),
            rgba(3,7,8,.985);
          backdrop-filter: blur(16px);
          animation: menuIn .2s ease;
        }

        @keyframes menuIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .menuInner {
          width: min(calc(100% - 64px), 700px);
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

        .menuInner > button,
        .menuInner > a {
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

        .menuItemIcon {
          width: 40px;
          height: 40px;
          border-radius: 9px;
          border: 1px solid rgba(36,216,200,.12);
          background: rgba(36,216,200,.045);
          color: var(--aqua);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
        }

        .loyaltyIcon {
          color: var(--aqua-bright);
        }

        .menuInner strong {
          display: block;
          font-size: 15px;
          letter-spacing: -.3px;
        }

        .menuInner small {
          display: block;
          margin-top: 4px;
          color: #667274;
          font-size: 9px;
        }

        .menuInner .inlineIcon {
          color: #465153;
        }

        .homeButtonReset {
          font-family: inherit;
          cursor: pointer;
        }

        .newChoiceSection {
          width: min(calc(100% - 64px), var(--max-width));
          margin: 0 auto;
          padding: 80px 0 75px;
        }

        .newEyebrow {
          color: var(--aqua);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.6px;
        }

        .newChoiceIntro h2 {
          margin-top: 13px;
          font-size: clamp(42px,4.7vw,62px);
          line-height: .98;
          letter-spacing: -3px;
        }

        .newChoiceIntro h2 span {
          color: var(--aqua);
        }

        .newChoiceIntro > p {
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
          background:
            radial-gradient(circle at 100% 0%,rgba(36,216,200,.025),transparent 35%),
            #070c0d;
          color: white;
          text-align: left;
          cursor: pointer;
          transition: border-color .18s ease,transform .18s ease,background .18s ease;
        }

        .homeChoices > button:hover {
          transform: translateY(-3px);
          border-color: rgba(36,216,200,.28);
          background:
            radial-gradient(circle at 100% 0%,rgba(36,216,200,.07),transparent 40%),
            #081011;
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
          border: 1px solid rgba(36,216,200,.11);
          background: rgba(36,216,200,.045);
          color: var(--aqua);
          display: flex;
          align-items: center;
          justify-content: center;
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
          padding-right: 25px;
          font-size: 19px;
          letter-spacing: -.6px;
        }

        .homeChoices p {
          max-width: 260px;
          margin-top: 8px;
          color: #667274;
          font-size: 10px;
          line-height: 1.5;
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
          border: 1px solid rgba(36,216,200,.17);
          background:
            radial-gradient(circle at 82% 0%,rgba(36,216,200,.08),transparent 30%),
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
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--aqua);
          background: rgba(36,216,200,.07);
          border: 1px solid rgba(36,216,200,.15);
        }

        .loyaltyStripText small {
          display: block;
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
          letter-spacing: -1px;
        }

        .viewPage {
          width: min(calc(100% - 64px), var(--max-width));
          min-height: calc(100vh - 88px);
          margin: 0 auto;
          padding: 48px 0 80px;
          animation: viewIn .25s ease;
        }

        @keyframes viewIn {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: translateX(0); }
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

        .viewBack:hover {
          color: var(--aqua);
        }

        .viewHeading {
          max-width: 760px;
          margin-top: 58px;
        }

        .compactHeading {
          margin-top: 42px;
        }

        .viewHeading h1 {
          margin-top: 15px;
          font-size: clamp(48px,6vw,76px);
          line-height: .94;
          letter-spacing: -4px;
        }

        .viewHeading h1 span {
          color: var(--aqua);
        }

        .viewHeading > p {
          max-width: 550px;
          margin-top: 22px;
          color: #788486;
          font-size: 13px;
          line-height: 1.65;
        }

        .mainCategoryGrid {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 11px;
        }

        .mainCategory {
          min-height: 330px;
          padding: 27px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.07);
          background: #070c0d;
          color: white;
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .mainCategoryFeatured {
          border-color: rgba(36,216,200,.25);
          background:
            radial-gradient(circle at 100% 0%,rgba(36,216,200,.075),transparent 38%),
            #071011;
        }

        .mainCategoryIcon {
          width: 43px;
          height: 43px;
          border-radius: 9px;
          border: 1px solid rgba(36,216,200,.13);
          background: rgba(36,216,200,.05);
          color: var(--aqua);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mainCategoryTag {
          margin-top: 38px;
          color: var(--aqua);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1.1px;
        }

        .mainCategory h2 {
          margin-top: 9px;
          font-size: 23px;
          line-height: 1.05;
          letter-spacing: -.8px;
        }

        .mainCategory p {
          margin-top: 11px;
          color: #697577;
          font-size: 10px;
          line-height: 1.6;
        }

        .mainCategoryAction {
          margin-top: auto;
          padding-top: 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #9ca6a7;
          font-size: 9px;
          font-weight: 800;
        }

        .realPlansGrid {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 10px;
        }

        .realPlan {
          min-height: 410px;
          padding: 26px;
          position: relative;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.07);
          background: #070c0d;
          display: flex;
          flex-direction: column;
        }

        .realPlanPopular {
          border-color: rgba(36,216,200,.3);
          background:
            radial-gradient(circle at 100% 0%,rgba(36,216,200,.065),transparent 35%),
            #071011;
        }

        .popularBadge {
          position: absolute;
          right: 17px;
          top: 17px;
          padding: 6px 8px;
          border-radius: 5px;
          color: var(--aqua);
          border: 1px solid rgba(36,216,200,.18);
          background: rgba(36,216,200,.06);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .planDuration {
          color: #566164;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .realPlan h2 {
          margin-top: 24px;
          font-size: 35px;
          letter-spacing: -1.7px;
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
          padding-bottom: 4px;
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

        .planFeatures span::first-letter {
          color: var(--aqua);
        }

        .selectPlan {
          min-height: 45px;
          margin-top: auto;
          padding: 0 15px;
          border-radius: 7px;
          border: 1px solid var(--aqua);
          background: var(--aqua);
          color: #02100f;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 9px;
          font-weight: 900;
          cursor: pointer;
        }

        .loyaltyHint {
          padding: 11px 0 0;
          border: 0;
          background: transparent;
          color: #566164;
          font-size: 7px;
          cursor: pointer;
        }

        .loyaltyHint strong {
          color: var(--aqua);
        }

        .checkoutNote,
        .loyaltyRule {
          margin-top: 16px;
          color: #4f5b5d;
          font-size: 8px;
          line-height: 1.6;
        }

        .comingCard {
          max-width: 580px;
          min-height: 220px;
          margin-top: 45px;
          padding: 30px;
          border-radius: 12px;
          border: 1px solid rgba(36,216,200,.14);
          background:
            radial-gradient(circle at 100% 0%,rgba(36,216,200,.06),transparent 40%),
            #070c0d;
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
          font-weight: 900;
          letter-spacing: 1.1px;
        }

        .comingCard h2 {
          margin-top: 8px;
          font-size: 25px;
        }

        .comingCard p {
          max-width: 440px;
          margin-top: 9px;
          color: #697577;
          font-size: 10px;
          line-height: 1.6;
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
          border-radius: 11px;
          border: 1px solid rgba(255,255,255,.07);
          background: #070c0d;
        }

        .multiPreview > .multiBig {
          grid-column: 1 / -1;
          min-height: 150px;
          border-color: rgba(36,216,200,.16);
          background:
            radial-gradient(circle at 90% 0%,rgba(36,216,200,.07),transparent 35%),
            #071011;
        }

        .multiPreview span {
          display: block;
          color: var(--aqua);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .multiPreview strong {
          display: block;
          margin-top: 17px;
          font-size: 30px;
        }

        .multiPreview small {
          display: block;
          max-width: 400px;
          margin-top: 7px;
          color: #687476;
          font-size: 9px;
          line-height: 1.55;
        }

        .loyaltyHero {
          max-width: 720px;
          margin-top: 50px;
        }

        .loyaltyGift,
        .accountIcon {
          width: 52px;
          height: 52px;
          margin-bottom: 24px;
          border-radius: 11px;
          border: 1px solid rgba(36,216,200,.16);
          background: rgba(36,216,200,.055);
          color: var(--aqua);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loyaltyGift svg,
        .accountIcon svg {
          width: 24px;
          height: 24px;
        }

        .loyaltyHero h1 {
          margin-top: 15px;
          font-size: clamp(48px,6vw,76px);
          line-height: .94;
          letter-spacing: -4px;
        }

        .loyaltyHero h1 span {
          color: var(--aqua);
        }

        .loyaltyHero > p {
          max-width: 560px;
          margin-top: 22px;
          color: #788486;
          font-size: 12px;
          line-height: 1.7;
        }

        .loginLoyalty {
          min-height: 47px;
          margin-top: 27px;
          padding: 0 17px;
          border: 1px solid var(--aqua);
          border-radius: 7px;
          background: var(--aqua);
          color: #02100f;
          display: inline-flex;
          align-items: center;
          gap: 25px;
          font-size: 9px;
          font-weight: 900;
          cursor: pointer;
        }

        .loyaltyPrices {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 9px;
        }

        .loyaltyPriceCard {
          min-height: 145px;
          padding: 21px;
          border-radius: 10px;
          border: 1px solid rgba(36,216,200,.14);
          background: #070c0d;
        }

        .loyaltyPriceCard > span {
          color: #a9b3b4;
          font-size: 11px;
          font-weight: 800;
        }

        .loyaltyPriceCard > div {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .loyaltyPriceCard del {
          color: #596567;
          font-size: 12px;
        }

        .loyaltyPriceCard strong {
          color: var(--aqua);
          font-size: 24px;
        }

        .loyaltyPriceCard small {
          display: block;
          margin-top: 8px;
          color: #657174;
          font-size: 7px;
        }

        .accountPage {
          display: flex;
          flex-direction: column;
        }

        .accountBox {
          width: min(100%, 510px);
          margin: 55px auto 0;
          padding: 36px;
          border-radius: 13px;
          border: 1px solid rgba(36,216,200,.13);
          background:
            radial-gradient(circle at 100% 0%,rgba(36,216,200,.06),transparent 35%),
            #070c0d;
        }

        .accountBox h1 {
          margin-top: 13px;
          font-size: 34px;
          letter-spacing: -1.7px;
        }

        .accountBox > p {
          margin-top: 12px;
          color: #758183;
          font-size: 10px;
          line-height: 1.6;
        }

        .accountBox label {
          display: block;
          margin-top: 28px;
          color: #647072;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .accountBox input {
          width: 100%;
          height: 48px;
          margin-top: 8px;
          padding: 0 14px;
          border-radius: 7px;
          border: 1px solid rgba(255,255,255,.08);
          outline: none;
          background: #050a0b;
          color: white;
          font-size: 11px;
        }

        .accountContinue {
          width: 100%;
          min-height: 46px;
          margin-top: 10px;
          padding: 0 14px;
          border-radius: 7px;
          border: 0;
          background: rgba(36,216,200,.35);
          color: rgba(2,16,15,.7);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 9px;
          font-weight: 900;
        }

        .accountBox > small {
          display: block;
          margin-top: 13px;
          color: #4f5b5d;
          font-size: 7px;
          line-height: 1.5;
        }

        @media (max-width: 850px) {
          .mainCategoryGrid,
          .realPlansGrid {
            grid-template-columns: 1fr;
          }

          .mainCategory {
            min-height: 250px;
          }
        }

        @media (max-width: 720px) {
          .newHeader {
            width: calc(100% - 28px);
            height: 74px;
          }

          .newBrand > span:last-child {
            font-size: 18px;
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
            min-height: calc(100vh - 74px);
          }

          .menuInner {
            width: calc(100% - 28px);
            padding: 32px 0;
          }

          .menuInner > button,
          .menuInner > a {
            min-height: 72px;
            grid-template-columns: 39px 1fr 18px;
            gap: 11px;
          }

          .menuItemIcon {
            width: 36px;
            height: 36px;
          }

          .menuInner strong {
            font-size: 13px;
          }

          .menuInner small {
            font-size: 8px;
          }

          .newChoiceSection {
            width: calc(100% - 28px);
            padding: 48px 0 50px;
          }

          .newChoiceIntro h2 {
            font-size: 34px;
            letter-spacing: -1.9px;
          }

          .newChoiceIntro > p {
            max-width: 340px;
            font-size: 9px;
          }

          .homeChoices {
            margin-top: 24px;
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .homeChoices > button {
            min-height: 155px;
            padding: 17px;
          }

          .choiceIcon {
            right: 15px;
            top: 15px;
            width: 31px;
            height: 31px;
          }

          .choiceIcon svg {
            width: 15px;
            height: 15px;
          }

          .homeChoices small {
            margin-top: 25px;
            font-size: 6px;
          }

          .homeChoices strong {
            margin-top: 6px;
            font-size: 16px;
          }

          .homeChoices p {
            font-size: 8px;
          }

          .choiceArrow {
            right: 15px;
            bottom: 15px;
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

          .loyaltyStripText strong {
            font-size: 14px;
          }

          .loyaltyStripText p {
            max-width: 210px;
            font-size: 7px;
          }

          .loyaltyTen {
            font-size: 20px;
          }

          .viewPage {
            width: calc(100% - 28px);
            min-height: calc(100vh - 74px);
            padding: 30px 0 55px;
          }

          .viewHeading,
          .compactHeading {
            margin-top: 38px;
          }

          .viewHeading h1 {
            margin-top: 12px;
            font-size: 41px;
            line-height: .95;
            letter-spacing: -2.5px;
          }

          .viewHeading > p {
            max-width: 350px;
            margin-top: 16px;
            font-size: 9.5px;
          }

          .mainCategoryGrid {
            margin-top: 30px;
            gap: 8px;
          }

          .mainCategory {
            min-height: 220px;
            padding: 20px;
          }

          .mainCategoryTag {
            margin-top: 28px;
          }

          .mainCategory h2 {
            font-size: 19px;
          }

          .mainCategory p {
            font-size: 8.5px;
          }

          .realPlansGrid {
            margin-top: 30px;
            gap: 8px;
          }

          .realPlan {
            min-height: 360px;
            padding: 21px;
          }

          .realPlan h2 {
            font-size: 31px;
          }

          .planPrice strong {
            font-size: 24px;
          }

          .loyaltyPrices {
            grid-template-columns: 1fr;
            margin-top: 32px;
          }

          .loyaltyHero {
            margin-top: 37px;
          }

          .loyaltyHero h1 {
            font-size: 41px;
            letter-spacing: -2.5px;
          }

          .loyaltyHero > p {
            font-size: 9.5px;
          }

          .loyaltyPriceCard {
            min-height: 120px;
          }

          .multiPreview {
            grid-template-columns: 1fr;
            margin-top: 30px;
          }

          .multiPreview > .multiBig {
            grid-column: auto;
          }

          .accountBox {
            margin-top: 35px;
            padding: 25px 20px;
          }

          .accountBox h1 {
            font-size: 27px;
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
    </main>
  );
}
