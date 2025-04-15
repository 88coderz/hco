"use client"
import { Container, Row, Col, Card } from "react-bootstrap"

// Contact section component
export default function ContactSection() {
  // Function to handle phone number click
  const handlePhoneClick = () => {
    window.location.href = "tel:3253385978"
  }

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#730d23" }}>
          Contact Us
        </h2>

        <Row className="justify-content-center">
          <Col md={6} lg={5} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <h3 className="h5 mb-3">Address</h3>
                <address className="mb-0" style={{ fontStyle: "normal" }}>
                  31 South East Ave A<br />
                  Hamlin, Texas 79520
                </address>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={5} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <h3 className="h5 mb-3">Phone</h3>
                <p className="mb-0">
                  <a href="tel:3253385978" onClick={handlePhoneClick} style={{ color: "#730d23", fontWeight: "bold" }}>
                    (325) 338-5978
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
