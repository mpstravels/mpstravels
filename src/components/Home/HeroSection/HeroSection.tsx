"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import styles from "./HeroSection.module.css"
import HeroBg from "@/assets/hero-bg.png"
import Navbar from '@/components/Navbar/Navbar'
import ButtonArrow from "@/assets/button-arrow.svg"

export default function HeroSection() {
    // Define animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } }
    };

    const titleVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }
    };

    const subtitleVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 1 } }
    };

    const buttonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 20, delay: 1.5 } }
    };

    return (
        <motion.section
            className={styles.hero}
            style={{ backgroundImage: `url(${HeroBg})` }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Navbar />
            <div>
                <Image
                    src={HeroBg}
                    alt="Scenic mountain landscape"
                    width={1920}
                    height={1080}
                    priority
                    className={styles.background}
                />
            </div>
            <motion.div className={styles.content} variants={containerVariants}>
                <motion.h1 className={styles.title} variants={titleVariants}>
                    Explore South India with MPS Travels -
                </motion.h1>
                <motion.h1 className={styles.subtitle} variants={subtitleVariants}>
                    Your Trusted Travel Partner
                </motion.h1>
                <motion.div variants={buttonVariants}>
                    <Link href="/tours" className={styles.button}>
                        <span>
                            Explore tours
                        </span>
                        <Image
                            src={ButtonArrow}
                            alt="Arrow"
                            priority
                        />
                    </Link>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}