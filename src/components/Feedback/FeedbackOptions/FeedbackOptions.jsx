const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(name => (
    <div key={name}>
      <button onClick={() => onLeaveFeedback(name)} type="button">
        {name}
      </button>
    </div>
  ));

  return <>{elements}</>;
};

export default FeedbackOptions;
