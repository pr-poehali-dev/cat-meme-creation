import Header from "@/components/cat-memes/Header";
import HeroSection from "@/components/cat-memes/HeroSection";
import MemesGallery from "@/components/cat-memes/MemesGallery";
import PopularitySection from "@/components/cat-memes/PopularitySection";
import FactsSection from "@/components/cat-memes/FactsSection";
import SubscribeSection from "@/components/cat-memes/SubscribeSection";
import Footer from "@/components/cat-memes/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Header />
      <HeroSection />
      <MemesGallery />
      <PopularitySection />
      <FactsSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Index;
