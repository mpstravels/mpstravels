"use client"

import { useEffect, useState, useRef } from "react"
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, Mousewheel } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import styles from "./TourCards.module.css"
import "./TourCardsSwiper.css"
import { Place } from "@/Utils/places"
import Image from "next/image"
import BookButton from "@/components/UI/BookButton/BookButton"


export default function TourCards({ places, title }: { places: Place[], title: string }) {
    const [domLoaded, setDomLoaded] = useState(false)
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        setDomLoaded(true)
    }, [])

    // Handle horizontal scroll
    const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
        if (swiperRef.current && e.deltaY !== 0) {
            if (e.deltaY > 0) {
                swiperRef.current.slideNext();
            } else {
                swiperRef.current.slidePrev();
            }
        }
    };

    if (!domLoaded) {
        return null
    }

    return (
        <main className={styles.container} onWheel={handleWheel}>
            <h1 className={styles.title}>{title}</h1>
            <SwiperComponent
                modules={[Autoplay, Navigation, Pagination, Mousewheel]}
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={false}
                loop={true}
                speed={800}
                mousewheel={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                className={styles.swiper}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2.2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3.2,
                        spaceBetween: 30,
                    },
                }}
            >
                {places.map((place, index) => (
                    <SwiperSlide key={`${place.id}-${index}`} className={styles.slide}>
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image src={place.image || "/placeholder.svg"} alt={place.name} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <h2 className={styles.placeName}>{place.name}</h2>
                                <p className={styles.description}>{place.description}</p>
                                <div className={styles.buttonGroup}>
                                    <BookButton />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </main>
    )
}

