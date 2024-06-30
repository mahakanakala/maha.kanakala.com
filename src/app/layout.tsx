'use client'
import './globals.css'
import RestrictRotation from './components/RestrictRotation';
import { MdMenu } from 'react-icons/md'
import Footer from './components/Footer'
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <head />
      <body>{children}
      <div className="navContainer">
        <nav>
        <MdMenu className="menu-icon" />
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
             <li>
              <Link href="/projects">Projects</Link>
            </li> 
            <li>
              <Link href="/contact">Contact</Link>
            </li> 
          </ul>
        </nav>
        </div>
        <RestrictRotation />
        { <Footer />}
      </body>
    </html>
  )
}