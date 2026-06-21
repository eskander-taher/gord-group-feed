import { useTranslations, useLocale } from "next-intl"
import { SectionHeading } from "@/components/section-heading"

const STEPS = ["1", "2", "3", "4", "5", "6"] as const

export function HowItWorks() {
  const t = useTranslations("how")
  const locale = useLocale()
  const nf = new Intl.NumberFormat(locale)

  return (
    <section id="how-it-works" className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} intro={t("intro")} />

        <ol className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step} className="flex gap-5 border-t border-border pt-6">
              <span className="font-heading text-4xl leading-none text-sage" aria-hidden>
                {nf.format(Number(step))}
              </span>
              <p className="pt-1 text-base leading-relaxed text-charcoal/90">{t(`steps.${step}`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
