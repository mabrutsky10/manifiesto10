import HeroCoquitas from '@/components/HeroCoquitas';
import HowItWorksTeam from '@/components/HowItWorksTeam';
import TresSimplesPasos from '@/components/TresSimplesPasos';
import BenefitsUnified from '@/components/BenefitsUnified';
import CoquitaCalculator from '@/components/CoquitaCalculator';
import ProdeConnector from '@/components/ProdeConnector';
import SponsorsTeaser from '@/components/SponsorsTeaser';
import UseCasesGrid from '@/components/UseCasesGrid';
import FAQCoquitas from '@/components/FAQCoquitas';
import FinalCTA from '@/components/FinalCTA';
import LeadModal from '@/components/LeadModal';
import Toast from '@/components/Toast';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroCoquitas />
      <HowItWorksTeam />
      <TresSimplesPasos />
      <BenefitsUnified />
      <CoquitaCalculator />
      <ProdeConnector />
      <SponsorsTeaser />
      <UseCasesGrid />
      <FAQCoquitas />
      <FinalCTA />
      
      {/* Global Components */}
      <LeadModal />
      <Toast />
    </main>
  );
}

