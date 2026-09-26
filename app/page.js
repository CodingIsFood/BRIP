import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AudienceSection from '@/components/AudienceSection';
import LifecycleStepper from '@/components/LifecycleStepper';
import ActionCards from '@/components/ActionCards';
import FeatureGrid from '@/components/FeatureGrid';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <AudienceSection />
        <LifecycleStepper />
        <ActionCards />
        <FeatureGrid />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}
