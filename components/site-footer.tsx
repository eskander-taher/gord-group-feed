import { useTranslations } from "next-intl"
import { Mail, Phone, MapPin } from "lucide-react"

const QUICK_LINKS = [
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "markets", href: "#markets" },
  { key: "contact", href: "#contact" },
] as const

export function SiteFooter() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")

  return (
    <footer className="border-t border-gold bg-navy text-offwhite">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-16 sm:px-8 md:grid-cols-3 md:py-20">
        <div className="flex flex-col gap-3">
          <span className="font-heading text-2xl font-semibold tracking-wide text-offwhite">{t("wordmark")}</span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-gold">{t("subsidiary")}</span>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-offwhite/70">{t("tagline")}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t("quickLinksTitle")}</h3>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.key}>
                <a href={link.href} className="text-sm text-offwhite/80 transition-colors hover:text-gold">
                  {tNav(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t("contactTitle")}</h3>
          <ul className="flex flex-col gap-4 text-sm text-offwhite/80">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden />
              <a href={`mailto:${t("email")}`} className="transition-colors hover:text-gold" dir="ltr">
                {t("email")}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden />
              <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="transition-colors hover:text-gold" dir="ltr">
                {t("phone")}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden />
              <span className="leading-relaxed">{t("address")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-5 py-6 text-center sm:px-8">
          <p className="text-xs tracking-wide text-offwhite/60">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
