'use client'

import { motion, Variants } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './AboutPage.module.css'

const officers = [
  { role: 'President', name: 'Zach Iacobucci' },
  { role: 'Vice President', name: 'Pete Rome' },
  { role: 'Secretary', name: 'Gerardo Hernandez' },
  { role: 'Treasurer', name: 'James Dorsey' },
  { role: 'Public Relations', name: 'Reese Billedo' },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className={styles.aboutPage}>
        <div className={styles.container}>

          <motion.section 
            className={styles.introSection}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 className={styles.title} variants={itemVariants}>
              Our Mission
            </motion.h1>
            <motion.p className={styles.description} variants={itemVariants}>
              Texas A&M&apos;s Society of Automotive Engineers Chapter (TAMU SAE), is a non-profit educational and scientific organization dedicated to advancing mobility technology to better serve humanity. The goal of our organization is to provide students with exposure and hands on experience that they will be able to apply in all aspects of their life. 
            </motion.p>
          </motion.section>

          <motion.section 
            className={styles.officerSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
              Meet the Officers
            </motion.h2>
            <div className={styles.officerGrid}>
              {officers.map((officer) => (
                <motion.div key={officer.name} className={styles.officerCard} variants={itemVariants}>
                  <h3 className={styles.officerRole}>{officer.role}</h3>
                  <p className={styles.officerName}>{officer.name}</p>
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

export default AboutPage