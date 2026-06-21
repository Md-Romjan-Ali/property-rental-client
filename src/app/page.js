import Baner from "@/component/Baner";
import FeaturesSection from "@/component/Features";
import HeroSection from "@/component/Herosection";
import Review from "@/component/Review";
import StatsSection from "@/component/StatsSection";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Baner />
      <Review />
      <StatsSection />
      <FeaturesSection />

    </div>
  );
}
