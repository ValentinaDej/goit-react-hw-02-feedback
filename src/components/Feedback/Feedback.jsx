import { Component } from 'react';
import FeedbackBlock from './FeedBackBlock/FeedbackBlock';
import FeedBackVote from './FeedbackVote/FeedbackVote';
import FeedBackResults from './FeedbackResults/FeedbackResults';

const feedbackOptions = ['good', 'neutral', 'bad'];

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveVote = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    return (
      <div>
        <FeedbackBlock title="Please leave your feedback">
          <FeedBackVote
            options={feedbackOptions}
            leaveVote={this.leaveVote}
          ></FeedBackVote>
        </FeedbackBlock>
        <FeedbackBlock title="Statistics">
          <FeedBackResults
            goodResult={this.state.good}
            neutralResult={this.state.neutral}
            badResult={this.state.bad}
          />
        </FeedbackBlock>
      </div>
    );
  }
}

export default Feedback;
