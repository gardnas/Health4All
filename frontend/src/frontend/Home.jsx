import React from "react";
import homepageImg from "../assets/homepage.png";
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import TermTooltip from './TermTooltip';

function Hero() {
  return (
    <section style={{ backgroundColor: "var(--surface)" }}>
      <div className="max-w-[1200px] mx-auto px-10 pt-24 pb-24">
        <div className="grid grid-cols-12 gap-10 items-center">

          {/* Left — text */}
          <div className="col-span-12 lg:col-span-6 text-left">
            <div
              style={{
                width: "48px",
                height: "3px",
                backgroundColor: "var(--brand)",
                marginBottom: "24px",
              }}
            />
            <h1
              className="mb-8"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "56px",
                lineHeight: "64px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "var(--ink)",
                maxWidth: "18ch",
              }}
            >
              Understanding breast cancer diagnosis rates across King County.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                lineHeight: "32px",
                fontWeight: 400,
                color: "var(--ink-soft)",
                maxWidth: "60ch",
              }}
            >
              A guide to interpreting breast cancer diagnosis rates across King County, 
              designed for individuals without a public-health background. This site shows what the data measures,
               where it comes from, and what it does <em>not</em> tell you about personal risk.
            </p>
            <div className="mt-10 flex items-center gap-8">
              <Link
                to="/primer"
                style={{
                  display: "inline-block",
                  backgroundColor: "var(--brand)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: "15px",
                  padding: "10px 20px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Start here →
              </Link>
              <Link
                to="/map"
                style={{
                  color: "var(--ink-muted)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: "15px",
                  borderBottom: "1px solid var(--ink-muted)",
                  paddingBottom: "2px",
                  textDecoration: "none",
                }}
              >
                Skip, continue to the map
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div className="col-span-12 lg:col-span-6">
            <img
              src={homepageImg}
              alt="A residential street in a Seattle neighborhood"
              style={{
                width: "100%",
                aspectRatio: "4 / 5",
                objectFit: "cover",
                filter: "saturate(0.88)",
                display: "block",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-mono, ui-monospace, monospace)",
                fontSize: "11px",
                letterSpacing: "0.04em",
                color: "var(--ink-muted)",
                marginTop: "12px",
                textTransform: "uppercase",
              }}
            >
              {/* 
               */}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}



function KingCountyGlance() {
  const stats = [
    {
      value: "68.9%",
      line: "of women age 40+ in King County had a mammogram in the past two years.",
      source: "NCI State Cancer Profiles (BRFSS + NHIS), 2021–2023",
      href: "https://statecancerprofiles.cancer.gov/risk/index.php?stateFIPS=53&areatype=county&topic=women&risk=v06&race=00&sex=2&datatype=1&type=risk",
    },
    {
      value: "148.2",
      line: <>breast cancer diagnoses per 100,000 women in King County (<TermTooltip term="age-adjusted" definition="A method used to make fair comparisons between populations with different age distributions. Since breast cancer is more common in older women, age-adjustment ensures rates reflect differences in detection, not just differences in age." sourceLabel="CDC — National Center for Health Statistics" sourceUrl="https://www.cdc.gov/nchs/hus/sources-definitions/age-adjustment.htm" />).</>,
      source: "NCI State Cancer Profiles / SEER+NPCR, 2018–2022",
      href: "https://statecancerprofiles.cancer.gov/incidencerates/index.php?stateFIPS=53&areatype=county&cancer=055&stage=999&race=00&sex=2&age=001&type=incd&sortVariableName=count&sortOrder=desc",
    },
    {
      value: "131.3",
      line: "breast cancer diagnoses per 100,000 women, the U.S. national average.",
      source: "NCI State Cancer Profiles / SEER+NPCR, 2018–2022",
      href: "https://statecancerprofiles.cancer.gov/incidencerates/index.php?stateFIPS=53&areatype=county&cancer=055&stage=999&race=00&sex=2&age=001&type=incd&sortVariableName=count&sortOrder=desc",
    },
    {
      value: "6.2%",
      line: "of King County adults under 65 lacked health insurance in 2022.",
      source: "U.S. Census Bureau, ACS 1-Year Estimates, 2022",
      href: "https://data.census.gov/table?q=S2701&g=050XX00US53033&y=2022",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "var(--surface-warm)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-10 py-24">
        <div style={{ marginBottom: "56px", textAlign: "left" }}>
          <div
            style={{
              width: "48px",
              height: "3px",
              backgroundColor: "var(--brand)",
              marginBottom: "24px",
            }}
          />
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "36px",
              lineHeight: "44px",
              fontWeight: 600,
              color: "var(--ink)",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            King County at a glance.
          </h2>
          <p
            style={{
              marginTop: "16px",
              color: "var(--ink-soft)",
              fontSize: "16px",
              fontWeight: 400,
              maxWidth: "60ch",
            }}
          >
            Four baseline numbers that frame every neighborhood comparison on this site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div
              key={s.value}
              style={{
                borderTop: "1px solid var(--rule)",
                paddingTop: "20px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "64px",
                  lineHeight: 1,
                  fontWeight: 600,
                  color: "var(--brand)",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </div>
              <p
                style={{
                  marginTop: "16px",
                  color: "var(--ink-soft)",
                  fontSize: "16px",
                  lineHeight: "26px",
                  textAlign: "left",
                }}
              >
                {s.line}
              </p>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  letterSpacing: "0",
                  color: "var(--ink-muted)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--rule)",
                  paddingBottom: "1px",
                  transition: "color 150ms ease, border-color 150ms ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--brand)";
                  e.currentTarget.style.borderBottomColor = "var(--brand)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--ink-muted)";
                  e.currentTarget.style.borderBottomColor = "var(--rule)";
                }}
              >
                Source · {s.source}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrimerCTA() {
  return (
    <section style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--rule)" }}>
      <div className="max-w-[1200px] mx-auto px-10" style={{ paddingTop: "88px", paddingBottom: "96px", textAlign: "left" }}>
        <div style={{ width: "48px", height: "3px", backgroundColor: "var(--brand)", marginBottom: "24px" }} />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "36px", lineHeight: "44px", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.01em", maxWidth: "28ch", margin: 0 }}>
              Before you explore the map, read the primer.
            </h2>
            <p style={{ marginTop: "16px", color: "var(--ink-soft)", fontSize: "16px", lineHeight: "26px", maxWidth: "52ch" }}>
              The primer explains what the diagnosis rates mean, what the social indicators show, and what the map does not tell you about personal risk.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <Link
              to="/primer"
              style={{
                display: "inline-block",
                backgroundColor: "var(--brand)",
                color: "#FFFFFF",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: "15px",
                padding: "10px 20px",
                textDecoration: "none",
                borderRadius: "4px",
                whiteSpace: "nowrap",
              }}
            >
              Read the primer →
            </Link>
            <Link
              to="/map"
              style={{ color: "var(--ink-muted)", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "14px", borderBottom: "1px solid var(--rule)", paddingBottom: "2px", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              Go straight to the map
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="w-full font-inter min-h-screen">
      <Navbar />
      <Hero />
      <KingCountyGlance />
<PrimerCTA />
    </div>
  );
}

export default Home;
