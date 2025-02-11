"use client"

import React, { useState, useEffect } from "react"
import styles from "./WhyChooseUs.module.css"
import Image from "next/image"
import { useGSAPAnimation, useParallaxAnimation } from "@/hooks/useGSAP"
import RoadmapChooseUsImage from "@/assets/roadmap_chooseus.png"
import RoadMapChooseUsMobileImage from "@/assets/roadmap_chooseus_mobile.png"

const WhyChooseUs = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 500);
        };
    
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <div className={styles.whyChooseUs}>
            <Image src={isMobile ? RoadMapChooseUsMobileImage : RoadmapChooseUsImage} alt="" className={styles.image} />
        </div>
    )
}

export default WhyChooseUs