'use client'

import Link from 'next/link'
import { clsx } from 'clsx'

interface GradientCTAButtonProps {
  href: string
  className?: string
}

export function GradientCTAButton({ href, className }: GradientCTAButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex flex-col items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2',
        className
      )}
    >
      <span>Secure my seat Today</span>
      <span className="block text-xs font-normal mt-1 text-white opacity-80">June 19–21, 2025 · 10am - 11:30am PST · Virtual</span>
    </Link>
  )
} 