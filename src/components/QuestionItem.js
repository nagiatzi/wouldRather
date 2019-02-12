import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class QuestionItem extends Component {

  render() {
    const { question, author } = this.props
    return (
      <div className='question'>
        <h3>{author.name} Asks:</h3>
        <div className='question__wrapper'>
          <img
            src={author.avatarURL}
            alt={`Avatar of ${author}`}
          />
          <div className='question__options'>
            <h2>Would You Rather ...</h2>
            <p>{question.optionOne.text} or {question.optionTwo.text}?</p>
            <Link to={`/question/${question.id}`}>View Full</Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( { users, questions }, {id} ) {
  const question = questions[id]
  return {
    question: question,
    author: users[question.author]
  }
}

export default connect(mapStateToProps)(QuestionItem)