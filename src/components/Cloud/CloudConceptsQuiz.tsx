import { useState } from "react";
import './CloudConceptsQuiz.css';


interface AnswerOption {
    text: string;
    correct: boolean;
  }
  
  interface Question {
    question: string;
    answers: AnswerOption[];
  }
  
  const questions: Question[] = [
    {
      question: "Hvad beskriver bedst High Availability i cloud computing?",
      answers: [
        { text: "Evnen til hurtigt at skalere ressourcer op og ned", correct: false },
        { text: "Evnen til at holde tjenester kørende, selv ved fejl", correct: true },
        { text: "Reduktion af omkostninger ved at dele ressourcer", correct: false },
        { text: "Evnen til at implementere ressourcer i flere regioner", correct: false },
      ],
    },
    {
      question: "Hvad er en primær fordel ved elasticitet i cloud computing?",
      answers: [
        { text: "At forbedre datasikkerheden", correct: false },
        { text: "At reducere behovet for manuel intervention", correct: false },
        { text: "At automatisk tilpasse ressourceforbrug", correct: true },
        { text: "At øge den fysiske sikkerhed for datacentre", correct: false },
      ],
    },
    {
      question: "Hvad kendetegner Infrastructure-as-a-Service (IaaS)?",
      answers: [
        { text: "Leverer software over internettet", correct: false },
        { text: "Tilbyder udviklingsplatforme som en tjeneste", correct: false },
        { text: "Tilbyder virtuelle maskiner, netværk og opbevaring over internettet", correct: true },
        { text: "Giver adgang til avancerede analyseværktøjer", correct: false },
      ],
    },
    {
      question: "Hvilken cloud-model giver den højeste grad af kontrol over ressourcerne?",
      answers: [
        { text: "Software-as-a-Service (SaaS)", correct: false },
        { text: "Platform-as-a-Service (PaaS)", correct: false },
        { text: "Infrastructure-as-a-Service (IaaS)", correct: true },
        { text: "Public Cloud", correct: false },
      ],
    },
    {
      question: "Hvad er forskellen mellem CapEx og OpEx i cloud computing?",
      answers: [
        { text: "CapEx er relateret til operationelle udgifter, mens OpEx er kapitaludgifter", correct: false },
        { text: "CapEx involverer direkte køb af hardware, mens OpEx er løbende udgifter til tjenester", correct: true },
        { text: "CapEx er billigere på lang sigt end OpEx", correct: false },
        { text: "Der er ingen væsentlig forskel mellem CapEx og OpEx", correct: false },
      ],
    },
    {
      question: "Hvilken cloud computing-model kombinerer elementer fra både offentlige og private clouds?",
      answers: [
        { text: "Offentlig cloud", correct: false },
        { text: "Privat cloud", correct: false },
        { text: "Hybrid cloud", correct: true },
        { text: "Community cloud", correct: false },
      ],
    },
    {
      question: "Hvad er en vigtig fordel ved at bruge Public Cloud?",
      answers: [
        { text: "Komplet kontrol over hardware", correct: false },
        { text: "Reducerede opstartstider for nye tjenester", correct: true },
        { text: "Højere grad af datasikkerhed", correct: false },
        { text: "Ingen deling af ressourcer med andre organisationer", correct: false },
      ],
    },
    {
      question: "Hvilken service leveres typisk af Platform-as-a-Service (PaaS)?",
      answers: [
        { text: "Dedikeret hardware", correct: false },
        { text: "Virtuelle desktop-miljøer", correct: false },
        { text: "Udviklingsværktøjer og databasetjenester", correct: true },
        { text: "Fysisk sikkerhedstjenester", correct: false },
      ],
    },
    {
      question: "Hvad indebærer begrebet 'multi-tenancy' i cloud computing?",
      answers: [
        { text: "Muligheden for at køre flere operativsystemer på en enkelt fysisk server", correct: false },
        { text: "Adskillelse af fysisk og virtuel infrastruktur", correct: false },
        { text: "Flere kunder deler de samme ressourcer", correct: true },
        { text: "Implementering af flere cloudtjenester af samme type", correct: false },
      ],
    },
    {
      question: "Hvordan bidrager cloud computing til bæredygtighed?",
      answers: [
        { text: "Ved at øge energiforbruget", correct: false },
        { text: "Ved at optimere ressourceudnyttelsen", correct: true },
        { text: "Ved udelukkende at bruge vedvarende energikilder", correct: false },
        { text: "Ved at reducere den fysiske størrelse af datacentre", correct: false },
      ],
    },
    {
      question: "Hvad karakteriserer 'serverless computing'?",
      answers: [
        { text: "Ingen behov for serveradministration", correct: true },
        { text: "Brugen af fysiske servere er obligatorisk", correct: false },
        { text: "Alle applikationer kører på en enkelt server", correct: false },
        { text: "Det er en service eksklusivt for privat cloud", correct: false },
      ],
    },
    {
      question: "Hvilken teknologi understøtter oprettelsen af private clouds?",
      answers: [
        { text: "Content Delivery Networks", correct: false },
        { text: "Virtual Private Networks", correct: false },
        { text: "Virtualisering", correct: true },
        { text: "Blockchain", correct: false },
      ],
    },
    {
      question: "Hvordan opnås dataredundans i cloud computing?",
      answers: [
        { text: "Ved kun at opbevare data i én lokation", correct: false },
        { text: "Ved at distribuere data på tværs af flere opbevaringssteder", correct: true },
        { text: "Ved at anvende en enkelt database", correct: false },
        { text: "Ved at begrænse adgangen til data", correct: false },
      ],
    },
    {
      question: "Hvad er en Cloud Access Security Broker (CASB)?",
      answers: [
        { text: "En fysisk enhed, der forbedrer sikkerheden i datacentre", correct: false },
        { text: "Et værktøj til styring af netværksadgang", correct: false },
        { text: "En software, der fungerer som mellemled mellem brugere og cloudtjenester for at overvåge sikkerhed", correct: true },
        { text: "En cloudtjeneste, der tilbyder dedikerede hardware-sikkerhedsmoduler", correct: false },
      ],
    },
    {
      question: "Hvad definerer 'Cloud Native' applikationer?",
      answers: [
        { text: "Applikationer, der udelukkende kører på fysiske servere", correct: false },
        { text: "Applikationer designet specifikt til cloud-miljøer", correct: true },
        { text: "Ældre applikationer portet til cloud", correct: false },
        { text: "Applikationer, der ikke kræver internetforbindelse", correct: false },
      ],
    },
    {
      question: "Hvilken fordel har 'Continuous Integration/Continuous Deployment (CI/CD)' i cloud computing?",
      answers: [
        { text: "Reducerer behovet for softwaretest", correct: false },
        { text: "Muliggør hurtigere udvikling og udrulning af software", correct: true },
        { text: "Eliminerer behovet for brugerautentifikation", correct: false },
        { text: "Gør det muligt at køre applikationer uden cloudtjenester", correct: false },
      ],
    },
  ];
  
  const CloudConceptsQuiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [showScore, setShowScore] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  
    const handleAnswerOptionClick = (isCorrect: boolean, index: number): void => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      const nextSelectedAnswers = [...selectedAnswers, index];
      setSelectedAnswers(nextSelectedAnswers);
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
  
    return (
      <div className="quizContainer">
        {showScore ? (
          <>
            <div className="score-section">Du har svaret korrekt på {score} ud af {questions.length} spørgsmål!</div>
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className="review-section">
                <div className="question-text">{question.question}</div>
                <ul className="answers-list">
                  {question.answers.map((answer, answerIndex) => (
                    <li key={answerIndex} className={selectedAnswers[questionIndex] === answerIndex ? (answer.correct ? "correct" : "incorrect") : (answer.correct ? "correct" : "")}>
                      {answer.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Spørgsmål {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].question}</div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answers.map((answerOption, index) => (
                <button key={index} onClick={() => handleAnswerOptionClick(answerOption.correct, index)}>
                  {answerOption.text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default CloudConceptsQuiz;
  