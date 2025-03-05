import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface RegisterButtonProps {
  variant?: "default" | "hero"
  className?: string
  href?: string
  innerRef?: React.RefObject<HTMLButtonElement>
}

export function RegisterButton({
  variant = "default",
  className,
  href = "#",
  innerRef
}: RegisterButtonProps) {
  const styles = {
    base: "relative overflow-hidden bg-gradient-to-r from-[#2f27ce] via-[#3f37de] to-[#2f27ce] text-white shadow-lg",
    default: "px-6 py-2",
    hero: "px-8 py-6 rounded-lg text-lg font-medium tracking-wide",
  }

  return (
    <Button
      ref={innerRef}
      asChild
      className={cn(
        styles.base,
        variant === "default" ? styles.default : styles.hero,
        className
      )}
    >
      <Link href={href}>
        <span className="relative inline-flex items-center gap-1">
          Înregistreazǎ-te
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </Link>
    </Button>
  )
}
