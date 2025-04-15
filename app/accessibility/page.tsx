import { Container } from "react-bootstrap"
import NavigationBar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Accessibility Statement page
export default function AccessibilityStatement() {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Navigation bar */}
      <NavigationBar />

      <main id="main-content" className="py-5">
        <Container>
          <h1 className="mb-4" style={{ color: "#730d23" }}>
            Accessibility Statement
          </h1>

          <div className="mb-4">
            <h2 className="h4 mb-3">Our Commitment</h2>
            <p>
              Hamlin Construction Company is committed to ensuring digital accessibility for people with disabilities.
              We are continually improving the user experience for everyone and applying the relevant accessibility
              standards.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">Conformance Status</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to
              improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level
              AA, and Level AAA. Our website strives to conform to WCAG 2.1 level AA.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">Accessibility Features</h2>
            <p>Our website includes the following accessibility features:</p>
            <ul>
              <li>Semantic HTML structure for better screen reader navigation</li>
              <li>Keyboard accessibility for all interactive elements</li>
              <li>Skip to content link for keyboard users</li>
              <li>Sufficient color contrast for text readability</li>
              <li>Responsive design that works on various devices and screen sizes</li>
              <li>Text alternatives for non-text content</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of our website. Please let us know if you encounter
              accessibility barriers:
            </p>
            <address>
              <p>
                Hamlin Construction Company
                <br />
                31 South East Ave A<br />
                Hamlin, Texas 79520
                <br />
                Phone: (325) 338-5978
              </p>
            </address>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
