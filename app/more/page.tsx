import HowItWorksTeam from '@/components/HowItWorksTeam';
import UseCasesGrid from '@/components/UseCasesGrid';
import BenefitsUnified from '@/components/BenefitsUnified';
import ProdeConnector from '@/components/ProdeConnector';
import LeadModal from '@/components/LeadModal';
import Toast from '@/components/Toast';

export default function MorePage() {
  return (
    <main className="min-h-screen bg-white">
      <HowItWorksTeam />
      <UseCasesGrid />
      <BenefitsUnified />
      <ProdeConnector />
      
      {/* Global Components */}
      <LeadModal />
      <Toast />
    </main>
  );
}

