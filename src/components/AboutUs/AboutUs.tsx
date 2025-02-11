"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import styles from "./AboutUs.module.css"
import Navbar from '@/components/Navbar/Navbar'
import Image from "next/image"
import { useGSAPAnimation } from "@/hooks/useGSAP"
import AmicoImage from "@/assets/amico.png"

export default function AboutUs() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAPAnimation(`.${styles.section}`, "slideUp") 

    return (
        <div className={styles.container} ref={containerRef}>
            <Navbar />
            <Image
                src={AmicoImage}
                alt="Background decoration"
                className={styles.backgroundImage}
                fill
                priority
            />

            <div className={styles.content}>
                <motion.section className={styles.section}>
                    <h1>About Us</h1>
                    <p>
                        Welcome to MPS Travel, your trusted companion for seamless and memorable travel experiences. Whether you're
                        planning a weekend getaway, an adventurous expedition, or a luxurious vacation, we are here to turn your
                        travel dreams into reality.
                    </p>
                </motion.section>

                <motion.section className={styles.section} >
                    <h1>Who are we</h1>
                    <p>
                        At MPS Travel, we are passionate travelers committed to curating exceptional journeys for individuals,
                        families, and businesses. With years of expertise in the travel industry, we provide top-notch travel
                        solutions that cater to every budget and preference. Our mission is to make traveling effortless, enjoyable,
                        and personalized for our clients.
                    </p>
                </motion.section>

                <motion.section className={styles.section} >
                    <h1>What we offer</h1>
                    <p>We specialize in offering:</p>
                    <ul className={styles.offersList}>
                        <li>Domestic Tour Packages – Tailored experiences for destinations Southwise of India</li>
                        <li>Hotel Bookings – Exclusive deals on accommodations.</li>
                        <li>Customized Travel Plans – Personalized itineraries to match your travel style.</li>
                        <li>Corporate Travel Solutions – Efficient and hassle-free business travel management.</li>
                        <li>Travel Assistance – Expert guidance for smooth travel.</li>
                        <li>Adventure & Luxury Travel – Unique experiences for thrill-seekers and luxury enthusiasts.</li>
                    </ul>
                </motion.section>

                <motion.section className={styles.section} >
                    <h1>Why Choose Us?</h1>
                    <ul className={styles.chooseUsList}>
                        <li>✓ Expert Guidance – Our travel specialists ensure every detail is perfectly planned.</li>
                        <li>✓ Affordable Pricing – Competitive rates without compromising on quality.</li>
                        <li>✓ 24/7 Customer Support – Assistance whenever and wherever you need it.</li>
                        <li>✓ Hassle-Free Experience – We handle everything, so you can focus on enjoying your trip.</li>
                    </ul>
                </motion.section>

                <motion.section className={styles.section} >
                    <h1>Our Commitment</h1>
                    <p>
                        At MPS Travel, we believe that every journey should be stress-free and filled with unforgettable moments.
                        Our team is dedicated to providing reliable travel solutions tailored to your needs. Whether you're
                        exploring new cultures, seeking adventure, or relaxing in a luxury retreat, we are here to make it happen.
                    </p>
                    <p className={styles.callToAction}>
                        Start Your Journey With Us! Let MPS Travel be your gateway to incredible travel experiences. Contact us
                        today and embark on your next adventure!
                    </p>
                </motion.section>
            </div>
        </div>
    )
}

