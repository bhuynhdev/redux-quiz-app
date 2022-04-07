import allQuizzes from "quizData.json";

interface QuizDisplayProps {
  questionNumber: number;
}

export const QuizDisplay: React.FC<QuizDisplayProps> = ({ questionNumber }) => {
  const currentQuestion = allQuizzes[questionNumber - 1];
  const { type } = currentQuestion;
  if (type == "multiplechoice") {
    const { choices, title } = currentQuestion;
    return (
      <>
        <h1>
          Question {questionNumber}: {title}
        </h1>
        <div>
          {choices.map(({ label }, i) => (
            <div key={i}>
              <input type="radio" name="choices" id={`choice${i}`} />
              <label htmlFor={`choice${i}`}>
                Choice {i + 1} - {label}
              </label>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    const { title, clues } = currentQuestion;
    return (
      <>
        <h1>
          Question {questionNumber}: {title}
        </h1>
        <div>
          {clues.map(({ label }, i) => (
            <p key={i}>{label}</p>
          ))}
        </div>
        <input type="text" name="answer" id="answer" />
      </>
    );
  }
};
