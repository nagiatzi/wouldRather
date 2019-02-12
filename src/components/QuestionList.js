import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionItem from './QuestionItem'

class QuestionList extends Component {

  state = {
    showAnsweredQuestions: false
  }

  render() {
    const { questionIds, answeredIds } = this.props;
    const { showAnsweredQuestions } = this.state;

    const ids = showAnsweredQuestions
      ? questionIds.filter(id => answeredIds.includes(id))
      : questionIds.filter(id => !answeredIds.includes(id));

    return (
      <div className='question__list'>
        <button className={showAnsweredQuestions ? 'none' : 'focus'}
          onClick={() => this.setState({showAnsweredQuestions: true})}>
          Answered Questions
        </button>
        <button className={showAnsweredQuestions ? 'focus' : 'none'}
          onClick={() => this.setState({showAnsweredQuestions: false})}>
          Unanswered Questions
        </button>
        <ul>
          {ids.length === 0
            ? 'There are no questions available'
            : ids.map(id => (
            <li key={id}>
              <QuestionItem id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps( { authedUser, users, questions } ) {
  return {
    questionIds: Object.keys(questions)
      .sort( (a,b) => questions[b].timestamp - questions[a].timestamp ),
    answeredIds: users[authedUser]
      ? Object.keys(users[authedUser].answers)
      : []
  }
}

export default connect(mapStateToProps)(QuestionList);