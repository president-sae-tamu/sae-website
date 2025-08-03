'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Camera, Mail, X, Instagram, Link as LinkIcon } from 'lucide-react'
import styles from './ProgramPage.module.css'

interface CompetitionEvent {
  name: string;
  points: number;
}

interface HistoryItem {
  year: string;
  achievement: string;
  details?: string;
  carImage?: string;
}

interface ProgramPageProps {
  title: string;
  tagline: string;
  description: string;
  mission: string;
  subTeams?: string[];
  competitionEvents?: CompetitionEvent[];
  contactEmail: string;
  images?: string[];
  history?: HistoryItem[];
  instagramUrl?: string;
  linktreeUrl?: string;
}

const containerVariants: Variants = { 
  hidden: { opacity: 0 }, 
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  } 
}

const itemVariants: Variants = { 
  hidden: { opacity: 0, y: 20 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeInOut'
    } 
  } 
}

const ImageModal = ({ imageUrl, onClose }: { imageUrl: string; onClose: () => void }) => {
  return (
    <motion.div
      className={styles.modalBackdrop}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <button onClick={onClose} className={styles.closeButton}><X /></button>
        <Image src={imageUrl} alt="Competition Vehicle" width={1200} height={800} className={styles.modalImage} />
      </motion.div>
    </motion.div>
  )
}

const ProgramPage = ({ title, tagline, description, mission, subTeams, competitionEvents, contactEmail, images, history, instagramUrl, linktreeUrl }: ProgramPageProps) => {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 5000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = contactEmail
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
      <Header />
      <main className={styles.programPage}>
        {/* UPDATED: Wrap the entire page content container in a motion.div */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className={styles.container}>
            
            {/* REMOVED: Redundant motion props, now controlled by the parent */}
            <section className={styles.hero}>
              <motion.h1 className={styles.title} variants={itemVariants}>{title}</motion.h1>
              <motion.p className={styles.tagline} variants={itemVariants}>{tagline}</motion.p>
            </section>

            <div className={styles.contentGrid}>
              <div className={styles.stickyColumn}>
                {/* UPDATED: Simplified motion props */}
                <motion.div className={styles.descriptionModule} variants={itemVariants}>
                  <h3>About the Program</h3>
                  <p>{description}</p>
                </motion.div>
              </div>

              <div className={styles.scrollableColumn}>
                {images && images.length > 0 && (
                  // UPDATED: Simplified motion props
                  <motion.section className={styles.imageGallery} variants={containerVariants}>
                    {images.map((src, index) => (
                      <motion.div key={index} className={styles.imageWrapper} variants={itemVariants}>
                        <Image src={src} alt={`${title} team image ${index + 1}`} fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw" className={styles.galleryImage}/>
                      </motion.div>
                    ))}
                  </motion.section>
                )}

                {/* UPDATED: Simplified motion props */}
                <motion.section 
                  className={styles.detailsSection}
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants}>
                    <h3>Our Mission</h3>
                    <blockquote className={styles.missionStatement}>{mission}</blockquote>
                  </motion.div>

                  {subTeams && subTeams.length > 0 && (
                    <motion.div variants={itemVariants}>
                      <h3>Sub-Teams</h3>
                      <div className={styles.subTeamGrid}>
                        {subTeams.map(team => (
                          <div key={team} className={styles.subTeamPill}>{team}</div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {competitionEvents && competitionEvents.length > 0 && (
                    <motion.div variants={itemVariants}>
                      <h3>The Competition</h3>
                      <div className={styles.eventGrid}>
                        {competitionEvents.map(event => (
                          <div key={event.name} className={styles.eventItem}>
                            <span className={styles.eventPoints}>{event.points} pts</span>
                            <span className={styles.eventName}>{event.name}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <motion.div variants={itemVariants}>
                    <h3>Get Involved</h3>
                    <div className={styles.getInvolvedGrid}>

                      {/* Add Instagram Card */}
                      {instagramUrl && (
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                          <Instagram />
                          <div>
                            <h4>Follow Our Journey</h4>
                            <p>Check out our Instagram for the latest updates, photos, and behind-the-scenes content.</p>
                          </div>
                        </a>
                      )}

                      {/* Add Linktree Card */}
                      {linktreeUrl && (
                        <a href={linktreeUrl} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                          <LinkIcon />
                          <div>
                            <h4>All Our Links</h4>
                            <p>Find links to everything you would need on our Linktree.</p>
                          </div>
                        </a>
                      )}

                      <a onClick={copyEmail} className={styles.contactCard}>
                        <Mail />
                        <div>
                          <h4>{emailCopied ? 'Email Copied!' : 'Have Questions?'}</h4>
                          <p>
                            {emailCopied 
                              ? `${contactEmail} copied to clipboard! Feel free to shoot us a message.`
                              : `Contact ${contactEmail} for information on newsletters, student involvement, or industry partnerships.`
                            }
                          </p>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                </motion.section>

                {history && history.length > 0 && (
                  // UPDATED: Simplified motion props
                  <motion.section className={styles.historySection} variants={containerVariants}>
                    <motion.h3 variants={itemVariants}>Team Legacy</motion.h3>
                    <div className={styles.timeline}>
                      {history.map((item, index) => (
                        <motion.div key={index} className={styles.timelineItem} variants={itemVariants}>
                          <div className={styles.timelineYear}>{item.year}</div>
                          <div className={styles.timelineContent}>
                            <h4>{item.achievement}</h4>
                            {item.details && <p>{item.details}</p>}
                          </div>
                          {item.carImage && (
                            <button className={styles.viewCarButton} onClick={() => item.carImage ? setModalImage(item.carImage) : undefined}>
                              <Camera size={16} /> View Car
                            </button>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
      
      <AnimatePresence>
        {modalImage && <ImageModal imageUrl={modalImage} onClose={() => setModalImage(null)} />}
      </AnimatePresence>
    </>
  )
}

export default ProgramPage