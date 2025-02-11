'use client'

import React from 'react'
import ToursSlider from '@/components/Tours/ToursSlider/ToursSlider'
import PlacesTourTrips from '@/components/Tours/PlacesTourTrips/PlacesTourTrips'
import OneDaySightSeeing from '@/components/Tours/OneDaySightSeeing/OneDaySightSeeing'
import CallToAction from '@/components/CallToAction/CallToAction'
import Footer from '@/components/Footer/Footer'
import { 
    PlaceTourTripsContents, 
    oneDaySightSeeingPlaces1,
    oneDaySightSeeingPlaces2,
    oneDaySightSeeingPlaces3 
} from '@/Utils/places'

export default function ToursPage() {
    return (
        <>
            <ToursSlider />
            <PlacesTourTrips places={PlaceTourTripsContents} />
            <OneDaySightSeeing tourStops={oneDaySightSeeingPlaces1} title="Kanyakumari Local One Day Sightseeing" />
            <OneDaySightSeeing tourStops={oneDaySightSeeingPlaces2} title="Thiruvananthapuram Local One Day Sightseeing" />
            <OneDaySightSeeing tourStops={oneDaySightSeeingPlaces3} title="Temple Tours" />
            <CallToAction />
            <Footer />
        </>
    )
}