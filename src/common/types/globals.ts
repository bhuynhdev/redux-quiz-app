export interface MultipleChoiceQuestion {
  type: "multiplechoice";
  title: string;
  choices: { label: string }[];
  answer: number; // Index of the correct answer in the `choices` array
}

export interface TextQuestion {
  type: "text";
  title: string;
  clues: { label: string }[];
  answer: string;
}

export type Question = MultipleChoiceQuestion | TextQuestion;

export type Questions = Question[];
