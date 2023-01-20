import Button from 'components/shared/components/Button/Button';

const FeedBackVote = ({ options, leaveVote }) => {
  const elements = options.map(name => (
    <div key={name}>
      <Button onClickAction={() => leaveVote(name)} type="button">
        {name}
      </Button>
    </div>
  ));

  return <>{elements}</>;
};

export default FeedBackVote;
