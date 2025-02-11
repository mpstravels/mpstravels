// Places
import TamilNadu1Image from "@/assets/Tamilnadu-1.png"
import TamilNadu2Image from "@/assets/Tamilnadu-2.png"
import TamilNadu3Image from "@/assets/Tamilnadu-3.png"
import TamilNadu4Image from "@/assets/Tamilnadu-4.png"
import TamilNadu5Image from "@/assets/Tamilnadu-5.png"
import TamilNadu6Image from "@/assets/Tamilnadu-6.png"
import Kerala1Image from "@/assets/Kerala-1.png"
import Kerala2Image from "@/assets/Kerala-2.png"
import Kerala3Image from "@/assets/Kerala-3.png"
import Kerala4Image from "@/assets/Kerala-4.png"
import Kerala5Image from "@/assets/Kerala-5.png"
import Kerala6Image from "@/assets/Kerala-6.png"
import Kerala7Image from "@/assets/Kerala-7.png"
import Kerala8Image from "@/assets/Kerala-8.png"

// Places Tour Trips
import BangaloreImage from "@/assets/bangalore.png"
import MysoreImage from "@/assets/mysore_image.png"
import TirupatiImage from "@/assets/tirupati.png"

// Carousel Images
import KalikesamImage from "@/assets/kalikesam.png"
import MathoorImage from "@/assets/mathoor.png"
import NagarajaTempleImage from "@/assets/nagaraja-temple.png"
import PadmanabhapuramImage from "@/assets/padmanabhapuram.png"
import SuchindramImage from "@/assets/suchindram.png"
import ThirparappuWaterfallsImage from "@/assets/thirparappu-waterfalls.png"
import PoovarImage from "@/assets/poovar.png"
import PadmanabhaswamyTempleImage from "@/assets/padmanabhaswamy-temple.png"
import KovalamBeachImage from "@/assets/kovalam_beach.png"
import ChenkalImage from "@/assets/chenkal.png"
import AazhimalaSivaTempleImage from "@/assets/aazhimala.png"
import ThiruvattarPerumalTempleImage from "@/assets/thiruvattar-perumal-temple.png"

export interface Place {
    id: number
    name: string
    description: string
    image: any
};

export interface PlaceTourTripsContent {
    image: any
    title: string
    description: string
};

export interface PlaceCarousel {
    image: any
    title: string
}

export interface OneDaySightSeeingPlace {
    id: number
    title: string
    image: any
}

const TamilNaduPlaces: Place[] = [
    {
        id: 1,
        name: "Kanyakumari",
        description: "Where ocean meets the sky – Witness the magic of Kanyakumari!",
        image: TamilNadu1Image,
    },
    {
        id: 2,
        name: "Madurai",
        description: "The soul of Tamil Nadu – Explore the city of temples and traditions!",
        image: TamilNadu2Image,
    },
    {
        id: 3,
        name: "Vaal paarai (pollachi)",
        description: "Nature's Retreat – Wildlife, waterfalls, and endless greenery",
        image: TamilNadu3Image,
    },
    {
        id: 4,
        name: "Ooty",
        description: "The Queen of Hills – A dreamy escape into the clouds!",
        image: TamilNadu4Image,
    },
    {
        id: 5,
        name: "Kodaikanal",
        description: "The Princess of Hills – Misty mountains and serene lakes await!",
        image: TamilNadu5Image,
    },
    {
        id: 6,
        name: "MegaMalai",
        description: "The Hidden Paradise – Lush green hills and mist-kissed tea estates!",
        image: TamilNadu6Image,
    },
];

const KeralaPlaces: Place[] = [
    {
        id: 1,
        name: "Athirapally Waterfalls",
        description: "Kerala’s Niagara – A breathtaking cascade of nature",
        image: Kerala1Image,
    },
    {
        id: 2,
        name: "Cochin",
        description: "Where history meets the sea – Experience culture, trade, and charm",
        image: Kerala2Image,
    },
    {
        id: 3,
        name: "Aalappe",
        description: "Sail through the Venice of the East – Houseboats & backwaters await",
        image: Kerala3Image,
    },
    {
        id: 4,
        name: "Trivandrum / Thiruvananthapuram",
        description: "A blend of heritage, beaches, and divine temples",
        image: Kerala4Image,
    },
    {
        id: 5,
        name: "Jatayu Earth",
        description: "Nature’s untouched beauty – A serene escape into the wild",
        image: Kerala5Image,
    },
    {
        id: 6,
        name: "Thekkady",
        description: "Wildlife, spice plantations, and the call of the jungle",
        image: Kerala6Image,
    },
    {
        id: 7,
        name: "Munnar",
        description: "Rolling tea gardens and misty mountain bliss",
        image: Kerala7Image,
    },
    {
        id: 8,
        name: "Guruvayoor",
        description: "A sacred journey to the divine heart of Kerala",
        image: Kerala8Image,
    },
];

const PlaceTourTripsContents: PlaceTourTripsContent[] = [
    {
        image: MysoreImage,
        title: "Mysore",
        description: "The Royal Heritage City – Palaces, traditions, and timeless charm"
    },
    {
        image: BangaloreImage,
        title: "Bangalore",
        description: "The Garden City – Where modern vibes meet lush greenery"
    },
    {
        image: TirupatiImage,
        title: "Tirupati",
        description: "The Divine Destination – Seek blessings at the sacred Tirumala temple"
    }
];

const oneDaySightSeeingPlaces1: OneDaySightSeeingPlace[] = [
    {
        id: 1,
        title: "Suchindram",
        image: SuchindramImage,
    },
    {
        id: 2,
        title: "Nagaraja Temple",
        image: NagarajaTempleImage,
    },
    {
        id: 3,
        title: "Padmanabhapuram Palace",
        image: PadmanabhapuramImage,
    },
    {
        id: 4,
        title: "Mathoor Hanging Bridge",
        image: MathoorImage,
    },
    {
        id: 5,
        title: "Kalikesam Waterfalls",
        image: KalikesamImage,
    },
    {
        id: 6,
        title: "Thirparappu Waterfalls",
        image: ThirparappuWaterfallsImage,
    },
];

const oneDaySightSeeingPlaces2: OneDaySightSeeingPlace[] = [
    {
        id: 1,
        title: "Poovar",
        image: PoovarImage,
    },
    {
        id: 2,
        title: "Kovalam Beach",
        image: KovalamBeachImage,
    },
    {
        id: 3,
        title: "Padmanabhapuram Temple",
        image: PadmanabhaswamyTempleImage,
    },
    {
        id: 4,
        title: "Suchindram",
        image: SuchindramImage,
    },
    {
        id: 5,
        title: "Padmanabhapuram Palace",
        image: PadmanabhapuramImage,
    },
];

const oneDaySightSeeingPlaces3: OneDaySightSeeingPlace[] = [
    {
        id: 1,
        title: "Thiruvattar (Aadhi Kesavan)",
        image: ThiruvattarPerumalTempleImage,
    },
    {
        id: 2,
        title: "Chenkal Siva Parvathy Temple",
        image: ChenkalImage,
    },
    {
        id: 3,
        title: "Aazhimala Siva temple ",
        image: AazhimalaSivaTempleImage,
    },
    {
        id: 4,
        title: "Suchindram",
        image: SuchindramImage,
    },
    {
        id: 5,
        title: "Nagaraja Temple",
        image: NagarajaTempleImage,
    },
  
];


export { 
    TamilNaduPlaces, 
    KeralaPlaces,
    PlaceTourTripsContents,
    oneDaySightSeeingPlaces1,
    oneDaySightSeeingPlaces2,
    oneDaySightSeeingPlaces3
};