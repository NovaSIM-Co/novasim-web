const categories = [
  {
    number: "01",
    label: "TRAVEL",
    title: "eSIM by Country",
    description: "Choose your destination and find the right eSIM.",
    href: "/esim-country",
    icon: "◎",
  },
  {
    number: "02",
    label: "EXTENDED USE",
    title: "Multi-Month",
    description: "Large-data connectivity for longer periods.",
    href: "/multi-month",
    icon: "∞",
  },
  {
    number: "03",
    label: "PROFESSIONAL",
    title: "Business & Fleets",
    description: "Connectivity solutions for companies and fleets.",
    href: "/business",
    icon: "▦",
  },
  {
    number: "04",
    label: "ON THE ROAD",
    title: "Truck Drivers & Caravans",
    description: "High-data connectivity for life on the road.",
    href: "/truck-drivers",
    icon: "↗",
  },
  {
    number: "05",
    label: "PHYSICAL CONNECTIVITY",
    title: "Physical SIM",
    description: "Physical SIM options for compatible devices.",
    href: "/physical-sim",
    icon: "▣",
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

export default function Home() {
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
                <span>→</span>
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

      {/* SOLUTION NAVIGATION */}
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
                <span className="categoryIcon">{category.icon}</span>
              </div>

              <div className="categoryContent">
                <span className="categoryLabel">{category.label}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

              <span className="categoryArrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="homeProcess">
        <div className="processIntro">
          <span className="sectionLabel">HOW IT WORKS</span>

          <h2>
            Three steps.
            <br />
            <span>You're connected.</span>
          </h2>

          <p>
            A simple digital setup designed to get you connected quickly.
          </p>
        </div>

        <div className="processSteps">
          <div className="processStep">
            <span className="processNumber">01</span>

            <div>
              <strong>Choose</strong>
              <p>Select the NovaSIM option that fits your needs.</p>
            </div>

            <span className="stepIcon">↗</span>
          </div>

          <div className="processStep">
            <span className="processNumber">02</span>

            <div>
              <strong>Install</strong>
              <p>Receive your eSIM and install it on your device.</p>
            </div>

            <span className="stepIcon">＋</span>
          </div>

          <div className="processStep">
            <span className="processNumber">03</span>

            <div>
              <strong>Connect</strong>
              <p>Activate your eSIM and get online.</p>
            </div>

            <span className="stepIcon">✓</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="compactCta">
        <div className="ctaGlow" />

        <div className="ctaInner">
          <NovaLogo />

          <div className="ctaCopy">
            <span className="sectionLabel">NOVASIM</span>

            <h2>
              Europe is waiting.
              <br />
              <strong>Stay connected.</strong>
            </h2>

            <p>
              Find the NovaSIM connectivity option built for the way you
              travel, work or live on the road.
            </p>
          </div>

          <a href="/esim-country" className="primaryButton ctaButton">
            Explore NovaSIM
            <span>→</span>
          </a>
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
