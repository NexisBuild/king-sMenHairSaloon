import {
  Brush,
  Crown,
  Droplets,
  Flame,
  Palette,
  Scissors,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Salon identity — edit your WhatsApp number here (digits only,     */
/*  with country code, e.g. "923234973551")                            */
/* ------------------------------------------------------------------ */

export const SALON_NAME = "King's Men Hair Saloon";
export const WHATSAPP_NUMBER = "923234973551"; // +92 323 4973551

export const PHONE_DISPLAY = "+92 323 4973551";
export const PHONE_TEL = "+923234973551";
export const ADDRESS =
  "Shop No. 04, Ehsan Plaza, Near Lahore Grammar Street, 7 Cavalry Ground, Walton, Lahore 54000, Pakistan";
export const ADDRESS_SHORT = "7 Cavalry Ground, Walton, Lahore";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export const SOCIALS = {
  facebook: "https://www.facebook.com/people/Kings-men-hair-salon/61568270210806/",
  instagram: "https://www.instagram.com/kings_men_hair_salon/",
  youtube: "https://www.youtube.com/@kingsmen",
} as const;

/* ------------------------------- WhatsApp ------------------------- */

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const CHAT_LINK = waLink(
  "Hi King's Men Hair Saloon! 👋 I have a question about your services."
);

export const bookLink = (service: Service) =>
  waLink(
    `Hi King's Men Hair Saloon! ✂️ I'd like to book *${service.name}* (PKR ${service.price.toLocaleString("en-PK")}). Please confirm the next available slot.`
  );

/* ------------------------------- Hero video ----------------------- */

export const VIDEO_URL =
  "https://videos.pexels.com/video-files/32000083/13637912_3840_2160_24fps.mp4";
export const VIDEO_POSTER =
  "https://images.pexels.com/videos/32000083/barbearia-32000083.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200";

/* ------------------------------- Services (from poster) ----------- */

export interface Service {
  name: string;
  desc: string;
  duration: string;
  price: number;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    name: "Haircut",
    desc: "Classic / Trendy Styles — clean shape, sharp finish, tailored to your look.",
    duration: "35 min",
    price: 800,
    icon: Scissors,
  },
  {
    name: "Beard Styling",
    desc: "Sharp, Clean Cuts — precise line-up, clean shape, and a polished finish.",
    duration: "25 min",
    price: 600,
    icon: Brush,
  },
  {
    name: "Hair Color",
    desc: "Premium Color — rich, even tone for a bold or natural new look.",
    duration: "50 min",
    price: 2500,
    icon: Palette,
  },
  {
    name: "Full Body Spa",
    desc: "Relax, Repair, Restore — full-body treatment to unwind and revive.",
    duration: "60 min",
    price: 3500,
    icon: Droplets,
  },
  {
    name: "Shaving",
    desc: "Clean Smooth Shave — straight-razor close with hot lather finish.",
    duration: "30 min",
    price: 500,
    icon: Flame,
  },
  {
    name: "Facial Treatment",
    desc: "Refresh, Rejuvenate — deep cleanse and restore your skin's glow.",
    duration: "40 min",
    price: 1500,
    icon: Sparkles,
  },
];

/* ------------------------------- Hours ---------------------------- */

export const HOURS = [
  { days: "Monday — Sunday", time: "10:00 AM – 2:00 AM" },
];

export const QUICK_HOURS = "10 AM – 2 AM";

/* ------------------------------- Gallery -------------------------- */

export const GALLERY = [
  {
    src: "https://images.pexels.com/photos/897263/pexels-photo-897263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    label: "The Craft",
    alt: "Barber trimming hair with precision",
    big: true,
  },
  {
    src: "https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    label: "Sharp Lines",
    alt: "Close-up of a clean beard line-up",
    tall: true,
  },
  {
    src: "https://images.pexels.com/photos/3998403/pexels-photo-3998403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    label: "Beard Work",
    alt: "Barber shaping a client's beard",
  },
  {
    src: "https://images.pexels.com/photos/4625630/pexels-photo-4625630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    label: "Fresh Cut",
    alt: "Client with a fresh haircut",
  },
  {
    src: "https://images.pexels.com/photos/4969874/pexels-photo-4969874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    label: "The Shop",
    alt: "Barbers at work in the salon",
  },
];

/* ------------------------------- Words ----------------------------- */

export const ABOUT_IMAGES = {
  main: {
    src: "https://images.pexels.com/photos/897273/pexels-photo-897273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Barber showing the finished style in a mirror",
  },
  small: {
    src: "https://images.pexels.com/photos/897256/pexels-photo-897256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Barber grooming a client's beard",
  },
};

export const TESTIMONIALS = [
  {
    quote:
      "Walked in rough, walked out looking royal. Sharpest cut I've had in Lahore.",
    name: "Ahmed R.",
    tag: "Regular — Walton",
  },
  {
    quote:
      "Booked on WhatsApp in 30 seconds, zero wait, clean shave and sharp line. This is the only spot now.",
    name: "Farhan K.",
    tag: "Shaving loyalist",
  },
  {
    quote:
      "Full body spa is 60 minutes of pure therapy. Best chair and best hands in Cavalry Ground.",
    name: "Bilal M.",
    tag: "Full Body Spa devotee",
  },
];

export const MARQUEE_ITEMS = [
  "Haircuts",
  "Beard Styling",
  "Hair Color",
  "Full Body Spa",
  "Shaving",
  "Facial Treatment",
  "Walk-ins Welcome",
];
