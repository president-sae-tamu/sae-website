'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, ArrowUp, Link as LinkIcon, Mail } from 'lucide-react'
import styles from './Footer.module.css'

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/tamusae/',
  linktree: 'https://linktr.ee/saetamu',
}
const CONTACT_EMAIL = 'tamusae@tamu.edu'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 5000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy email: ', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = CONTACT_EMAIL
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 5000)
    }
  }

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaBar}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className={styles.ctaHeading}>
              WANT MORE
              <span>INFORMATION?</span>
            </h2>
            <div className={styles.ctaButtons}>
              <Link href="/recruitment" className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}>
                <span>Recruitment</span>
                <Image src="/icons/recruitment.svg" alt="" width={16} height={16} />
              </Link>
              <button 
                onClick={copyEmail}
                className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
                type="button"
              >
                <span>{emailCopied ? 'Email Copied!' : 'Contact us'}</span>
                {!emailCopied && <Image src="/icons/contact.svg" alt="" width={16} height={16} />}
              </button>
            </div>
          </motion.div>

          <div className={styles.bottomBar}>
            <div className={styles.logo}>
              <Image src="/SAE_logo.svg" alt="SAE Texas A&M Logo" width={84} height={39} quality={100} className={styles.logoImage}/>
            </div>
            <div className={styles.socialIcons}>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className={styles.socialIcon} />
              </a>
              <a href={SOCIAL_LINKS.linktree} target="_blank" rel="noopener noreferrer" aria-label="Linktree">
                <LinkIcon className={styles.socialIcon} />
              </a>
            </div>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} TAMU SAE
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className={styles.scrollToTopButton}
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer