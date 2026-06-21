import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow: string
  heading: string
  intro?: string
  align?: "start" | "center"
  className?: string
}

export function SectionHeading({ eyebrow, heading, intro, align = "start", className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">{eyebrow}</span>
      <h2 className="font-heading text-3xl leading-tight text-navy text-balance sm:text-4xl md:text-5xl">{heading}</h2>
      {intro ? (
        <p className={cn("max-w-2xl text-base leading-relaxed text-warmgray", align === "center" && "mx-auto")}>
          {intro}
        </p>
      ) : null}
    </div>
  )
}
