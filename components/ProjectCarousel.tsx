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
// Junior developers can easily add, remove, or modify images here
const projectImages: ProjectImage[] = [
  {
    id: 1,
    src: "/oldHouse2.png", // Replace with actual image path
    alt: "Interior painting project in Hamlin",
    title: "Interior Painting",
    description: "Complete interior painting of a residential home in Hamlin.",
  },
  {
    id: 2,
    src: "/oldHouse1.png", // Replace with actual image path
    alt: "Drywall installation project",
    title: "Drywall Installation",
    description: "New drywall installation for a commercial building.",
  },
  {
    id: 3,
    src: "/finished-back.png", // Replace with actual image path
    alt: "Door installation project",
    title: "Door Installation",
    description: "Custom door installation for a residential client.",
  },
  {
    id: 4,
    src: "/working-back.png", // Replace with actual image path
    alt: "Exterior painting project",
    title: "Exterior Painting",
    description: "Complete exterior painting of a home in Anson.",
  },
  {
    id: 5,
    src: "/working-side.png", // Replace with actual image path
    alt: "Lighting installation project",
    title: "Lighting Installation",
    description: "Modern lighting installation for a kitchen remodel.",
  },
  {
    id: 6,
    src: "/finished-back.png", // Replace with actual image path
    alt: "Baseboard installation project",
    title: "Baseboard Installation",
    description: "Custom baseboard installation throughout a new home.",
  },
  {
    id: 7,
    src: "/finished-deck.png", // Replace with actual image path
    alt: "Shed repair project",
    title: "Shed Repair",
    description: "Complete renovation of an outdoor storage shed.",
  },
  {
    id: 8,
    src: "/flooring.png", // Replace with actual image path
    alt: "Garage door installation",
    title: "Garage Renovation",
    description: "Garage renovation including new door installation.",
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
        <h2 className="text-center mb-4" style={{ color: "#730d23" }}>
          Our Projects
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
          <p className="text-muted mb-2">Click on an image to pause the slideshow. Swipe left or right to navigate.</p>
          <p className="text-muted">Showing {projectImages.length} of our recent projects</p>
        </div>
      </Container>
    </section>
  )
}