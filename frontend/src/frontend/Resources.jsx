import Navbar from "./Navbar";

function SectionHeader({ title }) {
  return (
    <div style={{ marginBottom: "40px", textAlign: "left" }}>
      <div style={{ width: "48px", height: "3px", backgroundColor: "var(--brand)", marginBottom: "24px" }} />
      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "36px", lineHeight: "44px", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.01em", margin: 0 }}>
        {title}
      </h2>
    </div>
  );
}

function SectionNumber({ n }) {
  return (
    <div style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)", fontSize: "13px", color: "var(--ink-muted)", letterSpacing: "0.08em", marginBottom: "24px" }}>
      {n}
    </div>
  );
}

function ResourceCard({ title, description, phone, link, linkLabel }) {
  return (
    <div style={{ backgroundColor: "var(--surface-raise)", border: "1px solid var(--rule)", borderRadius: "4px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 600, color: "var(--ink)", margin: 0 }}>
        {title}
      </p>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", lineHeight: "24px", color: "var(--ink-soft)", margin: 0 }}>
        {description}
      </p>
      {phone && (
        <p style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)", fontSize: "13px", color: "var(--ink-muted)", margin: 0 }}>
          {phone}
        </p>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 500, color: "var(--brand)", textDecoration: "none", borderBottom: "1px solid transparent", paddingBottom: "1px", transition: "border-color 150ms ease", alignSelf: "flex-start", marginTop: "auto" }}
          onMouseEnter={e => e.currentTarget.style.borderBottomColor = "var(--brand)"}
          onMouseLeave={e => e.currentTarget.style.borderBottomColor = "transparent"}
        >
          {linkLabel}
        </a>
      )}
    </div>
  );
}

function ResourceRow({ title, description, phone, link }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px", flexWrap: "wrap" }}>
      <div style={{ flex: 1, minWidth: "200px" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: 500, color: "var(--ink)", marginBottom: "6px" }}>
          {title}
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", lineHeight: "22px", color: "var(--ink-soft)", margin: 0 }}>
          {description}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px", flexShrink: 0 }}>
        {phone && (
          <span style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)", fontSize: "13px", color: "var(--ink-muted)" }}>
            {phone}
          </span>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 500, color: "var(--brand)", textDecoration: "none", borderBottom: "1px solid transparent", paddingBottom: "1px", transition: "border-color 150ms ease" }}
            onMouseEnter={e => e.currentTarget.style.borderBottomColor = "var(--brand)"}
            onMouseLeave={e => e.currentTarget.style.borderBottomColor = "transparent"}
          >
            Visit →
          </a>
        )}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ backgroundColor: "var(--surface)" }}>
      <div className="max-w-[1200px] mx-auto px-10" style={{ paddingTop: "80px", paddingBottom: "72px", textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: "24px" }}>Find Screening</div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "56px",
            lineHeight: "64px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            maxWidth: "22ch",
            margin: "0 auto",
          }}
        >
          Find a mammography screening near you.
        </h1>
        <p className="lede" style={{ marginTop: "24px", maxWidth: "58ch", margin: "24px auto 0" }}>
          Free and low-cost breast cancer screening clinics, financial assistance programs, and advocacy resources for King County residents.
        </p>
      </div>
    </section>
  );
}

function ScreeningAppointments() {
  const clinics = [
    {
      title: "Fred Hutchinson Cancer Center",
      description: "Affordable cancer screening and treatment with financial counseling available to help manage costs.",
      phone: "1-855-557-0555",
      link: "https://www.fredhutch.org/en/patient-care/request-appointment.html",
      linkLabel: "Request appointment →",
    },
    {
      title: "WA Breast, Cervical & Colon Health Program",
      description: "Free screenings for uninsured and underinsured women in Washington State through the state-funded program.",
      phone: "1-888-438-2247",
      link: "https://doh.wa.gov/you-and-your-family/illness-and-disease-z/cancer/breast-cervical-and-colon-health-program",
      linkLabel: "Learn more →",
    },
  ];

  return (
    <section style={{ backgroundColor: "var(--surface-warm)", borderTop: "1px solid var(--rule)" }}>
      <div className="max-w-[1200px] mx-auto px-10" style={{ paddingTop: "88px", paddingBottom: "88px", textAlign: "left" }}>
        <SectionNumber n="01" />
        <SectionHeader title="Screening appointments" />
        <p style={{ color: "var(--ink-soft)", fontSize: "17px", lineHeight: "28px", maxWidth: "68ch", marginBottom: "40px" }}>
          Free and low-cost mammography options in King County. Call ahead to confirm eligibility and availability.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {clinics.map(c => <ResourceCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

const financialRows = [
  {
    title: "Premium Payment Program",
    description: "Helps Medicaid patients pay for private, employer, COBRA, or Medicare premiums.",
    phone: "800-562-3022",
    link: "https://www.hca.wa.gov/free-or-low-cost-health-care/i-help-others-apply-and-access-apple-health/premium-payment-program",
  },
  {
    title: "Co-Pay Relief Program",
    description: "Helps cover cancer treatment copayments for eligible patients.",
    phone: "1-866-512-3861",
    link: "https://copays.org/patients-family/",
  },
  {
    title: "Neighborhood Legal Clinics",
    description: "Free civil legal help for low-income King County residents, including benefits and insurance disputes.",
    phone: "206-267-7070",
    link: "https://www.kcba.org/?pg=Neighborhood-Legal-Clinics",
  },
];

function FinancialAssistance() {
  return (
    <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--rule)" }}>
      <div className="max-w-[1200px] mx-auto px-10" style={{ paddingTop: "88px", paddingBottom: "88px", textAlign: "left" }}>
        <SectionNumber n="02" />
        <SectionHeader title="Financial assistance" />
        <p style={{ color: "var(--ink-soft)", fontSize: "17px", lineHeight: "28px", maxWidth: "68ch", marginBottom: "40px" }}>
          Worried about cost? These programs help cover premiums, copays, and legal questions for King County residents.
        </p>
        <div>
          {financialRows.map((row, i) => (
            <div
              key={row.title}
              style={{
                borderTop: "1px solid var(--rule)",
                paddingTop: "24px",
                paddingBottom: "24px",
                borderBottom: i === financialRows.length - 1 ? "1px solid var(--rule)" : "none",
              }}
            >
              <ResourceRow {...row} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const advocacyCards = [
  {
    title: "Contact Local Lawmakers",
    description: "Connect with organizations in Washington working to improve healthcare equity and cancer awareness.",
    link: "https://nohla.org/",
    linkLabel: "Get involved →",
  },
  {
    title: "Join a Petition",
    description: "Sign a petition or reach out to lawmakers working on healthcare policy reform.",
    link: "https://www.fightcancer.org/states/national/actions",
    linkLabel: "Take action →",
  },
  {
    title: "Find a Support Group",
    description: "Find resources to help you and your loved ones navigate treatment and recovery.",
    link: "https://www.cancer.org/support-programs-and-services/resource-search.html",
    linkLabel: "Search resources →",
  },
];

function CommunityAdvocacy() {
  return (
    <section style={{ backgroundColor: "var(--surface-warm)", borderTop: "1px solid var(--rule)" }}>
      <div className="max-w-[1200px] mx-auto px-10" style={{ paddingTop: "88px", paddingBottom: "88px", textAlign: "left" }}>
        <SectionNumber n="03" />
        <SectionHeader title="Community & advocacy" />
        <p style={{ color: "var(--ink-soft)", fontSize: "17px", lineHeight: "28px", maxWidth: "68ch", marginBottom: "40px" }}>
          Get involved, connect with support networks, and advocate for equitable healthcare in Washington.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {advocacyCards.map(c => <ResourceCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

const readingRows = [
  {
    title: "National Breast Cancer Foundation",
    description: "Educational articles, screening guides, and support services for those affected by breast cancer.",
    link: "https://www.nationalbreastcancer.org",
  },
  {
    title: "National Cancer Institute: Breast Cancer",
    description: "NCI's comprehensive resource on breast cancer screening, causes, treatment, and clinical trials.",
    link: "https://www.cancer.gov/types/breast",
  },
];

function FurtherReading() {
  return (
    <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--rule)" }}>
      <div className="max-w-[1200px] mx-auto px-10" style={{ paddingTop: "88px", paddingBottom: "96px", textAlign: "left" }}>
        <SectionNumber n="04" />
        <SectionHeader title="Further reading" />
        <p style={{ color: "var(--ink-soft)", fontSize: "17px", lineHeight: "28px", maxWidth: "68ch", marginBottom: "40px" }}>
          Trusted national sources on breast cancer screening, treatment, and prevention.
        </p>
        <div>
          {readingRows.map((row, i) => (
            <div
              key={row.title}
              style={{
                borderTop: "1px solid var(--rule)",
                paddingTop: "24px",
                paddingBottom: "24px",
                borderBottom: i === readingRows.length - 1 ? "1px solid var(--rule)" : "none",
              }}
            >
              <ResourceRow {...row} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesPage() {
  return (
    <div className="font-inter w-full min-h-screen">
      <Navbar />
      <Hero />
      <ScreeningAppointments />
      <FinancialAssistance />
      <CommunityAdvocacy />
      <FurtherReading />
    </div>
  );
}

export default ResourcesPage;
