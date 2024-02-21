import React, { useEffect, useState } from 'react';
import './CloudServiceSelector.css';


interface Selections {
  [key: number]: string;
}

const CloudServiceSelector: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selections, setSelections] = useState<Selections>({});
  const [result, setResult] = useState<string>('');

  const questions = [
    { id: 1, text: "Ønsker du en løsning, hvor softwaren leveres fuldt ud og klar til brug over internettet?", options: ["Ja", "Nej"] },
    { id: 2, text: "Har du brug for en platform, hvor du kan udvikle, køre og administrere applikationer uden at skulle bekymre dig om infrastrukturen?", options: ["Ja", "Nej"] },
    { id: 3, text: "Har du brug for at have fuld kontrol over dine virtuelle maskiner og netværksressourcer?", options: ["Ja", "Nej"] },
    { id: 4, text: "Er skalerbarhed og fleksibel ressourceallokering afgørende for dine projekter?", options: ["Ja", "Nej"] },
    { id: 5, text: "Har du brug for specialiserede udviklingsværktøjer og miljøer til dit udviklingsteam?", options: ["Ja", "Nej"] },
  ];
  
  

  const handleOptionClick = (option: string, questionId: number) => {
    const newSelections = { ...selections, [questionId]: option };
    setSelections(newSelections);
  
    // Inkrementér currentStep uanset hvad
    setCurrentStep(currentStep + 1);
  
    // Tjek hvis det er det sidste spørgsmål og beregn resultatet
    if (questionId === questions.length) {
      const resultText = evaluateResult(newSelections);
      console.log(resultText);
      setResult(resultText); // Dette vil sætte resultatet og forberede det til visning
    }
  };
  

  const evaluateResult = (selections: Selections): string => {
    if (selections[1] === "Ja") {
      return `Basert på dine svar, lyder det som om SaaS (Software as a Service) er den bedste løsning for dig.
              Dette vil give dig adgang til applikationer over internettet uden at skulle bekymre dig om vedligeholdelse og opdateringer.`;
    } else if (selections[2] === "Ja" && selections[5] === "Ja") {
      return `PaaS (Platform as a Service) vil opfylde dine behov bedst. Det giver dig udviklingsværktøjer og miljøer,
              så dit udviklingsteam kan fokusere på at bygge software uden at skulle administrere infrastrukturen.`;
    } else if (selections[3] === "Ja" || selections[4] === "Ja") {
      return `IaaS (Infrastructure as a Service) tilbyder fleksibel skalerbarhed og kontrol over dine virtuelle maskiner og netværksressourcer,
              hvilket er ideelt for projekter, der kræver fuld kontrol over infrastrukturen.`;
    }
    return "Det kan være en god idé at kontakte en cloud-konsulent for yderligere vejledning.";
  };
  
  useEffect(() => {
    if (result) {
      console.log("Resultat tilstand ændret til:", result);
    }
  }, [result]);
  
  return (
    <div className="cloud-service-selector">
      <h2>Find den rigtige Cloud Service for dig</h2>
      {currentStep <= questions.length ? (
        questions.filter(q => q.id === currentStep).map(question => (
          <div key={question.id} className="question">
            <h3 className='questionText'>{question.text}</h3>
            <div className="options">
              {question.options.map(option => (
                <button key={option} onClick={() => handleOptionClick(option, question.id)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="result">
          <h3>Dit anbefalede valg</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );  
};

export default CloudServiceSelector;
