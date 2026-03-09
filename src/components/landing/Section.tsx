import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

const sectionIds = ['hero', 'principles', 'examples', 'pros-cons', 'conclusion']

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText }: SectionProps) {
  const slideIndex = sectionIds.indexOf(id)
  const isProsConsSlide = id === 'pros-cons'

  const renderContent = () => {
    if (!content) return null

    if (isProsConsSlide) {
      const lines = content.split('\n')
      return (
        <motion.div
          className="mt-6 flex flex-col gap-4 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {lines.map((line, i) => {
            const isPlus = line.startsWith('+')
            const isMinus = line.startsWith('—')
            return (
              <div
                key={i}
                className={`flex items-start gap-3 text-lg md:text-xl leading-relaxed ${
                  isPlus ? 'text-emerald-400' : isMinus ? 'text-rose-400' : 'text-neutral-400'
                }`}
              >
                <span className="font-bold mt-0.5 shrink-0 text-2xl leading-none">
                  {isPlus ? '+' : isMinus ? '−' : ''}
                </span>
                <span>{line.replace(/^[+—]\s*/, '')}</span>
              </div>
            )
          })}
        </motion.div>
      )
    }

    return (
      <motion.p
        className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {content}
      </motion.p>
    )
  }

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>

      {renderContent()}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#FF4D00] bg-transparent border-[#FF4D00]/60 hover:bg-[#FF4D00] hover:text-black hover:border-[#FF4D00] transition-all duration-300 text-base px-8 py-6"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}

      <motion.div
        className="absolute bottom-8 left-8 md:left-16 lg:left-24 text-neutral-700 text-xs tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {String(slideIndex + 1).padStart(2, '0')} / 05
      </motion.div>
    </section>
  )
}
