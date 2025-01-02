export interface Question {
    id: number;
    text: string;
    options: string[];
    caseStudyId?: number;
  }
  
  export interface CaseStudy {
    id: number;
    text: string;
    questions: Question[];
  }
  
  export interface Section {
    id: number;
    title: string;
    description: string;
    questions?: Question[];
    caseStudies?: CaseStudy[];
  }
  
  export interface ExamState {
    currentSection: number;
    answers: Record<number, string>;
    timeRemaining: number;
  }
  
  