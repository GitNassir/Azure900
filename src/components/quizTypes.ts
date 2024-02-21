export interface AnswerOption {
    text: string;
    correct: boolean;
  }
  
  export interface Question {
    question: string;
    answers: AnswerOption[];
    explanation: string; // Forklaring til hvert spørgsmål
  }