import { useState } from 'react';
import './AzureManagementGovernance.css';

const categories = [
  {
    title: 'Azure Resource Manager',
    content: `Azure Resource Manager er tjenesten, der tillader administration af Azure-ressourcer. Det giver dig mulighed for at oprette, opdatere, og slette ressourcer i din Azure-konto. Ved hjælp af deklarative templates kan du definere dine ressourcer og deres afhængigheder, hvilket gør det nemt at deploye og administrere komplette Azure-løsninger.`
  },
  {
    title: 'Azure Monitor og Azure Advisor',
    content: `Azure Monitor og Azure Advisor tilbyder værktøjer til overvågning og optimering af dine Azure-ressourcer. Azure Monitor indsamler og analyserer telemetridata fra Azure-ressourcer, hvilket giver indsigt i performance og driftsstatus. Azure Advisor giver personlig anbefaling baseret på bedste praksisser, som hjælper med at forbedre sikkerhed, performance, og omkostningseffektivitet.`
  },
  {
    title: 'Azure Policy og Compliance',
    content: `Azure Policy hjælper med at håndhæve virksomhedspolitikker og sikre compliance på tværs af dine Azure-ressourcer. Ved at definere politikker kan du automatisk tjekke og anvende regler på dine ressourcer, hvilket sikrer, at de overholder virksomhedens standarder og reguleringskrav.`
  },
  {
    title: 'Azure Tagging og Resource Groups',
    content: `Tagging og Resource Groups er værktøjer til organisering og administration af Azure-ressourcer. Ved at anvende tags kan du kategorisere ressourcer efter kriterier som projekt, afdeling, eller miljø. Resource Groups tillader dig at gruppere relaterede ressourcer, hvilket gør det nemmere at administrere og allokere omkostninger.`
  }
];

const AzureManagementGovernance = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      <h2>Azure Management and Governance</h2>
      {categories.map((category, index) => (
        <div key={index} className={`category ${index === activeIndex ? 'active' : ''}`} onClick={() => toggleCategory(index)}>
          <div className="title">{category.title}</div>
          <div className="content">{category.content}</div>
        </div>
      ))}
    </div>
  );
};

export default AzureManagementGovernance;
