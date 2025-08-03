'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import styles from './HeroSection.module.css'

const teams = [
  { id: 'ic', name: 'Formula IC' },
  { id: 'ev', name: 'Formula EV' },
  { id: 'baja', name: 'Baja SAE' },
]

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
}

const HeroSection = () => {
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null)

  return (
    <section className={styles.heroSection}>
      <div className={`${styles.imageGrid} ${hoveredTeam ? styles.isHovered : ''}`}>
        {teams.map((team, index) => (
          <div
            key={team.id}
            className={styles.imageContainer}
            onMouseEnter={() => setHoveredTeam(team.id)}
            onMouseLeave={() => setHoveredTeam(null)}
          >
            <motion.div 
              className={styles.imageWrapper}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={`/images/${team.id}/hero.webp`}
                alt={team.name}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
            <AnimatePresence>
              {hoveredTeam === team.id && (
                <motion.div
                  className={styles.overlay}
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <motion.h2 variants={textVariants}>{team.name}</motion.h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroSection