import { TextQuestion } from "common/types/globals";
import { QuizDisplayProps } from "quiz-display/QuizDisplay";

interface TextQuizDisplayProps extends QuizDisplayProps {
  question: TextQuestion;
}

export const TextQuizDisplay: React.FC<TextQuizDisplayProps> = ({
  question,
  userAnswer,
  setUserAnswer,
}) => {
  const { title, clues } = question;
  return (
    <>
      <h3>Text question: {title}</h3>
      <div>
        {clues.map(({ label }, i) => (
          <p key={i}>{label}</p>
        ))}
      </div>
      <hr />
      <label htmlFor="answer">Your answer:</label>
      <input
        type="text"
        name="answer"
        id="answer"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
    </>
  );
};
