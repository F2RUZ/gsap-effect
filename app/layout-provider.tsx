'use client'

import React from "react"

import { Analytics } from '@vercel/analytics/next'
import { CssVarsProvider } from '@mui/joy/styles'

export function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CssVarsProvider>
      {children}
      <Analytics />
    </CssVarsProvider>
  )
}
