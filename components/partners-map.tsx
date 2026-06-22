"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import worldGeo from "world-atlas/countries-110m.json"

// Real coordinates: [longitude, latitude]
const LOCATIONS = [
  { key: "djibouti", coordinates: [43.1456, 11.5721] as [number, number], country: "Djibouti" },
  { key: "yemen", coordinates: [45.0367, 12.7794] as [number, number], country: "Yemen" },
  { key: "salalah", coordinates: [54.0924, 17.0151] as [number, number], country: "Oman" },
] as const

const HIGHLIGHTED_COUNTRIES = new Set(["Djibouti", "Yemen", "Oman"])

export function PartnersMap() {
  const t = useTranslations("partners")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // d3-geo's projection math can differ by a fraction of a pixel between the
  // server and client JS engines, which React treats as a hydration mismatch.
  // Render only after mount to avoid SSR-ing the projected coordinates.
  if (!mounted) {
    return <div className="h-full w-full" aria-hidden />
  }

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 1500, center: [49, 14] }}
      width={600}
      height={460}
      className="h-full w-full"
      role="img"
      aria-label={t("mapCaption")}
    >
      <Geographies geography={worldGeo}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const name = geo.properties.name as string
            const isHighlighted = HIGHLIGHTED_COUNTRIES.has(name)
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isHighlighted ? "#8cb290" : "#16263b"}
                fillOpacity={isHighlighted ? 0.5 : 1}
                stroke="#2b3f58"
                strokeWidth={0.6}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            )
          })
        }
      </Geographies>

      {LOCATIONS.map((loc) => (
        <Marker key={loc.key} coordinates={loc.coordinates}>
          <circle r={9} fill="rgba(182,141,64,0.22)" />
          <circle r={4} fill="#b68d40" stroke="#0e1b2b" strokeWidth={1.5} />
          <text
            textAnchor="middle"
            y={-14}
            fontSize={12}
            fontWeight={600}
            fill="#f5f1e8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t(`locationNames.${loc.key}`)}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  )
}
