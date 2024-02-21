import { useState } from 'react';
import './QA.css';

const faqs = [
  {
    question: 'Hvad er en Azure Virtuel Maskine (VM), og hvilke to primære brugsfald har den?',
    answer: 'En Azure Virtuel Maskine (VM) er en softwarebaseret computer, der kører i Microsofts cloud-miljø, Azure. De primære brugsfald for VM\'er er hosting af applikationer og udvikling og test.'
  },
  {
    question: 'Beskriv Azure App Services. Hvilken type applikationer er denne tjeneste især nyttig for?',
    answer: 'Azure App Services er en platform-as-a-service (PaaS) løsning, ideel for hurtig udvikling, automatisk skalering og nem integration med andre Azure-tjenester for webapplikationer, mobile back-ends, og API\'er.'
  },
  {
    question: 'Hvad er forskellene mellem de fire primære typer af Azure Storage (Blob, File, Queue, Table)?',
    answer: 'Blob Storage er til ustrukturerede data som billeder og videoer. File Storage tilbyder delt filadgang via SMB. Queue Storage håndterer beskeder mellem applikationskomponenter. Table Storage er til strukturerede, ikke-relationelle data.'
  },
  {
    question: 'Forklar formålet med Azure Virtual Network.',
    answer: 'Azure Virtual Network tillader oprettelse af et privat netværk i skyen, sikrer VPN-forbindelser mellem Azure og on-premise netværk, og muliggør sikker hosting af applikationer og data.'
  },
];

const QA = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="faq-container">
      <h2>Azure Kerne Tjenester FAQs</h2>
      {faqs.map((faq, index) => (
        <div
          className={`faq-item ${index === activeIndex ? 'active' : ''}`}
          key={index}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            {faq.question}
          </div>
          <div className="faq-answer">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QA;
