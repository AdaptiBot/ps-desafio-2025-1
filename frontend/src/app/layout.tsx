import type { Metadata } from 'next'
import '@/app/globals.css'
import { Providers } from '@/providers/providers'
import { Toaster as SonnerToaster } from '@/components/sonner'
import { Toaster } from '@/components/toaster'

export const metadata: Metadata = {
  title: 'Sama Motors',
  description: 'Created by Adapti 2024',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        <Providers>
          {children}
          <SonnerToaster />
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
