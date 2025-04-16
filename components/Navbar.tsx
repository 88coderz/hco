"use client"

import type React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"

// Navbar component that appears on all pages
export default function NavigationBar() {
  // Function to handle phone number click
  const handlePhoneClick = (e: React.MouseEvent) => {
    // This will open the phone dialer on mobile devices
    window.location.href = "tel:3253385978"
  }

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="py-2"
      style={{
        borderBottom: "1px solid #848584",
      }}
    >
      <Container>
        {/* Logo on the left */}
        <Navbar.Brand as={Link} href="/" className="p-0">
          {/* Placeholder for logo - replace with actual logo later */}
          <div style={{ width: "150px", height: "50px", position: "relative" }}>
            <Image
              src="/hcoLogo.PNG"
              alt="Hamlin Construction Company Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Navbar.Brand>

        {/* Phone number on the right */}
        <Nav.Link
          href="tel:3253385978"
          onClick={handlePhoneClick}
          className="ms-lg-auto fw-bold"
          style={{ color: "#730d23" }}
        >
          (325) 338-5978
        </Nav.Link>
      </Container>
    </Navbar>
  )
}
