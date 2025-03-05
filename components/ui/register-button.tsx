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
    wrapper: "inline-flex transition-transform duration-300 ease-out hover:scale-[1.02]",
    base: "group relative w-full overflow-hidden bg-gradient-to-r from-[#2f27ce] via-[#3f37de] to-[#2f27ce] text-white shadow-lg transition-all duration-300 ease-out hover:shadow-xl before:absolute before:inset-0 before:z-0 before:bg-gradient-to-r before:from-[#2f27ce] before:via-[#4f47ee] before:to-[#2f27ce] before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100 before:[background-size:200%_100%] hover:before:animate-[gradient_1s_ease-out_forwards] [&>*]:relative [&>*]:z-1",
    default: "px-6 py-2 rounded-md",
    hero: "px-8 py-6 text-lg font-medium tracking-wide rounded-lg",
  }

  return (
    <>
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div className={styles.wrapper}>
        <Button
          ref={innerRef}
          asChild
          className={cn(
            styles.base,
            variant === "default" ? styles.default : styles.hero,
            className
          )}
        >
          <Link href={href} className="relative z-1 flex items-center justify-center">
            <span className="relative z-1 inline-flex items-center gap-1">
              Înregistreazǎ-te
              <svg 
                className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
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
      </div>
    </>
  )
}
