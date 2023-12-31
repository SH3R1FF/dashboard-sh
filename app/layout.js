import './globals.css'
import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard - Admin',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={rubik.className} >{children}</body>       
    </html>
  )
}
