import type { Metadata } from "next";

import { Hero } from "@/components/hero";
import { FoodCarouselSection } from "@/components/food-carousel-section";
import { FavoritesSection } from "@/components/favorites-section";
import { GameDaySection } from "@/components/game-day-section";
import { CtaBanner } from "@/components/cta-banner";
import { MapSection } from "@/components/map-section";

export const metadata: Metadata = {
  title: "Ballers Bar & Grill | Sports Bar & Grill in Third Lake, IL",
  description:
    "The only timeout you'll ever need. Ballers Bar & Grill in Third Lake, IL serves Angus burgers, jumbo wings, and cold drinks in a lively neighborhood sports bar atmosphere.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FoodCarouselSection />
      <FavoritesSection />
      <GameDaySection />
      <CtaBanner />
      <MapSection />
    </>
  );
}
