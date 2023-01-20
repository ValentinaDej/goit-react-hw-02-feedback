import { Component } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const feedbackOptions = ['good', 'neutral', 'bad'];

export class App extends Component {
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
    const result = Math.round((propName / total) * 100);
    return Number(result);
  }

  getStatisticParams = () => {
    return {
      good: this.state.good,
      neutral: this.state.neutral,
      bad: this.state.bad,
      total: this.countTotalFeedback(),
      positivePercentage: this.countPositiveFeedbackPercentage(this.state.good),
    };
  };

  render() {
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.leaveVote}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics options={this.getStatisticParams()} />
          </Section>
        ) : (
          <Notification title={'There is no feedback'} />
        )}
      </>
    );
  }
}
