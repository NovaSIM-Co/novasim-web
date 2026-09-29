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
    description: "Connectivity solutions built for companies and fleets.",
    href: "/business",
    icon: "▦",
  },
  {
    number: "04",
    label: "ON THE ROAD",
    title: "Truck Drivers & Caravans",
    description: "High-data connectivity designed for life on the road.",
    href: "/truck-drivers",
    icon: "→",
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

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="navbar">
        <a href="/" className="brand" aria-label="NovaSIM Home">
          <span className="brandMark">N</span>
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
      <section className="hero newHero">
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
                <span aria-hidden="true">→</span>
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
                  <div className="phoneLogo">N</div>
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

              <div className="simLogo">N</div>

              <div className="simBottom">
                <span>EUROPE</span>
                <span>5G</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="categorySection">
        <div className="categoryIntro">
          <div>
            <span className="sectionLabel">CHOOSE YOUR CONNECTION</span>

            <h2>
              What do you
              <br />
              <span>need?</span>
            </h2>
          </div>

          <p>
            Choose how you want to stay connected. Each NovaSIM solution has
            its own dedicated plans and options.
          </p>
        </div>

        <div className="categoryGrid">
          {categories.map((category) => (
            <a
              href={category.href}
              className="categoryCard"
              key={category.title}
            >
              <div className="categoryCardTop">
                <span>{category.number}</span>
                <span className="categoryIcon">{category.icon}</span>
              </div>

              <div className="categoryCardContent">
                <span className="categoryLabel">{category.label}</span>

                <h3>{category.title}</h3>

                <p>{category.description}</p>
              </div>

              <div className="categoryOpen">
                Explore
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SIMPLE PROCESS */}
      <section className="homeProcess">
        <div className="processIntro">
          <span className="sectionLabel">NOVASIM eSIM</span>

          <h2>
            Connected.
            <br />
            <span>Without the hassle.</span>
          </h2>

          <p>
            Choose your plan, install your eSIM and connect on your compatible
            device.
          </p>
        </div>

        <div className="processSteps">
          <div className="processStep">
            <span className="processNumber">01</span>
            <div>
              <strong>Choose</strong>
              <p>Find the NovaSIM option that fits your needs.</p>
            </div>
          </div>

          <div className="processStep">
            <span className="processNumber">02</span>
            <div>
              <strong>Install</strong>
              <p>Receive your eSIM and install it on your device.</p>
            </div>
          </div>

          <div className="processStep">
            <span className="processNumber">03</span>
            <div>
              <strong>Connect</strong>
              <p>Activate your eSIM and get online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS TEASER */}
      <section className="homeBusiness">
        <div className="homeBusinessGlow" />

        <div className="homeBusinessInner">
          <div>
            <span className="sectionLabel">NOVASIM BUSINESS</span>

            <h2>
              Built for more
              <br />
              than one connection.
            </h2>

            <p>
              Connectivity solutions for companies, teams and professional
              fleets across Europe.
            </p>
          </div>

          <a href="/business" className="primaryButton">
            Business & Fleets
            <span>→</span>
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="compactCta">
        <div className="ctaLogo">N</div>

        <div>
          <span>NOVASIM</span>

          <h2>
            Ready to
            <br />
            <strong>get connected?</strong>
          </h2>
        </div>

        <a href="/esim-country" className="primaryButton">
          Explore eSIMs
          <span>→</span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="support">
        <div className="footerTop">
          <a href="/" className="brand">
            <span className="brandMark">N</span>
            <span className="brandName">NovaSIM</span>
          </a>

          <p>
            Premium mobile connectivity
            <br />
            designed for Europe.
          </p>
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
