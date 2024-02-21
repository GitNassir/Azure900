import React, { useState } from 'react';
import './AzureServicesQuiz.css';


interface AnswerOption {
    text: string;
    correct: boolean;
  }
  
interface Question {
    id: number; 
    question: string;
    answers: AnswerOption[];
  }
  

  
const CloudConceptsQuiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [showScore, setShowScore] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    // Ændret til at gemme index for det valgte svar for hvert spørgsmål
    const [selectedAnswers, setSelectedAnswers] = useState<{[questionIndex: number]: number}>({});
    
    const questions: Question[] = [
        {
          id: 1,
          question: "Hvad er hovedformålet med Azure Regions?",
          answers: [
            { text: "Forbedring af datasikkerhed", correct: false },
            { text: "Minimering af latenstid ved lokalisering tættere på brugerne", correct: true },
            { text: "Forøgelse af omkostningerne for tjenesterne", correct: false },
            { text: "Ingen af ovenstående", correct: false },
          ],
        },
        {
          id: 2,
          question: "Hvordan adskiller Availability Zones sig fra Azure Regions?",
          answers: [
            { text: "De er identiske med Azure Regions", correct: false },
            { text: "De tilbyder isolerede placeringer inden for hver region", correct: true },
            { text: "De fungerer som et alternativ til Resource Groups", correct: false },
            { text: "Ingen af ovenstående", correct: false },
          ],
        },
        {
          id: 3,
          question: "Hvad er formålet med Resource Groups i Azure?",
          answers: [
            { text: "At samle relaterede ressourcer for et projekt inden for et abonnement", correct: true },
            { text: "At organisere ressourcer baseret på deres geografiske placering", correct: false },
            { text: "At segmentere ressourcer mellem forskellige projekter", correct: false },
            { text: "At administrere adgangskontroller og politikker", correct: false },
          ],
        },
        {
          id: 4,
          question: "Hvordan understøtter Azure Resource Manager ressourcestyring?",
          answers: [
            { text: "Ved at tilbyde skabeloner for ressourceudrulning", correct: true },
            { text: "Ved at give direkte adgang til fysiske servere", correct: false },
            { text: "Ved at begrænse antallet af ressourcer, der kan oprettes", correct: false },
            { text: "Ingen af ovenstående", correct: false },
          ],
        },
        {
          id: 5,
          question: "Hvilken Azure-tjeneste er designet til at tilbyde virtuelle maskiner?",
          answers: [
            { text: "Azure Functions", correct: false },
            { text: "Azure Virtual Machines", correct: true },
            { text: "Azure Kubernetes Service", correct: false },
            { text: "Azure Logic Apps", correct: false },
          ],
        },
        {
            id: 11,
            question: "Hvad anvendes Azure Virtual Network primært til?",
            answers: [
              { text: "Dataanalyse", correct: false },
              { text: "Netværksisolering og -forbindelse", correct: true },
              { text: "Webhosting", correct: false },
              { text: "Applikationsmonitorering", correct: false },
            ],
          },
          {
            id: 12,
            question: "Hvilken Azure-tjeneste giver detaljeret overvågning og diagnostik for applikationers ydeevne?",
            answers: [
              { text: "Azure Monitor", correct: true },
              { text: "Azure Functions", correct: false },
              { text: "Azure DevOps", correct: false },
              { text: "Azure Logic Apps", correct: false },
            ],
          },
          {
            id: 13,
            question: "Hvad er Azure Cosmos DB bedst kendt for?",
            answers: [
              { text: "Virtual Machine Management", correct: false },
              { text: "Globally distributed, multi-model database service", correct: true },
              { text: "Serverless computing", correct: false },
              { text: "Automated machine learning", correct: false },
            ],
          },
          {
            id: 14,
            question: "Hvad gør Azure Load Balancer?",
            answers: [
              { text: "Balancerer belastning mellem applikationer i forskellige regioner", correct: true },
              { text: "Automatiserer applikationsudrulning", correct: false },
              { text: "Overvåger applikationsfejl", correct: false },
              { text: "Optimerer applikationsydelse", correct: false },
            ],
          },
          {
            id: 15,
            question: "Hvad er formålet med Azure Key Vault?",
            answers: [
              { text: "Dataanalyse", correct: false },
              { text: "Netværksadministration", correct: false },
              { text: "Sikkerhedsstyring af hemmeligheder og nøgler", correct: true },
              { text: "Webhosting", correct: false },
            ],
          },
          {
            id: 16,
            question: "Hvilken Azure-tjeneste bruges til automatiseret og elastisk skalerbar deployment af applikationer?",
            answers: [
              { text: "Azure Virtual Machines", correct: false },
              { text: "Azure Functions", correct: false },
              { text: "Azure Kubernetes Service (AKS)", correct: true },
              { text: "Azure Logic Apps", correct: false },
            ],
          },
          {
            id: 17,
            question: "Hvad tilbyder Azure Active Directory?",
            answers: [
              { text: "Dataopbevaring", correct: false },
              { text: "Identitets- og adgangsstyring", correct: true },
              { text: "Dataanalyse", correct: false },
              { text: "Netværksisolering", correct: false },
            ],
          },
          {
            id: 18,
            question: "Hvordan understøtter Azure Site Recovery katastrofegenoprettelse?",
            answers: [
              { text: "Ved at tilbyde webhosting", correct: false },
              { text: "Ved at automatisere replikering af virtuelle maskiner", correct: true },
              { text: "Ved at analysere datatrafik", correct: false },
              { text: "Ved at tilbyde serverløs computing", correct: false },
            ],
          },
          {
            id: 19,
            question: "Hvilken funktion er primær for Azure Blob Storage?",
            answers: [
              { text: "At udføre automatiseret dataanalyse", correct: false },
              { text: "At tilbyde relationsdatabasestyring", correct: false },
              { text: "At lagre ustrukturerede data som billeder og videoer", correct: true },
              { text: "At administrere virtuelle netværk", correct: false },
            ],
          },
          {
            id: 20,
            question: "Hvilken fordel giver Azure ExpressRoute?",
            answers: [
              { text: "Forbedret applikationssikkerhed", correct: false },
              { text: "Direkte cloudforbindelse, der omgår offentligt internet", correct: true },
              { text: "Automatiseret skalerbarhed af ressourcer", correct: false },
              { text: "Serverløs computingkapacitet", correct: false },
            ],
          }
          
      ];
    
      const handleAnswerOptionClick = (answerIndex: number) => {
        const isCorrect = questions[currentQuestion].answers[answerIndex].correct;
        if (isCorrect) {
          setScore(score + 1);
        }
    
        const newSelectedAnswers = {...selectedAnswers, [currentQuestion]: answerIndex};
        setSelectedAnswers(newSelectedAnswers);
    
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
                      <li key={answerIndex} className={selectedAnswers[questionIndex] === answerIndex ? (answer.correct ? "correct" : "incorrect") : ""}>
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
                <div className="answer-section">
                  {questions[currentQuestion].answers.map((answer, index) => (
                    <button key={index} onClick={() => handleAnswerOptionClick(index)}>
                      {answer.text}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      );
    };
  
  export default CloudConceptsQuiz;
