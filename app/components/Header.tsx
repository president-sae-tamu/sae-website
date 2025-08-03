'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import styles from './Header.module.css'

const programLinks = [
  { href: '/ic', label: 'Formula IC' },
  { href: '/ev', label: 'Formula E' },
  { href: '/baja', label: 'Baja SAE' },
  { href: '/dev', label: 'Development' },
]

const Header = () => {
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false)

  // Effect to prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* --- Desktop Navbar --- */}
      <nav className={styles.navbar}>
        <div className={styles.desktopNavLinks}>
          <ul className={styles.navLinksLeft}>
            <li><Link href="/about" className={styles.link}>About</Link></li>
            <li 
              className={styles.dropdownContainer}
              onMouseEnter={() => setIsDesktopDropdownOpen(true)}
              onMouseLeave={() => setIsDesktopDropdownOpen(false)}
            >
              <h2 className={styles.link}>
                Programs
                <motion.div animate={{ rotate: isDesktopDropdownOpen ? 180 : 0 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </h2>
              <AnimatePresence>
                {isDesktopDropdownOpen && (
                  <motion.div 
                    className={styles.dropdownMenu}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  >
                    {programLinks.map((link) => (
                      <Link key={link.href} href={link.href} className={styles.dropdownLink}>
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>

        <div className={styles.logo}>
          <Link href="/">
            <Image src="/SAE_logo.svg" alt="TAMU SAE Logo" width={84} height={50} quality={100} className={styles.logoImage}/>
          </Link>
        </div>

        <div className={styles.desktopNavLinks}>
          <ul className={styles.navLinksRight}>
            <li><Link href="/recruitment" className={styles.link}>Recruitment</Link></li>
            <li><Link href="/sponsors" className={styles.link}>Sponsors</Link></li>
          </ul>
        </div>
        
        {/* --- Mobile Hamburger Menu Button --- */}
        <button className={styles.hamburgerButton} onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenuOverlay}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className={styles.mobileMenuHeader}>
              <button className={styles.closeButton} onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X />
              </button>
            </div>
            <ul className={styles.mobileNavLinks}>
              <li><Link href="/about" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
              <li className={styles.mobileDropdownContainer}>
                <div className={styles.mobileLink} onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}>
                  Programs
                  <motion.div animate={{ rotate: isMobileProgramsOpen ? 180 : 0 }}>
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {isMobileProgramsOpen && (
                    <motion.div 
                      className={styles.mobileSublinks}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      {programLinks.map(link => (
                        <Link key={link.href} href={link.href} className={styles.mobileSublink} onClick={() => setIsMobileMenuOpen(false)}>
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li><Link href="/recruitment" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Recruitment</Link></li>
              <li><Link href="/sponsors" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Sponsors</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header