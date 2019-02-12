import React, { Component } from 'react';
import { connect } from 'react-redux';

import Question from './Question';
import QuestionDetails from './QuestionDetails';

class QuestionAuthor extends Component {

  render() {
    const { authedUser, users, question } = this.props;

    if (!question) {
      return (<p>404 - question with this ID does not exists</p>);
    } else if (!authedUser) {
      return (<p>Please login first</p>);
    }
    
    const questionAnswered = Object.keys(users[authedUser].answers).includes(question.id);

    return (
      <div>
        {questionAnswered
          ? <QuestionDetails question={question} author={users[question.author]} authedUser={authedUser}/>
          : <Question question={question} author={users[question.author]}/>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, users, questions }, props) => ({
  authedUser,
  users,
  question: questions[props.match.params.id]
});

export default connect(mapStateToProps)(QuestionAuthor);