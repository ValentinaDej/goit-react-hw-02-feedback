const FeedbackBlock = ({ children, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default FeedbackBlock;
