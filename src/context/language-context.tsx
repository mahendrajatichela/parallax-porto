"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "id";

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  landing: {
    role: string;
    letsGo: string;
  };
  projects: {
    title: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      technologies: string[];
      dateRange: string;
      association: string;
      demo: string;
    }>;
  };
  skills: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    cardTitle: string;
    sendEmail: string;
    socialText: string;
  };
  footer: {
    tagline: string;
    status: string;
    connectWithMe: string;
    backToTop: string;
    allRightsReserved: string;
    builtWith: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    landing: {
      role: "Frontend Developer",
      letsGo: "Let's Go",
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          id: "acc-1",
          title: "XL Smart - Migration to Tencent Cloud",
          description:
            "Migration of consent management from AWS to Tencent Cloud. Also migrated the Smartfren web application from on-premise infrastructure to Tencent.",
          technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
          dateRange: "March 2026 - September 2026",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-2",
          title: "IFG Life - OneForce Platform",
          description:
            "Major alteration and architectural enhancement of the OneForce Platform for IFG Life.",
          technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "TypeScript"],
          dateRange: "October 2025 - December 2025",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-3",
          title: "Bahana - KIK Efek Beragun Aset",
          description:
            "Implementation of Collective Investment Contract – Asset-Backed Securities (KIK-EBA) financial platform.",
          technologies: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript"],
          dateRange: "April 2025 - September 2025",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-4",
          title: "Maybank - Octopus Project",
          description:
            "Enterprise project implementation driving digital transformation across Maybank banking services.",
          technologies: ["JSP", "jQuery", "Bootstrap"],
          dateRange: "March 2024 - March 2025",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-5",
          title: "KB Bank - Revamp KB Bank",
          description:
            "Comprehensive revamp and frontend modernization of KB Bank's core digital banking platform.",
          technologies: ["JSP", "jQuery", "Bootstrap", "JexFrame"],
          dateRange: "January 2024 - March 2024",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-6",
          title: "OML Innovoice",
          description:
            "Full-cycle development and seamless deployment of the OML Innovoice financial billing system.",
          technologies: ["React.js", "Tailwind CSS"],
          dateRange: "January 2023 - December 2023",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-7",
          title: "Maybank - AA Project",
          description:
            "High-impact system implementation supporting Maybank's regional digital modernization roadmap.",
          technologies: ["JSP", "jQuery", "Bootstrap"],
          dateRange: "August 2022 - December 2022",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-8",
          title: "Renstra Application",
          description:
            "Strategic educational planning platform development and deployment for Al Firdaus Education Foundation.",
          technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "TypeScript"],
          dateRange: "January 2022 - July 2022",
          association: "Lembaga Pendidikan Al Firdaus",
          demo: "#",
        },
      ],
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technologies and tools I use to bring ideas to life",
      items: [
        {
          title: "Tech / Stack",
          description:
            "Proficient in TypeScript and JavaScript (ES6+), developing modern user interfaces with Next.js, React, and Vue.js.",
        },
        {
          title: "UI/UX & Styling",
          description:
            "Building accessible, responsive interfaces using Tailwind CSS, shadcn/ui, Bootstrap, and Figma handoffs.",
        },
        {
          title: "Developer Tools",
          description: "Experienced with Git, Vite, Postman, Jira, and Trello.",
        },
        {
          title: "State Management",
          description:
            "Pinia, Redux Toolkit and Zustand for managing complex application state.",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "I'm always open to new opportunities and collaborations. Feel free to reach out!",
      cardTitle: "Let's Work Together",
      sendEmail: "Send me an email",
      socialText: "Or connect with me on social media",
    },
    footer: {
      tagline:
        "Crafting immersive, interactive web experiences with modern architecture, dynamic motion, and bold design.",
      status: "Available for freelance & full-time roles",
      connectWithMe: "Connect With Me",
      backToTop: "Back to top",
      allRightsReserved: "All rights reserved.",
      builtWith: "Built with",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      contact: "Kontak",
    },
    landing: {
      role: "Frontend Developer",
      letsGo: "Mulai Jelajahi",
    },
    projects: {
      title: "Proyek Pilihan",
      items: [
        {
          id: "acc-1",
          title: "XL Smart - Migrasi ke Tencent Cloud",
          description:
            "Migrasi manajemen izin (consent) dari AWS ke Tencent Cloud. Serta migrasi aplikasi web Smartfren dari infrastruktur on-premise ke Tencent Cloud.",
          technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
          dateRange: "Maret 2026 - September 2026",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-2",
          title: "IFG Life - Platform OneForce",
          description:
            "Pembaruan arsitektur skala besar dan peningkatan performa pada Platform OneForce untuk IFG Life.",
          technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "TypeScript"],
          dateRange: "Oktober 2025 - Desember 2025",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-3",
          title: "Bahana - KIK Efek Beragun Aset",
          description:
            "Implementasi sistem platform keuangan Kontrak Investasi Kolektif – Efek Beragun Aset (KIK-EBA).",
          technologies: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript"],
          dateRange: "April 2025 - September 2025",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-4",
          title: "Maybank - Proyek Octopus",
          description:
            "Implementasi proyek berskala besar untuk mendukung percepatan transformasi digital layanan perbankan Maybank.",
          technologies: ["JSP", "jQuery", "Bootstrap"],
          dateRange: "Maret 2024 - Maret 2025",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-5",
          title: "KB Bank - Revamp KB Bank",
          description:
            "Revamp menyeluruh dan modernisasi antarmuka platform perbankan digital inti KB Bank.",
          technologies: ["JSP", "jQuery", "Bootstrap", "JexFrame"],
          dateRange: "Januari 2024 - Maret 2024",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-6",
          title: "OML Innovoice",
          description:
            "Pengembangan siklus penuh dan implementasi sistem penagihan keuangan OML Innovoice.",
          technologies: ["React.js", "Tailwind CSS"],
          dateRange: "Januari 2023 - Desember 2023",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-7",
          title: "Maybank - Proyek AA",
          description:
            "Implementasi sistem strategis dalam mendukung inisiatif digitalisasi perbankan Maybank.",
          technologies: ["JSP", "jQuery", "Bootstrap"],
          dateRange: "Agustus 2022 - Desember 2022",
          association: "Digital Center",
          demo: "#",
        },
        {
          id: "acc-8",
          title: "Aplikasi Renstra",
          description:
            "Pengembangan dan implementasi platform perencanaan strategis pendidikan Lembaga Pendidikan Al Firdaus.",
          technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "TypeScript"],
          dateRange: "Januari 2022 - Juli 2022",
          association: "Lembaga Pendidikan Al Firdaus",
          demo: "#",
        },
      ],
    },
    skills: {
      title: "Keahlian & Kemampuan",
      subtitle: "Teknologi dan perangkat yang saya gunakan untuk mewujudkan ide",
      items: [
        {
          title: "Teknologi / Stack",
          description:
            "Mahir dalam TypeScript dan JavaScript (ES6+), mengembangkan antarmuka modern dengan Next.js, React, dan Vue.js.",
        },
        {
          title: "UI/UX & Desain",
          description:
            "Membangun antarmuka yang aksesibel dan responsif menggunakan Tailwind CSS, shadcn/ui, Bootstrap, dan handoff Figma.",
        },
        {
          title: "Developer Tools",
          description: "Berpengalaman menggunakan Git, Vite, Postman, Jira, dan Trello.",
        },
        {
          title: "State Management",
          description:
            "Pinia, Redux Toolkit, dan Zustand untuk mengelola state aplikasi yang kompleks dan berskala besar.",
        },
      ],
    },
    contact: {
      title: "Hubungi Saya",
      subtitle:
        "Saya selalu terbuka untuk peluang baru dan kolaborasi proyek menarik. Jangan ragu untuk menghubungi!",
      cardTitle: "Mari Bekerja Sama",
      sendEmail: "Kirim email kepada saya",
      socialText: "Atau terhubung melalui media sosial",
    },
    footer: {
      tagline:
        "Menciptakan pengalaman web yang imersif dan interaktif dengan arsitektur modern, animasi dinamis, dan desain berani.",
      status: "Tersedia untuk freelance & posisi full-time",
      connectWithMe: "Terhubung Dengan Saya",
      backToTop: "Kembali ke atas",
      allRightsReserved: "Hak cipta dilindungi.",
      builtWith: "Dibuat dengan",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("porche_lang") as Language | null;
      if (saved && (saved === "en" || saved === "id")) {
        setLanguageState(saved);
      }
    } catch {
      // Local storage may be restricted or unavailable
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("porche_lang", lang);
    } catch {
      // Ignore write errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
