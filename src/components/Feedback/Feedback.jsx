import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

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
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = ((propName / total) * 100).toFixed(2);
    return Number(result);
  }
  render() {
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.leaveVote}
          ></FeedbackOptions>
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state.good
              )}
            />
          </Section>
        ) : (
          <Notification title={'There is no feedback'} />
        )}
      </div>
    );
  }
}

export default Feedback;

//  {
//    title && <StatisticsName>{title.toUpperCase()}</StatisticsName>;
//  }
