import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"

// Use the Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] })

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Hamlin Construction Company - Professional Construction Services",
  description:
    "Hamlin Construction Company provides professional construction services including painting, drywall, door installation, and more in Hamlin, Texas and surrounding areas.",
  keywords: "construction, painting, drywall, door installation, Hamlin, Texas",
  authors: [{ name: "Hamlin Construction Company" }],
  creator: "Hamlin Construction Company",
  publisher: "Hamlin Construction Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
