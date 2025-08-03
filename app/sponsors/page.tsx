'use client'

import { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { ArrowRight, Building2, Copy, CreditCard, Flame, Mountain, University, Zap, Download } from 'lucide-react'
import styles from './sponsors.module.css'

const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    // Check on mount
    checkIsMobile()

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [breakpoint])

  return isMobile
}

const donationTargets = [
    {
    icon: Building2,
    accentColor: '#6F8695',
    name: 'SAE General Fund',
    onlineAccount: '947340-00000',
    checkPayee: 'TEXAS A&M SOCIETY OF AUTOMOTIVE ENGINEERS GENERAL FUND'
  },
  {
    icon: Flame,
    accentColor: '#C06E52',
    name: 'Formula Internal Combustion',
    onlineAccount: '02-511361-50000',
    checkPayee: 'TEXAS A&M FSAE IC',
    handbookUrl: 'https://drive.google.com/file/d/1bikA9h-xIrBedOfLVVCscDkTqM294U8_/view?usp=sharing'
  },
  {
    icon: Zap,
    accentColor: '#0D324D',
    name: 'Formula Electric',
    onlineAccount: '02-511361-60000',
    checkPayee: 'TEXAS A&M FSAE ELECTRIC',
    handbookUrl: 'https://drive.google.com/file/d/1uG5UPUCPfuCmp9lavbCCXcnsCJo0duR0/view'
  },
  {
    icon: Mountain,
    accentColor: '#2F4B26',
    name: 'Baja SAE',
    onlineAccount: '02-511361-20000',
    checkPayee: 'TEXAS A&M BAJA SAE',
    handbookUrl: 'https://drive.google.com/file/d/1jMRlpt_hSlXanQgFwJeCKH2LGBCkzdUj/view?usp=sharing'
  },
]

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={handleCopy} className={styles.copyButton}>
      <Copy size={14} />
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const itemVariants: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }

const SponsorsPage = () => {
  const [activeMethod, setActiveMethod] = useState<{ [key: string]: 'card' | 'check' }>({})

  const handleMethodChange = (name: string, method: 'card' | 'check') => {
    setActiveMethod(prev => ({ ...prev, [name]: method }))
  }

  const isMobile = useIsMobile()
  
  return (
    <>
      <Header />
      <main className={styles.sponsorsPage}>
        <div className={styles.container}>

          <motion.section className={styles.hero} initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h1 className={styles.title} variants={itemVariants}>Partner With Excellence</motion.h1>
            <motion.p className={styles.subtitle} variants={itemVariants}>
              Your support drives the next generation of world-class engineers and fuels our pursuit of victory at international competitions.
            </motion.p>
          </motion.section>

          <motion.section className={styles.donationSection} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants}>
            <div className={styles.donationGrid}>
              {donationTargets.map(target => (
                <motion.div key={target.name} className={styles.donationCard} variants={itemVariants} style={{ '--accent-color': target.accentColor } as React.CSSProperties}>
                  <div className={styles.cardHeader}>
                    <target.icon className={styles.cardIcon} />
                    <h3>{target.name}</h3>
                  </div>
                  <div className={styles.methodToggle}>
                    <button onClick={() => handleMethodChange(target.name, 'card')} className={activeMethod[target.name] !== 'check' ? styles.active : styles.inactive}>
                      <CreditCard size={16}/> Credit/Debit {isMobile ? '' : 'Card'}
                    </button>
                    <button onClick={() => handleMethodChange(target.name, 'check')} className={activeMethod[target.name] === 'check' ? styles.active : styles.inactive}>
                      <University size={16}/> Check
                    </button>
                  </div>
                  <div className={styles.instructions}>
                    {activeMethod[target.name] === 'check' ? (
                      <>
                        <h4>Instructions for Check Donations:</h4>
                        <ol>
                          <li>Make check payable to:</li>
                          <div className={styles.codeBox}>
                            <span>{target.checkPayee}</span>
                            <CopyButton textToCopy={target.checkPayee} />
                          </div>
                          <li>Mail the check to:</li>
                          <p className={styles.address}>
                            ATTENTION: DR. SARIPALLI<br/>
                            3123 TAMU, COLLEGE STATION, TX 77843
                          </p>
                        </ol>
                      </>
                    ) : (
                      <>
                        <h4>Instructions for Card Donations:</h4>
                        <ol>
                          <li>Click the &quot;Donate Online&quot; button below.</li>
                          <li>Under &quot;I Would Like To Give To,&quot; select <strong>Unlisted Account</strong>.</li>
                          <li>In &quot;Giving Account Name or Number,&quot; enter:</li>
                          <div className={styles.codeBox}>
                            <span>{target.onlineAccount}</span>
                            <CopyButton textToCopy={target.onlineAccount} />
                          </div>
                        </ol>
                      </>
                    )}
                  </div>
                  <div className={styles.cardActions}>
                    {activeMethod[target.name] !== 'check' && (
                      <a href="https://www.txamfoundation.com/give.aspx" target="_blank" rel="noopener noreferrer" className={styles.donateButton}>
                        Donate Online <ArrowRight size={16} />
                      </a>
                    )}
                    {target.handbookUrl && (
                      <a href={target.handbookUrl} download className={styles.handbookLink} target='_blank' rel='noopener noreferrer'>
                        <Download size={16} /> Download Handbook
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default SponsorsPage