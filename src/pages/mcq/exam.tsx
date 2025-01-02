import { useState } from 'react';
import { SectionComponent } from './components/section';
import { dummyExamData, examTimeLimit } from './data/dummyData';
import { ExamState } from './types/exam';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Timer } from './components/timer';

export default function Exam() {
  const [examState, setExamState] = useState<ExamState>({
    currentSection: 0,
    answers: {},
    timeRemaining: examTimeLimit,
  });

  const sections = dummyExamData;

  if (!sections || sections.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Loading exam...</h2>
        </div>
      </div>
    );
  }

  const handleAnswerChange = (questionId: number, answer: string) => {
    setExamState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer,
      },
    }));
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    setExamState((prev) => ({
      ...prev,
      currentSection:
        direction === 'next'
          ? Math.min(prev.currentSection + 1, sections.length - 1)
          : Math.max(prev.currentSection - 1, 0),
    }));
  };

  const currentSection = sections[examState.currentSection];
  
  if (!currentSection) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Section not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto">
        <Alert className="mb-4">
          <AlertDescription>
            Do not refresh the tab while answering the exam.
          </AlertDescription>
        </Alert>

        <SectionComponent
          section={currentSection}
          answers={examState.answers}
          onAnswerChange={handleAnswerChange}
          onNavigate={handleNavigate}
          isFirstSection={examState.currentSection === 0}
          isLastSection={examState.currentSection === sections.length - 1}
        />

        <Timer initialTime={examState.timeRemaining} onTimeEnd={() => alert('Time is up!')}
        />
      </div>
    </div>
  );
}

