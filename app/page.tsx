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

type Language = "en" | "ro";
type DetailTab = "overview" | "features" | "more";
type PlanId = "200" | "500" | "unlimited";

const WHATSAPP_URL =
  "https://wa.me/40742387131?text=Hello%2C%20I%20need%20help%20with%20my%20NovaSIM.";

const truckPlans = [
  {
    id: "200" as PlanId,
    data: "200 GB",
    price: "€39.90",
    loyalty: "€37.91",
    duration: "30 days",
  },
  {
    id: "500" as PlanId,
    data: "500 GB",
    price: "€49.90",
    loyalty: "€47.41",
    duration: "30 days",
    popular: true,
  },
  {
    id: "unlimited" as PlanId,
    data: "UNLIMITED",
    subtitle: "750 GB FUP",
    price: "€59.90",
    loyalty: "€56.91",
    duration: "30 days",
  },
];

const multiPlans = [
  {
    cycles: "2 CYCLES",
    data: "500 GB × 2",
    total: "1 TB TOTAL",
    duration: "60 DAYS",
    regular: "€99.80",
    price: "€96.90",
  },
  {
    cycles: "3 CYCLES",
    data: "500 GB × 3",
    total: "1.5 TB TOTAL",
    duration: "90 DAYS",
    regular: "€149.70",
    price: "€144.90",
  },
];

const copy = {
  en: {
    myNova: "My NovaSIM",
    menuAccountSub: "Your NovaSIM access",
    esimPlans: "eSIM Plans",
    menuPlansSub: "Explore NovaSIM connectivity",
    loyalty: "NovaSIM Loyalty",
    menuLoyaltySub: "Savings for returning customers",
    support: "Support",
    menuSupportSub: "Talk directly with NovaSIM support",
    terms: "Terms & Conditions",
    legalInfo: "Legal information",

    back: "Back",
    backHome: "Back to home",
    allPlans: "All eSIM plans",

    plansEyebrow: "ESIM PLANS",
    plansTitle1: "Choose your",
    plansTitle2: "connection.",
    plansDescription:
      "Three ways to stay connected with NovaSIM. Choose the option that matches how you travel and how much data you need.",

    travel: "TRAVEL",
    country: "eSIM by Country",
    countryShort: "Choose your destination and find the right NovaSIM eSIM.",
    exploreDestinations: "Explore destinations",

    road: "ON THE ROAD",
    truck: "Truck Drivers & Caravans",
    truckShort: "Large-data connectivity designed for life on the road.",
    viewPlans: "View current plans",

    longer: "LONGER CONNECTION",
    multi: "Multi-Month",
    multiShort: "More data over 60 or 90 days.",
    exploreMulti: "Explore Multi-Month",

    truckEyebrow: "TRUCK DRIVERS & CARAVANS",
    truckTitle1: "Data for life",
    truckTitle2: "on the road.",
    truckDescription:
      "Large-data NovaSIM plans for customers who need serious connectivity while travelling across Europe.",
    popular: "POPULAR",
    selectPlan: "Select plan",
    planDetails: "Plan details",
    existingCustomer: "Existing customer?",
    saveLoyalty: "Save 5% with NovaSIM Loyalty",
    per30: "/ 30 days",
    fup: "750 GB FUP",

    countryEyebrow: "ESIM BY COUNTRY",
    countryTitle1: "Your destination.",
    countryTitle2: "Your NovaSIM.",
    countryDescription:
      "Choose a destination and get connected with a NovaSIM eSIM designed for your trip.",
    destinations: "DESTINATIONS",
    countryPlans: "Country eSIM plans",
    countryComing:
      "The destination catalogue will be added here with the final available packages and pricing.",

    multiEyebrow: "MULTI-MONTH",
    multiTitle1: "More time.",
    multiTitle2: "More data.",
    multiDescription:
      "Choose 500 GB per cycle for 60 or 90 days and save compared with purchasing each cycle separately.",
    totalData: "TOTAL DATA",
    regularPrice: "Regular price",
    multiPrice: "Multi-Month price",
    multiNote: "Multi-Month prices cannot be combined with other discounts.",

    loyaltyEyebrow: "NOVASIM LOYALTY",
    loyaltyTitle1: "Welcome back.",
    loyaltyTitle2: "You save 5%.",
    loyaltyDescription:
      "Enter the email address used for a previous NovaSIM purchase. Eligible returning customers unlock 5% Loyalty prices.",
    email: "EMAIL ADDRESS",
    emailPlaceholder: "you@example.com",
    unlock: "Unlock Loyalty prices",
    loyaltyDemo:
      "Customer verification will be connected to the NovaSIM order database.",
    loyaltyPrice: "NovaSIM Loyalty price",
    loyaltyRule:
      "Loyalty discount cannot be combined with other promotional offers.",
    normalPrice: "Standard price",

    accountEyebrow: "MY NOVASIM",
    accountTitle: "Your NovaSIM access.",
    accountDescription:
      "Use the email address from your previous NovaSIM purchase to access returning-customer benefits.",
    continueEmail: "Continue with email",
    secureLater: "Secure email verification will be connected here.",

    supportEyebrow: "NOVASIM SUPPORT",
    supportTitle1: "Need help?",
    supportTitle2: "Talk to us.",
    supportDescription:
      "Need help with installation, activation or your NovaSIM connection? Contact our technical support directly on WhatsApp.",
    directSupport: "DIRECT SUPPORT",
    whatsappSupport: "NovaSIM WhatsApp Support",
    whatsappCopy:
      "Start a conversation with our support team and tell us what you need help with.",
    whatsappButton: "Contact us on WhatsApp",

    legal: "LEGAL",
    termsTitle1: "Terms &",
    termsTitle2: "Conditions.",
    termsDescription: "NovaSIM legal information and service terms.",

    getConnected: "GET CONNECTED",
    simple1: "Simple from the",
    simple2: "first step.",
    simpleDescription:
      "Check your device, choose your NovaSIM and follow the installation instructions.",
    compatibility: "Check compatibility",
    compatibilityText:
      "Dial *#06#. If your device shows an EID number, it supports eSIM.",
    chooseConnection: "Choose your connection",
    chooseConnectionText:
      "Select the NovaSIM option that matches your destination, data needs and travel duration.",
    install: "Install & connect",
    installText:
      "Follow the eSIM installation information received after your purchase and get connected.",
    exploreNova: "Explore NovaSIM plans",

    fastData: "Fast mobile data",
    digitalActivation: "Digital activation",
    hotspotIncluded: "Included",
    directAssistance: "Direct assistance",

    premiumConnectivity: "PREMIUM CONNECTIVITY ACROSS EUROPE",
    hero1: "EUROPE eSIM.",
    hero2: "STAY",
    hero3: "CONNECTED.",
    hero4: "EVERYWHERE.",
    heroDescription:
      "High-speed 4G/5G mobile data across Europe. Instant eSIM activation. Hotspot included.",
    exploreEsims: "Explore eSIMs",
    instantActivation: "Instant activation",

    connectivity: "NOVASIM CONNECTIVITY",
    chooseHow1: "Choose how you",
    chooseHow2: "stay connected.",
    chooseHowDescription:
      "Travel by country, stay connected on the road or choose a longer-duration NovaSIM plan.",
    countryHome: "Connectivity for your destination.",
    truckHome: "Large-data plans for life on the road.",
    multiHome: "500 GB cycles for 60 or 90 days.",

    existingNova: "EXISTING NOVASIM CUSTOMER?",
    comeBack: "Come back and save 5% on eligible NovaSIM plans.",

    connect: "CONNECT",
    nova: "NOVASIM",
    legalFooter: "LEGAL",
    rights: "© 2026 NovaSIM. All rights reserved.",
    stayConnected: "Stay connected.",

    overview: "Overview",
    features: "Features",
    more: "More information",
    close: "Close",
    highSpeed: "High Speed Data",
    validity: "Validity",
    coverage: "Coverage",
    network: "Network",
    activation: "Activation",
    dataOnly: "Data only",
    qrActivation: "QR Code eSIM",
    hotspot: "Hotspot",
    iosAndroid: "iOS & Android",
    apn: "APN",
    automatic: "Automatic",
    countries: "countries",
    unlimitedInfo:
      "Unlimited plan with 750 GB Fair Usage Policy.",
    fupInfo:
      "750 GB Fair Usage Policy. After the high-speed allowance is used, the plan continues according to the provider's Fair Usage Policy.",
    deviceInfo:
      "NovaSIM eSIM plans can also be used with compatible eSIM modems and routers.",
  },

  ro: {
    myNova: "My NovaSIM",
    menuAccountSub: "Accesul tău NovaSIM",
    esimPlans: "Planuri eSIM",
    menuPlansSub: "Descoperă conexiunile NovaSIM",
    loyalty: "NovaSIM Loyalty",
    menuLoyaltySub: "Reduceri pentru clienții care revin",
    support: "Suport",
    menuSupportSub: "Vorbește direct cu suportul NovaSIM",
    terms: "Termeni și condiții",
    legalInfo: "Informații legale",

    back: "Înapoi",
    backHome: "Înapoi la pagina principală",
    allPlans: "Toate planurile eSIM",

    plansEyebrow: "PLANURI ESIM",
    plansTitle1: "Alege",
    plansTitle2: "conexiunea ta.",
    plansDescription:
      "Trei moduri de a rămâne conectat cu NovaSIM. Alege opțiunea potrivită călătoriei și consumului tău de date.",

    travel: "CĂLĂTORII",
    country: "eSIM după țară",
    countryShort: "Alege destinația și găsește eSIM-ul NovaSIM potrivit.",
    exploreDestinations: "Vezi destinațiile",

    road: "PE DRUM",
    truck: "Șoferi de camion & rulote",
    truckShort: "Planuri cu trafic mare de date pentru viața pe drum.",
    viewPlans: "Vezi planurile",

    longer: "CONEXIUNE PE TERMEN LUNG",
    multi: "Multi-Month",
    multiShort: "Mai multe date pentru 60 sau 90 de zile.",
    exploreMulti: "Vezi Multi-Month",

    truckEyebrow: "ȘOFERI DE CAMION & RULOTE",
    truckTitle1: "Internet pentru viața",
    truckTitle2: "pe drum.",
    truckDescription:
      "Planuri NovaSIM cu trafic mare de date pentru cei care au nevoie de conexiune serioasă în timp ce călătoresc prin Europa.",
    popular: "POPULAR",
    selectPlan: "Alege planul",
    planDetails: "Detalii plan",
    existingCustomer: "Ești deja client?",
    saveLoyalty: "Economisești 5% cu NovaSIM Loyalty",
    per30: "/ 30 zile",
    fup: "750 GB FUP",

    countryEyebrow: "ESIM DUPĂ ȚARĂ",
    countryTitle1: "Destinația ta.",
    countryTitle2: "NovaSIM-ul tău.",
    countryDescription:
      "Alege destinația și conectează-te cu un eSIM NovaSIM potrivit călătoriei tale.",
    destinations: "DESTINAȚII",
    countryPlans: "Planuri eSIM pe țări",
    countryComing:
      "Catalogul de destinații va fi adăugat aici împreună cu pachetele și prețurile finale.",

    multiEyebrow: "MULTI-MONTH",
    multiTitle1: "Mai mult timp.",
    multiTitle2: "Mai multe date.",
    multiDescription:
      "Alege 500 GB pentru fiecare ciclu, timp de 60 sau 90 de zile, la un preț mai bun decât achiziția separată a fiecărui ciclu.",
    totalData: "DATE TOTALE",
    regularPrice: "Preț normal",
    multiPrice: "Preț Multi-Month",
    multiNote: "Prețurile Multi-Month nu se cumulează cu alte reduceri.",

    loyaltyEyebrow: "NOVASIM LOYALTY",
    loyaltyTitle1: "Bine ai revenit.",
    loyaltyTitle2: "Economisești 5%.",
    loyaltyDescription:
      "Introdu adresa de email folosită la o achiziție NovaSIM anterioară. Clienții eligibili care revin deblochează prețurile Loyalty cu 5% reducere.",
    email: "ADRESĂ DE EMAIL",
    emailPlaceholder: "tu@exemplu.ro",
    unlock: "Deblochează prețurile Loyalty",
    loyaltyDemo:
      "Verificarea clientului va fi conectată la baza de date cu comenzile NovaSIM.",
    loyaltyPrice: "Preț NovaSIM Loyalty",
    loyaltyRule:
      "Reducerea Loyalty nu se cumulează cu alte oferte promoționale.",
    normalPrice: "Preț standard",

    accountEyebrow: "MY NOVASIM",
    accountTitle: "Accesul tău NovaSIM.",
    accountDescription:
      "Folosește adresa de email de la achiziția NovaSIM anterioară pentru a accesa beneficiile dedicate clienților care revin.",
    continueEmail: "Continuă cu emailul",
    secureLater: "Verificarea securizată prin email va fi conectată aici.",

    supportEyebrow: "SUPORT NOVASIM",
    supportTitle1: "Ai nevoie de ajutor?",
    supportTitle2: "Vorbește cu noi.",
    supportDescription:
      "Ai nevoie de ajutor cu instalarea, activarea sau conexiunea NovaSIM? Contactează direct suportul nostru tehnic pe WhatsApp.",
    directSupport: "SUPORT DIRECT",
    whatsappSupport: "Suport NovaSIM pe WhatsApp",
    whatsappCopy:
      "Deschide o conversație cu echipa noastră de suport și spune-ne cu ce te putem ajuta.",
    whatsappButton: "Contactează-ne pe WhatsApp",

    legal: "LEGAL",
    termsTitle1: "Termeni și",
    termsTitle2: "condiții.",
    termsDescription: "Informații legale și condițiile serviciilor NovaSIM.",

    getConnected: "CONECTEAZĂ-TE",
    simple1: "Simplu chiar de la",
    simple2: "primul pas.",
    simpleDescription:
      "Verifică dispozitivul, alege NovaSIM și urmează instrucțiunile de instalare.",
    compatibility: "Verifică compatibilitatea",
    compatibilityText:
      "Tastează *#06#. Dacă dispozitivul afișează un număr EID, acesta suportă eSIM.",
    chooseConnection: "Alege conexiunea",
    chooseConnectionText:
      "Alege opțiunea NovaSIM potrivită destinației, consumului de date și duratei călătoriei.",
    install: "Instalează și conectează-te",
    installText:
      "Urmează informațiile de instalare eSIM primite după achiziție și conectează-te.",
    exploreNova: "Vezi planurile NovaSIM",

    fastData: "Date mobile rapide",
    digitalActivation: "Activare digitală",
    hotspotIncluded: "Inclus",
    directAssistance: "Asistență directă",

    premiumConnectivity: "CONECTIVITATE PREMIUM ÎN EUROPA",
    hero1: "eSIM EUROPA.",
    hero2: "RĂMÂI",
    hero3: "CONECTAT.",
    hero4: "ORIUNDE.",
    heroDescription:
      "Date mobile 4G/5G de mare viteză în Europa. Activare rapidă eSIM. Hotspot inclus.",
    exploreEsims: "Descoperă eSIM-urile",
    instantActivation: "Activare rapidă",

    connectivity: "CONECTIVITATE NOVASIM",
    chooseHow1: "Alege cum vrei",
    chooseHow2: "să rămâi conectat.",
    chooseHowDescription:
      "Călătorește pe țări, rămâi conectat pe drum sau alege un plan NovaSIM pentru o perioadă mai lungă.",
    countryHome: "Conectivitate pentru destinația ta.",
    truckHome: "Planuri cu trafic mare pentru viața pe drum.",
    multiHome: "Cicluri de 500 GB pentru 60 sau 90 de zile.",

    existingNova: "EȘTI DEJA CLIENT NOVASIM?",
    comeBack: "Revino și economisește 5% la planurile NovaSIM eligibile.",

    connect: "CONECTARE",
    nova: "NOVASIM",
    legalFooter: "LEGAL",
    rights: "© 2026 NovaSIM. Toate drepturile rezervate.",
    stayConnected: "Rămâi conectat.",

    overview: "Prezentare",
    features: "Caracteristici",
    more: "Mai multe informații",
    close: "Închide",
    highSpeed: "Date la viteză mare",
    validity: "Valabilitate",
    coverage: "Acoperire",
    network: "Rețea",
    activation: "Activare",
    dataOnly: "Doar date",
    qrActivation: "eSIM prin cod QR",
    hotspot: "Hotspot",
    iosAndroid: "iOS & Android",
    apn: "APN",
    automatic: "Automată",
    countries: "țări",
    unlimitedInfo:
      "Plan Unlimited cu Fair Usage Policy de 750 GB.",
    fupInfo:
      "Fair Usage Policy de 750 GB. După consumarea traficului la viteză mare, planul continuă conform politicii Fair Usage a furnizorului.",
    deviceInfo:
      "Planurile eSIM NovaSIM pot fi utilizate și cu modemuri și routere eSIM compatibile.",
  },
};

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
  language,
  setLanguage,
  t,
}: any) {
  return (
    <>
      <header className="newHeader">
        <button className="newBrand" onClick={() => go("home")}>
          <NovaLogo />
          <span>NovaSIM</span>
        </button>

        <div className="newHeaderActions">
          <div className="languageSwitch">
            <button
              className={language === "en" ? "languageActive" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <span>/</span>
            <button
              className={language === "ro" ? "languageActive" : ""}
              onClick={() => setLanguage("ro")}
            >
              RO
            </button>
          </div>

          <button className="newAccount" onClick={() => go("account")}>
            <UserIcon />
            <span>{t.myNova}</span>
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
              <span className="menuItemIcon"><UserIcon /></span>
              <span>
                <strong>{t.myNova}</strong>
                <small>{t.menuAccountSub}</small>
              </span>
              <ArrowRight />
            </button>

            <button onClick={() => go("plans")}>
              <span className="menuItemIcon"><GlobeIcon /></span>
              <span>
                <strong>{t.esimPlans}</strong>
                <small>{t.menuPlansSub}</small>
              </span>
              <ArrowRight />
            </button>

            <button onClick={() => go("loyalty")}>
              <span className="menuItemIcon"><GiftIcon /></span>
              <span>
                <strong>{t.loyalty}</strong>
                <small>{t.menuLoyaltySub}</small>
              </span>
              <ArrowRight />
            </button>

            <button onClick={() => go("support")}>
              <span className="menuItemIcon"><WhatsAppIcon /></span>
              <span>
                <strong>{t.support}</strong>
                <small>{t.menuSupportSub}</small>
              </span>
              <ArrowRight />
            </button>

            <button onClick={() => go("terms")}>
              <span className="menuItemIcon">§</span>
              <span>
                <strong>{t.terms}</strong>
                <small>{t.legalInfo}</small>
              </span>
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function BackButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button className="viewBack" onClick={onClick}>
      <ArrowLeft />
      {label}
    </button>
  );
}

function PlanDetailsModal({
  plan,
  language,
  t,
  close,
}: {
  plan: PlanId;
  language: Language;
  t: any;
  close: () => void;
}) {
  const [tab, setTab] = useState<DetailTab>("overview");

  const data =
    plan === "200"
      ? {
          title: "200 GB",
          highSpeed: "200 GB",
          validity: "30 days",
          coverage: "Europe",
        }
      : plan === "500"
      ? {
          title: "500 GB",
          highSpeed: "500 GB",
          validity: "30 days",
          coverage: "36 countries",
        }
      : {
          title: "UNLIMITED",
          highSpeed: "750 GB FUP",
          validity: "30 days",
          coverage: "Europe",
        };

  return (
    <div className="modalBackdrop" onClick={close}>
      <div className="planModal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div>
            <span className="newEyebrow">NOVASIM ESIM</span>
            <h2>{data.title}</h2>
            {plan === "unlimited" && <small>{t.unlimitedInfo}</small>}
          </div>

          <button className="modalClose" onClick={close}>×</button>
        </div>

        <div className="detailTabs">
          <button
            className={tab === "overview" ? "detailTabActive" : ""}
            onClick={() => setTab("overview")}
          >
            {t.overview}
          </button>
          <button
            className={tab === "features" ? "detailTabActive" : ""}
            onClick={() => setTab("features")}
          >
            {t.features}
          </button>
          <button
            className={tab === "more" ? "detailTabActive" : ""}
            onClick={() => setTab("more")}
          >
            {t.more}
          </button>
        </div>

        <div className="detailContent">
          {tab === "overview" && (
            <div className="detailGrid">
              <div>
                <span>{t.highSpeed}</span>
                <strong>{data.highSpeed}</strong>
              </div>
              <div>
                <span>{t.validity}</span>
                <strong>{data.validity}</strong>
              </div>
              <div>
                <span>{t.network}</span>
                <strong>Vodafone · 4G / 5G</strong>
              </div>
              <div>
                <span>{t.coverage}</span>
                <strong>{data.coverage}</strong>
              </div>
            </div>
          )}

          {tab === "features" && (
            <div className="detailList">
              <span>✓ {t.dataOnly}</span>
              <span>✓ 4G / 5G</span>
              <span>✓ {t.hotspot}</span>
              <span>✓ {t.qrActivation}</span>
              <span>✓ {t.iosAndroid}</span>
              <span>✓ {t.activation}: {t.automatic}</span>
            </div>
          )}

          {tab === "more" && (
            <div className="moreInformation">
              <div>
                <span>{t.apn}</span>
                <strong>netmon.vodafone.it</strong>
              </div>

              <p>{t.deviceInfo}</p>

              {plan === "unlimited" && <p>{t.fupInfo}</p>}
            </div>
          )}
        </div>

        <button className="modalDone" onClick={close}>{t.close}</button>
      </div>
    </div>
  );
}

function PlansView({ go, t }: any) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("home")} label={t.backHome} />

      <div className="viewHeading">
        <span className="newEyebrow">{t.plansEyebrow}</span>
        <h1>{t.plansTitle1}<br /><span>{t.plansTitle2}</span></h1>
        <p>{t.plansDescription}</p>
      </div>

      <div className="mainCategoryGrid">
        <button className="mainCategory" onClick={() => go("country")}>
          <span className="mainCategoryIcon"><GlobeIcon /></span>
          <span className="mainCategoryTag">{t.travel}</span>
          <h2>{t.country}</h2>
          <p>{t.countryShort}</p>
          <span className="mainCategoryAction">
            {t.exploreDestinations} <ArrowRight />
          </span>
        </button>

        <button className="mainCategory mainCategoryFeatured" onClick={() => go("truck")}>
          <span className="mainCategoryIcon"><RoadIcon /></span>
          <span className="mainCategoryTag">{t.road}</span>
          <h2>{t.truck}</h2>
          <p>{t.truckShort}</p>
          <span className="mainCategoryAction">
            {t.viewPlans} <ArrowRight />
          </span>
        </button>

        <button className="mainCategory" onClick={() => go("multi")}>
          <span className="mainCategoryIcon"><CalendarIcon /></span>
          <span className="mainCategoryTag">{t.longer}</span>
          <h2>{t.multi}</h2>
          <p>{t.multiShort}</p>
          <span className="mainCategoryAction">
            {t.exploreMulti} <ArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
}

function TruckView({ go, t, language }: any) {
  const [detailPlan, setDetailPlan] = useState<PlanId | null>(null);

  return (
    <>
      <section className="viewPage">
        <BackButton onClick={() => go("plans")} label={t.allPlans} />

        <div className="viewHeading">
          <span className="newEyebrow">{t.truckEyebrow}</span>
          <h1>{t.truckTitle1}<br /><span>{t.truckTitle2}</span></h1>
          <p>{t.truckDescription}</p>
        </div>

        <div className="realPlansGrid">
          {truckPlans.map((plan) => (
            <article
              className={`realPlan ${plan.popular ? "realPlanPopular" : ""}`}
              key={plan.id}
            >
              {plan.popular && <span className="popularBadge">{t.popular}</span>}

              <span className="planDuration">{plan.duration.toUpperCase()}</span>

              <h2>{plan.data}</h2>
              {plan.subtitle && <span className="planSubtitle">{plan.subtitle}</span>}

              <div className="planPrice">
                <strong>{plan.price}</strong>
                <span>{t.per30}</span>
              </div>

              <div className="planLine" />

              <div className="planFeatures">
                <span>✓ {t.dataOnly}</span>
                <span>✓ 4G / 5G</span>
                <span>✓ {t.hotspot}</span>
                <span>✓ {t.qrActivation}</span>
              </div>

              <button
                className="detailsButton"
                type="button"
                onClick={() => setDetailPlan(plan.id)}
              >
                {t.planDetails} <ArrowRight />
              </button>

              <button className="selectPlan" type="button">
                {t.selectPlan} <ArrowRight />
              </button>

              <button className="loyaltyHint" onClick={() => go("loyalty")}>
                {t.existingCustomer}{" "}
                <strong>{t.saveLoyalty}</strong>
              </button>
            </article>
          ))}
        </div>
      </section>

      {detailPlan && (
        <PlanDetailsModal
          plan={detailPlan}
          language={language}
          t={t}
          close={() => setDetailPlan(null)}
        />
      )}
    </>
  );
}

function CountryView({ go, t }: any) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("plans")} label={t.allPlans} />

      <div className="viewHeading">
        <span className="newEyebrow">{t.countryEyebrow}</span>
        <h1>{t.countryTitle1}<br /><span>{t.countryTitle2}</span></h1>
        <p>{t.countryDescription}</p>
      </div>

      <div className="comingCard">
        <GlobeIcon />
        <span>{t.destinations}</span>
        <h2>{t.countryPlans}</h2>
        <p>{t.countryComing}</p>
      </div>
    </section>
  );
}

function MultiView({ go, t }: any) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("plans")} label={t.allPlans} />

      <div className="viewHeading">
        <span className="newEyebrow">{t.multiEyebrow}</span>
        <h1>{t.multiTitle1}<br /><span>{t.multiTitle2}</span></h1>
        <p>{t.multiDescription}</p>
      </div>

      <div className="multiPlansGrid">
        {multiPlans.map((plan) => (
          <article className="multiPlanCard" key={plan.duration}>
            <div className="multiPlanTop">
              <span>{plan.duration}</span>
              <small>{plan.cycles}</small>
            </div>

            <h2>{plan.data}</h2>
            <strong className="multiTotal">{plan.total}</strong>

            <div className="multiPlanDivider" />

            <div className="multiRegular">
              <span>{t.regularPrice}</span>
              <del>{plan.regular}</del>
            </div>

            <div className="multiFinal">
              <span>{t.multiPrice}</span>
              <strong>{plan.price}</strong>
            </div>

            <button className="selectPlan" type="button">
              {t.selectPlan} <ArrowRight />
            </button>
          </article>
        ))}
      </div>

      <p className="multiNote">{t.multiNote}</p>
    </section>
  );
}

function LoyaltyView({ go, t }: any) {
  const [email, setEmail] = useState("");

  return (
    <section className="viewPage">
      <BackButton onClick={() => go("home")} label={t.back} />

      <div className="loyaltyHero">
        <span className="loyaltyGift"><GiftIcon /></span>
        <span className="newEyebrow">{t.loyaltyEyebrow}</span>

        <h1>{t.loyaltyTitle1}<br /><span>{t.loyaltyTitle2}</span></h1>
        <p>{t.loyaltyDescription}</p>

        <div className="loyaltyUnlock">
          <label>
            {t.email}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={t.emailPlaceholder}
            />
          </label>

          <button type="button" disabled>
            {t.unlock} <ArrowRight />
          </button>

          <small>{t.loyaltyDemo}</small>
        </div>
      </div>

      <div className="loyaltyPrices">
        {truckPlans.map((plan) => (
          <div className="loyaltyPriceCard" key={plan.id}>
            <div className="loyaltyCardTop">
              <span>
                {plan.data}
                {plan.subtitle && <small>{plan.subtitle}</small>}
              </span>
              <span className="discountBadge">-5%</span>
            </div>

            <div className="loyaltyPriceRow">
              <del>{plan.price}</del>
              <strong>{plan.loyalty}</strong>
            </div>

            <small>{t.loyaltyPrice}</small>
          </div>
        ))}
      </div>

      <p className="loyaltyRule">{t.loyaltyRule}</p>
    </section>
  );
}

function AccountView({ go, t }: any) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("home")} label={t.back} />

      <div className="accountBox">
        <span className="accountIcon"><UserIcon /></span>
        <span className="newEyebrow">{t.accountEyebrow}</span>
        <h1>{t.accountTitle}</h1>
        <p>{t.accountDescription}</p>

        <label>
          {t.email}
          <input type="email" placeholder={t.emailPlaceholder} disabled />
        </label>

        <button className="accountContinue" disabled>
          {t.continueEmail} <ArrowRight />
        </button>

        <small>{t.secureLater}</small>
      </div>
    </section>
  );
}

function SupportView({ go, t }: any) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("home")} label={t.back} />

      <div className="viewHeading">
        <span className="newEyebrow">{t.supportEyebrow}</span>
        <h1>{t.supportTitle1}<br /><span>{t.supportTitle2}</span></h1>
        <p>{t.supportDescription}</p>
      </div>

      <div className="supportCard">
        <span className="supportIcon"><WhatsAppIcon /></span>

        <div className="supportCardCopy">
          <span>{t.directSupport}</span>
          <h2>{t.whatsappSupport}</h2>
          <p>{t.whatsappCopy}</p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsappButton"
        >
          {t.whatsappButton} <ArrowRight />
        </a>
      </div>
    </section>
  );
}

function TermsView({ go, t }: any) {
  return (
    <section className="viewPage">
      <BackButton onClick={() => go("home")} label={t.back} />
      <div className="viewHeading">
        <span className="newEyebrow">{t.legal}</span>
        <h1>{t.termsTitle1}<br /><span>{t.termsTitle2}</span></h1>
        <p>{t.termsDescription}</p>
      </div>
    </section>
  );
}

function HowItWorks({ go, t }: any) {
  return (
    <section className="homeHow">
      <div className="homeHowHeading">
        <span className="newEyebrow">{t.getConnected}</span>
        <h2>{t.simple1}<br /><span>{t.simple2}</span></h2>
        <p>{t.simpleDescription}</p>
      </div>

      <div className="homeHowSteps">
        <div className="homeHowStep">
          <span className="howNumber">01</span>
          <span className="howCheck"><CheckIcon /></span>
          <h3>{t.compatibility}</h3>
          <p>{t.compatibilityText}</p>
        </div>

        <div className="homeHowStep">
          <span className="howNumber">02</span>
          <span className="howCheck"><CheckIcon /></span>
          <h3>{t.chooseConnection}</h3>
          <p>{t.chooseConnectionText}</p>
        </div>

        <div className="homeHowStep">
          <span className="howNumber">03</span>
          <span className="howCheck"><CheckIcon /></span>
          <h3>{t.install}</h3>
          <p>{t.installText}</p>
        </div>
      </div>

      <button className="howExplore" onClick={() => go("plans")}>
        {t.exploreNova} <ArrowRight />
      </button>
    </section>
  );
}

function TrustBar({ go, t }: any) {
  return (
    <section className="trustBar">
      <div><strong>4G / 5G</strong><span>{t.fastData}</span></div>
      <div><strong>eSIM</strong><span>{t.digitalActivation}</span></div>
      <div><strong>HOTSPOT</strong><span>{t.hotspotIncluded}</span></div>
      <button onClick={() => go("support")}>
        <strong>{t.support.toUpperCase()}</strong>
        <span>{t.directAssistance}</span>
        <ArrowRight />
      </button>
    </section>
  );
}

function HomeFooter({ go, t }: any) {
  return (
    <footer className="premiumFooter">
      <div className="footerMain">
        <div className="footerIdentity">
          <button onClick={() => go("home")} className="footerBrand">
            <NovaLogo />
            <strong>NovaSIM</strong>
          </button>
          <p>Premium mobile connectivity<br />designed for Europe.</p>
        </div>

        <div className="footerLinks">
          <div>
            <span>{t.connect}</span>
            <button onClick={() => go("plans")}>{t.esimPlans}</button>
            <button onClick={() => go("truck")}>{t.truck}</button>
            <button onClick={() => go("multi")}>{t.multi}</button>
          </div>

          <div>
            <span>{t.nova}</span>
            <button onClick={() => go("account")}>{t.myNova}</button>
            <button onClick={() => go("loyalty")}>{t.loyalty}</button>
            <button onClick={() => go("support")}>{t.support}</button>
          </div>

          <div>
            <span>{t.legalFooter}</span>
            <button onClick={() => go("terms")}>{t.terms}</button>
          </div>
        </div>
      </div>

      <div className="footerBottomNew">
        <span>{t.rights}</span>
        <span>{t.stayConnected}</span>
      </div>
    </footer>
  );
}

function HomeView({ go, t }: any) {
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
              {t.premiumConnectivity}
            </div>

            <h1>
              {t.hero1}<br />
              <span>{t.hero2}</span><br />
              <span>{t.hero3}</span><br />
              {t.hero4}
            </h1>

            <p className="heroDescription">{t.heroDescription}</p>

            <div className="heroButtons">
              <button className="primaryButton" onClick={() => go("plans")}>
                {t.exploreEsims} <ArrowRight />
              </button>
              <button className="secondaryButton" onClick={() => go("plans")}>
                {t.viewPlans}
              </button>
            </div>

            <div className="heroTrust">
              <span><i>✓</i> {t.instantActivation}</span>
              <span><i>✓</i> 4G / 5G</span>
              <span><i>✓</i> Hotspot</span>
            </div>
          </div>
        </div>
      </section>

      <section className="newChoiceSection">
        <div className="newChoiceIntro">
          <span className="newEyebrow">{t.connectivity}</span>
          <h2>{t.chooseHow1}<br /><span>{t.chooseHow2}</span></h2>
          <p>{t.chooseHowDescription}</p>
        </div>

        <div className="homeChoices">
          <button onClick={() => go("country")}>
            <span className="choiceNumber">01</span>
            <span className="choiceIcon"><GlobeIcon /></span>
            <small>{t.travel}</small>
            <strong>{t.country}</strong>
            <p>{t.countryHome}</p>
            <span className="choiceArrow"><ArrowRight /></span>
          </button>

          <button onClick={() => go("truck")}>
            <span className="choiceNumber">02</span>
            <span className="choiceIcon"><RoadIcon /></span>
            <small>{t.road}</small>
            <strong>{t.truck}</strong>
            <p>{t.truckHome}</p>
            <span className="choiceArrow"><ArrowRight /></span>
          </button>

          <button onClick={() => go("multi")}>
            <span className="choiceNumber">03</span>
            <span className="choiceIcon"><CalendarIcon /></span>
            <small>{t.longer}</small>
            <strong>{t.multi}</strong>
            <p>{t.multiHome}</p>
            <span className="choiceArrow"><ArrowRight /></span>
          </button>
        </div>

        <button className="loyaltyStrip" onClick={() => go("loyalty")}>
          <span className="loyaltyStripIcon"><GiftIcon /></span>
          <span className="loyaltyStripText">
            <small>{t.existingNova}</small>
            <strong>NovaSIM Loyalty</strong>
            <p>{t.comeBack}</p>
          </span>
          <span className="loyaltyTen">-5%</span>
          <ArrowRight />
        </button>
      </section>

      <HowItWorks go={go} t={t} />
      <TrustBar go={go} t={t} />
      <HomeFooter go={go} t={t} />
    </>
  );
}

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  const t = copy[language];

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

        .languageSwitch {
          height: 40px;
          padding: 0 10px;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: #465153;
        }

        .languageSwitch button {
          padding: 0;
          border: 0;
          background: transparent;
          color: #667274;
          font-size: 9px;
          font-weight: 900;
          cursor: pointer;
        }

        .languageSwitch .languageActive {
          color: var(--aqua);
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
        .accountBox,
        .supportCard,
        .multiPlanCard {
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
          min-height: 455px;
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

        .planSubtitle {
          margin-top: 4px;
          color: var(--aqua);
          font-size: 9px;
          font-weight: 900;
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

        .detailsButton {
          min-height: 39px;
          margin-top: 20px;
          padding: 0 14px;
          border-radius: 7px;
          border: 1px solid rgba(54,201,190,.18);
          background: rgba(54,201,190,.035);
          color: var(--aqua);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 8px;
          font-weight: 900;
          cursor: pointer;
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
          margin-top: 8px;
          padding: 0 15px;
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

        .multiPlansGrid {
          margin-top: 45px;
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 10px;
        }

        .multiPlanCard {
          min-height: 365px;
          padding: 27px;
          display: flex;
          flex-direction: column;
        }

        .multiPlanTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .multiPlanTop span {
          color: var(--aqua);
          font-size: 8px;
          font-weight: 900;
        }

        .multiPlanTop small {
          color: #586466;
          font-size: 7px;
          font-weight: 900;
        }

        .multiPlanCard h2 {
          margin-top: 38px;
          font-size: 31px;
        }

        .multiTotal {
          margin-top: 7px;
          color: var(--aqua);
          font-size: 15px;
        }

        .multiPlanDivider {
          height: 1px;
          margin: 25px 0;
          background: rgba(255,255,255,.055);
        }

        .multiRegular,
        .multiFinal {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .multiRegular span,
        .multiFinal span {
          color: #687476;
          font-size: 8px;
        }

        .multiRegular del {
          color: #697577;
          font-size: 13px;
        }

        .multiFinal {
          margin-top: 12px;
        }

        .multiFinal strong {
          color: var(--aqua);
          font-size: 26px;
        }

        .multiPlanCard .selectPlan {
          margin-top: auto;
        }

        .multiNote,
        .loyaltyRule {
          margin-top: 14px;
          color: #596567;
          font-size: 8px;
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

        .loyaltyUnlock {
          max-width: 520px;
          margin-top: 28px;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid rgba(54,201,190,.12);
          background: #070c0d;
        }

        .loyaltyUnlock label {
          display: block;
          color: #687476;
          font-size: 7px;
          font-weight: 900;
        }

        .loyaltyUnlock input {
          width: 100%;
          height: 46px;
          margin-top: 8px;
          padding: 0 13px;
          border-radius: 7px;
          border: 1px solid rgba(255,255,255,.08);
          background: #040809;
          color: white;
          outline: none;
        }

        .loyaltyUnlock input:focus {
          border-color: rgba(54,201,190,.4);
        }

        .loyaltyUnlock button {
          width: 100%;
          min-height: 44px;
          margin-top: 8px;
          padding: 0 14px;
          border: 0;
          border-radius: 7px;
          background: rgba(54,201,190,.28);
          color: #03100f;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 8px;
          font-weight: 900;
        }

        .loyaltyUnlock > small {
          display: block;
          margin-top: 10px;
          color: #4f5b5d;
          font-size: 7px;
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

        .loyaltyCardTop > span:first-child small {
          display: block;
          margin-top: 4px;
          color: #657174;
          font-size: 7px;
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

        .modalBackdrop {
          position: fixed;
          z-index: 5000;
          inset: 0;
          padding: 20px;
          background: rgba(0,0,0,.78);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .planModal {
          width: min(100%,680px);
          max-height: calc(100vh - 40px);
          overflow-y: auto;
          padding: 28px;
          border-radius: 15px;
          border: 1px solid rgba(54,201,190,.18);
          background:
            radial-gradient(circle at 90% 0%,rgba(54,201,190,.07),transparent 28%),
            #070c0d;
          box-shadow: 0 30px 100px rgba(0,0,0,.55);
        }

        .modalHeader {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .modalHeader h2 {
          margin-top: 8px;
          font-size: 34px;
        }

        .modalHeader small {
          display: block;
          margin-top: 6px;
          color: #748083;
          font-size: 8px;
        }

        .modalClose {
          width: 36px;
          height: 36px;
          flex: 0 0 auto;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.025);
          color: #899496;
          font-size: 22px;
          cursor: pointer;
        }

        .detailTabs {
          margin-top: 26px;
          padding-bottom: 1px;
          border-bottom: 1px solid rgba(255,255,255,.07);
          display: grid;
          grid-template-columns: repeat(3,1fr);
        }

        .detailTabs button {
          min-height: 43px;
          border: 0;
          border-bottom: 2px solid transparent;
          background: transparent;
          color: #667274;
          font-size: 8px;
          font-weight: 900;
          cursor: pointer;
        }

        .detailTabs .detailTabActive {
          color: var(--aqua);
          border-bottom-color: var(--aqua);
        }

        .detailContent {
          min-height: 220px;
          padding: 26px 0 10px;
        }

        .detailGrid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 9px;
        }

        .detailGrid > div,
        .moreInformation > div {
          padding: 17px;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,.06);
          background: #05090a;
        }

        .detailGrid span,
        .moreInformation span {
          display: block;
          color: #596567;
          font-size: 7px;
          font-weight: 900;
        }

        .detailGrid strong,
        .moreInformation strong {
          display: block;
          margin-top: 7px;
          font-size: 13px;
        }

        .detailList {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
        }

        .detailList span {
          min-height: 48px;
          padding: 0 14px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,.06);
          background: #05090a;
          color: #8a9597;
          display: flex;
          align-items: center;
          font-size: 9px;
        }

        .moreInformation {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .moreInformation p {
          padding: 15px;
          border-radius: 8px;
          background: rgba(54,201,190,.035);
          color: #7c888a;
          font-size: 9px;
          line-height: 1.6;
        }

        .modalDone {
          width: 100%;
          min-height: 43px;
          margin-top: 10px;
          border-radius: 7px;
          border: 1px solid rgba(54,201,190,.2);
          background: rgba(54,201,190,.06);
          color: var(--aqua);
          font-size: 8px;
          font-weight: 900;
          cursor: pointer;
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

          .languageSwitch {
            height: 36px;
            padding: 0 7px;
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
          .loyaltyPrices,
          .multiPlansGrid {
            grid-template-columns: 1fr;
            margin-top: 30px;
          }

          .mainCategory {
            min-height: 220px;
            padding: 20px;
          }

          .realPlan {
            min-height: 405px;
            padding: 21px;
          }

          .loyaltyHero {
            margin-top: 37px;
          }

          .multiPlanCard {
            min-height: 330px;
            padding: 21px;
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

          .modalBackdrop {
            padding: 10px;
            align-items: flex-end;
          }

          .planModal {
            width: 100%;
            max-height: 88vh;
            padding: 21px 17px;
            border-radius: 16px 16px 10px 10px;
          }

          .modalHeader h2 {
            font-size: 28px;
          }

          .detailTabs button {
            font-size: 7px;
          }

          .detailContent {
            min-height: 235px;
            padding-top: 20px;
          }

          .detailGrid,
          .detailList {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <AppHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        go={go}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      {view === "home" && <HomeView go={go} t={t} />}
      {view === "plans" && <PlansView go={go} t={t} />}
      {view === "truck" && <TruckView go={go} t={t} language={language} />}
      {view === "country" && <CountryView go={go} t={t} />}
      {view === "multi" && <MultiView go={go} t={t} />}
      {view === "loyalty" && <LoyaltyView go={go} t={t} />}
      {view === "account" && <AccountView go={go} t={t} />}
      {view === "support" && <SupportView go={go} t={t} />}
      {view === "terms" && <TermsView go={go} t={t} />}
    </main>
  );
}
