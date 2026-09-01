import "./Footer.css";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-shell">
          <div className="footer-brand" aria-label="Katherine Vanessa">
            <span className="footer-brand-mark">KV</span>
          </div>

          <div className="footer-copy">
            <p className="footer-primary">
              Designed &amp; developed by Katherine Vanessa
              <span className="footer-dot" aria-hidden="true">·</span>
              Updated 2026
            </p>

            <p className="footer-secondary">
              © 2024-2026. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <span className="footer-back-label">Back to top</span>

            <span className="footer-back-icon">
              <ArrowUp size={17} strokeWidth={2} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}