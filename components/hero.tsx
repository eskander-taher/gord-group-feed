"use client"

import { useTranslations } from "next-intl"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section id="top" className="relative flex h-svh min-h-[640px] w-full items-center justify-center overflow-hidden">
      {/* Background video with poster fallback. Replace /videos/hero.mp4 and the poster with AI-generated footage. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        // poster="/images/hero-poster.png"
        aria-label={t("videoFallback")}
      >
        {/* PLACEHOLDER: swap with AI-generated footage of golden grain fields / harvest / cargo shipping */}
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Navy gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,37,64,0.78) 0%, rgba(15,37,64,0.55) 45%, rgba(15,37,64,0.85) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1000px] flex-col items-center px-5 text-center sm:px-8">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-gold">{t("eyebrow")}</span>
        <h1 className="font-heading text-4xl font-semibold leading-[1.08] text-offwhite text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          {t("headline")}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-offwhite/85 text-pretty sm:text-lg">
          {t("subtext")}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 border border-gold bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-transparent hover:text-gold"
          >
            {t("ctaQuote")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center border border-offwhite/50 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-offwhite transition-colors hover:border-gold hover:text-gold"
          >
            {t("ctaProducts")}
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label={t("scroll")}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-offwhite/70 transition-colors hover:text-gold"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">{t("scroll")}</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
