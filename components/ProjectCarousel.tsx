"use client"

import { useState } from "react"
import { Carousel, Container } from "react-bootstrap"
import Image from "next/image"

// Define a type for project images to make the code more maintainable
type ProjectImage = {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

// Create an array of project images
 const projectImages: ProjectImage[] = [
  {
    id: 1,
    src: "/oldHouse2.png", // Replace with actual image path
    alt: "Drywall installation and interior painting project in Hamlin",
    title: "Professional home and shed improvements",
    description: "Complete interior painting of a residential home in Hamlin.",
  },
  {
    id: 2,
    src: "/oldHouse1.png", // Replace with actual image path
    alt: "Drywall installation project",
    title: "Home Renovations and exterior painting",
    description: " and .",
  },
  {
    id: 3,
    src: "/finished-back.png", // Replace with actual image path
    alt: "Door installation project",
    title: "Door and Window Installations and repairs",
    description: "Door and Window repairs and installations.",
  },
  {
    id: 4,
    src: "/working-back.png", // Replace with actual image path
    alt: "Exterior painting project",
    title: "Exterior Painting",
    description: "Complete exterior painting of a homes in and around Hamlin, Texas.",
  },
  {
    id: 5,
    src: "/working-side.png", // Replace with actual image path
    alt: "Repairs and painting services around Hamlin, Texas 79520",
    title: "Kitchen Remodeling and upgrades",
    description: "Modern kitchen remodels.",
  },
  {
    id: 6,
    src: "/finished-back.png", // Replace with actual image path
    alt: "Home Repairs and professional painting and brick washing around Hamlin, Texas 79520",
    title: "Home Repairs and interior/exterior painting",
    description: "Making improvements throughout a your home.",
  },
  {
    id: 7,
    src: "/finished-deck.png", // Replace with actual image path
    alt: "Shed repair project",
    title: "Shed shed roof repairs",
    description: "Complete renovation and repairs of your storage shed.",
  },
  {
    id: 8,
    src: "/flooring.png", // Replace with actual image path
    alt: "Garage repairs around Hamlin, Texas",
    title: "Garage Renovations and repairs",
    description: "Get ready for summer 2025!",
  },
]

// Carousel component to showcase project images
export default function ProjectCarousel() {
  // State to track if carousel is paused
  const [isPaused, setIsPaused] = useState(false)

  // Toggle pause state when image is clicked
  const handleImageClick = () => {
    setIsPaused(!isPaused)
  }

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#35880e" }}>
          Projects
        </h2>

        <Carousel interval={isPaused ? null : 5000} indicators={true} controls={true} touch={true} pause="hover">
          {/* Map through the projectImages array to create carousel items */}
          {projectImages.map((image) => (
            <Carousel.Item key={image.id}>
              <div
                style={{
                  position: "relative",
                  height: "60vh",
                  maxHeight: "600px",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={handleImageClick}
                role="button"
                tabIndex={0}
                aria-label={`${image.alt}, click to ${isPaused ? "resume" : "pause"} slideshow`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleImageClick()
                  }
                }}
              >
                {/* Use placeholder images until real images are added */}
                <Image
                  src={
                    image.src.startsWith("/projects")
                      ? `/finished-back.png?height=600&width=1200&text=${encodeURIComponent(image.title)}`
                      : image.src
                  }
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority={image.id === 1} // Only prioritize the first image
                />
              </div>
              <Carousel.Caption>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="text-center mt-4">
          <p className="text-muted mb-2">Thank you for over 20 years in business</p>
          <p className="text-muted">Give us a call for a complete list of our services</p>
        </div>
      </Container>
    </section>
  )
}