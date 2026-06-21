"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { ArrowRight, Check } from "lucide-react"

const FIELD_BASE =
  "w-full border border-input bg-background px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-warmgray/70 focus:border-sage"

export function QuoteSection() {
  const t = useTranslations("quote")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">{t("eyebrow")}</span>
              <h2 className="font-heading text-3xl leading-tight text-navy text-balance sm:text-4xl md:text-5xl">
                {t("heading")}
              </h2>
              <p className="max-w-md text-base leading-relaxed text-warmgray">{t("intro")}</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-navy">
                <span className="h-2 w-2 bg-gold" aria-hidden />
                {t("responseNote")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 border border-sage bg-background p-8">
                <span className="flex h-12 w-12 items-center justify-center bg-sage text-offwhite">
                  <Check className="h-6 w-6" />
                </span>
                <p className="text-lg leading-relaxed text-charcoal">{t("form.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="q-name" className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    {t("form.name")}
                  </label>
                  <input id="q-name" name="name" required className={FIELD_BASE} placeholder={t("form.namePlaceholder")} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="q-company" className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    {t("form.company")}
                  </label>
                  <input
                    id="q-company"
                    name="company"
                    className={FIELD_BASE}
                    placeholder={t("form.companyPlaceholder")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="q-country" className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    {t("form.country")}
                  </label>
                  <input
                    id="q-country"
                    name="country"
                    required
                    className={FIELD_BASE}
                    placeholder={t("form.countryPlaceholder")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="q-product" className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    {t("form.product")}
                  </label>
                  <input
                    id="q-product"
                    name="product"
                    className={FIELD_BASE}
                    placeholder={t("form.productPlaceholder")}
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="q-quantity" className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    {t("form.quantity")}
                  </label>
                  <input
                    id="q-quantity"
                    name="quantity"
                    type="number"
                    min="0"
                    inputMode="numeric"
                    className={FIELD_BASE}
                    placeholder={t("form.quantityPlaceholder")}
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="q-message" className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="q-message"
                    name="message"
                    rows={4}
                    className={`${FIELD_BASE} resize-y`}
                    placeholder={t("form.messagePlaceholder")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 border border-navy bg-navy px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-offwhite transition-colors hover:bg-transparent hover:text-navy"
                  >
                    {t("form.submit")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
