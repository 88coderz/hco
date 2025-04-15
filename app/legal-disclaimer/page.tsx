import { Container } from "react-bootstrap"
import NavigationBar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Legal Disclaimer page
export default function LegalDisclaimer() {
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
            Legal Disclaimer
          </h1>

          <div className="mb-4">
            <h2 className="h4 mb-3">Information Accuracy</h2>
            <p>
              The information contained on this website is for general information purposes only. Hamlin Construction
              Company makes no representations or warranties of any kind, express or implied, about the completeness,
              accuracy, reliability, suitability, or availability of the information, products, services, or related
              graphics contained on this website.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">Liability</h2>
            <p>
              Any reliance you place on such information is therefore strictly at your own risk. In no event will Hamlin
              Construction Company be liable for any loss or damage including without limitation, indirect or
              consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits
              arising out of, or in connection with, the use of this website.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">External Links</h2>
            <p>
              Through this website, you may be able to link to other websites which are not under the control of Hamlin
              Construction Company. We have no control over the nature, content, and availability of those sites. The
              inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed
              within them.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="h4 mb-3">Contact Us</h2>
            <p>If you have any questions about this Legal Disclaimer, please contact us at:</p>
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
