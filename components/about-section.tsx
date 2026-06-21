import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/section-heading"

const STATS = ["wheat", "markets", "chain"] as const

export function AboutSection() {
  const t = useTranslations("about")

  return (
    <section id="about" className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} />
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-charcoal/90">{t("body")}</p>
            <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
              {STATS.map((key) => (
                <div key={key} className="flex flex-col gap-2 bg-background p-6">
                  <span className="font-heading text-3xl text-gold md:text-4xl">{t(`stats.${key}.value`)}</span>
                  <span className="text-sm leading-relaxed text-warmgray">{t(`stats.${key}.label`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
