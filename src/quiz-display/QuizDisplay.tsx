import { Question } from "common/types/globals";
import { MultipleChoiceQuizDisplay } from "./MultiChoiceQuiz/MultiChoiceQuizDisplay";
import { TextQuizDisplay } from "./TextQuiz/TextQuizDisplay";

export interface QuizDisplayProps {
  question: Question | null;
  userAnswer: Question["answer"];
  setUserAnswer: React.Dispatch<React.SetStateAction<string | number>>;
}

export const QuizDisplay: React.FC<QuizDisplayProps> = ({
  question,
  userAnswer,
  setUserAnswer,
}) => {
  if (!question) {
    return <div>Loading...</div>;
  }
  const { type } = question;

  switch (type) {
    case "multiplechoice":
      return (
        <MultipleChoiceQuizDisplay
          question={question}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
        />
      );
    case "text":
      return (
        <TextQuizDisplay
          question={question}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
        />
      );
    default:
      return null;
  }
};
