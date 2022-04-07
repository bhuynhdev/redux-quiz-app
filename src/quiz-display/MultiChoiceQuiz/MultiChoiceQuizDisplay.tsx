import { MultipleChoiceQuestion } from "common/types/globals";

interface MultiChoiceQuizDisplayProps extends MultipleChoiceQuestion {}

export const MultipleChoiceQuizDisplay: React.FC<
  MultiChoiceQuizDisplayProps
> = ({ title, choices }) => {
  return (
    <>
      <h3>{title}</h3>
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
};
