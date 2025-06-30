"use client"

import { cn } from "@/lib/utils"

interface CompanyBadgeProps {
  name: string
  variant: "filled" | "outline"
  className?: string
}

export function CompanyBadge({ name, variant, className }: CompanyBadgeProps) {
  return (
    <div
      className={cn(
        "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer",
        "focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        variant === "filled"
          ? "bg-black dark:bg-white text-white dark:text-black"
          : "border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
        className,
      )}
      tabIndex={0}
      role="button"
      aria-label={`${name} company`}
    >
      {name}
    </div>
  )
}
