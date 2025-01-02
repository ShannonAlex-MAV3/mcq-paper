import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { CaseStudy } from '../types/exam'
import { QuestionComponent } from './question'

interface CaseStudyProps {
  caseStudy: CaseStudy;
  answers: Record<number, string>;
  onAnswerChange: (questionId: number, answer: string) => void;
}

export function CaseStudyComponent({ caseStudy, answers, onAnswerChange }: CaseStudyProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Case Study {caseStudy.id}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 prose">
          <p>{caseStudy.text}</p>
        </div>
        <div className="space-y-6">
          {caseStudy.questions.map((question) => (
            <QuestionComponent
              key={question.id}
              question={question}
              answer={answers[question.id] || ''}
              onAnswerChange={onAnswerChange}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

