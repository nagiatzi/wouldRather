import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionDetails extends Component {
  render() {
    const { authedUser, author, question } = this.props;

    const { optionOne, optionTwo } = question;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const chosenOne = optionOne.votes.includes(authedUser);

    return (
      <div className='question'>
        <h3>Asked by {author.name}</h3>
        <div className='question__wrapper'>
          <img
            src={author.avatarURL}
            alt={`Avatar of ${author.name}`}
          />
          <div className='question__options'>
            <h2>Results:</h2>
            <div className={`question-result ${chosenOne}`}>
              <p>{optionOne.text}</p>
              <p>{`${(optionOne.votes.length / totalVotes * 100).toFixed(0)}%`}</p>
              <p>{`${optionOne.votes.length} out of ${totalVotes} votes`}</p>
            </div>
            <div className={`question-result ${!chosenOne}`}>
              <p>{optionTwo.text}</p>
              <p>{`${(optionTwo.votes.length / totalVotes * 100).toFixed(0)}%`}</p>
              <p>{`${optionTwo.votes.length} out of ${totalVotes} votes`}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(QuestionDetails);