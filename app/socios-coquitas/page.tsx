import HeroCoquitas from '@/components/HeroCoquitas';
import HowItWorksTeam from '@/components/HowItWorksTeam';
import BenefitsTeam from '@/components/BenefitsTeam';
import BenefitsSocios from '@/components/BenefitsSocios';
import CoquitaCalculator from '@/components/CoquitaCalculator';
import ProdeConnector from '@/components/ProdeConnector';
import SponsorsTeaser from '@/components/SponsorsTeaser';
import UseCasesGrid from '@/components/UseCasesGrid';
import FAQCoquitas from '@/components/FAQCoquitas';
import FinalCTA from '@/components/FinalCTA';
import LeadModal from '@/components/LeadModal';
import Toast from '@/components/Toast';

export default function SociosCoquitasPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroCoquitas />
      <HowItWorksTeam />
      <BenefitsTeam />
      <BenefitsSocios />
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
