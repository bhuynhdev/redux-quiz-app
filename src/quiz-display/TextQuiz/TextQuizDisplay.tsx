import { TextQuestion } from "common/types/globals";

interface TextQuizDisplayProps extends TextQuestion {}

export const TextQuizDisplay: React.FC<TextQuizDisplayProps> = ({
  title,
  clues,
}) => {
  return (
    <>
      <h3>Text question: {title}</h3>
      <div>
        {clues.map(({ label }, i) => (
          <p key={i}>{label}</p>
        ))}
      </div>
      <input type="text" name="answer" id="answer" />
    </>
  );
};
