import Navbar from './Navbar';

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
        <p
          className="lede"
          style={{ marginTop: "24px", maxWidth: "58ch", margin: "24px auto 0" }}
        >
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

function DataSources() {
  return (
    <div className="w-full font-inter min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

export default DataSources;
