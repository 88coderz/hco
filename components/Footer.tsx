"use client"
import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"

// Footer component that appears on all pages
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: "#050909", color: "#fefeff", padding: "2rem 0" }}>
      <Container>
        <Row className="mb-4">
          <Col md={6} className="mb-4 mb-md-0">
            <h3 className="h5 mb-3">Hamlin Construction Company</h3>
            <p className="mb-1">31 South East Ave A</p>
            <p className="mb-1">Hamlin, Texas 79520</p>
            <p className="mb-0">
              <a href="tel:3253385978" style={{ color: "#fefeff", textDecoration: "none" }}>
                (325) 338-5978
              </a>
            </p>
          </Col>

          <Col md={6}>
            <h3 className="h5 mb-3">Quick Links</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/#services" style={{ color: "#fefeff", textDecoration: "none" }}>
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#service-areas" style={{ color: "#fefeff", textDecoration: "none" }}>
                  Service Areas
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#contact" style={{ color: "#fefeff", textDecoration: "none" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <hr style={{ borderColor: "#848584" }} />

        <Row className="text-center">
          <Col xs={12} className="mb-3">
            <small>
              <Link href="/privacy-policy" className="mx-2" style={{ color: "#fefeff", textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="mx-2" style={{ color: "#fefeff", textDecoration: "none" }}>
                Terms and Conditions
              </Link>
              <Link href="/legal-disclaimer" className="mx-2" style={{ color: "#fefeff", textDecoration: "none" }}>
                Legal Disclaimer
              </Link>
              <Link href="/accessibility" className="mx-2" style={{ color: "#fefeff", textDecoration: "none" }}>
                Accessibility Statement
              </Link>
            </small>
          </Col>

          <Col xs={12}>
            <small>&copy; {currentYear} Hamlin Construction Company. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
