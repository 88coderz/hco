"use client"
import { Container, Row, Col, Card } from "react-bootstrap"

// Services offered by the company
const services = [
  "Painting Interior and Exterior",
  "Drywall Mounting",
  "Drywall Repairs",
  "Door Installation",
  "Door Jam Installation",
  "Lighting Installation Interior and Exterior",
  "Baseboard Installation and Repair",
  "Finishing Work",
  "Shed Repairs",
  "Garage Repairs",
]

// Services section component
export default function ServicesSection() {
  return (
    <section id="services" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#35880e" }}>
          Our Services
        </h2>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  borderColor: "#848584",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => {
                  if (window.innerWidth > 768) {
                    e.currentTarget.style.transform = "translateY(-5px)"
                  }
                }}
                onMouseOut={(e) => {
                  if (window.innerWidth > 768) {
                    e.currentTarget.style.transform = "translateY(0)"
                  }
                }}
              >
                <Card.Body className="d-flex align-items-center">
                  <Card.Text className="m-0 text-center w-100">{service}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
