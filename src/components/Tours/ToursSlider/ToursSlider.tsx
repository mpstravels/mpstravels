"use client"

import React from "react"
import styles from "./ToursSlider.module.css"
import { TamilNaduPlaces, KeralaPlaces } from "@/Utils/places"
import TourCards from "../TourCards/TourCards"
import Navbar from "@/components/Navbar/Navbar"

export default function ToursSlider() {
    return (
        <div className={styles.container}>
            <Navbar />
            <TourCards places={TamilNaduPlaces} title="Tamil Nadu Trip" />
            <TourCards places={KeralaPlaces} title="Kerala Trip" />
        </div>
    )
}