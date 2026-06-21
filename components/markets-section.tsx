import { useTranslations } from "next-intl"
import { Globe, MapPin, Ship, Anchor, Sprout } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const REGIONS = [
  { key: "middleEast", Icon: Globe },
  { key: "northAfrica", Icon: MapPin },
  { key: "subSaharan", Icon: Sprout },
  { key: "asia", Icon: Ship },
  { key: "cis", Icon: Anchor },
] as const

export function MarketsSection() {
  const t = useTranslations("markets")

  return (
    <section id="markets" className="border-t border-border bg-navy py-24 text-offwhite md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t("eyebrow")}</span>
          <h2 className="font-heading text-3xl leading-tight text-offwhite text-balance sm:text-4xl md:text-5xl">
            {t("heading")}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-offwhite/70">{t("intro")}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map(({ key, Icon }) => (
            <div key={key} className="flex flex-col gap-4 bg-navy p-7">
              <Icon className="h-7 w-7 text-sage" strokeWidth={1.5} aria-hidden />
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-xl text-offwhite">{t(`regions.${key}.name`)}</h3>
                <p className="text-sm leading-relaxed text-offwhite/65">{t(`regions.${key}.countries`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
