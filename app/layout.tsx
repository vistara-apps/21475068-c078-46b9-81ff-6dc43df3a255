import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'OriginMint - Verify Your Ideas. Own Your Remix Revenue.',
  description: 'A tool for creators to mint their ideas as ZK-verified, remixable tokens on Base, capturing origin credit and royalties from derivative works.',
  keywords: ['crypto', 'nft', 'base', 'zk-proof', 'royalties', 'creator economy'],
  authors: [{ name: 'OriginMint' }],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
