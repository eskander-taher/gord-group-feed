"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  function switchTo(target: "en" | "ar") {
    if (target === locale) return
    router.replace(pathname, { locale: target })
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1 border border-white/25 text-sm",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "px-3 py-1.5 font-medium transition-colors",
          locale === "en" ? "bg-gold text-navy" : "text-offwhite/80 hover:text-gold",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchTo("ar")}
        aria-pressed={locale === "ar"}
        className={cn(
          "px-3 py-1.5 font-medium transition-colors",
          locale === "ar" ? "bg-gold text-navy" : "text-offwhite/80 hover:text-gold",
        )}
      >
        العربية
      </button>
    </div>
  )
}
