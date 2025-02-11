"use client"

import React from "react"
import styles from "./BookButton.module.css"
import Image from "next/image"
import BookUsIcon from "@/assets/book-us-icon.svg"
import { redirectToTel } from "@/Utils/utils"

export default function BookButton() {
    
    return (
        <button onClick={() => redirectToTel()} className={styles.bookButton}>
            <span>Book Now</span>
            <Image src={BookUsIcon} alt="Book Us Icon" className={styles.menuIcon} />
        </button>
    )
}