import { setRequestLocale } from "next-intl/server"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { MarketsSection } from "@/components/markets-section"
import { HowItWorks } from "@/components/how-it-works"
import { QuoteSection } from "@/components/quote-section"
import { SiteFooter } from "@/components/site-footer"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ProductsSection />
        <MarketsSection />
        <HowItWorks />
        <QuoteSection />
      </main>
      <SiteFooter />
    </>
  )
}
