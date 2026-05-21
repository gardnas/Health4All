import { useState, useRef } from 'react';

function TermTooltip({ term, definition, sourceLabel, sourceUrl }) {
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef(null);

  const show = () => {
    clearTimeout(hideTimer.current);
    setVisible(true);
  };
  const hide = () => {
    hideTimer.current = setTimeout(() => setVisible(false), 200);
  };

  return (
    <span
      style={{ position: "relative", display: "inline" }}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <span style={{ borderBottom: "1px solid var(--ink-muted)", paddingBottom: "1px", cursor: "default" }}>
        {term}
      </span>
      {visible && (
        <span
          onMouseEnter={show}
          onMouseLeave={hide}
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "320px",
            backgroundColor: "var(--surface-raise)",
            border: "1px solid var(--rule)",
            padding: "16px",
            zIndex: 50,
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            pointerEvents: "auto",
          }}
        >
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", lineHeight: "20px", color: "var(--ink-soft)", margin: 0 }}>
            {definition}
          </p>
          {sourceLabel && sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "var(--brand)",
                textDecoration: "none",
                borderBottom: "1px solid var(--brand)",
                paddingBottom: "1px",
              }}
            >
              {sourceLabel} →
            </a>
          )}
        </span>
      )}
    </span>
  );
}

export default TermTooltip;
