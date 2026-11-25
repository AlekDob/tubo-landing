import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Stories } from "@/components/Stories";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <Stories />
        <FeatureGrid />
        <Download />
      </main>
      <Footer />
    </>
  );
}
