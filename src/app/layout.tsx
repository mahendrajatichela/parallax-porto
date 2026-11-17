import type { Metadata } from "next"
import { Montserrat, Space_Grotesk, Arimo, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../context/theme-context"

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
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
})

export const metadata: Metadata = {
  title: "Porche | Frontend Developer",
  description: "Hi! This is Chela Mahendrajati's Portfolio Website",
  icons: {
    icon: "/images/favicon.ico",
  },
}

const themeScript = `
  try {
    var saved = localStorage.getItem('porche_theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
    else if (saved === 'light') document.documentElement.classList.remove('dark');
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.classList.add('dark');
  } catch(e) {}
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${spaceGrotesk.variable} ${arimo.variable} ${plexMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning className="font-mono">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
