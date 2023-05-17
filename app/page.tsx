import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Hero heading="Atelier Arcadie" message="" />
      <Slider />
    </main>
  );
}
