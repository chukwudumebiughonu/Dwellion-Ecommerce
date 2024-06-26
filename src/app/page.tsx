import NavBar from "@/components/common/NavBar";
import BrowseTheRangeSection from "@/components/sections/BrowseTheRangeSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import OurProductSection from "@/components/sections/OurProductSection";
import RoomSections from "@/components/sections/RoomSections";
import ShareSetupSection from "@/components/sections/ShareSetupSection";

export default function HomePage() {
  return <main className="bg-white">
    <HeroSection />
    <div className="flex flex-col gap-[56px] mx-4 md:mx-[130px]">
    <BrowseTheRangeSection/>
    <OurProductSection />
    <RoomSections />
    </div>
    <div className="mt-[56px]">
    <ShareSetupSection />
    </div>
  
   
  </main>
}