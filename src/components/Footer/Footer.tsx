'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./Footer.module.css"
import { menuItems, MenuItem } from "@/Utils/utils"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useGSAPAnimation, useParallaxAnimation } from "@/hooks/useGSAP"

export default function Footer() {
    const router = useRouter()
    const pathname = usePathname()
    const [navLinks, setNavLinks] = useState(menuItems.map(link => ({
        ...link,
        active: pathname === link.href,
    })))

    useEffect(() => {
        if (pathname) {
            const updatedLinks = menuItems.map(link => ({
                ...link,
                active: pathname === link.href,
            }));
            setNavLinks(updatedLinks);

            if (pathname === "/") {
                router.push("/home")
            }
        }
    }, [pathname]);

    const handleNavLinkClick = (href: string) => {
        router.push(href);
    };

    return (
        <main>
            <header className={styles.header}>
                <div className={styles.contactInfo}>
                    <div className={styles.contact}>
                        <span className={styles.titleText}>Contact No : </span>
                        <span className={styles.numberText}>8903145165</span>
                        <br />
                        <span className={styles.secondNumber}>9361429416</span>
                    </div>
                    <div className={styles.email}>
                        <span className={styles.titleText}>Gmail: </span>
                        <a href="mailto:capempstravels@gmail.com">capempstravels@gmail.com</a>
                    </div>
                </div>
                <nav className={styles.navigation}>
                    {navLinks.map(link => (
                        <Link key={link.href} href={link.href} className={`${styles.navItem} ${link.active ? styles.active : ""}`} onClick={() => handleNavLinkClick(link.href)}>
                            <Image src={link.active ? link.activeIcon : link.inactiveIcon} alt={link.text} width={20} height={20} />
                            <span>{link.text}</span>
                        </Link>
                    ))}
                </nav>
            </header>
        </main>
    )
}

