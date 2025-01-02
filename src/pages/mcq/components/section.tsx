'use client'

import { Section } from '../types/exam'
import { QuestionComponent } from './question'
import { CaseStudyComponent } from './case-study'
import { Button } from '../../../components/ui/button';

interface SectionProps {
  section: Section;
  answers: Record<number, string>;
  onAnswerChange: (questionId: number, answer: string) => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  isFirstSection: boolean;
  isLastSection: boolean;
}

export function SectionComponent({
  section,
  answers,
  onAnswerChange,
  onNavigate,
  isFirstSection,
  isLastSection,
}: SectionProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-left">Section {section.id}</h2>
        <p className="text-gray-600 text-left">{section.description}</p>
      </div>

      {section.caseStudies ? (
        section.caseStudies.map((caseStudy) => (
          <CaseStudyComponent
            key={caseStudy.id}
            caseStudy={caseStudy}
            answers={answers}
            onAnswerChange={onAnswerChange}
          />
        ))
      ) : (
        <div className="space-y-6">
          {section.questions?.map((question) => (
            <QuestionComponent
              key={question.id}
              question={question}
              answer={answers[question.id] || ''}
              onAnswerChange={onAnswerChange}
            />
          ))}
        </div>
      )}

      <div className="flex justify-between mt-8">
        <Button
          onClick={() => onNavigate('prev')}
          disabled={isFirstSection}
          variant="outline"
        >
          Previous Section
        </Button>
        <Button
          onClick={() => onNavigate('next')}
          disabled={isLastSection}
        >
          Next Section
        </Button>
      </div>
    </div>
  );
}

