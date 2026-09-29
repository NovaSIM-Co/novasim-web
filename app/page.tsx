export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="/" className="brand" aria-label="NovaSIM Home">
          <span className="brandMark">N</span>
          <span className="brandName">NovaSIM</span>
        </a>

        <nav className="desktopNav" aria-label="Main navigation">
          <a href="#plans">Plans</a>
          <a href="#solutions">Solutions</a>
          <a href="#coverage">Coverage</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#support">Support</a>
        </nav>

        <div className="navActions">
          <button className="languageButton" type="button">
            EN
          </button>

          <a href="#plans" className="navCta">
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
              <a href="#plans" className="primaryButton">
                Explore Plans
                <span aria-hidden="true">→</span>
              </a>

              <a href="#how-it-works" className="secondaryButton">
                How It Works
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

        <div className="scrollIndicator">
          <span />
          DISCOVER NOVASIM
        </div>
      </section>

      {/* INTRO */}
      <section className="intro section" id="solutions">
        <div className="sectionLabel">BUILT FOR MORE</div>

        <div className="sectionHeading">
          <h2>
            One connection.
            <br />
            <span>Built around you.</span>
          </h2>

          <p>
            From everyday travel to professional fleets, NovaSIM delivers
            flexible connectivity designed for the way you actually use data.
          </p>
        </div>

        <div className="solutionGrid">
          <article className="solutionCard featuredCard">
            <div className="cardTop">
              <span className="cardNumber">01</span>
              <span className="cardArrow">↗</span>
            </div>

            <div>
              <span className="cardTag">EUROPE</span>
              <h3>Europe eSIM</h3>
              <p>
                High-data connectivity across Europe with fast digital
                activation and hotspot support.
              </p>
            </div>

            <a href="#plans">Explore plans →</a>
          </article>

          <article className="solutionCard">
            <div className="cardTop">
              <span className="cardNumber">02</span>
              <span className="cardArrow">↗</span>
            </div>

            <div>
              <span className="cardTag">EXTENDED USE</span>
              <h3>Long-Term Data</h3>
              <p>
                Large-data packages designed for customers who need reliable
                connectivity for longer periods.
              </p>
            </div>

            <a href="#long-term">Discover →</a>
          </article>

          <article className="solutionCard">
            <div className="cardTop">
              <span className="cardNumber">03</span>
              <span className="cardArrow">↗</span>
            </div>

            <div>
              <span className="cardTag">PROFESSIONAL</span>
              <h3>Business & Fleets</h3>
              <p>
                Flexible connectivity solutions for companies, teams and
                professional fleets.
              </p>
            </div>

            <a href="#business">Business solutions →</a>
          </article>
        </div>
      </section>

      {/* PLANS */}
      <section className="plans section" id="plans">
        <div className="plansGlow" />

        <div className="sectionLabel">NOVASIM PLANS</div>

        <div className="sectionHeading plansHeading">
          <h2>
            Choose your
            <br />
            <span>connection.</span>
          </h2>

          <p>
            Flexible options for different data needs. Pick the plan that fits
            how you travel, work and stay connected.
          </p>
        </div>

        <div className="planGrid">
          <article className="planCard">
            <div className="planHeader">
              <span>EUROPE DATA</span>
              <span>01</span>
            </div>

            <h3>Flexible Data</h3>

            <p>
              European eSIM plans for everyday connectivity and travel.
            </p>

            <ul>
              <li>High-speed mobile data</li>
              <li>Fast eSIM activation</li>
              <li>Hotspot support</li>
              <li>European coverage</li>
            </ul>

            <a href="#" className="planButton">
              View Plans
            </a>
          </article>

          <article className="planCard highlightPlan">
            <div className="popularBadge">POPULAR</div>

            <div className="planHeader">
              <span>HIGH DATA</span>
              <span>02</span>
            </div>

            <h3>Large Data</h3>

            <p>
              Built for customers who rely heavily on mobile connectivity.
            </p>

            <ul>
              <li>Large data allowances</li>
              <li>4G / 5G connectivity</li>
              <li>Hotspot support</li>
              <li>Digital delivery</li>
            </ul>

            <a href="#" className="planButton primaryPlanButton">
              Explore Data Plans
            </a>
          </article>

          <article className="planCard">
            <div className="planHeader">
              <span>LONG TERM</span>
              <span>03</span>
            </div>

            <h3>Extended Use</h3>

            <p>
              Connectivity options designed for longer periods and bigger
              usage requirements.
            </p>

            <ul>
              <li>Extended validity options</li>
              <li>Large-data packages</li>
              <li>Simple activation</li>
              <li>Support when needed</li>
            </ul>

            <a href="#long-term" className="planButton">
              Discover
            </a>
          </article>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="coverage section" id="coverage">
        <div className="coverageContent">
          <div>
            <div className="sectionLabel">EUROPE COVERAGE</div>

            <h2>
              Cross borders.
              <br />
              <span>Keep your connection.</span>
            </h2>

            <p>
              NovaSIM is designed for people who move across Europe and need
              mobile data without constantly changing how they connect.
            </p>

            <a href="#" className="textLink">
              Explore coverage <span>→</span>
            </a>
          </div>

          <div className="coverageVisual">
            <div className="coverageRing ringOne" />
            <div className="coverageRing ringTwo" />
            <div className="coverageRing ringThree" />

            <div className="coverageCenter">
              <strong>N</strong>
              <span>CONNECTED</span>
            </div>

            <span className="coveragePoint pointOne" />
            <span className="coveragePoint pointTwo" />
            <span className="coveragePoint pointThree" />
            <span className="coveragePoint pointFour" />
            <span className="coveragePoint pointFive" />
          </div>
        </div>
      </section>

      {/* LONG TERM */}
      <section className="splitSection section" id="long-term">
        <div className="splitNumber">01</div>

        <div className="splitContent">
          <div className="sectionLabel">LONG-TERM CONNECTIVITY</div>

          <h2>
            More data.
            <br />
            <span>More time.</span>
          </h2>

          <p>
            For customers who need more than a short travel plan. NovaSIM
            long-term options are built around larger data requirements and
            extended usage.
          </p>

          <a href="#" className="primaryButton">
            Explore Long-Term
            <span>→</span>
          </a>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="business section" id="business">
        <div className="businessGrid">
          <div className="businessCopy">
            <div className="sectionLabel">NOVASIM BUSINESS</div>

            <h2>
              Connectivity that
              <br />
              <span>moves with your business.</span>
            </h2>

            <p>
              Solutions for companies, teams and fleets that need scalable
              mobile connectivity across Europe.
            </p>

            <a href="#" className="primaryButton">
              Business & Fleets
              <span>→</span>
            </a>
          </div>

          <div className="businessPanel">
            <div className="businessPanelTop">
              <span>BUSINESS CONNECTIVITY</span>
              <span className="liveStatus">
                <i />
                ONLINE
              </span>
            </div>

            <div className="businessStat">
              <small>SOLUTIONS</small>
              <strong>Built to scale.</strong>
            </div>

            <div className="businessLines">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="businessFeatures">
              <span>Companies</span>
              <span>Professional fleets</span>
              <span>Custom requirements</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how section" id="how-it-works">
        <div className="sectionLabel">SIMPLE BY DESIGN</div>

        <div className="sectionHeading">
          <h2>
            Connected in
            <br />
            <span>three steps.</span>
          </h2>

          <p>
            No physical delivery required for eSIM. Choose your connectivity,
            receive your eSIM and activate it on your compatible device.
          </p>
        </div>

        <div className="steps">
          <article>
            <span>01</span>
            <div className="stepIcon">＋</div>
            <h3>Choose</h3>
            <p>Select the connectivity option that fits your needs.</p>
          </article>

          <article>
            <span>02</span>
            <div className="stepIcon">QR</div>
            <h3>Install</h3>
            <p>Receive your eSIM details and install it on your device.</p>
          </article>

          <article>
            <span>03</span>
            <div className="stepIcon">✓</div>
            <h3>Connect</h3>
            <p>Activate your eSIM and get online.</p>
          </article>
        </div>
      </section>

      {/* OTHER SOLUTIONS */}
      <section className="otherSolutions section">
        <div className="sectionLabel">MORE FROM NOVASIM</div>

        <div className="otherGrid">
          <article className="wideCard">
            <span>BY DESTINATION</span>
            <h3>eSIM by Country</h3>
            <p>
              Find connectivity based on where you are going and choose the
              option that fits your destination.
            </p>
            <a href="#">Explore countries →</a>
          </article>

          <article className="wideCard">
            <span>PHYSICAL CONNECTIVITY</span>
            <h3>Physical SIM</h3>
            <p>
              For customers who need a physical SIM instead of digital eSIM
              activation.
            </p>
            <a href="#">Learn more →</a>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="finalCta">
        <div className="ctaGlow" />

        <div className="ctaLogo">N</div>

        <p>NOVASIM</p>

        <h2>
          Your connection.
          <br />
          <span>Wherever you go.</span>
        </h2>

        <p className="ctaDescription">
          Explore NovaSIM connectivity and find the option built for you.
        </p>

        <a href="#plans" className="primaryButton">
          Explore NovaSIM
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
            <a href="#plans">eSIM Plans</a>
            <a href="#long-term">Long-Term Data</a>
            <a href="#coverage">Europe Coverage</a>
            <a href="#">eSIM by Country</a>
          </div>

          <div>
            <strong>BUSINESS</strong>
            <a href="#business">Business & Fleets</a>
            <a href="#">Physical SIM</a>
          </div>

          <div>
            <strong>HELP</strong>
            <a href="#how-it-works">How It Works</a>
            <a href="#">FAQ</a>
            <a href="#">Support</a>
          </div>

          <div>
            <strong>NOVASIM</strong>
            <a href="#">Why NovaSIM</a>
            <a href="#">Reviews</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 NovaSIM. All rights reserved.</span>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
