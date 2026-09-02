export const business = {
  name: "Ballers Bar & Grill",
  shortName: "Ballers",
  addressLine1: "34500 US-45 Suite A",
  addressLine2: "Third Lake, IL 60030",
  city: "Third Lake",
  state: "IL",
  zip: "60030",
  phoneDisplay: "(224) 541-4059",
  phoneHref: "tel:+12245414059",
  mapsQuery: "34500 US-45 Suite A, Third Lake, IL 60030",
  mapsDirectionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=34500+US-45+Suite+A,+Third+Lake,+IL+60030",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=34500+US-45+Suite+A,+Third+Lake,+IL+60030&output=embed",
} as const;

export const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "11:00 AM – 10:00 PM" },
  { day: "Wednesday", hours: "11:00 AM – 10:00 PM" },
  { day: "Thursday", hours: "11:00 AM – 10:00 PM" },
  { day: "Friday", hours: "11:00 AM – 12:00 AM" },
  { day: "Saturday", hours: "11:00 AM – 12:00 AM" },
  { day: "Sunday", hours: "11:00 AM – 10:00 PM" },
] as const;

// Structured data (schema.org OpeningHoursSpecification) day codes
export const structuredHours = [
  { dayOfWeek: "Tuesday", opens: "11:00", closes: "22:00" },
  { dayOfWeek: "Wednesday", opens: "11:00", closes: "22:00" },
  { dayOfWeek: "Thursday", opens: "11:00", closes: "22:00" },
  { dayOfWeek: "Friday", opens: "11:00", closes: "23:59" },
  { dayOfWeek: "Saturday", opens: "11:00", closes: "23:59" },
  { dayOfWeek: "Sunday", opens: "11:00", closes: "22:00" },
];

export const ordering = {
  pickupUrl:
    "https://www.doordash.com/store/ballers-bar-&-grill-third-lake-51040807/117076949/?pickup=true&rwg_token=AE37R_haYgpx9z6jXCZn05yU22EYnOBjzr77SfOu7ut5yuSjWamGnSKzdPUKKDq1ug7x7ZaKKhMRj3mL7hqntkRrhQkMWyWeOQ==&utm_campaign=gpa",
  deliveryUrl:
    "https://www.doordash.com/store/ballers-bar-&-grill-third-lake-51040807/117076949/?rwg_token=AE37R_h98e8SKWejqKlkVA1T_7zh22Pt439aO1Ur6QsuFAYMqXQBEqzlkIqJZhg8vJ5NhpPf8IE8eemO6tHuZa1NsPcRbIgaDg==&utm_campaign=gpa",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// No verified social media profiles for this exact Third Lake, IL location
// have been supplied or found in the project assets. Left empty intentionally
// per instructions — do not guess usernames.
export const socials: { label: string; href: string; icon: "facebook" | "instagram" }[] = [];
