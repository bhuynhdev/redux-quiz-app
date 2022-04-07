import { MultipleChoiceQuestion } from "common/types/globals";
import { QuizDisplayProps } from "quiz-display/QuizDisplay";

interface MultiChoiceQuizDisplayProps extends QuizDisplayProps {
  question: MultipleChoiceQuestion;
}

export const MultipleChoiceQuizDisplay: React.FC<
  MultiChoiceQuizDisplayProps
> = ({ question, userAnswer, setUserAnswer }) => {
  const { title, choices } = question;
  return (
    <>
      <h3>{title}</h3>
      <div>
        {choices.map(({ label }, i) => (
          <div key={i}>
            <input
              type="radio"
              name="choices"
              value={i}
              id={`choice${i}`}
              checked={userAnswer === i}
              onChange={(e) => {
                setUserAnswer(parseInt(e.target.value));
              }}
            />
            <label htmlFor={`choice${i}`}>
              Choice {i + 1} - {label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
