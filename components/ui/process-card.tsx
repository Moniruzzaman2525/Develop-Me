"use client"

import { AnimatedButton } from "./animated-button"
import { cn } from "@/lib/utils"

interface ProcessCardProps {
  title: string
  description: string
  variant: "default" | "highlighted"
  className?: string
}

export function ProcessCard({ title, description, variant, className }: ProcessCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:rotate-2 focus-within:ring-2 focus-within:ring-offset-2",
        "bg-gray-900 dark:bg-gray-800 text-white focus-within:ring-blue-500",
        "hover:bg-lime-400 hover:text-black dark:hover:bg-lime-400 dark:hover:text-black hover:focus-within:ring-lime-500",
        className,
      )}
      tabIndex={0}
      role="article"
      aria-labelledby={`process-${title.toLowerCase()}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
        <span
          className={cn(
            "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium bg-cyan-400 text-black transition-colors",
            "group-hover:bg-black group-hover:text-white"
          )}
        >
          {title}
        </span>
        <AnimatedButton
          variant="ghost"
          className={cn(
            "p-0 h-auto hover:bg-transparent text-white dark:text-white hover:text-gray-300 dark:hover:text-gray-300 group-hover:text-black"
          )}
          aria-label={`Read more about ${title}`}
        >
          Read More →
        </AnimatedButton>
      </div>
      <p
        className={cn(
          "transition-colors duration-300 text-gray-400 dark:text-gray-400 group-hover:text-black"
        )}
      >
        {description}
      </p>
    </div>
  )
}
