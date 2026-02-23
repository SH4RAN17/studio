
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-8 md:px-16 flex items-center justify-between",
      isScrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
    )}>
      <Link href="/" className="font-headline text-2xl tracking-tighter">
        S. BELEL
      </Link>
      
      <div className="flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
        <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
        <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
        <Link href="/resume" className="hover:text-primary transition-colors">Resume</Link>
        <Link href="/#contact" className="px-4 py-2 border border-white/20 hover:border-primary hover:text-primary transition-all">Contact</Link>
      </div>
    </nav>
  )
}
