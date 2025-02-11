"use client"

import styles from "./CallToAction.module.css"
import Image from "next/image"
import { useRouter } from "next/navigation"
import CallToActionImage from "@/assets/call-to-action-bg.png"
import { redirectToTel } from "@/Utils/utils"

export default function CallToAction() {
    const router = useRouter();

    const handleContactUs = () => {
        router.push("/contact");
    };

    return (
        <main className={styles.main}>
            <div className={styles.hero}>
                <Image
                    src={CallToActionImage}
                    alt="Sunset over coastal landscape"
                    fill
                    priority
                    className={styles.heroImage}
                />
                <div className={styles.overlay} />
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Ready to explore?
                        <span className={styles.subtitle}>Book your tour today</span>
                    </h1>
                    <div className={styles.buttonGroup}>
                        <button className={styles.bookButton} onClick={redirectToTel}>Book Now</button>
                        <button className={styles.contactButton} onClick={handleContactUs}>Contact us</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

