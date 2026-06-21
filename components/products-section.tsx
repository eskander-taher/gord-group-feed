import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/section-heading"
import { PRODUCT_CATEGORIES, PRODUCT_IMAGE } from "@/lib/products"

export function ProductsSection() {
  const t = useTranslations("products")

  return (
    <section id="products" className="border-t border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} intro={t("intro")} />

        <div className="mt-16 flex flex-col gap-16">
          {PRODUCT_CATEGORIES.map((category) => (
            <div key={category.key}>
              <div className="flex items-center gap-4">
                <h3 className="font-heading text-2xl text-navy">{t(`categories.${category.key}.name`)}</h3>
                <span className="h-px flex-1 bg-gold/40" />
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <article
                    key={item}
                    className="group flex flex-col border border-border bg-background transition-colors hover:border-sage"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-muted">
                      {/* PLACEHOLDER: AI-generated product photograph */}
                      <img
                        src={`/products/${PRODUCT_IMAGE[item]}.webp`}
                        alt={t(`categories.${category.key}.items.${item}`)}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-0 left-0 h-full w-1 bg-sage" />
                    </div>
                    <div className="flex flex-col gap-2 p-5">
                      <h4 className="font-heading text-lg text-charcoal">
                        {t(`categories.${category.key}.items.${item}`)}
                      </h4>
                      <p className="text-xs leading-relaxed text-warmgray">{t("captionDefault")}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
