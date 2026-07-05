import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="py-16 md:py-24 px-5 md:px-16 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-headline text-4xl md:text-8xl text-center mb-10 md:mb-16 leading-tight">
          Let&apos;s build <span className="text-primary italic">together.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full mb-16 md:mb-24">
          <div className="text-center md:text-left">
            <p className="text-secondary text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-widest mb-3 md:mb-4">Email</p>
            <a href="mailto:belelsharan17@gmail.com" className="text-xl hover:text-primary transition-colors">belelsharan17@gmail.com</a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-secondary text-xs uppercase tracking-widest mb-4">Social</p>
           <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-widest">
              <Link href="#" className="text-base sm:text-lg md:text-xl break-all hover:text-primary transition-colors">Instagram</Link>
              <Link href="#" className="text-base sm:text-lg md:text-xl break-all hover:text-primary transition-colors">Behance</Link>
              <Link href="https://www.linkedin.com/in/sharanbelel17"className="text-base sm:text-lg md:text-xl break-all hover:text-primary transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between w-full pt-6 md:pt-8 border-t border-white/5 text-[9px] md:text-[10px] text-secondary uppercase tracking-[0.2em] md:tracking-[0.3em]">
         </div>
      </div>
    </footer>
  )
}
