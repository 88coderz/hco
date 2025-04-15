import { Container } from "react-bootstrap"
import NavigationBar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Privacy Policy page
export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>

          <div className="mb-4">
            <h2 className="h4 mb-3">Introduction</h2>
            <p>
              Hamlin Construction Company ("we," "our," or "us") respects your privacy and is committed to protecting it
              through our compliance with this policy.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">Information We Collect</h2>
            <p>We may collect several types of information from and about users of our website, including:</p>
            <ul>
              <li>Contact information if you reach out to us</li>
              <li>Information about your internet connection and the equipment you use to access our website</li>
              <li>Usage details such as traffic data and other communication data</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">How We Use Your Information</h2>
            <p>We use information that we collect about you or that you provide to us:</p>
            <ul>
              <li>To present our website and its contents to you</li>
              <li>To provide you with information or services that you request from us</li>
              <li>To fulfill any other purpose for which you provide it</li>
              <li>To carry out our obligations and enforce our rights</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
