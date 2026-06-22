import { useTranslations } from "next-intl"
import { MapPin, Building2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { PartnersMap } from "@/components/partners-map"

const PARTNERS = [
  { key: "topFoods", locationKeys: ["djibouti"] },
  { key: "alshater", locationKeys: ["yemen", "salalah"] },
] as const

export function PartnersSection() {
  const t = useTranslations("partners")

  return (
    <section id="partners" className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} intro={t("intro")} />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Real vector map of the affiliated-business region */}
          <div className="relative aspect-[600/460] overflow-hidden border border-border bg-navy">
            <PartnersMap />

            <div className="border-t border-white/10 bg-navy/95 px-6 py-4">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                <MapPin className="h-4 w-4" aria-hidden />
                {t("mapCaption")}
              </p>
            </div>
          </div>

          {/* Partner cards */}
          <div className="flex flex-col gap-6">
            {PARTNERS.map((partner) => (
              <article key={partner.key} className="flex flex-col gap-4 border border-border bg-secondary p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40 bg-navy text-gold">
                    <Building2 className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-xl text-navy">{t(`companies.${partner.key}.name`)}</h3>
                </div>

                <p className="text-sm leading-relaxed text-warmgray">{t(`companies.${partner.key}.description`)}</p>

                <div className="mt-auto flex items-start gap-2 border-t border-border pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
                    {t("locationsLabel")}
                  </span>
                  <span className="text-sm text-charcoal/90">{t(`companies.${partner.key}.locations`)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
