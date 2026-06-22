"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "markets", href: "#markets" },
  { key: "partners", href: "#partners" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "contact", href: "#contact" },
] as const

export function SiteHeader() {
  const t = useTranslations("nav")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-navy transition-shadow duration-300",
        scrolled && "shadow-[0_1px_0_0_rgba(182,141,64,0.4)]",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 font-serif text-lg font-semibold tracking-wide text-white"
        >
          <span className="h-16 w-20 shrink-0 overflow-hidden">
            <img
              src="/logo.svg"
              alt=""
              className="h-full w-full scale-150 object-contain"
            />
          </span>
          {t("wordmark")}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="group relative text-sm font-medium text-offwhite/85 transition-colors hover:text-offwhite"
            >
              {t(item.key)}
              <span className="absolute -bottom-1.5 inset-x-0 h-px scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <LanguageToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-offwhite lg:hidden"
          aria-expanded={open}
          aria-label={open ? t("close") : t("menu")}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold/30 bg-navy lg:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-base font-medium text-offwhite/90 transition-colors hover:text-gold"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="pt-4">
              <LanguageToggle />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
