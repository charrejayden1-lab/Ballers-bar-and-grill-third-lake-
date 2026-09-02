import { Reveal } from "@/components/reveal";
import { CoverflowCarousel } from "@/components/coverflow-carousel";

export function FoodCarouselSection() {
  return (
    <section className="bg-white pt-20 pb-6 sm:pt-28 sm:pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <CoverflowCarousel />
        </Reveal>
      </div>
    </section>
  );
}
