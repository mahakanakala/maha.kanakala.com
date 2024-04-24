'use client'
import './globals.css'
import RestrictRotation from './components/RestrictRotation';
import { useRouter } from 'next/router';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <head />
      <body>{children}
        {/* <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
             <li>
              <Link href="/photos">Photos</Link>
            </li> 
            <li>
              <Link href="/contact">Contact</Link>
            </li> 
          </ul>
        </nav> */}
        <RestrictRotation />
        { <Footer />}
      </body>
    </html>
  )
}
