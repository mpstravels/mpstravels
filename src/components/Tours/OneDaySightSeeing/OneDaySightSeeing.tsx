"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import styles from "./OneDaySightSeeing.module.css"
import "./OneDaySightSeeing.css"
import { OneDaySightSeeingPlace } from "@/Utils/places"
import Image from "next/image"
import BookButton from "@/components/UI/BookButton/BookButton"

export default function OneDaySightSeeing({ tourStops, title }: { tourStops: OneDaySightSeeingPlace[], title: string }) {
    const [domLoaded, setDomLoaded] = useState(false)

    useEffect(() => {
        setDomLoaded(true)
    }, [])

    return (
        <div className={styles.carouselContainer}>
            <h1 className={styles.title}>{title}</h1>
            {domLoaded && (
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                >
                    {tourStops.map((stop) => (
                        <SwiperSlide key={stop.id} className={styles.carouselSlide}>
                            <Image src={stop.image} alt={stop.title} className={styles.carouselImage} />
                            <div className={styles.carouselCaption}>
                                <h2 className={styles.carouselTitle}>{stop.title}</h2>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className={`swiper-pagination swiperPagination`}></div>
                    <div className={styles.bookButtonContainer}>
                        <BookButton />
                    </div>
                </Swiper>
            )}
        </div>
    )
}

