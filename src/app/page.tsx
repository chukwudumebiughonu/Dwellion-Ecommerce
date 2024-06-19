import NavBar from "@/components/common/NavBar";
import BrowseTheRangeSection from "@/components/sections/BrowseTheRangeSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import OurProductSection from "@/components/sections/OurProductSection";
import RoomSections from "@/components/sections/RoomSections";
import ShareSetupSection from "@/components/sections/ShareSetupSection";

export default function HomePage() {
  return <main className="bg-white">
    <NavBar/> 
    <HeroSection />
    <BrowseTheRangeSection/>
    <OurProductSection />
    <RoomSections />
    <ShareSetupSection />
    <FooterSection />
  </main>
}