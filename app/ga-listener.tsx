// app/ga-listener.tsx
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function GAListener() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useEffect(() => {
    if (!GA_ID || typeof window === 'undefined' || !(window as any).gtag) return
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')
    ;(window as any).gtag('config', GA_ID, { page_path: url })
  }, [pathname, searchParams, GA_ID])

  return null
}