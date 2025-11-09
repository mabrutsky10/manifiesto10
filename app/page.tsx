import HeroCoquitas from '@/components/HeroCoquitas';
import TresSimplesPasos from '@/components/TresSimplesPasos';
import BeneficiosGolazos from '@/components/BeneficiosGolazos';
import CoquitaCalculator from '@/components/CoquitaCalculator';
import SponsorsTeaser from '@/components/SponsorsTeaser';
import FAQCoquitas from '@/components/FAQCoquitas';
import FinalCTA from '@/components/FinalCTA';
import LeadModal from '@/components/LeadModal';
import Toast from '@/components/Toast';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroCoquitas />
      <TresSimplesPasos />
      <BeneficiosGolazos />
      <CoquitaCalculator />
      <SponsorsTeaser />
      <FAQCoquitas />
      <FinalCTA />
      
      {/* More details link */}
      <div className="py-8 text-center">
        <Link 
          href="/more" 
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200 underline decoration-dotted"
        >
          más detalles...
        </Link>
      </div>
      
      {/* Global Components */}
      <LeadModal />
      <Toast />
    </main>
  );
}

