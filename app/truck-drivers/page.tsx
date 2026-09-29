const plans = [
  {
    name: "200GB",
    data: "200 GB",
    duration: "30 DAYS",
    price: "€39.90",
    description:
      "A flexible data plan for drivers who need reliable connectivity across Europe.",
  },
  {
    name: "500GB",
    data: "500 GB",
    duration: "30 DAYS",
    price: "€54.90",
    description:
      "More data for everyday use on the road, streaming, navigation and hotspot.",
    featured: true,
  },
  {
    name: "750GB FUP",
    data: "750 GB FUP",
    duration: "30 DAYS",
    price: "€64.90",
    description:
      "Our largest current data option for heavy connectivity needs on the road.",
  },
];

function ArrowLeft() {
  return (
    <svg className="tdInlineIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 12H5" />
      <path d="m10 17-5-5 5-5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="tdInlineIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 17v2" />
      <path d="M9.5 13v6" />
      <path d="M14 9v10" />
      <path d="M18.5 5v14" />
    </svg>
  );
}

function HotspotIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="17" r="1" />
      <path d="M8.5 13.5a5 5 0 0 1 7 0" />
      <path d="M5.5 10.5a9 9 0 0 1 13 0" />
    </svg>
  );
}

function SimIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h7l4 4v14H7z" />
      <rect x="9.5" y="11" width="6" height="6" rx="1" />
    </svg>
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

export default function TruckDriversPage() {
  return (
    <main className="tdPage">
      <style>{`
        .tdPage {
          --td-bg: #040809;
          --td-surface: #070c0d;
          --td-text: #f5f7f7;
          --td-muted: #748083;
          --td-aqua: #24d8c8;
          --td-aqua-bright: #62f3e6;

          min-height: 100vh;
          background:
            radial-gradient(circle at 80% 10%, rgba(36,216,200,.07), transparent 25%),
            #040809;
          color: var(--td-text);
        }

        .tdInlineIcon {
          width: 16px;
          height: 16px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .tdHeader {
          width: min(calc(100% - 64px), 1240px);
          height: 88px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,.055);
        }

        .tdBrand {
          font-size: 21px;
          font-weight: 900;
          letter-spacing: -.7px;
        }

        .tdBrand span {
          color: var(--td-aqua);
        }

        .tdBack {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #8b9698;
          font-size: 12px;
          font-weight: 700;
          transition: color 160ms ease;
        }

        .tdBack:hover {
          color: var(--td-aqua);
        }

        .tdHero {
          width: min(calc(100% - 64px), 1240px);
          margin: 0 auto;
          padding: 92px 0 72px;
          position: relative;
        }

        .tdLabel {
          color: var(--td-aqua);
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 1.7px;
        }

        .tdHero h1 {
          max-width: 900px;
          margin-top: 18px;
          font-size: clamp(55px, 7vw, 92px);
          line-height: .92;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .tdHero h1 span {
          color: var(--td-aqua);
        }

        .tdHeroText {
          max-width: 610px;
          margin-top: 28px;
          color: #829092;
          font-size: 16px;
          line-height: 1.65;
        }

        .tdBenefits {
          margin-top: 38px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tdBenefit {
          min-height: 43px;
          padding: 0 15px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(255,255,255,.075);
          border-radius: 8px;
          background: rgba(255,255,255,.018);
          color: #a1acad;
          font-size: 11px;
          font-weight: 700;
        }

        .tdBenefit svg {
          width: 16px;
          height: 16px;
          fill: none;
          stroke: var(--td-aqua);
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .tdPlansSection {
          border-top: 1px solid rgba(255,255,255,.055);
          background:
            radial-gradient(circle at 50% 0%, rgba(36,216,200,.035), transparent 30%),
            #030708;
          padding: 70px 0 90px;
        }

        .tdPlansInner {
          width: min(calc(100% - 64px), 1240px);
          margin: 0 auto;
        }

        .tdPlansHeading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 40px;
          margin-bottom: 35px;
        }

        .tdPlansHeading h2 {
          margin-top: 12px;
          font-size: clamp(36px, 4vw, 52px);
          line-height: 1;
          letter-spacing: -2.5px;
        }

        .tdPlansHeading p {
          max-width: 400px;
          color: #707c7e;
          font-size: 12px;
          line-height: 1.65;
        }

        .tdPlansGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .tdPlan {
          min-height: 390px;
          padding: 28px;
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.07);
          background:
            radial-gradient(circle at 100% 0%, rgba(36,216,200,.035), transparent 35%),
            var(--td-surface);
          display: flex;
          flex-direction: column;
        }

        .tdPlanFeatured {
          border-color: rgba(36,216,200,.32);
          box-shadow: 0 0 35px rgba(36,216,200,.055);
        }

        .tdPopular {
          position: absolute;
          right: 18px;
          top: 18px;
          padding: 7px 9px;
          border-radius: 6px;
          background: rgba(36,216,200,.09);
          border: 1px solid rgba(36,216,200,.2);
          color: var(--td-aqua);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .tdPlanDuration {
          color: #566164;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .tdPlan h3 {
          margin-top: 23px;
          font-size: 38px;
          line-height: 1;
          letter-spacing: -2px;
        }

        .tdPlanDescription {
          min-height: 58px;
          margin-top: 15px;
          color: #707c7e;
          font-size: 11px;
          line-height: 1.6;
          max-width: 290px;
        }

        .tdPrice {
          margin-top: 28px;
          display: flex;
          align-items: end;
          gap: 7px;
        }

        .tdPrice strong {
          font-size: 31px;
          letter-spacing: -1.5px;
        }

        .tdPrice span {
          color: #626e70;
          font-size: 10px;
          padding-bottom: 5px;
        }

        .tdFeatures {
          margin-top: 25px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.06);
          display: flex;
          flex-direction: column;
          gap: 10px;
          color: #899496;
          font-size: 10px;
        }

        .tdFeatures span {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tdFeatures i {
          font-style: normal;
          color: var(--td-aqua);
        }

        .tdPlanButton {
          width: 100%;
          min-height: 48px;
          margin-top: auto;
          padding: 0 16px;
          border-radius: 8px;
          border: 1px solid rgba(36,216,200,.3);
          background: rgba(36,216,200,.055);
          color: var(--td-aqua);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 900;
          cursor: default;
        }

        .tdNotice {
          margin-top: 18px;
          padding: 17px 19px;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,.055);
          background: rgba(255,255,255,.015);
          color: #626e70;
          font-size: 10px;
          line-height: 1.6;
        }

        .tdNotice strong {
          color: #a9b3b4;
        }

        .tdFooter {
          width: min(calc(100% - 64px), 1240px);
          margin: 0 auto;
          min-height: 100px;
          border-top: 1px solid rgba(255,255,255,.055);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: #465153;
          font-size: 9px;
        }

        .tdFooterLinks {
          display: flex;
          gap: 20px;
        }

        .tdFooterLinks a:hover {
          color: var(--td-aqua);
        }

        @media (max-width: 850px) {
          .tdPlansGrid {
            grid-template-columns: 1fr;
          }

          .tdPlan {
            min-height: 360px;
          }

          .tdPlansHeading {
            display: block;
          }

          .tdPlansHeading p {
            margin-top: 16px;
          }
        }

        @media (max-width: 720px) {
          .tdHeader {
            width: calc(100% - 28px);
            height: 74px;
          }

          .tdBrand {
            font-size: 18px;
          }

          .tdBack {
            font-size: 9px;
          }

          .tdHero {
            width: calc(100% - 28px);
            padding: 62px 0 48px;
          }

          .tdLabel {
            font-size: 8px;
            letter-spacing: 1.3px;
          }

          .tdHero h1 {
            margin-top: 14px;
            font-size: clamp(42px, 13vw, 57px);
            line-height: .94;
            letter-spacing: -3px;
          }

          .tdHeroText {
            max-width: 350px;
            margin-top: 20px;
            font-size: 11px;
            line-height: 1.6;
          }

          .tdBenefits {
            margin-top: 27px;
            gap: 7px;
          }

          .tdBenefit {
            min-height: 37px;
            padding: 0 11px;
            gap: 7px;
            font-size: 8px;
            border-radius: 7px;
          }

          .tdBenefit svg {
            width: 14px;
            height: 14px;
          }

          .tdPlansSection {
            padding: 48px 0 60px;
          }

          .tdPlansInner {
            width: calc(100% - 28px);
          }

          .tdPlansHeading {
            margin-bottom: 24px;
          }

          .tdPlansHeading h2 {
            margin-top: 10px;
            font-size: 34px;
            letter-spacing: -1.8px;
          }

          .tdPlansHeading p {
            max-width: 330px;
            margin-top: 13px;
            font-size: 9px;
            line-height: 1.55;
          }

          .tdPlansGrid {
            gap: 9px;
          }

          .tdPlan {
            min-height: 335px;
            padding: 21px;
            border-radius: 10px;
          }

          .tdPopular {
            right: 14px;
            top: 14px;
            font-size: 6px;
          }

          .tdPlanDuration {
            font-size: 7px;
          }

          .tdPlan h3 {
            margin-top: 18px;
            font-size: 32px;
          }

          .tdPlanDescription {
            min-height: auto;
            max-width: 310px;
            margin-top: 11px;
            font-size: 9px;
          }

          .tdPrice {
            margin-top: 21px;
          }

          .tdPrice strong {
            font-size: 27px;
          }

          .tdPrice span {
            font-size: 8px;
          }

          .tdFeatures {
            margin-top: 19px;
            padding-top: 17px;
            gap: 8px;
            font-size: 8.5px;
          }

          .tdPlanButton {
            min-height: 43px;
            margin-top: 23px;
            font-size: 9px;
          }

          .tdNotice {
            margin-top: 12px;
            padding: 14px;
            font-size: 8px;
          }

          .tdFooter {
            width: calc(100% - 28px);
            min-height: 90px;
            font-size: 7px;
          }
        }

        @media (max-width: 390px) {
          .tdHero h1 {
            font-size: 40px;
          }

          .tdFooter {
            display: block;
            padding: 28px 0;
          }

          .tdFooterLinks {
            margin-top: 12px;
          }
        }
      `}</style>

      <header className="tdHeader">
        <a href="/" className="tdBrand">
          <span>Nova</span>SIM
        </a>

        <a href="/" className="tdBack">
          <ArrowLeft />
          Back to NovaSIM
        </a>
      </header>

      <section className="tdHero">
        <span className="tdLabel">ON THE ROAD</span>

        <h1>
          Built for life
          <br />
          <span>on the road.</span>
        </h1>

        <p className="tdHeroText">
          Large-data eSIM connectivity for truck drivers, caravans and people
          who spend more time moving across Europe.
        </p>

        <div className="tdBenefits">
          <span className="tdBenefit">
            <SignalIcon />
            4G / 5G
          </span>

          <span className="tdBenefit">
            <HotspotIcon />
            Hotspot included
          </span>

          <span className="tdBenefit">
            <SimIcon />
            eSIM activation
          </span>

          <span className="tdBenefit">
            <GlobeIcon />
            Europe connectivity
          </span>
        </div>
      </section>

      <section className="tdPlansSection">
        <div className="tdPlansInner">
          <div className="tdPlansHeading">
            <div>
              <span className="tdLabel">CURRENT PLANS</span>
              <h2>Choose your data.</h2>
            </div>

            <p>
              Current NovaSIM large-data options for customers who need serious
              connectivity while travelling across Europe.
            </p>
          </div>

          <div className="tdPlansGrid">
            {plans.map((plan) => (
              <article
                className={`tdPlan ${
                  plan.featured ? "tdPlanFeatured" : ""
                }`}
                key={plan.name}
              >
                {plan.featured && (
                  <span className="tdPopular">POPULAR</span>
                )}

                <span className="tdPlanDuration">{plan.duration}</span>

                <h3>{plan.data}</h3>

                <p className="tdPlanDescription">{plan.description}</p>

                <div className="tdPrice">
                  <strong>{plan.price}</strong>
                  <span>/ 30 days</span>
                </div>

                <div className="tdFeatures">
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

                <div className="tdPlanButton">
                  <span>Checkout coming next</span>
                  <ArrowRight />
                </div>
              </article>
            ))}
          </div>

          <div className="tdNotice">
            <strong>Checkout is not connected yet.</strong> We are building and
            testing the new NovaSIM website first. The existing purchase and
            activation system will be connected after the website is fully
            ready.
          </div>
        </div>
      </section>

      <footer className="tdFooter">
        <span>© 2026 NovaSIM. All rights reserved.</span>

        <div className="tdFooterLinks">
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </footer>
    </main>
  );
}
