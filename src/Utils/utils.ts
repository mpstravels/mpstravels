import HomeIconActive from "@/assets/home-icon-active.svg"
import HomeIconInActive from "@/assets/home-icon-inactive.svg"
import AboutIconActive from "@/assets/about-icon-active.svg"
import AboutIconInActive from "@/assets/about-icon-inactive.svg"
import ToursIconActive from "@/assets/tours-icon-active.svg"
import ToursIconInActive from "@/assets/tours-icon-inactive.svg"
import SpiritualTempleImage from "@/assets/spiritual_temple.png"
import TemplePlacesImage from "@/assets/temple_places.png"
import MysoreImage from "@/assets/mysore.png"
import KeralaImage from "@/assets/kerala.png"

export interface MenuItem {
    text: string
    href: string
    activeIcon: any
    inactiveIcon: any
    active?: boolean
}

export interface Place {
    id: number
    image: any
    alt: string
    title: string
    subtitle: string
}

const menuItems: MenuItem[] = [
    {
        text: "Home",
        href: "/home",
        activeIcon: HomeIconActive,
        inactiveIcon: HomeIconInActive
    },
    {
        text: "Tours",
        href: "/tours",
        activeIcon: ToursIconActive,
        inactiveIcon: ToursIconInActive
    },
    {
        text: "About Us",
        href: "/aboutUs",
        activeIcon: AboutIconActive,
        inactiveIcon: AboutIconInActive
    }
];

const tourCards: Place[] = [
    {
        id: 1,
        image: TemplePlacesImage,
        alt: "Temple in Madurai",
        title: "Explore Kanyakumari, Madurai, Kodaikanal",
        subtitle: "and more.",
    },
    {
        id: 2,
        image: KeralaImage,
        alt: "Kerala backwaters",
        title: "Discover Thekkady, Munnar, Athirapally",
        subtitle: "Waterfalls, and more.",
    },
    {
        id: 3,
        image: MysoreImage,
        alt: "Cultural destination",
        title: "A cultural journey.",
        subtitle: " ",
    },
    {
        id: 4,
        image: SpiritualTempleImage,
        alt: "Spiritual destination",
        title: "A spiritual journey.",
        subtitle: " ",
    },
]

const redirectToTel = () => {
    window.location.href = "tel:+918903145165"
}


export { menuItems, tourCards, redirectToTel };
