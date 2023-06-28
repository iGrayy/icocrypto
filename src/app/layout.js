import { Inter } from 'next/font/google';
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// Load necessary styles.
import '@/styles/vendor.bundle.css'
import '@/styles/style.azalea.css'
import '@/styles/globals.css'
// Load necessary configs.
import common from '@/config/common'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: common.title,
  description: common.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='nk-body body-wider bg-theme mode-onepage no-touch nk-nio-theme page-loaded chrome'>
        {children}
      </body>
    </html>
  )
}
