import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'News Rators',
  description: 'Bring top tech news to you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
