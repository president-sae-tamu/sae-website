'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import styles from './TeamsPreview.module.css'

const teams = [
    {
    id: 'ic',
    name: 'Formula IC',
    description: 'With a legacy of performance, our Formula Internal Combustion team masters the art of the internal combustion engine.',
    image: '/images/ic/preview.jpeg',
    slug: '/ic'
  },
  {
    id: 'ev',
    name: 'Formula EV',
    description: 'Pioneering the future of racing, the Formula Electric team develops lightning-fast, sustainable racecars.',
    image: '/images/ev/preview.jpg',
    slug: '/ev'
  },
  {
    id: 'baja',
    name: 'Baja SAE',
    description: 'Our Baja team engineers rugged off-road vehicles from the ground up to conquer punishing terrain.',
    image: '/images/baja/preview.jpg',
    slug: '/baja'
  },
]

const sectionVariants: Variants = {
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
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const TeamsPreview = () => {
  return (
    <section className={styles.teamsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className={styles.superTitle}>Meet the Teams</h1>
          <p className={styles.subTitle}>Three teams, one mission: to design, build, and compete at the highest level of collegiate engineering.</p>
        </motion.div>

        <motion.div
          className={styles.teamsGrid}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teams.map((team, index) => (
            <motion.div key={team.id} className={styles.teamCard} variants={itemVariants}>
              <div className={styles.imageWrapper}>
                <Image
                  src={team.image}
                  alt={`${team.name} competition vehicle`}
                  width={800}
                  height={600}
                  className={styles.teamImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.teamName}>{team.name}</h2>
                <p className={styles.description}>{team.description}</p>
                <a href={team.slug} className={styles.ctaLink}>
                  Explore
                  <ArrowUpRight size={20} className={styles.ctaIcon} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamsPreview