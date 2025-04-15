"use client"
import { Container } from "react-bootstrap"
import Image from "next/image"

// Hero section that appears at the top of the homepage
export default function HeroSection() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background image - replace with actual image later */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <Image
          src="/working-back.png?height=1080&width=1920"
          alt="Construction background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Overlay to ensure text is readable */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />

      {/* Main heading with blurred background */}
      <Container className="text-center" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "inline-block",
            padding: "2rem",
            backgroundColor: "rgba(5,9,9,0.6)",
            backdropFilter: "blur(8px)",
            borderRadius: "8px",
          }}
        >
          <h1
            style={{
              color: "#fefeff",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            Hamlin Construction Company
          </h1>
        </div>
      </Container>
    </div>
  )
}
