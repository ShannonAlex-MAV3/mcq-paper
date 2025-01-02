'use client'

import { Label } from '../../../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Question } from '../types/exam'

interface QuestionProps {
  question: Question;
  answer: string;
  onAnswerChange: (questionId: number, answer: string) => void;
}

export function QuestionComponent({ question, answer, onAnswerChange }: QuestionProps) {
  return (
    <div className="mb-8 p-4 bg-white rounded-lg">
      <p className="mb-4 text-lg text-left">{question.id}. {question.text}</p>
      <RadioGroup
        value={answer}
        onValueChange={(value) => onAnswerChange(question.id, value)}
        className="space-y-3"
      >
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem
              value={option}
              id={`q${question.id}-${index}`}
            />
            <Label htmlFor={`q${question.id}-${index}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

