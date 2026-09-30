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

const COUNTRIES = [
  "Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Faroe Islands",
  "Finland",
  "France",
  "French Caribbean",
  "French Guiana",
  "Germany",
  "Gibraltar",
  "Greece",
  "Guernsey",
  "Hungary",
  "Iceland",
  "Ireland",
  "Isle of Man",
  "Italy",
  "Jersey",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Monaco",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Reunion",
  "Romania",
  "Slovak Republic",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Kingdom",
];

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
    esimPlans: "eSIM Plans",
    loyalty: "NovaSIM Loyalty",
    support: "Support",
    terms: "Terms & Conditions",
    back: "Back",
    backHome: "Back to home",
    allPlans: "All eSIM plans",

    menuAccountSub: "Your NovaSIM access",
    menuPlansSub: "Explore NovaSIM connectivity",
    menuLoyaltySub: "Savings for returning customers",
    menuSupportSub: "Talk directly with NovaSIM support",
    legalInfo: "Legal information",

    heroEyebrow: "PREMIUM CONNECTIVITY ACROSS EUROPE",
    hero1: "EUROPE eSIM.",
    hero2: "STAY",
    hero3: "CONNECTED.",
    hero4: "EVERYWHERE.",
    heroText:
      "High-speed 4G/5G mobile data across Europe. Instant eSIM activation. Hotspot included.",
    explore: "Explore eSIMs",

    plansEyebrow: "ESIM PLANS",
    plansTitle1: "Choose your",
    plansTitle2: "connection.",
    plansDescription:
      "Choose the NovaSIM connection that matches how you travel and how much data you need.",

    travel: "TRAVEL",
    country: "eSIM by Country",
    countryShort: "Choose your destination and find the right NovaSIM eSIM.",

    road: "ON THE ROAD",
    truck: "Truck Drivers & Caravans",
    truckShort: "Large-data connectivity designed for life on the road.",

    longer: "LONGER CONNECTION",
    multi: "Multi-Month",
    multiShort: "500 GB cycles for 60 or 90 days.",

    truckEyebrow: "TRUCK DRIVERS & CARAVANS",
    truckTitle1: "Data for life",
    truckTitle2: "on the road.",
    truckDescription:
      "Large-data NovaSIM plans for customers who need serious connectivity while travelling across Europe.",

    popular: "POPULAR",
    planDetails: "Plan details",
    selectPlan: "Select plan",
    existingCustomer: "Existing customer?",
    loyaltySave: "Save 5% with NovaSIM Loyalty",

    overview: "Overview",
    features: "Features",
    more: "More information",
    close: "Close",

    highSpeed: "High Speed Data",
    validity: "Validity",
    planType: "Plan type",
    data: "Data",
    callsText: "Calls & Text",
    notAvailable: "N/A",
    network: "Network",
    operator: "Operator",
    networkType: "Network Type",
    activation: "Activation",
    automaticActivation: "Automatic activation",
    activationMethod: "Activation Method",
    qrCode: "QR Code",
    hotspot: "Hotspot",
    hotspotValue: "Share your connection",
    compatibility: "Compatibility",
    compatibilityValue: "eSIM enabled devices",
    deviceSupport: "Device Support",
    roaming: "Plan Coverage",
    roamingValue: "Roaming",
    validFrom: "Valid From",
    validFromValue: "Begins upon purchase",
    internationalCalls: "International Calls",
    coverage: "Supported destinations",
    countriesAvailable: "Supported destinations",

    packageDetails: "Package details",
    operatesNetworks: "Operates on the Multi-Networks in Europe.",
    startsImmediately: "Validity starts immediately after purchase.",
    internetRequired:
      "Internet connectivity is required for eSIM activation.",
    usageRestrictions:
      "Supports use in the listed destinations. Make sure the APN is set correctly.",
    customerSupport:
      "NovaSIM customer support is available if you need help with installation or connection.",

    apnTitle: "Internet settings (APN)",
    apnIntro:
      "If mobile data does not start automatically after installation, check the APN settings below.",
    apnImportant:
      "Important: the APN must be entered exactly as shown below.",
    apnSteps:
      "Open Mobile Data / Cellular settings → select the NovaSIM eSIM → Mobile Data Network / APN → enter:",
    roamingTitle: "Data Roaming",
    roamingText:
      "Make sure Data Roaming is enabled for the NovaSIM eSIM.",

    fupInfo: "750 GB Fair Usage Policy.",

    countryEyebrow: "ESIM BY COUNTRY",
    countryTitle1: "Your destination.",
    countryTitle2: "Your NovaSIM.",
    countryDescription:
      "Choose a destination and get connected with a NovaSIM eSIM designed for your trip.",
    coming:
      "The destination catalogue will be added here with the final available packages and pricing.",

    multiEyebrow: "MULTI-MONTH",
    multiTitle1: "More time.",
    multiTitle2: "More data.",
    multiDescription:
      "Choose 500 GB per cycle for 60 or 90 days.",
    regularPrice: "Regular price",
    multiPrice: "Multi-Month price",
    multiNote:
      "Multi-Month prices cannot be combined with other discounts.",

    loyaltyEyebrow: "NOVASIM LOYALTY",
    loyaltyTitle1: "Welcome back.",
    loyaltyTitle2: "You save 5%.",
    loyaltyDescription:
      "Enter the same email address used for your previous NovaSIM purchase.",
    email: "EMAIL ADDRESS",
    emailPlaceholder: "you@example.com",
    unlock: "Unlock Loyalty prices",
    loyaltyDemo:
      "Customer verification will be connected to the NovaSIM order database.",
    loyaltyPrice: "NovaSIM Loyalty price",
    loyaltyRule:
      "Loyalty discount cannot be combined with other promotional offers.",

    accountEyebrow: "MY NOVASIM",
    accountTitle: "Your NovaSIM access.",
    accountDescription:
      "Use the email address from your previous NovaSIM purchase.",
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
    termsDescription:
      "Important information about NovaSIM digital services, compatibility, activation, refunds and customer responsibilities.",

    legalCompatibility: "Device compatibility",
    legalCompatibilityText:
      "Before purchasing, the customer is responsible for checking that the device supports eSIM, is network-unlocked and can use the required mobile network settings. Dial *#06# and check whether an EID is displayed. For modems or routers, compatibility must be checked with the device manufacturer or specifications before purchase.",

    legalDigital: "Digital product & activation",
    legalDigitalText:
      "NovaSIM eSIM plans are digital products. The eSIM and activation information are delivered electronically. The customer must have an internet connection available to install and activate the eSIM.",

    legalRefund: "Refund eligibility",
    legalRefundText:
      "A refund is not available where the service cannot be used because the customer's device is incompatible, network-locked, incorrectly configured, does not support eSIM, or because the customer did not check compatibility before purchase. This does not limit any mandatory rights that apply under applicable consumer law.",

    legalConfig: "APN & device configuration",
    legalConfigText:
      "The customer is responsible for following the installation instructions, enabling Data Roaming where required and entering the APN exactly as provided by NovaSIM. Incorrect device or APN configuration is not a service failure.",

    legalCoverage: "Coverage & network availability",
    legalCoverageText:
      "Mobile coverage, signal quality, 4G/5G availability and network speed depend on local partner networks, location, device capability, congestion and other technical conditions. Availability may therefore vary by location.",

    legalUsage: "Service use",
    legalUsageText:
      "Plans may only be used in supported destinations and in accordance with the technical conditions and Fair Usage Policy applicable to the selected plan.",

    legalSupport: "Support before requesting a refund",
    legalSupportText:
      "If a connection problem occurs, the customer should contact NovaSIM support and allow reasonable troubleshooting of installation, APN, roaming and device settings before the service is considered unusable.",

    legalNote:
      "These terms are intended to clearly explain the service conditions and do not exclude or restrict statutory consumer rights that cannot legally be waived.",

    howEyebrow: "GET CONNECTED",
    howTitle1: "Start with",
    howTitle2: "compatibility.",
    howText:
      "Before buying, make sure your device supports eSIM and is network-unlocked.",
    checkCompatibility: "Check compatibility",
    checkText:
      "Dial *#06#. If your phone shows an EID number, it supports eSIM. For a modem or router, check its technical specifications for eSIM support.",
    seeTerms: "Compatibility & refund policy",

    fastData: "Fast mobile data",
    digitalActivation: "Digital activation",
    included: "Included",
    directAssistance: "Direct assistance",

    connect: "CONNECT",
    nova: "NOVASIM",
    legalFooter: "LEGAL",
    rights: "© 2026 NovaSIM. All rights reserved.",
    stayConnected: "Stay connected.",
  },

  ro: {
    myNova: "My NovaSIM",
    esimPlans: "Planuri eSIM",
    loyalty: "NovaSIM Loyalty",
    support: "Suport",
    terms: "Termeni și condiții",
    back: "Înapoi",
    backHome: "Înapoi la pagina principală",
    allPlans: "Toate planurile eSIM",

    menuAccountSub: "Accesul tău NovaSIM",
    menuPlansSub: "Descoperă conexiunile NovaSIM",
    menuLoyaltySub: "Reduceri pentru clienții care revin",
    menuSupportSub: "Vorbește direct cu suportul NovaSIM",
    legalInfo: "Informații legale",

    heroEyebrow: "CONECTIVITATE PREMIUM ÎN EUROPA",
    hero1: "eSIM EUROPA.",
    hero2: "RĂMÂI",
    hero3: "CONECTAT.",
    hero4: "ORIUNDE.",
    heroText:
      "Date mobile 4G/5G de mare viteză în Europa. Activare rapidă eSIM. Hotspot inclus.",
    explore: "Descoperă eSIM-urile",

    plansEyebrow: "PLANURI ESIM",
    plansTitle1: "Alege",
    plansTitle2: "conexiunea ta.",
    plansDescription:
      "Alege conexiunea NovaSIM potrivită modului în care călătorești și consumului tău de date.",

    travel: "CĂLĂTORII",
    country: "eSIM după țară",
    countryShort: "Alege destinația și găsește eSIM-ul NovaSIM potrivit.",

    road: "PE DRUM",
    truck: "Șoferi de camion & rulote",
    truckShort: "Planuri cu trafic mare de date pentru viața pe drum.",

    longer: "CONEXIUNE PE TERMEN LUNG",
    multi: "Multi-Month",
    multiShort: "Cicluri de 500 GB pentru 60 sau 90 de zile.",

    truckEyebrow: "ȘOFERI DE CAMION & RULOTE",
    truckTitle1: "Internet pentru viața",
    truckTitle2: "pe drum.",
    truckDescription:
      "Planuri NovaSIM cu trafic mare de date pentru cei care au nevoie de conexiune serioasă în timp ce călătoresc prin Europa.",

    popular: "POPULAR",
    planDetails: "Detalii plan",
    selectPlan: "Alege planul",
    existingCustomer: "Ești deja client?",
    loyaltySave: "Economisești 5% cu NovaSIM Loyalty",

    overview: "Prezentare",
    features: "Caracteristici",
    more: "Mai multe informații",
    close: "Închide",

    highSpeed: "Date la viteză mare",
    validity: "Valabilitate",
    planType: "Tip plan",
    data: "Date",
    callsText: "Apeluri & SMS",
    notAvailable: "N/A",
    network: "Rețea",
    operator: "Operator",
    networkType: "Tip rețea",
    activation: "Activare",
    automaticActivation: "Activare automată",
    activationMethod: "Metodă activare",
    qrCode: "Cod QR",
    hotspot: "Hotspot",
    hotspotValue: "Partajează conexiunea",
    compatibility: "Compatibilitate",
    compatibilityValue: "Dispozitive compatibile eSIM",
    deviceSupport: "Suport dispozitive",
    roaming: "Acoperire plan",
    roamingValue: "Roaming",
    validFrom: "Valabil de la",
    validFromValue: "Începe la achiziție",
    internationalCalls: "Apeluri internaționale",
    coverage: "Destinații acceptate",
    countriesAvailable: "Destinații acceptate",

    packageDetails: "Detalii pachet",
    operatesNetworks: "Funcționează pe rețele multiple în Europa.",
    startsImmediately:
      "Valabilitatea începe imediat după achiziție.",
    internetRequired:
      "Este necesară o conexiune la internet pentru activarea eSIM.",
    usageRestrictions:
      "Poate fi utilizat în destinațiile listate. Asigură-te că APN-ul este configurat corect.",
    customerSupport:
      "Suportul NovaSIM este disponibil dacă ai nevoie de ajutor cu instalarea sau conexiunea.",

    apnTitle: "Setări internet (APN)",
    apnIntro:
      "Dacă datele mobile nu pornesc automat după instalare, verifică setările APN de mai jos.",
    apnImportant:
      "Important: APN-ul trebuie introdus exact așa cum apare mai jos.",
    apnSteps:
      "Deschide Date mobile / Cellular → selectează eSIM-ul NovaSIM → Rețea date mobile / APN → introdu:",
    roamingTitle: "Roaming de date",
    roamingText:
      "Asigură-te că Data Roaming / Roaming de date este activat pentru eSIM-ul NovaSIM.",

    fupInfo: "Fair Usage Policy de 750 GB.",

    countryEyebrow: "ESIM DUPĂ ȚARĂ",
    countryTitle1: "Destinația ta.",
    countryTitle2: "NovaSIM-ul tău.",
    countryDescription:
      "Alege destinația și conectează-te cu un eSIM NovaSIM potrivit călătoriei tale.",
    coming:
      "Catalogul de destinații va fi adăugat aici împreună cu pachetele și prețurile finale.",

    multiEyebrow: "MULTI-MONTH",
    multiTitle1: "Mai mult timp.",
    multiTitle2: "Mai multe date.",
    multiDescription:
      "Alege 500 GB pentru fiecare ciclu, timp de 60 sau 90 de zile.",
    regularPrice: "Preț normal",
    multiPrice: "Preț Multi-Month",
    multiNote:
      "Prețurile Multi-Month nu se cumulează cu alte reduceri.",

    loyaltyEyebrow: "NOVASIM LOYALTY",
    loyaltyTitle1: "Bine ai revenit.",
    loyaltyTitle2: "Economisești 5%.",
    loyaltyDescription:
      "Introdu aceeași adresă de email folosită la achiziția NovaSIM anterioară.",
    email: "ADRESĂ DE EMAIL",
    emailPlaceholder: "tu@exemplu.ro",
    unlock: "Deblochează prețurile Loyalty",
    loyaltyDemo:
      "Verificarea clientului va fi conectată la baza de date cu comenzile NovaSIM.",
    loyaltyPrice: "Preț NovaSIM Loyalty",
    loyaltyRule:
      "Reducerea Loyalty nu se cumulează cu alte oferte promoționale.",

    accountEyebrow: "MY NOVASIM",
    accountTitle: "Accesul tău NovaSIM.",
    accountDescription:
      "Folosește adresa de email de la achiziția NovaSIM anterioară.",
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
      "Deschide o conversație cu echipa noastră și spune-ne cu ce te putem ajuta.",
    whatsappButton: "Contactează-ne pe WhatsApp",

    legal: "LEGAL",
    termsTitle1: "Termeni și",
    termsTitle2: "condiții.",
    termsDescription:
      "Informații importante despre serviciile digitale NovaSIM, compatibilitate, activare, rambursări și responsabilitățile clientului.",

    legalCompatibility: "Compatibilitatea dispozitivului",
    legalCompatibilityText:
      "Înainte de achiziție, clientul este responsabil să verifice dacă dispozitivul suportă eSIM, este deblocat în rețea și permite configurarea setărilor mobile necesare. Pe telefon se poate tasta *#06# și verifica existența unui EID. Pentru modemuri sau routere, compatibilitatea trebuie verificată în specificațiile dispozitivului înainte de achiziție.",

    legalDigital: "Produs digital și activare",
    legalDigitalText:
      "Planurile eSIM NovaSIM sunt produse digitale. eSIM-ul și informațiile de activare sunt livrate electronic. Clientul trebuie să aibă acces la internet pentru instalarea și activarea eSIM-ului.",

    legalRefund: "Eligibilitatea pentru rambursare",
    legalRefundText:
      "Rambursarea nu este disponibilă atunci când serviciul nu poate fi utilizat din cauza incompatibilității dispozitivului clientului, a blocării în rețea, a configurării incorecte, a lipsei suportului eSIM sau pentru că verificarea compatibilității nu a fost efectuată înainte de achiziție. Această regulă nu limitează drepturile obligatorii ale consumatorului prevăzute de legislația aplicabilă.",

    legalConfig: "Configurarea APN și a dispozitivului",
    legalConfigText:
      "Clientul este responsabil să urmeze instrucțiunile de instalare, să activeze Roaming de date atunci când este necesar și să introducă APN-ul exact așa cum este furnizat de NovaSIM. Configurarea incorectă a dispozitivului sau a APN-ului nu reprezintă o defecțiune a serviciului.",

    legalCoverage: "Acoperire și disponibilitatea rețelei",
    legalCoverageText:
      "Acoperirea mobilă, calitatea semnalului, disponibilitatea 4G/5G și viteza depind de rețelele partenere locale, locație, compatibilitatea dispozitivului, congestie și alte condiții tehnice. Disponibilitatea poate varia în funcție de locație.",

    legalUsage: "Utilizarea serviciului",
    legalUsageText:
      "Planurile pot fi utilizate numai în destinațiile acceptate și în conformitate cu condițiile tehnice și politica Fair Usage aplicabilă planului ales.",

    legalSupport: "Suport înaintea unei solicitări de rambursare",
    legalSupportText:
      "Dacă apare o problemă de conexiune, clientul trebuie să contacteze suportul NovaSIM și să permită verificarea rezonabilă a instalării, APN-ului, roamingului și setărilor dispozitivului înainte ca serviciul să fie considerat nefuncțional.",

    legalNote:
      "Acești termeni au rolul de a explica în mod clar condițiile serviciului și nu exclud sau limitează drepturile legale ale consumatorului care nu pot fi înlăturate prin contract.",

    howEyebrow: "ÎNAINTE DE ACHIZIȚIE",
    howTitle1: "Începe cu",
    howTitle2: "compatibilitatea.",
    howText:
      "Înainte să cumperi, verifică dacă dispozitivul suportă eSIM și este deblocat în rețea.",
    checkCompatibility: "Verifică compatibilitatea",
    checkText:
      "Tastează *#06#. Dacă telefonul afișează un număr EID, suportă eSIM. Pentru modem sau router, verifică specificațiile tehnice pentru suport eSIM.",
    seeTerms: "Compatibilitate & politica de rambursare",

    fastData: "Date mobile rapide",
    digitalActivation: "Activare digitală",
    included: "Inclus",
    directAssistance: "Asistență directă",

    connect: "CONECTARE",
    nova: "NOVASIM",
    legalFooter: "LEGAL",
    rights: "© 2026 NovaSIM. Toate drepturile rezervate.",
    stayConnected: "Rămâi conectat.",
  },
};

function ArrowRight() {
  return (
    <svg className="inlineIcon" viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg className="inlineIcon" viewBox="0 0 24 24">
      <path d="M19 12H5" />
      <path d="m10 7-5 5 5 5" />
    </svg>
  );
}

function NovaLogo() {
  return (
    <span className="novaLogo">
      <svg viewBox="0 0 64 64">
        <path d="M13 49V15h9.5l19 25V15H51v34h-9.5l-19-25v25H13Z" />
        <path className="logoCut" d="M22.5 15 51 49h-9.5L13 15h9.5Z" />
      </svg>
    </span>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c2.2 2.2 3.4 5 3.4 8S14.2 17.8 12 20M12 4c-2.2 2.2-3.4 5-3.4 8s1.2 5.8 3.4 8" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M9 20 11 4h2l2 16M12 7v2M12 12v2M12 17v2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="5.5" width="16" height="14" rx="2" />
      <path d="M8 3.5v4M16 3.5v4M4 9.5h16" />
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
      <path d="M3 9h18M12 9v11M12 9H8.5a2.5 2.5 0 1 1 2.1-3.8L12 9ZM12 9h3.5a2.5 2.5 0 1 0-2.1-3.8L12 9Z" />
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z" />
      <path d="M9 8.5c.5 2.6 2 4.1 4.7 5" />
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
      <header className="header">
        <button className="brand" onClick={() => go("home")}>
          <NovaLogo />
          <strong>NovaSIM</strong>
        </button>

        <div className="headerActions">
          <div className="language">
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <span>/</span>
            <button
              className={language === "ro" ? "active" : ""}
              onClick={() => setLanguage("ro")}
            >
              RO
            </button>
          </div>

          <button className="accountTop" onClick={() => go("account")}>
            <UserIcon />
            <span>{t.myNova}</span>
          </button>

          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "×" : <MenuIcon />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="menuOverlay">
          <div className="menu">
            <span className="eyebrow">NOVASIM</span>

            {[
              ["account", <UserIcon />, t.myNova, t.menuAccountSub],
              ["plans", <GlobeIcon />, t.esimPlans, t.menuPlansSub],
              ["loyalty", <GiftIcon />, t.loyalty, t.menuLoyaltySub],
              ["support", <WhatsAppIcon />, t.support, t.menuSupportSub],
              ["terms", "§", t.terms, t.legalInfo],
            ].map(([view, icon, title, subtitle]: any) => (
              <button key={view} onClick={() => go(view)}>
                <span className="menuIcon">{icon}</span>
                <span>
                  <strong>{title}</strong>
                  <small>{subtitle}</small>
                </span>
                <ArrowRight />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function BackButton({ onClick, label }: any) {
  return (
    <button className="back" onClick={onClick}>
      <ArrowLeft /> {label}
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

  const planInfo =
    plan === "200"
      ? {
          title: "200 GB",
          data: "200 GB",
          package:
            language === "ro"
              ? "eSIM 4G/5G doar pentru date."
              : "4G/5G Data-only eSIM.",
        }
      : plan === "500"
      ? {
          title: "500 GB",
          data: "500 GB",
          package:
            language === "ro"
              ? "500 GB date la viteză mare."
              : "500 GB High Speed Data.",
        }
      : {
          title: "UNLIMITED",
          data: "750 GB FUP",
          package:
            language === "ro"
              ? "750 GB Fair Usage Policy."
              : "750 GB Fair Usage Policy.",
        };

  return (
    <div className="modalBackdrop" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHead">
          <div>
            <span className="eyebrow">NOVASIM ESIM</span>
            <h2>{planInfo.title}</h2>
            {plan === "unlimited" && <small>{t.fupInfo}</small>}
          </div>

          <button className="modalClose" onClick={close}>
            ×
          </button>
        </div>

        <div className="tabs">
          <button
            className={tab === "overview" ? "activeTab" : ""}
            onClick={() => setTab("overview")}
          >
            {t.overview}
          </button>

          <button
            className={tab === "features" ? "activeTab" : ""}
            onClick={() => setTab("features")}
          >
            {t.features}
          </button>

          <button
            className={tab === "more" ? "activeTab" : ""}
            onClick={() => setTab("more")}
          >
            {t.more}
          </button>
        </div>

        <div className="modalContent">
          {tab === "overview" && (
            <>
              <div className="detailGrid">
                <Detail label={t.highSpeed} value={planInfo.data} />
                <Detail
                  label={t.validity}
                  value={language === "ro" ? "30 zile" : "30 days"}
                />
                <Detail label={t.planType} value={t.data} />
                <Detail label={t.callsText} value={t.notAvailable} />
                <Detail label={t.operator} value="Vodafone" />
                <Detail label={t.networkType} value="4G / 5G" />
                <Detail
                  label={t.activation}
                  value={t.automaticActivation}
                />
                <Detail label={t.roaming} value={t.roamingValue} />
                <Detail label={t.validFrom} value={t.validFromValue} />
                <Detail
                  label={t.internationalCalls}
                  value={t.notAvailable}
                />
              </div>

              <div className="countrySection">
                <div className="countryTitle">
                  <span>{t.coverage}</span>
                  <strong>{COUNTRIES.length}</strong>
                </div>

                <div className="countryGrid">
                  {COUNTRIES.map((country) => (
                    <span key={country}>
                      <i>✓</i>
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {tab === "features" && (
            <div className="detailGrid">
              <Detail label={t.activationMethod} value={t.qrCode} />
              <Detail label={t.hotspot} value={t.hotspotValue} />
              <Detail
                label={t.compatibility}
                value={t.compatibilityValue}
              />
              <Detail label={t.deviceSupport} value="iOS & Android" />
              <Detail label={t.operator} value="Vodafone" />
              <Detail label={t.networkType} value="4G / 5G" />
            </div>
          )}

          {tab === "more" && (
            <div className="moreInfo">
              <div className="packageInfo">
                <span className="sectionLabel">{t.packageDetails}</span>
                <strong>{planInfo.package}</strong>
                <p>{t.operatesNetworks}</p>
                <p>{t.startsImmediately}</p>
                <p>{t.internetRequired}</p>
                <p>{t.usageRestrictions}</p>
                <p>{t.customerSupport}</p>
              </div>

              <div className="apnPanel">
                <span className="sectionLabel">{t.apnTitle}</span>
                <p>{t.apnIntro}</p>

                <div className="apnValue">
                  <span>APN</span>
                  <strong>netmon.vodafone.it</strong>
                </div>

                <p className="apnWarning">{t.apnImportant}</p>
                <p>{t.apnSteps}</p>

                <div className="apnCode">netmon.vodafone.it</div>
              </div>

              <div className="roamingPanel">
                <span className="sectionLabel">{t.roamingTitle}</span>
                <p>{t.roamingText}</p>
              </div>

              {plan === "unlimited" && (
                <div className="fupPanel">
                  <strong>750 GB FUP</strong>
                  <p>{t.fupInfo}</p>
                </div>
              )}

              <div className="countrySection">
                <div className="countryTitle">
                  <span>{t.countriesAvailable}</span>
                  <strong>{COUNTRIES.length}</strong>
                </div>

                <div className="countryGrid">
                  {COUNTRIES.map((country) => (
                    <span key={country}>
                      <i>✓</i>
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <button className="modalDone" onClick={close}>
          {t.close}
        </button>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="detail">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function PlansView({ go, t }: any) {
  return (
    <section className="page">
      <BackButton onClick={() => go("home")} label={t.backHome} />

      <div className="pageHeading">
        <span className="eyebrow">{t.plansEyebrow}</span>
        <h1>
          {t.plansTitle1}
          <br />
          <em>{t.plansTitle2}</em>
        </h1>
        <p>{t.plansDescription}</p>
      </div>

      <div className="categoryGrid">
        <Category
          icon={<GlobeIcon />}
          tag={t.travel}
          title={t.country}
          text={t.countryShort}
          onClick={() => go("country")}
        />

        <Category
          icon={<RoadIcon />}
          tag={t.road}
          title={t.truck}
          text={t.truckShort}
          onClick={() => go("truck")}
          featured
        />

        <Category
          icon={<CalendarIcon />}
          tag={t.longer}
          title={t.multi}
          text={t.multiShort}
          onClick={() => go("multi")}
        />
      </div>
    </section>
  );
}

function Category({ icon, tag, title, text, onClick, featured }: any) {
  return (
    <button
      className={`category ${featured ? "categoryFeatured" : ""}`}
      onClick={onClick}
    >
      <span className="categoryIcon">{icon}</span>
      <small>{tag}</small>
      <strong>{title}</strong>
      <p>{text}</p>
      <span className="categoryArrow">
        <ArrowRight />
      </span>
    </button>
  );
}

function TruckView({ go, t, language }: any) {
  const [detailPlan, setDetailPlan] = useState<PlanId | null>(null);

  return (
    <>
      <section className="page">
        <BackButton onClick={() => go("plans")} label={t.allPlans} />

        <div className="pageHeading">
          <span className="eyebrow">{t.truckEyebrow}</span>
          <h1>
            {t.truckTitle1}
            <br />
            <em>{t.truckTitle2}</em>
          </h1>
          <p>{t.truckDescription}</p>
        </div>

        <div className="plansGrid">
          {truckPlans.map((plan) => (
            <article
              key={plan.id}
              className={`planCard plan-${plan.id} ${
                plan.popular ? "planPopular" : ""
              }`}
            >
              {plan.popular && (
                <span className="popular">{t.popular}</span>
              )}

              <span className="planDays">
                {language === "ro" ? "30 ZILE" : "30 DAYS"}
              </span>

              <h2>{plan.data}</h2>

              {plan.subtitle && (
                <span className="planSubtitle">{plan.subtitle}</span>
              )}

              <div className="price">
                <strong>{plan.price}</strong>
                <span>{language === "ro" ? "/ 30 zile" : "/ 30 days"}</span>
              </div>

              <div className="divider" />

              <div className="miniFeatures">
                <span>✓ {t.data}</span>
                <span>✓ 4G / 5G</span>
                <span>✓ {t.hotspot}</span>
                <span>✓ {t.qrCode}</span>
                <span>✓ {COUNTRIES.length} {t.coverage}</span>
              </div>

              <button
                className="detailsButton"
                onClick={() => setDetailPlan(plan.id)}
              >
                {t.planDetails}
                <ArrowRight />
              </button>

              <button className="selectPlan">
                {t.selectPlan}
                <ArrowRight />
              </button>

              <button
                className="loyaltyHint"
                onClick={() => go("loyalty")}
              >
                {t.existingCustomer}{" "}
                <strong>{t.loyaltySave}</strong>
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
    <section className="page">
      <BackButton onClick={() => go("plans")} label={t.allPlans} />

      <div className="pageHeading">
        <span className="eyebrow">{t.countryEyebrow}</span>
        <h1>
          {t.countryTitle1}
          <br />
          <em>{t.countryTitle2}</em>
        </h1>
        <p>{t.countryDescription}</p>
      </div>

      <div className="comingCard">
        <GlobeIcon />
        <h2>{t.country}</h2>
        <p>{t.coming}</p>
      </div>
    </section>
  );
}

function MultiView({ go, t }: any) {
  return (
    <section className="page">
      <BackButton onClick={() => go("plans")} label={t.allPlans} />

      <div className="pageHeading">
        <span className="eyebrow">{t.multiEyebrow}</span>
        <h1>
          {t.multiTitle1}
          <br />
          <em>{t.multiTitle2}</em>
        </h1>
        <p>{t.multiDescription}</p>
      </div>

      <div className="multiGrid">
        {multiPlans.map((plan) => (
          <article className="multiCard" key={plan.duration}>
            <div className="multiTop">
              <span>{plan.duration}</span>
              <small>{plan.cycles}</small>
            </div>

            <h2>{plan.data}</h2>
            <strong className="multiTotal">{plan.total}</strong>

            <div className="divider" />

            <div className="priceLine">
              <span>{t.regularPrice}</span>
              <del>{plan.regular}</del>
            </div>

            <div className="priceLine finalPrice">
              <span>{t.multiPrice}</span>
              <strong>{plan.price}</strong>
            </div>

            <button className="selectPlan">
              {t.selectPlan}
              <ArrowRight />
            </button>
          </article>
        ))}
      </div>

      <p className="smallNote">{t.multiNote}</p>
    </section>
  );
}

function LoyaltyView({ go, t }: any) {
  const [email, setEmail] = useState("");

  return (
    <section className="page">
      <BackButton onClick={() => go("home")} label={t.back} />

      <div className="loyaltyHero">
        <span className="bigIcon">
          <GiftIcon />
        </span>

        <span className="eyebrow">{t.loyaltyEyebrow}</span>

        <h1>
          {t.loyaltyTitle1}
          <br />
          <em>{t.loyaltyTitle2}</em>
        </h1>

        <p>{t.loyaltyDescription}</p>

        <div className="emailBox">
          <label>{t.email}</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
          />

          <button disabled>
            {t.unlock}
            <ArrowRight />
          </button>

          <small>{t.loyaltyDemo}</small>
        </div>
      </div>

      <div className="loyaltyGrid">
        {truckPlans.map((plan) => (
          <div className="loyaltyCard" key={plan.id}>
            <div>
              <strong>{plan.data}</strong>
              {plan.subtitle && <small>{plan.subtitle}</small>}
            </div>

            <span className="discount">-5%</span>

            <div className="loyaltyPrices">
              <del>{plan.price}</del>
              <strong>{plan.loyalty}</strong>
            </div>

            <small>{t.loyaltyPrice}</small>
          </div>
        ))}
      </div>

      <p className="smallNote">{t.loyaltyRule}</p>
    </section>
  );
}

function AccountView({ go, t }: any) {
  return (
    <section className="page">
      <BackButton onClick={() => go("home")} label={t.back} />

      <div className="accountBox">
        <span className="bigIcon">
          <UserIcon />
        </span>

        <span className="eyebrow">{t.accountEyebrow}</span>
        <h1>{t.accountTitle}</h1>
        <p>{t.accountDescription}</p>

        <label>{t.email}</label>
        <input type="email" placeholder={t.emailPlaceholder} disabled />

        <button disabled>
          {t.continueEmail}
          <ArrowRight />
        </button>

        <small>{t.secureLater}</small>
      </div>
    </section>
  );
}

function SupportView({ go, t }: any) {
  return (
    <section className="page">
      <BackButton onClick={() => go("home")} label={t.back} />

      <div className="pageHeading">
        <span className="eyebrow">{t.supportEyebrow}</span>
        <h1>
          {t.supportTitle1}
          <br />
          <em>{t.supportTitle2}</em>
        </h1>
        <p>{t.supportDescription}</p>
      </div>

      <div className="supportCard">
        <span className="bigIcon">
          <WhatsAppIcon />
        </span>

        <div>
          <span className="eyebrow">{t.directSupport}</span>
          <h2>{t.whatsappSupport}</h2>
          <p>{t.whatsappCopy}</p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.whatsappButton}
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

function TermsView({ go, t }: any) {
  const sections = [
    [t.legalCompatibility, t.legalCompatibilityText],
    [t.legalDigital, t.legalDigitalText],
    [t.legalRefund, t.legalRefundText],
    [t.legalConfig, t.legalConfigText],
    [t.legalCoverage, t.legalCoverageText],
    [t.legalUsage, t.legalUsageText],
    [t.legalSupport, t.legalSupportText],
  ];

  return (
    <section className="page">
      <BackButton onClick={() => go("home")} label={t.back} />

      <div className="pageHeading">
        <span className="eyebrow">{t.legal}</span>
        <h1>
          {t.termsTitle1}
          <br />
          <em>{t.termsTitle2}</em>
        </h1>
        <p>{t.termsDescription}</p>
      </div>

      <div className="termsGrid">
        {sections.map(([title, text], index) => (
          <article className="termCard" key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="legalNotice">{t.legalNote}</div>
    </section>
  );
}

function CompatibilitySection({ go, t }: any) {
  return (
    <section className="compatibilitySection">
      <div className="compatIntro">
        <span className="eyebrow">{t.howEyebrow}</span>

        <h2>
          {t.howTitle1}
          <br />
          <em>{t.howTitle2}</em>
        </h2>

        <p>{t.howText}</p>
      </div>

      <div className="compatCard">
        <span className="compatNumber">01</span>
        <h3>{t.checkCompatibility}</h3>
        <p>{t.checkText}</p>

        <button onClick={() => go("terms")}>
          {t.seeTerms}
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}

function TrustBar({ go, t }: any) {
  return (
    <section className="trustBar">
      <div>
        <strong>4G / 5G</strong>
        <span>{t.fastData}</span>
      </div>

      <div>
        <strong>eSIM</strong>
        <span>{t.digitalActivation}</span>
      </div>

      <div>
        <strong>HOTSPOT</strong>
        <span>{t.included}</span>
      </div>

      <button onClick={() => go("support")}>
        <strong>{t.support.toUpperCase()}</strong>
        <span>{t.directAssistance}</span>
      </button>
    </section>
  );
}

function Footer({ go, t, language }: any) {
  return (
    <footer className="footer">
      <div className="footerMain">
        <div>
          <button className="brand" onClick={() => go("home")}>
            <NovaLogo />
            <strong>NovaSIM</strong>
          </button>

          <p>
            {language === "ro"
              ? "Conectivitate mobilă premium pentru Europa."
              : "Premium mobile connectivity designed for Europe."}
          </p>
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

      <div className="footerBottom">
        <span>{t.rights}</span>
        <span>{t.stayConnected}</span>
      </div>
    </footer>
  );
}

function HomeView({ go, t, language }: any) {
  return (
    <>
      <section className="hero">
        <div className="heroGrid" />
        <div className="heroGlow" />

        <div className="heroInner">
          <span className="heroEyebrow">
            <i />
            {t.heroEyebrow}
          </span>

          <h1>
            {t.hero1}
            <br />
            <em>{t.hero2}</em>
            <br />
            <em>{t.hero3}</em>
            <br />
            {t.hero4}
          </h1>

          <p>{t.heroText}</p>

          <button className="heroButton" onClick={() => go("plans")}>
            {t.explore}
            <ArrowRight />
          </button>

          <div className="heroTrust">
            <span>✓ eSIM</span>
            <span>✓ 4G / 5G</span>
            <span>✓ Hotspot</span>
          </div>
        </div>
      </section>

      <section className="choiceSection">
        <div className="choiceHeading">
          <span className="eyebrow">NOVASIM CONNECTIVITY</span>
          <h2>
            {language === "ro" ? "Alege cum vrei" : "Choose how you"}
            <br />
            <em>
              {language === "ro"
                ? "să rămâi conectat."
                : "stay connected."}
            </em>
          </h2>
        </div>

        <div className="categoryGrid">
          <Category
            icon={<GlobeIcon />}
            tag={t.travel}
            title={t.country}
            text={t.countryShort}
            onClick={() => go("country")}
          />

          <Category
            icon={<RoadIcon />}
            tag={t.road}
            title={t.truck}
            text={t.truckShort}
            onClick={() => go("truck")}
            featured
          />

          <Category
            icon={<CalendarIcon />}
            tag={t.longer}
            title={t.multi}
            text={t.multiShort}
            onClick={() => go("multi")}
          />
        </div>

        <button className="loyaltyStrip" onClick={() => go("loyalty")}>
          <span className="bigIcon">
            <GiftIcon />
          </span>

          <span>
            <small>
              {language === "ro"
                ? "EȘTI DEJA CLIENT NOVASIM?"
                : "EXISTING NOVASIM CUSTOMER?"}
            </small>
            <strong>NovaSIM Loyalty</strong>
            <p>
              {language === "ro"
                ? "Revino și economisește 5% la planurile eligibile."
                : "Come back and save 5% on eligible plans."}
            </p>
          </span>

          <b>-5%</b>
        </button>
      </section>

      <CompatibilitySection go={go} t={t} />
      <TrustBar go={go} t={t} />
      <Footer go={go} t={t} language={language} />
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
        .novaApp{
          min-height:100vh;
          background:#040809;
          color:#fff;
          --aqua:#36c9be;
        }

        .novaApp *{box-sizing:border-box}
        .novaApp button,.novaApp input{font-family:inherit}
        .novaApp button{cursor:pointer}
        .novaApp svg{
          width:18px;height:18px;
          fill:none;
          stroke:currentColor;
          stroke-width:1.5;
          stroke-linecap:round;
          stroke-linejoin:round
        }

        .inlineIcon{width:15px!important;height:15px!important}
        .eyebrow{color:var(--aqua);font-size:9px;font-weight:900;letter-spacing:1.5px}
        em{font-style:normal;color:var(--aqua)}

        .header{
          width:min(calc(100% - 64px),1180px);
          height:88px;margin:auto;
          display:flex;align-items:center;justify-content:space-between;
          border-bottom:1px solid rgba(255,255,255,.055);
          position:relative;z-index:1001
        }

        .brand{
          border:0;background:none;color:white;padding:0;
          display:flex;align-items:center;gap:9px
        }

        .brand strong{font-size:21px;letter-spacing:-.7px}
        .novaLogo{width:31px;height:31px;display:block}
        .novaLogo svg{width:100%;height:100%;fill:var(--aqua);stroke:none}
        .novaLogo .logoCut{fill:#040809}

        .headerActions{display:flex;align-items:center;gap:9px}

        .language{
          height:40px;padding:0 10px;border:1px solid rgba(255,255,255,.07);
          border-radius:8px;display:flex;align-items:center;gap:5px;color:#465153
        }

        .language button{border:0;background:none;color:#667274;font-size:9px;font-weight:900;padding:0}
        .language button.active{color:var(--aqua)}

        .accountTop,.menuButton{
          height:40px;border:1px solid rgba(255,255,255,.075);
          border-radius:8px;background:rgba(255,255,255,.02);color:#a2acad
        }

        .accountTop{padding:0 14px;display:flex;align-items:center;gap:8px;font-size:10px;font-weight:800}
        .accountTop svg{color:var(--aqua)}

        .menuButton{
          width:40px;color:var(--aqua);
          display:flex;align-items:center;justify-content:center;
          font-size:22px
        }

        .menuOverlay{
          position:absolute;z-index:1000;top:88px;left:0;width:100%;
          min-height:calc(100vh - 88px);
          background:rgba(3,7,8,.985);
          backdrop-filter:blur(16px)
        }

        .menu{width:min(calc(100% - 64px),700px);margin:auto;padding:60px 0}
        .menu>.eyebrow{display:block;margin-bottom:18px;color:#566164}

        .menu>button{
          width:100%;min-height:82px;padding:14px 8px;border:0;
          border-bottom:1px solid rgba(255,255,255,.06);
          background:none;color:white;display:grid;
          grid-template-columns:44px 1fr 20px;align-items:center;gap:14px;text-align:left
        }

        .menuIcon,.bigIcon,.categoryIcon{
          display:flex;align-items:center;justify-content:center;
          color:var(--aqua);border:1px solid rgba(54,201,190,.13);
          background:rgba(54,201,190,.04)
        }

        .menuIcon{width:40px;height:40px;border-radius:9px}
        .menu strong{display:block;font-size:15px}
        .menu small{display:block;margin-top:4px;color:#667274;font-size:9px}

        .hero{
          min-height:660px;position:relative;overflow:hidden;
          border-bottom:1px solid rgba(255,255,255,.055)
        }

        .heroGrid{
          position:absolute;inset:0;
          background-image:
            linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);
          background-size:52px 52px;
          mask-image:linear-gradient(to bottom,black,transparent)
        }

        .heroGlow{
          position:absolute;width:650px;height:650px;right:-180px;top:-180px;
          background:radial-gradient(circle,rgba(54,201,190,.12),transparent 65%);
          filter:blur(10px)
        }

        .heroInner{
          width:min(calc(100% - 64px),1180px);margin:auto;
          padding:100px 0 90px;position:relative
        }

        .heroEyebrow{
          color:var(--aqua);font-size:9px;font-weight:900;letter-spacing:1.4px;
          display:flex;align-items:center;gap:8px
        }

        .heroEyebrow i{
          width:6px;height:6px;border-radius:50%;background:var(--aqua);
          box-shadow:0 0 16px var(--aqua)
        }

        .hero h1{
          margin:20px 0 0;font-size:clamp(55px,7.4vw,100px);
          line-height:.87;letter-spacing:-5px
        }

        .hero p{
          max-width:540px;margin-top:28px;color:#7b8789;
          font-size:13px;line-height:1.7
        }

        .heroButton,.selectPlan,.supportCard a{
          min-height:48px;border:1px solid var(--aqua);border-radius:7px;
          background:var(--aqua);color:#02100f;font-weight:900;font-size:9px;
          display:flex;align-items:center;justify-content:space-between;
          text-decoration:none
        }

        .heroButton{margin-top:30px;width:190px;padding:0 17px}

        .heroTrust{margin-top:25px;display:flex;gap:22px;color:#657174;font-size:8px}
        .heroTrust span:first-letter{color:var(--aqua)}

        .choiceSection,.compatibilitySection,.trustBar,.footer,.page{
          width:min(calc(100% - 64px),1180px);margin-left:auto;margin-right:auto
        }

        .choiceSection{padding:75px 0 65px}
        .choiceHeading h2,.compatIntro h2{
          margin:13px 0 0;font-size:clamp(42px,4.7vw,62px);
          line-height:.98;letter-spacing:-3px
        }

        .categoryGrid,.plansGrid,.loyaltyGrid{
          margin-top:38px;display:grid;grid-template-columns:repeat(3,1fr);gap:10px
        }

        .category{
          min-height:240px;padding:23px;position:relative;border-radius:12px;
          border:1px solid rgba(255,255,255,.07);background:#070c0d;
          color:white;text-align:left
        }

        .categoryFeatured{border-color:rgba(54,201,190,.24)}
        .categoryIcon{width:40px;height:40px;border-radius:9px}
        .category small{display:block;margin-top:37px;color:var(--aqua);font-size:7px;font-weight:900;letter-spacing:1px}
        .category>strong{display:block;margin-top:8px;font-size:20px}
        .category p{margin-top:9px;color:#687476;font-size:10px;line-height:1.5}
        .categoryArrow{position:absolute;right:20px;bottom:20px;color:#657174}

        .loyaltyStrip{
          width:100%;min-height:110px;margin-top:10px;padding:20px 24px;
          border:1px solid rgba(54,201,190,.16);border-radius:12px;
          background:#071011;color:white;
          display:grid;grid-template-columns:50px 1fr auto;gap:16px;align-items:center;text-align:left
        }

        .bigIcon{width:48px;height:48px;border-radius:10px}
        .loyaltyStrip small{color:var(--aqua);font-size:7px;font-weight:900}
        .loyaltyStrip strong{display:block;margin-top:5px;font-size:17px}
        .loyaltyStrip p{margin:4px 0 0;color:#6e7a7c;font-size:9px}
        .loyaltyStrip b{color:var(--aqua);font-size:26px}

        .compatibilitySection{
          padding:65px 0;border-top:1px solid rgba(255,255,255,.055);
          display:grid;grid-template-columns:1fr 1fr;gap:45px;align-items:center
        }

        .compatIntro p{max-width:500px;color:#758183;font-size:11px;line-height:1.7}
        .compatCard{
          min-height:220px;padding:28px;border:1px solid rgba(54,201,190,.15);
          border-radius:12px;background:#070c0d
        }

        .compatNumber{color:#566164;font-size:8px;font-weight:900}
        .compatCard h3{margin-top:38px;font-size:21px}
        .compatCard p{color:#778385;font-size:10px;line-height:1.65}
        .compatCard button{
          margin-top:20px;padding:0;border:0;background:none;color:var(--aqua);
          display:flex;align-items:center;gap:10px;font-size:9px;font-weight:900
        }

        .trustBar{
          min-height:110px;border-top:1px solid rgba(255,255,255,.055);
          border-bottom:1px solid rgba(255,255,255,.055);
          display:grid;grid-template-columns:repeat(4,1fr)
        }

        .trustBar>div,.trustBar>button{
          min-height:110px;padding:25px;border:0;border-right:1px solid rgba(255,255,255,.055);
          background:none;color:white;text-align:left;display:flex;flex-direction:column;justify-content:center
        }

        .trustBar strong{color:var(--aqua);font-size:9px}
        .trustBar span{margin-top:5px;color:#687476;font-size:8px}

        .footer{padding:60px 0 25px}
        .footerMain{display:grid;grid-template-columns:1fr 1.5fr;gap:70px;padding-bottom:50px}
        .footerMain p{color:#596567;font-size:10px;line-height:1.6}

        .footerLinks{display:grid;grid-template-columns:repeat(3,1fr);gap:25px}
        .footerLinks>div{display:flex;flex-direction:column;align-items:flex-start;gap:11px}
        .footerLinks span{color:#4e5a5c;font-size:7px;font-weight:900}
        .footerLinks button{padding:0;border:0;background:none;color:#899496;font-size:9px}
        .footerBottom{padding-top:22px;border-top:1px solid rgba(255,255,255,.055);display:flex;justify-content:space-between;color:#465153;font-size:7px}

        .page{min-height:calc(100vh - 88px);padding:48px 0 80px}
        .back{padding:8px 0;border:0;background:none;color:#778385;display:flex;align-items:center;gap:9px;font-size:10px;font-weight:800}

        .pageHeading{max-width:760px;margin-top:58px}
        .pageHeading h1,.loyaltyHero h1{
          margin:15px 0 0;font-size:clamp(48px,6vw,76px);line-height:.94;letter-spacing:-4px
        }

        .pageHeading>p,.loyaltyHero>p{
          max-width:570px;margin-top:22px;color:#788486;font-size:13px;line-height:1.65
        }

        .planCard{
          min-height:465px;padding:26px;position:relative;border-radius:13px;
          border:1px solid rgba(255,255,255,.08);
          display:flex;flex-direction:column;overflow:hidden
        }

        .plan-200{
          background:
            radial-gradient(circle at 100% 0,rgba(65,181,255,.15),transparent 34%),
            linear-gradient(145deg,#071014,#070c0d)
        }

        .plan-500{
          background:
            radial-gradient(circle at 100% 0,rgba(54,201,190,.22),transparent 36%),
            linear-gradient(145deg,#071311,#070c0d);
          border-color:rgba(54,201,190,.32)
        }

        .plan-unlimited{
          background:
            radial-gradient(circle at 100% 0,rgba(154,101,255,.18),transparent 35%),
            linear-gradient(145deg,#0d0a14,#070c0d)
        }

        .popular,.discount{
          padding:6px 8px;border-radius:5px;border:1px solid rgba(54,201,190,.2);
          color:var(--aqua);font-size:6px;font-weight:900
        }

        .popular{position:absolute;right:17px;top:17px}
        .planDays{color:#657174;font-size:7px;font-weight:900}
        .planCard h2{margin:24px 0 0;font-size:36px}
        .planSubtitle{margin-top:4px;color:var(--aqua);font-size:9px;font-weight:900}

        .price{margin-top:17px;display:flex;align-items:flex-end;gap:6px}
        .price strong{font-size:27px}
        .price span{color:#596567;font-size:8px}
        .divider{height:1px;margin:23px 0;background:rgba(255,255,255,.06)}

        .miniFeatures{display:flex;flex-direction:column;gap:9px;color:#879294;font-size:9px}
        .miniFeatures span::first-letter{color:var(--aqua)}

        .detailsButton{
          min-height:40px;margin-top:20px;padding:0 14px;border-radius:7px;
          border:1px solid rgba(54,201,190,.2);background:rgba(54,201,190,.04);
          color:var(--aqua);display:flex;align-items:center;justify-content:space-between;
          font-size:8px;font-weight:900
        }

        .selectPlan{margin-top:8px;padding:0 15px}
        .loyaltyHint{padding:11px 0 0;border:0;background:none;color:#596567;font-size:7px}
        .loyaltyHint strong{color:var(--aqua)}

        .modalBackdrop{
          position:fixed;z-index:5000;inset:0;padding:20px;
          background:rgba(0,0,0,.8);backdrop-filter:blur(12px);
          display:flex;align-items:center;justify-content:center
        }

        .modal{
          width:min(100%,720px);max-height:calc(100vh - 40px);overflow-y:auto;
          padding:28px;border-radius:16px;border:1px solid rgba(54,201,190,.2);
          background:
            radial-gradient(circle at 90% 0,rgba(54,201,190,.08),transparent 30%),
            #070c0d;
          box-shadow:0 30px 100px rgba(0,0,0,.6)
        }

        .modalHead{display:flex;justify-content:space-between;gap:20px}
        .modalHead h2{margin:8px 0 0;font-size:35px}
        .modalHead small{display:block;margin-top:6px;color:#758183;font-size:8px}

        .modalClose{
          width:36px;height:36px;border-radius:8px;border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.025);color:#899496;font-size:22px
        }

        .tabs{
          margin-top:26px;border-bottom:1px solid rgba(255,255,255,.07);
          display:grid;grid-template-columns:repeat(3,1fr)
        }

        .tabs button{
          min-height:44px;border:0;border-bottom:2px solid transparent;
          background:none;color:#667274;font-size:8px;font-weight:900
        }

        .tabs .activeTab{color:var(--aqua);border-bottom-color:var(--aqua)}
        .modalContent{padding:24px 0 10px}

        .detailGrid{display:grid;grid-template-columns:1fr 1fr;gap:9px}
        .detail{
          padding:17px;border-radius:9px;border:1px solid rgba(255,255,255,.06);
          background:#05090a
        }

        .detail span,.sectionLabel{display:block;color:#657174;font-size:7px;font-weight:900}
        .detail strong{display:block;margin-top:7px;font-size:13px}

        .countrySection{
          margin-top:14px;padding:20px;border-radius:11px;
          border:1px solid rgba(54,201,190,.12);background:#05090a
        }

        .countryTitle{display:flex;align-items:center;justify-content:space-between}
        .countryTitle span{color:#899496;font-size:9px;font-weight:900}
        .countryTitle strong{color:var(--aqua);font-size:22px}

        .countryGrid{
          margin-top:17px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px
        }

        .countryGrid span{
          min-height:34px;padding:0 9px;border-radius:6px;background:#080e0f;
          color:#879294;font-size:8px;display:flex;align-items:center;gap:7px
        }

        .countryGrid i{font-style:normal;color:var(--aqua)}

        .moreInfo{display:flex;flex-direction:column;gap:11px}
        .packageInfo,.apnPanel,.roamingPanel,.fupPanel{
          padding:19px;border-radius:10px;border:1px solid rgba(255,255,255,.06);
          background:#05090a
        }

        .packageInfo strong{display:block;margin-top:9px;font-size:13px}
        .packageInfo p,.apnPanel p,.roamingPanel p,.fupPanel p{
          margin:9px 0 0;color:#7c888a;font-size:9px;line-height:1.6
        }

        .apnPanel{
          border-color:rgba(54,201,190,.23);
          background:linear-gradient(145deg,rgba(54,201,190,.07),#05090a)
        }

        .apnPanel .sectionLabel{color:var(--aqua);font-size:10px}

        .apnValue{
          margin-top:14px;padding:14px;border-radius:8px;
          border:1px solid rgba(54,201,190,.18);background:#030707
        }

        .apnValue span{display:block;color:#657174;font-size:7px;font-weight:900}
        .apnValue strong{
          display:block;margin-top:6px;color:var(--aqua);font-size:17px;
          word-break:break-all
        }

        .apnWarning{
          padding:12px!important;border-radius:7px;
          border:1px solid rgba(54,201,190,.13);color:#b4bdbf!important
        }

        .apnCode{
          margin-top:10px;padding:13px;border-radius:7px;background:#020505;
          color:var(--aqua);font-size:14px;font-weight:900;letter-spacing:.2px;
          text-align:center;word-break:break-all
        }

        .fupPanel strong{color:var(--aqua)}

        .modalDone{
          width:100%;min-height:43px;margin-top:10px;border-radius:7px;
          border:1px solid rgba(54,201,190,.2);background:rgba(54,201,190,.06);
          color:var(--aqua);font-size:8px;font-weight:900
        }

        .comingCard{
          max-width:580px;min-height:220px;margin-top:45px;padding:30px;
          border-radius:12px;border:1px solid rgba(255,255,255,.07);background:#070c0d
        }

        .comingCard svg{color:var(--aqua);width:30px;height:30px}
        .comingCard h2{margin-top:30px;font-size:25px}
        .comingCard p{color:#697577;font-size:10px}

        .multiGrid{margin-top:45px;display:grid;grid-template-columns:1fr 1fr;gap:10px}

        .multiCard{
          min-height:365px;padding:27px;border-radius:12px;
          border:1px solid rgba(54,201,190,.13);
          background:
            radial-gradient(circle at 100% 0,rgba(54,201,190,.09),transparent 35%),
            #070c0d;
          display:flex;flex-direction:column
        }

        .multiTop{display:flex;justify-content:space-between}
        .multiTop span{color:var(--aqua);font-size:8px;font-weight:900}
        .multiTop small{color:#586466;font-size:7px}
        .multiCard h2{margin:38px 0 0;font-size:31px}
        .multiTotal{margin-top:7px;color:var(--aqua);font-size:15px}

        .priceLine{display:flex;justify-content:space-between;align-items:center}
        .priceLine span{color:#687476;font-size:8px}
        .priceLine del{color:#697577;font-size:13px}
        .finalPrice{margin-top:12px}
        .finalPrice strong{color:var(--aqua);font-size:26px}
        .multiCard .selectPlan{margin-top:auto}

        .smallNote{margin-top:14px;color:#596567;font-size:8px}

        .loyaltyHero{max-width:720px;margin-top:50px}
        .loyaltyHero>.bigIcon{margin-bottom:24px}
        .loyaltyHero h1 em{color:var(--aqua)}

        .emailBox{
          max-width:520px;margin-top:28px;padding:20px;border-radius:10px;
          border:1px solid rgba(54,201,190,.12);background:#070c0d
        }

        .emailBox label,.accountBox label{
          display:block;color:#687476;font-size:7px;font-weight:900
        }

        .emailBox input,.accountBox input{
          width:100%;height:46px;margin-top:8px;padding:0 13px;border-radius:7px;
          border:1px solid rgba(255,255,255,.08);background:#040809;color:white;outline:none
        }

        .emailBox button,.accountBox>button{
          width:100%;min-height:44px;margin-top:8px;padding:0 14px;border:0;
          border-radius:7px;background:rgba(54,201,190,.28);color:#03100f;
          display:flex;align-items:center;justify-content:space-between;
          font-size:8px;font-weight:900
        }

        .emailBox>small,.accountBox>small{
          display:block;margin-top:10px;color:#4f5b5d;font-size:7px
        }

        .loyaltyCard{
          min-height:160px;padding:21px;position:relative;border-radius:12px;
          border:1px solid rgba(54,201,190,.12);background:#070c0d
        }

        .loyaltyCard>div:first-child>small{
          display:block;margin-top:4px;color:#657174;font-size:7px
        }

        .discount{position:absolute;right:20px;top:20px}
        .loyaltyPrices{margin-top:25px;display:flex;align-items:center;gap:10px}
        .loyaltyPrices del{color:#596567;font-size:12px}
        .loyaltyPrices strong{color:var(--aqua);font-size:24px}
        .loyaltyCard>small{display:block;margin-top:8px;color:#657174;font-size:7px}

        .accountBox{
          width:min(100%,510px);margin:55px auto 0;padding:36px;border-radius:12px;
          border:1px solid rgba(255,255,255,.07);background:#070c0d
        }

        .accountBox>.bigIcon{margin-bottom:22px}
        .accountBox h1{margin:13px 0 0;font-size:34px}
        .accountBox p{color:#758183;font-size:10px}
        .accountBox label{margin-top:28px}

        .supportCard{
          max-width:760px;margin-top:45px;padding:28px;border-radius:12px;
          border:1px solid rgba(54,201,190,.12);background:#070c0d;
          display:grid;grid-template-columns:52px 1fr;gap:20px
        }

        .supportCard h2{margin:7px 0 0;font-size:22px}
        .supportCard p{color:#6e7a7c;font-size:9px}
        .supportCard a{width:230px;margin-top:18px;padding:0 17px}

        .termsGrid{
          margin-top:45px;display:grid;grid-template-columns:1fr 1fr;gap:10px
        }

        .termCard{
          min-height:205px;padding:24px;border-radius:12px;
          border:1px solid rgba(255,255,255,.07);background:#070c0d
        }

        .termCard>span{color:var(--aqua);font-size:8px;font-weight:900}
        .termCard h2{margin:28px 0 0;font-size:18px}
        .termCard p{margin-top:10px;color:#7a8688;font-size:9px;line-height:1.7}

        .legalNotice{
          margin-top:10px;padding:20px;border-radius:10px;
          border:1px solid rgba(54,201,190,.13);
          background:rgba(54,201,190,.035);
          color:#7f8b8d;font-size:9px;line-height:1.7
        }

        @media(max-width:720px){
          .header{
            width:calc(100% - 28px);height:74px
          }

          .accountTop{
            width:36px;padding:0;justify-content:center
          }

          .accountTop span{display:none}
          .language{height:36px;padding:0 7px}
          .menuButton{width:36px;height:36px}
          .menuOverlay{top:74px}
          .menu{width:calc(100% - 28px);padding:32px 0}

          .hero{min-height:600px}

          .heroInner{
            width:calc(100% - 28px);padding:80px 0 65px
          }

          .hero h1{
            font-size:52px;letter-spacing:-3px
          }

          .hero p{font-size:10px}

          .choiceSection,.compatibilitySection,.trustBar,.footer,.page{
            width:calc(100% - 28px)
          }

          .choiceSection{padding:48px 0}
          .choiceHeading h2,.compatIntro h2{
            font-size:34px;letter-spacing:-2px
          }

          .categoryGrid,.plansGrid,.loyaltyGrid,.multiGrid,.termsGrid{
            grid-template-columns:1fr;margin-top:30px
          }

          .category{min-height:190px;padding:19px}
          .category small{margin-top:27px}

          .loyaltyStrip{
            min-height:105px;padding:15px;
            grid-template-columns:40px 1fr auto;gap:11px
          }

          .loyaltyStrip .bigIcon{width:38px;height:38px}
          .loyaltyStrip b{font-size:20px}

          .compatibilitySection{
            padding:48px 0;grid-template-columns:1fr;gap:25px
          }

          .compatCard{min-height:190px;padding:21px}

          .trustBar{grid-template-columns:1fr 1fr}
          .trustBar>div,.trustBar>button{
            min-height:88px;padding:17px;border-bottom:1px solid rgba(255,255,255,.055)
          }

          .footer{padding:44px 0 22px}
          .footerMain{grid-template-columns:1fr;gap:35px;padding-bottom:36px}
          .footerLinks{grid-template-columns:1fr 1fr}

          .page{
            min-height:calc(100vh - 74px);padding:30px 0 55px
          }

          .pageHeading{margin-top:38px}
          .pageHeading h1,.loyaltyHero h1{
            font-size:41px;letter-spacing:-2.5px
          }

          .pageHeading>p,.loyaltyHero>p{font-size:9.5px}

          .planCard{min-height:450px;padding:21px}
          .multiCard{min-height:330px;padding:21px}

          .modalBackdrop{
            padding:10px;align-items:flex-end
          }

          .modal{
            width:100%;max-height:90vh;padding:20px 16px;
            border-radius:16px 16px 9px 9px
          }

          .modalHead h2{font-size:28px}
          .tabs button{font-size:7px}
          .detailGrid{grid-template-columns:1fr}
          .countryGrid{grid-template-columns:1fr 1fr}

          .countrySection{padding:15px}
          .countryGrid span{font-size:7.5px}

          .loyaltyHero{margin-top:37px}
          .accountBox{margin-top:35px;padding:25px 20px}

          .supportCard{
            margin-top:30px;padding:20px;
            grid-template-columns:42px 1fr;gap:14px
          }

          .supportCard a{
            width:100%;grid-column:1/-1
          }

          .termCard{min-height:auto}
        }

        @media(max-width:390px){
          .hero h1{font-size:46px}
          .countryGrid{grid-template-columns:1fr}
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

      {view === "home" && (
        <HomeView go={go} t={t} language={language} />
      )}

      {view === "plans" && <PlansView go={go} t={t} />}

      {view === "truck" && (
        <TruckView go={go} t={t} language={language} />
      )}

      {view === "country" && <CountryView go={go} t={t} />}
      {view === "multi" && <MultiView go={go} t={t} />}
      {view === "loyalty" && <LoyaltyView go={go} t={t} />}
      {view === "account" && <AccountView go={go} t={t} />}
      {view === "support" && <SupportView go={go} t={t} />}
      {view === "terms" && <TermsView go={go} t={t} />}
    </main>
  );
}
