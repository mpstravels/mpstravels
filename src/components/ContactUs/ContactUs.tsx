"use client"

import { useState } from "react"
import styles from "./ContactUs.module.css"
import Navbar from "../Navbar/Navbar"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        message: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleCall = (number: string) => {
        window.location.href = `tel:${number}`
    }

    const openWhatsApp = (message?: string) => {
        const baseMessage = message || `Hi MPS Travels,\n\nI would like to know more about your travel services.`
        const encodedMessage = encodeURIComponent(baseMessage)
        window.open(`https://wa.me/918903145165?text=${encodedMessage}`, "_blank")
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const whatsappMessage = `New Inquiry from Website\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`
        openWhatsApp(whatsappMessage)
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.innerContainer}>
                <header className={`${styles.header} ${styles.fadeIn}`}>
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>
                        Let us help you plan your perfect journey. Reach out to us through any of the following ways.
                    </p>
                </header>

                <div className={styles.contentWrapper}>
                    {/* Left Side - Contact Information */}
                    <div className={styles.contactInfo}>
                        <div className={`${styles.infoCard} ${styles.slideUp}`}>
                            <h2 className={styles.infoTitle}>
                                <span className={styles.icon}>📞</span>
                                Contact Numbers
                            </h2>
                            <div className={styles.infoContent}>
                                <p onClick={() => handleCall("8903145165")} className={styles.clickable}>
                                    +91 8903145165
                                </p>
                                <p onClick={() => handleCall("9361429416")} className={styles.clickable}>
                                    +91 9361429416
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.infoCard} ${styles.slideUp}`}>
                            <h2 className={styles.infoTitle}>
                                <span className={styles.icon}>✉️</span>
                                Email Address
                            </h2>
                            <div className={styles.infoContent}>
                                <p>capempstravels@gmail.com</p>
                            </div>
                        </div>

                        <div className={`${styles.infoCard} ${styles.slideUp}`}>
                            <h2 className={styles.infoTitle}>
                                <span className={styles.icon}>📍</span>
                                Office Location
                            </h2>
                            <div className={styles.infoContent}>
                                <p>Sannathi Street</p>
                                <p>Kanyakumari</p>
                                <p>Tamil Nadu, India</p>
                            </div>
                        </div>

                        <div className={styles.actionButtons}>
                            <button className={`${styles.button} ${styles.callButton}`} onClick={() => handleCall("8903145165")}>
                                📞 Call Us
                            </button>
                            <button className={`${styles.button} ${styles.whatsappButton}`} onClick={() => openWhatsApp()}>
                                💬 WhatsApp
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className={`${styles.formWrapper} ${styles.slideUp}`}>
                        <div className={styles.formCard}>
                            <h2 className={styles.formTitle}>Send us a Message</h2>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={styles.input}
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="mobile" className={styles.label}>
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        className={styles.input}
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your mobile number"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={styles.textarea}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button type="submit" className={styles.submitButton}>
                                    Send Message via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom - Map Section */}
                <section className={`${styles.mapSection} ${styles.slideUp}`}>
                    <h2 className={styles.mapTitle}>Find Us Here</h2>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.0397905786396!2d77.54824487485831!3d8.080955494158403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed2f7ed78299%3A0x1b739b8deee3b440!2sSannathi%20St%2C%20Kanniyakumari%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707628169799!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

