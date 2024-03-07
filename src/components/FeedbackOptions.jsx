import { nanoid } from "nanoid";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <>
      {options.map((option) => (
        <button key={nanoid()} type="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
