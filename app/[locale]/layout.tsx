import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Playfair_Display, Inter, Amiri, Noto_Sans_Arabic } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { routing } from "@/i18n/routing";
import "../globals.css";

const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-playfair",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const amiri = Amiri({
	subsets: ["arabic"],
	weight: ["400", "700"],
	variable: "--font-amiri",
});

const notoSansArabic = Noto_Sans_Arabic({
	subsets: ["arabic"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-noto-sans-arabic",
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#ffffff",
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

const siteUrl = "https://feed.gordgroup.com";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "meta" });
	const title = t("title");
	const description = t("description");
	const path = `/${locale}`;

	return {
		metadataBase: new URL(siteUrl),
		title,
		description,
		alternates: {
			canonical: path,
			languages: {
				en: "/en",
				ar: "/ar",
				"x-default": "/en",
			},
		},
		robots: {
			index: true,
			follow: true,
		},
		openGraph: {
			title,
			description,
			url: path,
			siteName: "Gord Group Feed",
			locale: locale === "ar" ? "ar_AR" : "en_US",
			alternateLocale: locale === "ar" ? "en_US" : "ar_AR",
			type: "website",
			images: [
				{
					url: "/android-chrome-512x512.png",
					width: 512,
					height: 512,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
		},
		icons: {
			icon: [
				{ url: "/favicon.ico" },
				{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
				{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			],
			apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
		},
		manifest: "/site.webmanifest",
	};
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	const isArabic = locale === "ar";
	const dir = isArabic ? "rtl" : "ltr";

	const headingFont = isArabic ? amiri.variable : playfair.variable;
	const bodyFont = isArabic ? notoSansArabic.variable : inter.variable;

	return (
		<html
			lang={locale}
			dir={dir}
			className={`${headingFont} ${bodyFont} bg-background`}
			style={
				{
					"--font-heading": isArabic ? "var(--font-amiri)" : "var(--font-playfair)",
					"--font-body": isArabic ? "var(--font-noto-sans-arabic)" : "var(--font-inter)",
				} as React.CSSProperties
			}
		>
			<body className="font-sans antialiased">
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
				{process.env.NODE_ENV === "production" && <Analytics />}
			</body>
		</html>
	);
}
