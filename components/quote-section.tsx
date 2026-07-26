import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"

export function QuoteSection() {
  const t = useTranslations("contact")

  return (
    <section id="contact" className="bg-navy text-offwhite">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-5 py-24 text-center sm:px-8 md:py-32">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t("eyebrow")}</span>
        <h2 className="mt-6 max-w-3xl text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl">
          {t("headline")}
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-offwhite/75">{t("subtext")}</p>
        <div className="mt-10">
          <a
            href={`mailto:${t("email")}`}
            className="group inline-flex items-center gap-3 border border-gold bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-navy transition-colors duration-300 hover:bg-transparent hover:text-gold"
          >
            {t("cta")}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
