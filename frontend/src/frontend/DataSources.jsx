import Navbar from './Navbar';
import { Link } from 'react-router-dom';

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

const limitations = [
  {
    heading: "This tool does not measure personal risk",
    body: "All data is community-level and reflects aggregate patterns across neighborhoods, not the circumstances of any individual. Diagnosis rates count recorded cases which are cancers that were found through screening. A higher rate often means better screening access, not more cancer. Nothing on this site can or should be used to assess personal cancer risk or make medical decisions.",
  },
  {
    heading: "Data is not real-time",
    body: "Breast cancer rates cover 2018–2022. Insurance figures are from 2022. Income, poverty, and demographic estimates come from the American Community Survey and may not reflect current conditions in rapidly changing neighborhoods.",
  },
];

const homeStats = [
  {
    label: "Mammography screening rate (68.9%)",
    source: "NCI State Cancer Profiles (BRFSS + NHIS), 2021–2023",
    url: "https://statecancerprofiles.cancer.gov/risk/index.php?stateFIPS=53&areatype=county&topic=women&risk=v06&race=00&sex=2&datatype=1&type=risk",
  },
  {
    label: "King County diagnosis rate (148.2 per 100,000) and U.S. average (131.3)",
    source: "NCI State Cancer Profiles / SEER+NPCR, 2018–2022",
    url: "https://statecancerprofiles.cancer.gov/incidencerates/index.php?stateFIPS=53&areatype=county&cancer=055&stage=999&race=00&sex=2&age=001&type=incd&sortVariableName=count&sortOrder=desc",
  },
  {
    label: "Uninsured rate (6.2%)",
    source: "U.S. Census Bureau, ACS 1-Year Estimates, 2022",
    url: "https://data.census.gov/table?q=S2701&g=050XX00US53033&y=2022",
  },
];

const mapData = [
  {
    label: "Breast cancer diagnosis rates by Health Reporting Area",
    source: "King County Public Health, Community Health Indicators / Washington State Cancer Registry, 2018–2022",
    url: "https://kingcounty.gov/en/dept/dph/about-public-health/data-reports/population-health-data/community-health-indicators/washington-state-cancer-registry?shortname=Breast%20cancer%20incidence",
  },
  {
    label: "Median household income, poverty rate, race/ethnicity demographics",
    source: "King County Public Health, Community Health Indicators (U.S. Census Bureau, ACS)",
    url: "https://kingcounty.gov/en/dept/dph/about-public-health/data-reports/population-health-data/community-health-indicators",
  },
  {
    label: "Geographic boundaries (Health Reporting Area polygons)",
    source: "King County GeoJSON, included in the Community Health Indicators dataset",
    url: "https://kingcounty.gov/en/dept/dph/about-public-health/data-reports/population-health-data/community-health-indicators",
  },
];

const mapSteps = [
  {
    n: "01",
    label: "61 Health Reporting Areas plotted",
    body: "Each Health Reporting Area (HRA) is an administrative geographic boundary defined by King County Public Health for collecting and reporting neighborhood-level health data. Each HRA is drawn on the map using GeoJSON polygon boundaries from the Community Health Indicators dataset.",
  },
  {
    n: "02",
    label: "5-bin color classification of diagnosis rates",
    body: "Age-adjusted rates are grouped into five bins: < 120 / 120–134 / 135–154 / 155–174 / 175+ per 100,000 females. Each bin maps to a shade on a single-hue blue color scale, lighter means a lower recorded rate, darker means higher.",
  },
  {
    n: "03",
    label: "Social indicators matched by Health Reporting Area name",
    body: "Neighborhood-level data (income, insurance, poverty, and race/ethnicity) is joined to each Health Reporting Area by name. Clicking a neighborhood on the map displays all available indicators for that area in the side panel.",
  },
  {
    n: "04",
    label: "Static data (no backend server)",
    body: "All data is bundled as static JSON files loaded entirely in the browser. There is no backend server or database. The map works immediately on page load with no network requests to an external API.",
  },
  {
    n: "05",
    label: "Built with React, Leaflet, and Tailwind CSS",
    body: "The map layer uses React Leaflet for polygon rendering and interaction. The site is built with React and Vite, styled with Tailwind CSS v4 and CSS custom properties.",
  },
];

function SourceLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: "var(--font-mono, ui-monospace, monospace)",
        fontSize: "11px",
        letterSpacing: "0.04em",
        color: "var(--brand)",
        textDecoration: "none",
        borderBottom: "1px solid var(--brand)",
        paddingBottom: "1px",
        wordBreak: "break-all",
        transition: "opacity 150ms ease",
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
      onMouseLeave={e => e.currentTarget.style.opacity = "1"}
    >
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section style={{ backgroundColor: "var(--surface)" }}>
      <div className="max-w-[1200px] mx-auto px-10" style={{ paddingTop: "80px", paddingBottom: "72px", textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: "24px" }}>Methodology</div>
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
          How this data was collected, processed, and displayed.
        </h1>
        <p className="lede" style={{ marginTop: "24px", maxWidth: "58ch", margin: "24px auto 0" }}>
          This page is for readers who want to understand the data behind the
          map before drawing conclusions. It covers sources, limitations,
          technical methods, and what the numbers can and cannot tell you.
        </p>
        <div style={{ marginTop: "40px", borderTop: "1px solid var(--rule)", paddingTop: "20px" }}>
          <div className="flex justify-center gap-12 flex-wrap">
            {[
              ["01", "Limitations"],
              ["02", "Data sources"],
              ["03", "Age adjustment"],
              ["04", "How the map was built"],
            ].map(([num, label]) => (
              <span key={num} style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--ink-muted)" }}>
                <span style={{ color: "var(--brand)", fontWeight: 600 }}>{num}</span>{"  "}{label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Limitations() {
  return (
    <section style={{ backgroundColor: "var(--surface-warm)", borderTop: "1px solid var(--rule)" }}>
      <div className="max-w-[1200px] mx-auto px-10" style={{ paddingTop: "88px", paddingBottom: "88px", textAlign: "left" }}>
        <div style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)", fontSize: "13px", color: "var(--ink-muted)", letterSpacing: "0.08em", marginBottom: "24px" }}>
          01
        </div>
        <SectionHeader title="Limitations" />
        <p style={{ color: "var(--ink-soft)", fontSize: "17px", lineHeight: "28px", marginBottom: "40px", maxWidth: "68ch" }}>
          Understanding what this data cannot tell you is as important as what
          it can. Read these before drawing conclusions from neighborhood
          comparisons.
        </p>
        <div>
          {limitations.map((lim, i) => (
            <div
              key={lim.heading}
              style={{
                borderTop: "1px solid var(--rule)",
                paddingTop: "28px",
                paddingBottom: "28px",
                borderBottom: i === limitations.length - 1 ? "1px solid var(--rule)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent)", marginTop: "9px", flexShrink: 0 }} />
                <div>
                  <p style={{ color: "var(--ink)", fontWeight: 500, fontSize: "16px", fontFamily: "var(--font-sans)", marginBottom: "8px" }}>
                    {lim.heading}
                  </p>
                  <p style={{ color: "var(--ink-soft)", fontSize: "15px", lineHeight: "24px", margin: 0 }}>
                    {lim.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DataSourcesSection() {
  return (
    <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--rule)" }}>
      <div className="max-w-[1200px] mx-auto px-10" style={{ paddingTop: "88px", paddingBottom: "88px", textAlign: "left" }}>
        <div style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)", fontSize: "13px", color: "var(--ink-muted)", letterSpacing: "0.08em", marginBottom: "24px" }}>
          02
        </div>
        <SectionHeader title="Data sources" />

        {/* Home page statistics */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "15px", color: "var(--ink)", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid var(--rule)" }}>
            Home page statistics
          </div>
          {homeStats.map((s, i) => (
            <div
              key={s.label}
              style={{ paddingTop: "20px", paddingBottom: "20px", borderBottom: i < homeStats.length - 1 ? "1px solid var(--rule)" : "none" }}
            >
              <p style={{ color: "var(--ink)", fontSize: "15px", fontWeight: 500, marginBottom: "6px", fontFamily: "var(--font-sans)" }}>{s.label}</p>
              <p style={{ color: "var(--ink-soft)", fontSize: "14px", lineHeight: "22px", marginBottom: "8px", fontFamily: "var(--font-sans)" }}>{s.source}</p>
              <SourceLink href={s.url}>{s.url}</SourceLink>
            </div>
          ))}
        </div>

        {/* Map data */}
        <div>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "15px", color: "var(--ink)", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid var(--rule)" }}>
            Map data (neighborhood level)
          </div>
          {mapData.map((s, i) => (
            <div
              key={s.label}
              style={{ paddingTop: "20px", paddingBottom: "20px", borderBottom: i < mapData.length - 1 ? "1px solid var(--rule)" : "none" }}
            >
              <p style={{ color: "var(--ink)", fontSize: "15px", fontWeight: 500, marginBottom: "6px", fontFamily: "var(--font-sans)" }}>{s.label}</p>
              <p style={{ color: "var(--ink-soft)", fontSize: "14px", lineHeight: "22px", marginBottom: "8px", fontFamily: "var(--font-sans)" }}>{s.source}</p>
              <SourceLink href={s.url}>{s.url}</SourceLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgeAdjustment() {
  return (
    <section style={{ backgroundColor: "var(--surface-warm)", borderTop: "1px solid var(--rule)" }}>
      <div className="max-w-[1200px] mx-auto px-10" style={{ paddingTop: "88px", paddingBottom: "88px", textAlign: "left" }}>
        <div style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)", fontSize: "13px", color: "var(--ink-muted)", letterSpacing: "0.08em", marginBottom: "24px" }}>
          03
        </div>
        <SectionHeader title="Age adjustment" />

        <p style={{ color: "var(--ink-soft)", fontSize: "17px", lineHeight: "28px", maxWidth: "68ch", marginBottom: "24px" }}>
          Breast cancer is significantly more common in older women. Without
          controlling for age, a neighborhood with a large elderly population
          would appear to have more cancer simply because its residents are
          older, not because anything is worse about the care environment
          there. Age adjustment removes this demographic distortion so that
          neighborhoods can be compared on equal footing.
        </p>

        <p style={{ color: "var(--ink-soft)", fontSize: "17px", lineHeight: "28px", maxWidth: "68ch", marginBottom: "32px" }}>
          The method used is{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
            direct standardization against the 2000 U.S. Standard Population
          </strong>
          , the benchmark set by the National Cancer Institute and CDC for
          cancer surveillance. Each neighborhood's raw rates are calculated per
          age band, weighted against the 2000 U.S. population proportions, and
          summed into a single comparable rate per 100,000 females. Age
          adjustment was performed upstream by the Washington State Cancer
          Registry.
        </p>

        <SourceLink href="https://seer.cancer.gov/stdpopulations/">
          NCI SEER standard populations reference →
        </SourceLink>
      </div>
    </section>
  );
}

function HowMapWasBuilt() {
  return (
    <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--rule)" }}>
      <div className="max-w-[1200px] mx-auto px-10" style={{ paddingTop: "88px", paddingBottom: "96px", textAlign: "left" }}>
        <div style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)", fontSize: "13px", color: "var(--ink-muted)", letterSpacing: "0.08em", marginBottom: "24px" }}>
          04
        </div>
        <SectionHeader title="How the map was built" />

        <p style={{ color: "var(--ink-soft)", fontSize: "17px", lineHeight: "28px", maxWidth: "68ch", marginBottom: "40px" }}>
          A high-level description of the technical methods used to build and display the neighborhood map.
        </p>

        <div>
          {mapSteps.map((step, i) => (
            <div
              key={step.n}
              style={{
                borderTop: "1px solid var(--rule)",
                paddingTop: "28px",
                paddingBottom: "28px",
                borderBottom: i === mapSteps.length - 1 ? "1px solid var(--rule)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
                <div style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)", color: "var(--brand)", fontSize: "13px", letterSpacing: "0.08em", flexShrink: 0, paddingTop: "3px" }}>
                  {step.n}
                </div>
                <div>
                  <p style={{ color: "var(--ink)", fontWeight: 500, fontSize: "16px", fontFamily: "var(--font-sans)", marginBottom: "8px" }}>
                    {step.label}
                  </p>
                  <p style={{ color: "var(--ink-soft)", fontSize: "15px", lineHeight: "24px", margin: 0 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid var(--rule)", display: "flex", alignItems: "center", gap: "32px" }}>
          <Link to="/map" style={{ color: "var(--brand)", fontWeight: 500, fontSize: "15px", borderBottom: "1px solid var(--brand)", paddingBottom: "2px", textDecoration: "none" }}>
            Open the map →
          </Link>
          <Link to="/primer" style={{ color: "var(--ink-muted)", fontWeight: 500, fontSize: "14px", borderBottom: "1px solid var(--rule)", paddingBottom: "2px", textDecoration: "none" }}>
            Read the primer
          </Link>
        </div>
      </div>
    </section>
  );
}

function DataSources() {
  return (
    <div className="w-full font-inter min-h-screen">
      <Navbar />
      <Hero />
      <Limitations />
      <DataSourcesSection />
      <AgeAdjustment />
      <HowMapWasBuilt />
    </div>
  );
}

export default DataSources;
