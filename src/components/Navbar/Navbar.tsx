"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./Navbar.module.css"
import Image from "next/image"
import BookUsIcon from "@/assets/book-us-icon.svg"
import ContactUsIcon from "@/assets/contact-us-icon.svg"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import MPSTravelsLogo from "@/assets/mps-travels-icon.svg"
import { menuItems } from "@/Utils/utils"
import { redirectToTel } from "@/Utils/utils"

export default function Navbar() {
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const sideDrawerRef = useRef<HTMLDivElement>(null)
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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (sideDrawerRef.current && !sideDrawerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const closeSideDrawer = () => {
        setIsOpen(false)
    };

    return (
        <motion.nav
            className={styles.navbar}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <Link href="/" className={styles.logo}>
                    <Image src={MPSTravelsLogo} alt="MPS Travels Logo" />
                </Link>
            </div>

            <ul className={styles.menuItems}>
                {navLinks.map((item, index) => (
                    <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href={item.href} className={item.active ? styles.menuItemActive : styles.menuItem} onClick={() => handleNavLinkClick(item.href)}>
                            <Image src={item.active ? item.activeIcon : item.inactiveIcon} alt={item.text} className={styles.menuIcon} />
                            <span>{item.text}</span>
                        </Link>
                    </motion.li>
                ))}
            </ul>

            <div className={styles.buttons}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link href="/contact" className={styles.contactButton}>
                        <span>Contact Us</span>
                        <Image src={ContactUsIcon} alt="Contact Us Icon" className={styles.menuIcon} />
                    </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <button className={styles.bookButton} onClick={redirectToTel}>
                        <span>Book Now</span>
                        <Image src={BookUsIcon} alt="Book Us Icon" className={styles.menuIcon} />
                    </button>
                </motion.div>
            </div>

            <motion.button
                className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className={styles.mobileMenuIcon} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className={styles.overlay}
                            onClick={closeSideDrawer}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            ref={sideDrawerRef}
                            className={`${styles.sideDrawer} ${styles.sideDrawerOpen}`}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <motion.button
                                className={styles.closeIcon}
                                onClick={closeSideDrawer}
                                aria-label="Close menu"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                ✕
                            </motion.button>
                            {navLinks.map((item, index) => (
                                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link href={item.href} className={item.active ? styles.sideDrawerItemActive : styles.sideDrawerItem} onClick={closeSideDrawer}>
                                        <Image src={item.active ? item.activeIcon : item.inactiveIcon} alt={item.text} className={styles.sideDrawerIcon} />
                                        {item.text}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className={styles.buttonsSideDrawer}>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <Link href="/contact" className={styles.contactButton}>
                                        <span>Contact Us</span>
                                        <Image src={ContactUsIcon} alt="Contact Us Icon" className={styles.menuIcon} />
                                    </Link>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <button className={styles.bookButton} onClick={redirectToTel}>
                                        <span>Book Now</span>
                                        <Image src={BookUsIcon} alt="Book Us Icon" className={styles.menuIcon} />
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}