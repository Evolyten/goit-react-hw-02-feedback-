import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics';
import Notification from './Feedback/Notification/Notification';
import { Section } from './Feedback/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = n => {
    this.setState(prevState => ({
      [n]: prevState[n] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, n) => acc + n, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleIncrement}
            options={this.state}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
