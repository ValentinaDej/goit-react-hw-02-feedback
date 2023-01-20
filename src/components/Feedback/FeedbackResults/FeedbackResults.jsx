const FeedBackResults = ({ goodResult, neutralResult, badResult }) => {
  return (
    <>
      <p>Good: {goodResult}</p>
      <p>Neutral: {neutralResult}</p>
      <p>Bad: {badResult} </p>
    </>
  );
};

export default FeedBackResults;
