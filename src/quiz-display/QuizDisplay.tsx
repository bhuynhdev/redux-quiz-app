import allQuizzes from "quizData.json";
import { MultipleChoiceQuizDisplay } from "./MultiChoiceQuiz/MultiChoiceQuizDisplay";
import { TextQuizDisplay } from "./TextQuiz/TextQuizDisplay";

interface QuizDisplayProps {
  questionNumber: number;
}

export const QuizDisplay: React.FC<QuizDisplayProps> = ({ questionNumber }) => {
  const currentQuestion = allQuizzes[questionNumber - 1];
  const { type } = currentQuestion;
  if (type == "multiplechoice") {
    return <MultipleChoiceQuizDisplay {...currentQuestion} />;
  } else {
    return <TextQuizDisplay {...currentQuestion} />;
  }
};
