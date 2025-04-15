"use client"
import { Container, Row, Col } from "react-bootstrap"

// Service areas around 79520
const serviceAreas = [
  "Hamlin, Texas",
  "Tuxedo, Texas",
  "Radium, Texas",
  "Plainiew, Texas",
  "Anson, Texas",
  "Royston, Texas",
  "McCaulley, Texas",
  "Pledger, Texas",
  "Roby, Texas",
  "Rotan, Texas",
  "Aspermont, Texas",
  "Peacock, Texas",
  "Swenson, Texas",
  "Flat Top, Texas",
  "Old Glory, Texas",
  "Rule, Texas",
  "Sagerton, Texas",
  "Sylester, Texas",
  "Haskell, Texas",
  "Paint Creek, Texas",
  "Stamford, Texas",
  "Avoca, Texas",
]

// Service areas section component
export default function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-5">
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#730d23" }}>
          Service Areas
        </h2>
        <p className="text-center mb-4">Serving communities around 79520</p>

        <Row className="justify-content-center">
          {/* Divide service areas into columns */}
          {[0, 1, 2].map((colIndex) => (
            <Col key={colIndex} xs={12} md={4} className="mb-4">
              <ul className="list-unstyled">
                {serviceAreas
                  .filter((_, index) => index % 3 === colIndex)
                  .map((area, index) => (
                    <li key={index} className="mb-2 text-center" style={{ color: "#050909" }}>
                      {area}
                    </li>
                  ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
