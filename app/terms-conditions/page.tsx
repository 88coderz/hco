import { Container } from "react-bootstrap"
import NavigationBar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Terms and Conditions page
export default function TermsConditions() {
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
            Terms and Conditions
          </h1>

          <div className="mb-4">
            <h2 className="h4 mb-3">Agreement to Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy
              Policy.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">Use of Website</h2>
            <p>You may use our website only for lawful purposes and in accordance with these Terms and Conditions.</p>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">Intellectual Property Rights</h2>
            <p>
              The website and its entire contents, features, and functionality are owned by Hamlin Construction Company
              and are protected by United States and international copyright, trademark, and other intellectual property
              or proprietary rights laws.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">Limitation of Liability</h2>
            <p>
              In no event will Hamlin Construction Company, its affiliates, or their licensors, service providers,
              employees, agents, officers, or directors be liable for damages of any kind arising from the use of, or
              inability to use, our website.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
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
