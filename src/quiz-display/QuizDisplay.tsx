import { Question } from "common/types/globals";
import { MultipleChoiceQuizDisplay } from "./MultiChoiceQuiz/MultiChoiceQuizDisplay";
import { TextQuizDisplay } from "./TextQuiz/TextQuizDisplay";

interface QuizDisplayProps {
  question: Question | null;
}

export const QuizDisplay: React.FC<QuizDisplayProps> = ({ question }) => {
  if (!question) {
    return <div>Loading...</div>;
  }
  const { type } = question;

  switch (type) {
    case "multiplechoice":
      return <MultipleChoiceQuizDisplay {...question} />;
    case "text":
      return <TextQuizDisplay {...question} />;
    default:
      return null;
  }
};
