import type { Metadata } from "next"
import { Inter, Montserrat, Space_Grotesk, Arimo } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})
const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
})

export const metadata: Metadata = {
  title: "Porche | Frontend Developer",
  description: "Hi! This is Chela Mahendrajati's Portfolio Website",
  icons: {
    icon: "/images/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${spaceGrotesk.variable} ${arimo.variable}`}>
      <body className={`${inter.className} font-space-grotesk`}>{children}</body>
    </html>
  )
}
