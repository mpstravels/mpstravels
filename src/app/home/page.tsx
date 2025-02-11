'use client'

import React from 'react'
import HeroSection from '@/components/Home/HeroSection/HeroSection'
import HomeCards from '@/components/Home/HomeCards/HomeCards'
import WhyChooseUs from '@/components/Home/WhyChooseUs/WhyChooseUs'
import CallToAction from '@/components/CallToAction/CallToAction'
import Footer from '@/components/Footer/Footer'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <HomeCards />
            <WhyChooseUs />
            <CallToAction />
            <Footer />
        </>
    )
}