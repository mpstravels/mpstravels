'use client'

import React from "react"
import styles from "./HomeCards.module.css"
import Image from "next/image"
import BookUsIcon from "@/assets/book-us-icon.svg"
import { useRouter } from "next/navigation"
import { useGSAPAnimation, useParallaxAnimation } from "@/hooks/useGSAP"
import { tourCards } from "@/Utils/utils"
import BookButton from "@/components/UI/BookButton/BookButton"

export default function HomeCards() {
    useGSAPAnimation(`.${styles.container}`, "slideUp")
    useGSAPAnimation(`.${styles.card}`, "slideUp")
    useParallaxAnimation(`.${styles.container}`, 0.3)
    const router = useRouter();

    const handleCardClick = (href: string) => {
        router.push(href);
    };
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <p className={styles.description}>
                    We specialize in providing all kinds of tours across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and
                    Pondicherry. With reliable pickup and drop services across the South Zone, we ensure a seamless travel
                    experience
                </p>

                <div className={styles.cardGrid}>
                    {tourCards.map((card) => (
                        <div key={card.id} className={styles.cardWrapper}>
                            <div className={`${styles.card} ${card.id % 2 === 0 ? styles.tiltRight : styles.tiltLeft}`}>
                                <Image
                                    src={card.image || "/placeholder.svg"}
                                    alt={card.alt}
                                    width={400}
                                    height={400}
                                    className={styles.image}
                                />
                            </div>
                            <h3 className={styles.title}>{card.title}</h3>
                            <p className={styles.subtitle}>{card.subtitle ? card.subtitle : " "}</p>
                            <BookButton />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

