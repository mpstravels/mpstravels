import styles from "./PlacesTourTrips.module.css"
import Image from "next/image"
import { PlaceTourTripsContent } from "@/Utils/places"
import BookButton from "@/components/UI/BookButton/BookButton"

export default function PlacesTourTrips({ places }: { places: PlaceTourTripsContent[] }) {

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Mysore-Bangalore-Tirupati Trip</h1>

            <div className={styles.cardContainer}>
                {places.map((place, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={place.image}
                                alt={place.title}
                                width={400}
                                height={300}
                                className={styles.image}
                            />
                        </div>
                        <h2 className={styles.cityName}>{place.title}</h2>
                        <p className={styles.description}>{place.description}</p>
                        <BookButton />
                    </div>
                ))}
            </div>
        </main>
    )
}

