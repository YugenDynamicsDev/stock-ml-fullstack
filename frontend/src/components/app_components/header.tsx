import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="text-sm font-medium tracking-tight">
          Close Call
        </a>
        <div className="flex items-center gap-4">
            <a href="#sample" className={cn(buttonVariants({ size: "sm" }))}>
                See a guess
            </a>
            <a href="#steps" className={cn(buttonVariants({ size: "sm" }))}>
                How it works
            </a>
            <a href="#about" className={cn(buttonVariants({ size: "sm" }))}>
                About
            </a>
            <a href="#contact" className={cn(buttonVariants({ size: "sm" }))}>
                Contact
            </a>
        </div>
        <div className="flex items-center gap-4">
            <a href="#login" className={cn(buttonVariants({ size: "sm" }))}>
                Login
            </a>
            <a href="#signup" className={cn(buttonVariants({ size: "sm" }))}>
                Sign up
            </a>
        </div>
      </header>
  )
}
