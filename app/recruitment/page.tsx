'use client'

import { motion, Variants } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowRight, Users, Briefcase, Rocket, Flame, Mountain, Zap } from 'lucide-react'
import styles from './recruitment.module.css'
import Link from 'next/link'

const projectTeams = [
  {
    icon: Flame,
    accentColor: '#C06E52',
    name: 'Formula IC',
    description: 'Join an 8x national championship legacy. We look for passionate students who want to win and push the limits of IC performance.',
    requirements: 'All Majors, Seniors',
    capstone: 'Capstone for MEEN/MMET',
    path: '/ic',
  },
  {
    icon: Zap,
    accentColor: '#0D324D',
    name: 'Formula E',
    description: 'Pioneer the future of sustainable racing by developing a high-performance EV.',
    requirements: 'All Majors & Years',
    capstone: 'Capstone for MEEN/MMET/ECEN',
    path: '/ev',
  },
  {
    icon: Mountain,
    accentColor: '#2F4B26',
    name: 'Baja SAE',
    description: 'Design and fabricate a rugged off-road vehicle from the ground up to conquer the most punishing terrain imaginable.',
    requirements: 'All Majors & Years',
    capstone: 'Not Capstone Eligible',
    path: '/baja',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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

const RecruitmentPage = () => {
  return (
    <>
      <Header />
      <main className={styles.recruitmentPage}>
        <div className={styles.container}>

          <motion.section 
            className={styles.hero}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 className={styles.title} variants={itemVariants}>
              Find Your Place
            </motion.h1>
            <motion.p className={styles.subtitle} variants={itemVariants}>
              SAE at Texas A&M is more than a club—it&apos;s a high-performance engineering environment. Discover the path that best fits your skills and ambition.
            </motion.p>
          </motion.section>

          <motion.section 
            className={styles.applySection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 className={styles.sectionTitle} variants={itemVariants}>Join a Project Team</motion.h2>
            <motion.p className={styles.sectionDescription} variants={itemVariants}>
              Applications for the 2025-2026 season for all three project teams—Formula IC, Baja, and Formula E—are managed through Pitcrew, our custom-built portal developed in-house by the Formula Electric software team.
            </motion.p>
            <motion.button
              className={styles.applyButton}
              variants={itemVariants}
              disabled
              style={{ opacity: 0.6, cursor: 'not-allowed' }}
            >
              Apply via Pitcrew <ArrowRight size={20} />
            </motion.button>

            <div className={styles.teamsGrid}>
              {projectTeams.map(team => (
                <motion.div 
                  key={team.name} 
                  className={styles.teamCard} 
                  variants={itemVariants}
                  style={{ '--accent-color': team.accentColor } as React.CSSProperties}
                >
                  <div className={styles.cardHeader}>
                    <team.icon className={styles.teamIcon} />
                    <h3>{team.name}</h3>
                  </div>
                  <p className={styles.teamDescription}>{team.description}</p>

                  <div className={styles.cardFooter}>
                    <div className={styles.tagsContainer}>
                      <span className={styles.requirementsTag}>{team.requirements}</span>
                      {team.capstone && <span className={styles.capstoneTag}>{team.capstone}</span>}
                    </div>
                    <Link href={team.path} className={styles.learnMoreButton}>
                      <span>Learn More</span>
                      <ArrowRight className={styles.learnMoreIcon} size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            className={styles.altRolesSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 className={styles.sectionTitle} variants={itemVariants}>Alternative Roles</motion.h2>
            <div className={styles.altRolesGrid}>
              <motion.div className={styles.altRoleCard} variants={itemVariants}>
                <Rocket className={styles.altRoleIcon} />
                <h4>Driver Applications</h4>
                <p>To tryout and become a driver for one of the teams you must be a student at Texas A&M. Driver tryouts are usually held in the middle of the fall semester. Information about tryouts each year will be posted closer to the date. Generally, the teams are looking for people with racing/driving experience who can work well with the engineering team. Being selected as a Driver for one of the teams means that you will become a driver, team member, and representative for an internationally ranked, recognized, and respected program. As a driver, you will be expected to make yourself available for testing and development throughout the school year, during holidays and until competition. </p>
              </motion.div>
              <motion.div className={styles.altRoleCard} variants={itemVariants}>
                <Briefcase className={styles.altRoleIcon} />
                <h4>Business Teams</h4>
                <p>Interested in working on the business side of things rather than working on the technical side? Than being on a business team may be perfect for you! Each design team has a business sub-team that deals with logistics and sponsors every year. To join a business team, simply apply during the normal application cycle for your desired team and you will specify business as your preferred sub-team. This is not only a great opportunity for engineering students, but also specifically students in Industrial Distribution and Mays. </p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section 
            className={styles.clubProgramsSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 className={styles.sectionTitle} variants={itemVariants}>Start Your Journey</motion.h2>
            <div className={styles.altRolesGrid}>
              <motion.div className={styles.altRoleCard} variants={itemVariants}>
                <Users className={styles.altRoleIcon} />
                <h4>Apprentice Program</h4>
                <p>The SAE Apprentices program is for select undergraduate students to shadow and interact with the Formula IC, Formula E, and Baja, design teams. Once students are accepted into the program, they will have access to team meetings, manufacturing, and testing. Applications for apprenticeships will open during the first few weeks of the fall semester. Apprenticeships for most design teams are currently open to all majors and classifications. However, Formula IC only accepts junior MEEN students. </p>
              </motion.div>
              <motion.div className={styles.altRoleCard} variants={itemVariants}>
                <Users className={styles.altRoleIcon} />
                <h4>Development Program</h4>
                <p>Development is a program open to all students to give an introduction to race car engineering principles. Development is usually comprised of freshman and sophomores and is a great stepping stone to later join a design team. For more information about Development navigate to the Development tab. Joining Development is easy and there is no application necessary. All you have to do is show up to the meetings and be willing to learn. </p>
              </motion.div>
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default RecruitmentPage