import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
// import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: "Dwellion Ecommere",
  description:
    "Get all your amazing furniture items on at the best deals available!",
};

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <main className="bg-white">
          <NavBar />
          {children}
          {/* <Toaster /> */}
          <div className="mt-[56px]">
            <FooterSection />
          </div>
        </main>
      </body>
    </html>
  );
}
