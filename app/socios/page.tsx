import HeroCoquitas from '@/components/HeroCoquitas';
import PasosSimplificados from '@/components/PasosSimplificados';
import BeneficiosCarousel from '@/components/BeneficiosCarousel';
import CoquitaCalculator from '@/components/CoquitaCalculator';
import SponsorsTeaser from '@/components/SponsorsTeaser';
import FAQCoquitas from '@/components/FAQCoquitas';
import FinalCTA from '@/components/FinalCTA';
import LeadModal from '@/components/LeadModal';
import Toast from '@/components/Toast';
import Link from 'next/link';

export default function SociosPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroCoquitas />
      <PasosSimplificados />
      <BeneficiosCarousel />
      <CoquitaCalculator />
      <SponsorsTeaser />
      <FAQCoquitas />
      <FinalCTA />
      
      {/* More details links */}
      <div className="py-8 text-center space-y-2">
        <div>
          <Link 
            href="/more" 
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200 underline decoration-dotted"
          >
            más detalles...
          </Link>
        </div>
        <div>
          <Link 
            href="/" 
            className="text-sm text-primary-600 hover:text-primary-700 transition-colors duration-200 font-semibold"
          >
            Conocer el Manifiesto +10 →
          </Link>
        </div>
      </div>
      
      {/* Global Components */}
      <LeadModal />
      <Toast />
    </main>
  );
}

